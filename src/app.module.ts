import { UploadController } from './utils/upload.controller';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { TasksModule } from './tasks/tasks.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front'),
    }),

    AuthModule,
    MulterModule.register({
      dest: './files',
    }),
    UsersModule,
    MongooseModule.forRoot('mongodb+srv://admin:6BLVQ6pOmJmNAB23@cluster0.68syu.gcp.mongodb.net/testeTarefas?retryWrites=true&w=majority'),
    TasksModule,
    MailerModule.forRoot({
      transport: 'smtps://notificabankl@gmail.com:GqgW4lo6jJqF@smtp.gmail.com',
      defaults: {
        from: '"nest-modules" <modules@nestjs.com>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  controllers: [
    UploadController, AppController],
  providers: [AppService],
})
export class AppModule { }