import { Controller, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Post } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Res } from '@nestjs/common/decorators/http/route-params.decorator';
import { Param } from '@nestjs/common/decorators/http/route-params.decorator';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from './fileUpload.utils';
import { diskStorage, File } from 'multer';

@Controller('api/images')
export class UploadController {


    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './files'
            })
        }),
    )
    uploadFile(@UploadedFile() file) {
        console.log(file);
    };

    @Get()
    testRoute() {
        const testRoute = 'ROTA ATINGIDA';
        return testRoute
    };

    @Post()
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './files',
                filename: editFileName,
            }),
            fileFilter: imageFileFilter,
        }),


    )



    uploadedFile(@UploadedFile() file) {
        //console.log(file)
        const response = {
            originalname: file.originalname,
            filename: file.filename,
        };
        return response;
    }

    @Get(':imgpath')
    seeUploadedFile(@Param('imgpath') image, @Res() res) {
        return res.sendFile(image, { root: './files' });
    };

}
