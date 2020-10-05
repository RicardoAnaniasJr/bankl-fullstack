import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get()
  redirect(@Res() res) {
    return res.redirect('/login');
    // @Get()
    // getHello(): string {
    //   return this.appService.getHello();
  }
}
