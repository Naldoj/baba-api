import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ResponsavelModule } from './responsavel/responsavel.module';
import { BabaModule } from './baba/baba.module';
import { AtendimentoModule } from './atendimento/atendimento.module';
import { EnderecoModule } from './endereco/endereco.module';
import { Status_atendimentoModule } from './status_atendimento/status_atendimento.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: '127.0.0.1',
            port: 5432,
            username: 'postgres',
            password: 'root99',
            database: 'baba',
            autoLoadEntities: true,   
            synchronize: true,
        }),

        ResponsavelModule,
        BabaModule,
        EnderecoModule,
        AtendimentoModule,
        Status_atendimentoModule,


    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
