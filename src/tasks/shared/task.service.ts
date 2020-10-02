import { Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task';
import { MailerService } from '@nestjs-modules/mailer';
import { stringify } from 'querystring';

@Injectable()
export class TaskService {

    constructor(@InjectModel('Task') private readonly taskModel: Model<Task>,
        private mailerService: MailerService) { };

    async getAll() {
        try {
            return await this.taskModel.find().exec();

        } catch (error) {
            error.console.error('Erro ao trazer informações');

        }

    }
    async getById(id: string) {
        try {
            return await this.taskModel.findById(id).exec();

        } catch (error) {

        }

    }

    async create(task: Task) {
        try {
            const createdTask = new this.taskModel(task);
            return await createdTask.save();
        } catch (error) {

        }

    }


    sendmail() {
        // const user = JSON.stringify(localStorage.getItem('user'));
        // console.log(user);
        const mail = {

            to: //user,
                'ricardoananias01@gmail.com',
            //localStorage.getItem('user'),
            from: 'notificabankl@gmail.com',
            subject: 'Email de Notificação',
            template: 'email',
            // context: {
            //     user: localStorage.getItem('user')
            // }

        };
        this.mailerService.sendMail(mail);
    }

    async update(id: string, task: Task) {
        //this.sendmail;
        try {
            await this.taskModel.updateOne({ _id: id }, task).exec()
            return this.getById(id);

        } catch (error) {

        }

    }
    async delete(id: string) {

        this.sendmail();
        return await this.taskModel.deleteOne({ _id: id }).exec();






    }

}
