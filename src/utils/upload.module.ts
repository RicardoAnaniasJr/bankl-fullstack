import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express/multer/multer.module';
import { UploadController } from './upload.controller';

@Module({
  imports: [MulterModule.register({
    storage: './files',
  }),],
  controllers: [UploadController],
  providers: [],
})
export class UploadModule { }
