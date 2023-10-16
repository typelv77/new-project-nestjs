import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthService } from './auth.service';

@Module({
    imports: [PrismaModule],
    providers: [AuthService],

})
export class AuthModule {}