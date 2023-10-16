import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService) {}

  async validateUser(email: string, password: string): Promise< {
    id: string;
    email: string;
    name: string;
    picture: string;
    admin: boolean;
}| null > {
    const user: User = await this.usersService.findOne(email);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    throw Error("Senha incorreta!");
  }
}
