import { CreateEnderecoDto } from './create.endereco.dto';

export class UpdateEnderecoDto extends CreateEnderecoDto {
    static rua: any;
    static bairro: any;
    static cidade: any;
    static cpf: any;
    static complemento: any;
    static uf: any;

}
