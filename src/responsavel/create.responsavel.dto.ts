import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, IsInt, IsOptional } from 'class-validator';

export class CreateResponsavelDto {

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(11)
    cpf: string  //// Realizar adaptações

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    nome: string
  //@ApiProperty()
  //@IsNotEmpty()
  //@IsInt()
  //bairro: string  // Realizar adaptações 

}
