import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({summary: 'Criar novo usuário.'})
  create(@Body() createUserDto: CreateUserDto) {
   try {
     return this.userService.create(createUserDto);
   } catch (error) {
    console.log(error)
   }
  }

  @Get()
  @ApiOperation({summary: 'Pesquisar todos os usuários.'})
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({summary: 'Pesquisar um usuário por id.'})
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({summary: 'Alterar dados do usuário.'})
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateUserDto) {
    return this.userService.update(id, updateAuthDto);
  }

  @Delete(':id')
  @ApiOperation({summary: 'Deletar um Usuário.'})
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}

