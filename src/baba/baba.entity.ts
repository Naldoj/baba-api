import {
    Column,
    Entity,
    PrimaryGeneratedColumn,ManyToOne 
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';
import { AtendimentoEntity } from 'src/atendimento/atendimento.entity';

@Entity('baba')
export class BabaEntity {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({
        name: 'cpf',
        type: 'varchar',
        length: 11,
    })
    @ApiProperty()
    public cpf: string;

    @Column({
        name: 'nome',
        type: 'varchar',
        length: 100,
    })
    @ApiProperty()
    public nome: string;

    @ManyToOne(() => AtendimentoEntity, (atendimento) => atendimento.baba)
    baba: AtendimentoEntity[]
}
