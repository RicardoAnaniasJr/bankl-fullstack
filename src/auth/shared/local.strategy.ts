import { HttpException, HttpStatus, Injectable, UnauthorizedException, ValidationPipe } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

    constructor(
        private authService: AuthService) {
        super({
            usernameField: 'email',
            passwordField: 'password',
        });
    }
    async validate(email: string, password: string): Promise<any> {
        const user = await this.authService.validateUser(email, password)
        if (!user) {
            // alert('Usuario não encontrado');
            // throw new UnauthorizedException();
            throw new HttpException({
                status: HttpStatus.UNAUTHORIZED,
                error: 'Usuario não encontrado',
            }, HttpStatus.UNAUTHORIZED);

        }
        return user;

    }
}



