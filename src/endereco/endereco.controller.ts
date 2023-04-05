import {
    Body,
    Controller,
    Delete,
    Get,
    NotFoundException,
    Param,
    ParseIntPipe,
    Post,
    Put,
} from '@nestjs/common';

import {
    ApiCreatedResponse,
    ApiTags,
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';

import { EnderecoEntity } from './endereco.entity';
import { CreateEnderecoDto } from './create.endereco.dto';
import { UpdateEnderecoDto } from './update.endereco.dto'
import { EnderecoService } from './endereco.service';

@ApiTags('Endereco')
@Controller('Endereco')
export class EnderecoController {

    constructor(
        private readonly enderecoService: EnderecoService,
    ) { }

    @ApiOperation({ operationId: 'createEndereco' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: EnderecoEntity,
    })
    async create(@Body() createEnderecoDto: CreateEnderecoDto): Promise<EnderecoEntity> {
        return await this.enderecoService.create(createEnderecoDto);
    }

    @ApiOperation({ operationId: 'readEndereco' })
    @Get(':enderecoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: EnderecoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async read(@Param('enderecoId', ParseIntPipe) enderecoId: number): Promise<EnderecoEntity> {
        const enderecoEntity = await this.enderecoService.read(enderecoId);

        if (!!enderecoEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'updateEndereco' })
    @Put(':enderecoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: EnderecoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('enderecoId', ParseIntPipe) enderecoId: number, @Body() updateCursoDto: UpdateEnderecoDto): Promise<EnderecoEntity> {
        const enderecoEntity = await this.enderecoService.update(enderecoId, updateCursoDto);

        if (!!EnderecoEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteEndereco' })
    @Delete(':enderecoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: EnderecoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('enderecoId', ParseIntPipe) enderecoId: number): Promise<EnderecoEntity> {
        const enderecoEntity = await this.enderecoService.delete(enderecoId);

        if (!!enderecoEntity) {
            return enderecoEntity;
        }

        throw new NotFoundException();
    }

}
