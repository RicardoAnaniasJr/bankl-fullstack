import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot('mongodb+srv://admin:6BLVQ6pOmJmNAB23@cluster0.68syu.gcp.mongodb.net/testeTarefas?retryWrites=true&w=majority'),
    TasksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }