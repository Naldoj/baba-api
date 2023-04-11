import {
    Repository,
} from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { BabaEntity } from './Baba.entity';
import { CreateBabaDto } from './create.Baba';
import { UpdateBabaDto } from './update.Baba.dto';

@Injectable()
export class BabaService {

    constructor(
        @InjectRepository(BabaEntity)
        private readonly BabaRepository: Repository<BabaEntity>,
    ) { }

    async create(createBabaDto: CreateBabaDto): Promise<BabaEntity> {
        return await this.BabaRepository.save({
            
            cpf: createBabaDto.cpf,
            nome: createBabaDto.nome,
        });
    }

    async read(id: number): Promise<BabaEntity> {
        return await this.BabaRepository.findOneBy({ id: id });
    }

    async update(id: number, UpdateBabaDto: UpdateBabaDto): Promise<BabaEntity> { //falta ajustar 
        let BabaEntity = await this.BabaRepository.findOneBy({ id: id }); //Falta ajustar

        if (!!BabaEntity) {
            return this.BabaRepository.save({
                id: id,
                cpf: UpdateBabaDto.cpf,
                
            });
        }

        return null;
    }

    async delete(id: number): Promise<BabaEntity> {
        let enderecoEntity = await this.BabaRepository.findOneBy({ id: id });

        if (!!enderecoEntity) {
            enderecoEntity = await this.BabaRepository.remove(enderecoEntity);

            enderecoEntity.id = id;
        }

        return enderecoEntity;
    }

}
