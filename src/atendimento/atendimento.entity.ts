import {
    Column,
    Entity,
    PrimaryGeneratedColumn, OneToMany 
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';
import { BabaEntity } from 'src/baba/baba.entity';
import { Status_atendimentoEntity } from 'src/status_atendimento/status_atendimento.entity';

@Entity('atendimento')
export class AtendimentoEntity {
    [x: string]: any;

    @PrimaryGeneratedColumn()
    @ApiProperty()
    public id: number;

    @Column({
        name: 'data_hora_atendimento',
        type: 'date',
    })
    @ApiProperty()
    public data_hora_atendimento: Date;

    @Column({
        name: 'data_hora_inicio_atendimento',
        type: 'date',
    })
    @ApiProperty()
    public data_hora_inicio_atend: Date;

    @Column({
        name: 'data_hora_fim_atend',
        type: 'date',
    })
    @ApiProperty()
    public data_hora_fim_atend: Date;

    @Column({
        name: 'Id_Status',
        type: 'int',
    })
    @ApiProperty()
    public Id_Status: number;

    @Column({
        name:'Id_baba',
        type:'int',
    })
    @ApiProperty()
    public Id_baba: number;

    @Column({
        name:'Id_endereco',
        type:'varchar',
    })
    @ApiProperty()
    public Id_endereco: number;

    @OneToMany(() => BabaEntity, (baba) => baba.atendimento)
    baba: BabaEntity

    @OneToMany(() => AtendimentoEntity, (atendimento) => atendimento.endereco)
    atendimento: AtendimentoEntity

    @OneToMany(() => Status_atendimentoEntity, (status_atendimmento) => status_atendimmento.atendimento)
    status_atendimmento: Status_atendimentoEntity


}
