import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';
import { isNull } from 'util';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createAuthDto: CreateUserDto) {
    this.prismaService.user
      .create({ data: createAuthDto })
      .then((res) => {
        console.log('Usuário cadastrado');
        return res;
      })
      .catch((error) => {
        throw Error(`Error ao cadastrar usuário: ${error}`);
      });
  }

  async findAll() {
    const data: User[] = await this.prismaService.user.findMany();

    data.forEach((element) => {
      delete element.password;
    });

    return data;
  }

  async findOne(id?: string, email?: string) {
    try {
      //   if(id){
      //     const data: User = await this.prismaService.user.findUnique({
      //       where: { id },
      //     });

      //   } else{const data: User = await this.prismaService.user.findUnique({
      //     where: { email },
      //   });
      //   return data;
      // }

      
      const data: User = await this.prismaService.user.findUnique({
        where: id ? { id } : { email }, //ternário tipo if reduzido
      });
      id ? delete data.password : null;
     return data;

      // delete data.password;
      
    } catch (error) {
      throw Error('Id de usuário não existente!');
    }
  }

  async update(id: string, updateAuthDto: UpdateUserDto) {
    try {
      const data: User = await this.prismaService.user.update({
        where: { id },
        data: updateAuthDto,
      });

      delete data.password;
      return data;
    } catch (error) {
      return 'Id de usuário não existente!';
    }
  }

  async remove(id: string) {
    try {
      await this.prismaService.user.delete({ where: { id } });
    } catch (error) {
      return 'Id de usuário não exitente!';
    }
  }
}
