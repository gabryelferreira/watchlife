import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';


@Module({
    imports: [
        PassportModule,
        JwtModule.registerAsync({
            imports: [ConfigModule],
            useFactory: () => {
                return {
                    secret: process.env.JWT_SECRET
                }
            }
            
        }),
    ],
    providers: [AuthService, JwtStrategy],
    exports: [AuthService],
})
export class AuthModule { }
