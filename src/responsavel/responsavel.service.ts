import {
    Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { ResponsavelEntity } from './responsavel.entity';
import { CreateResponsavelDto } from './create.responsavel.dto';
import { UpdateResponsavelDto } from './update.responsavel.dto';

@Injectable()
export class ResponsavelService {

    constructor(
        @InjectRepository(ResponsavelEntity)
        private readonly responsavelRepository: Repository<ResponsavelEntity>,
    ) { }

    async create(createResponsavelDto: CreateResponsavelDto): Promise<ResponsavelEntity> {
        return await this.responsavelRepository.save({
            
            cpf: createResponsavelDto.cpf,
            nome: createResponsavelDto.nome,
        });
    }

    async read(id: number): Promise<ResponsavelEntity> {
        return await this.responsavelRepository.findOneBy({ id: id });
    }

    async update(id: number, UpdateResponsavelDto: UpdateResponsavelDto): Promise<ResponsavelEntity> { //falta ajustar 
        let responsavelEntity = await this.responsavelRepository.findOneBy({ id: id }); //Falta ajustar

        if (!!responsavelEntity) {
            return this.responsavelRepository.save({
                id: id,
                cpf: UpdateResponsavelDto.cpf,
                
            });
        }

        return null;
    }

    async delete(id: number): Promise<ResponsavelEntity> {
        let enderecoEntity = await this.responsavelRepository.findOneBy({ id: id });

        if (!!enderecoEntity) {
            enderecoEntity = await this.responsavelRepository.remove(enderecoEntity);

            enderecoEntity.id = id;
        }

        return enderecoEntity;
    }

}
