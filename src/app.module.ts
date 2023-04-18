import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResponsavelModule } from './responsavel/responsavel.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: 'root99',
            database: 'academico',
            autoLoadEntities: true,   
            synchronize: true,
        }),
        ResponsavelModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
