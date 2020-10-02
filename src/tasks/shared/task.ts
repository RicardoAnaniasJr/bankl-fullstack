import { Document } from 'mongoose'
export class Task extends Document {

    description: string;
    completed: boolean;
    comissao: number;
    user_id: string;
}