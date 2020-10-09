import { AuthService } from './shared/auth.service';
import { Controller, UseGuards, Request, Post, HttpException, HttpStatus } from '@nestjs/common';
import { LocalAuthGuard } from './shared/local-auth.guard'
import { JwtAuthGuard } from './shared/jwt-auth.guard';
@Controller()
export class AuthController {
    constructor(private authService: AuthService) { }

    // @UseGuards(LocalAuthGuard)
    // @Post('auth/login')
    // async login(@Request() req: any) {
    //     return req.user;
    // }
    @UseGuards(LocalAuthGuard)
    @Post('api/auth/login')
    async login(@Request() req: any) {
        try {
            return this.authService.login(req.user);
        } catch (error) {

            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: 'Senha ou Usuario incorretos',
            }, HttpStatus.FORBIDDEN);

            // alert('tstet')
        }

    }

}
