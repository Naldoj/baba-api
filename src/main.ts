import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

var cors = require('cors')

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.setGlobalPrefix('/api');

    app.use(cors());

    app.useGlobalPipes(new ValidationPipe({
        transform: true,
    }));

    const config = new DocumentBuilder()
        .setTitle('Baba API')
        .setDescription('Baba API')
        .setVersion('1.0.0')
        .addBearerAuth()
        .addSecurityRequirements('bearer')
        .setExternalDoc('/api-json', '/api-json')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    const CustomOptions = {
        customfavIcon: "https://nestjs.com/img/logo-small.svg",
        customSiteTitle: 'Baba API',
    }

    SwaggerModule.setup('api', app, document, CustomOptions);

    await app.listen(8080);
}

bootstrap();
