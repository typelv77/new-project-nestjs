import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '@prisma/client';

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

  async findOne(id: string) {
    try {
      const data: User = await this.prismaService.user.findUnique({
        where: { id },
      });

      delete data.password;

      return data;
    } catch (error) {
      return 'Id de usuário não existente!';
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
      await this.prismaService.user.delete({where: {id}})
    } catch (error) {
      return "Id de usuário não exitente!"
    }
  }
}
