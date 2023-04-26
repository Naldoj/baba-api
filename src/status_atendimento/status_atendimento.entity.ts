import {
    Column,
    Entity,
    PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';
import { AtendimentoEntity } from 'src/atendimento/atendimento.entity';

@Entity('status_atendimento')
export class Status_atendimentoEntity {

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({
        name: 'nome',
        type: 'varchar',
        length: 100,
    })
    @ApiProperty()
    public nome: string;

    @Column({
        name: 'descricao',
        type: 'varchar',
        length: 200,
    })
    @ApiProperty()
    public descricao: string;
    
    @OneToMany(() => AtendimentoEntity, (atendimento) => atendimento.status_atendimento)
    atendimento: AtendimentoEntity[]
}