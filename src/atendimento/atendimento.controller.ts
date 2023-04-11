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

import { AtendimentoEntity } from './atendimento.entity';
import { CreateAtendimentoDto } from './create.atendimento';
import { UpdateAtendimentoDto } from './update.atendimento.dto'
import { AtendimentoService } from './atendimento.service';

@ApiTags('Atendimento')
@Controller('Atendimento')
export class AtendimentoController {

    constructor(
        private readonly atendimentoService: AtendimentoService,
    ) { }

    @ApiOperation({ operationId: 'createAtendimento' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: AtendimentoEntity,
    })
    async create(@Body() createAtendimentoDto: CreateAtendimentoDto): Promise<AtendimentoEntity> {
        return await this.atendimentoService.create(createAtendimentoDto);
    }

    @ApiOperation({ operationId: 'readAtendimento' })
    @Get(':atendimentoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: AtendimentoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async read(@Param('atendimentoId', ParseIntPipe) atendimentoId: number): Promise<AtendimentoEntity> {
        const atendimentoEntity = await this.atendimentoService.read(atendimentoId);

        if (!!atendimentoEntity) {
            return atendimentoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'updateAtendimento' })
    @Put(':atendimentoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: AtendimentoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('atendimentoId', ParseIntPipe) atendimentoId: number, @Body() updateCursoDto: UpdateAtendimentoDto): Promise<AtendimentoEntity> {
        const atendimentoEntity = await this.atendimentoService.update(atendimentoId, updateCursoDto);

        if (!!AtendimentoEntity) {
            return atendimentoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteAtendimento' })
    @Delete(':atendimentoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: AtendimentoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('atendimentoId', ParseIntPipe) atendimentoId: number): Promise<AtendimentoEntity> {
        const atendimentoEntity = await this.atendimentoService.delete(atendimentoId);

        if (!!atendimentoEntity) {
            return atendimentoEntity;
        }

        throw new NotFoundException();
    }

}
