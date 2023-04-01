import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EnderecoEntity } from './endereco.entity';

import { EnderecoService } from './endereco.service'; //// falta criar para poder exportar 

import { EnderecoController } from './endereco.controller';

@Module({
    imports: [TypeOrmModule.forFeature([
        EnderecoEntity,
    ])],
    providers: [
        EnderecoService,
    ],
    controllers: [
        EnderecoController,
    ],
})
export class EndereModule { }
