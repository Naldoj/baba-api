import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

import {
    ApiProperty,
} from '@nestjs/swagger';

@Entity('atendimento')
export class AtendimentoEntity {

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
        type: 'number',
    })
    @ApiProperty()
    public Id_Status: number;

    @Column({
        name:'Id_baba',
        type:'number',
    })
    @ApiProperty()
    public Id_baba: number;

    @Column({
        name:'Id_endereco',
        type:'number',
    })
    @ApiProperty()
    public Id_endereco: number;
}
