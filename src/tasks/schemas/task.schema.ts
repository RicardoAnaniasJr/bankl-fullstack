import * as mongoose from 'mongoose';

export const TaskSchema = new mongoose.Schema({
    description: String,
    completed: Boolean,
    comissao: Number,
    user_id: String
})