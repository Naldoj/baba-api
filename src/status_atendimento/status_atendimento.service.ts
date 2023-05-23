import {
    Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Status_atendimentoEntity } from './status_atendimento.entity';
import { CreateStatus_atendimentoDto } from './create.status_atendimento';
import { UpdateStatus_atendimentoDto } from './update.status_atendimento.dto';

@Injectable()
export class Status_atendimentoService {

    constructor(
        @InjectRepository(Status_atendimentoEntity)
        private readonly status_atendimentoRepository: Repository<Status_atendimentoEntity>,
    ) { }

    async create(createStatus_atendimentoDto: CreateStatus_atendimentoDto): Promise<Status_atendimentoEntity> {
        return await this.status_atendimentoRepository.save({
            nome: createStatus_atendimentoDto.nome,
            descricao: createStatus_atendimentoDto.descricao,
        });
    }

    async read(id: number): Promise<Status_atendimentoEntity> {
        return await this.status_atendimentoRepository.findOneBy({ id: id });
    }

    async update(id: number, UpdateStatus_atendimentoDto: UpdateStatus_atendimentoDto): Promise<Status_atendimentoEntity> { //falta ajustar 
        let status_atendimentoEntity = await this.status_atendimentoRepository.findOneBy({ id: id }); //Falta ajustar

        if (!!status_atendimentoEntity) {
            return this.status_atendimentoRepository.save({
                id: id,
                nome: UpdateStatus_atendimentoDto.nome,
                descricao: UpdateStatus_atendimentoDto.nome,
            });
        }

        return null;
    }

    async delete(id: number): Promise<Status_atendimentoEntity> {
        let status_atendimentoEntity = await this.status_atendimentoRepository.findOneBy({ id: id });

        if (!!status_atendimentoEntity) {
            status_atendimentoEntity = await this.status_atendimentoRepository.remove(status_atendimentoEntity);

            status_atendimentoEntity.id = id;
        }

        return status_atendimentoEntity;
    }

}
