import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsInt, IsOptional } from 'class-validator';

export class CreateStatus_atendimentoDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nome: string  //// Realizar adaptações

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    descricao: string

  //@ApiProperty()
  //@IsNotEmpty()
  //@IsInt()
  //bairro: string  // Realizar adaptações 

}
