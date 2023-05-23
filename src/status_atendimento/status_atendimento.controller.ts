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

import { Status_atendimentoEntity } from './status_atendimento.entity';
import { CreateStatus_atendimentoDto } from './create.status_atendimento';
import { UpdateStatus_atendimentoDto } from './update.status_atendimento.dto';
import { Status_atendimentoService } from './status_atendimento.service';

@ApiTags('Status_atendimento')
@Controller('Status_atendimento')
export class Status_atendimentoController {
    constructor(
        private readonly status_atendimentoService: Status_atendimentoService,
    ) { }

    @ApiOperation({ operationId: 'createStatus_atendimento' })
    @Post()
    @ApiCreatedResponse({
        status: 201,
        description: 'Created',
        type: Status_atendimentoEntity,
    })
    async create(@Body() createStatus_atendimentoDto: CreateStatus_atendimentoDto): Promise<Status_atendimentoEntity> {
        return await this.status_atendimentoService.create(createStatus_atendimentoDto);
    }

    @ApiOperation({ operationId: 'readStatus_atendimento' })
    @Get(':responsavelId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: Status_atendimentoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async read(@Param('responsavelId', ParseIntPipe) responsavelId: number): Promise<Status_atendimentoEntity> {
        const responsavelEntity = await this.status_atendimentoService.read(responsavelId);

        if (!!responsavelEntity) {
            return responsavelEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'updateStatus_atendimento' })
    @Put(':status_atendimentoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: Status_atendimentoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async update(@Param('status_atendimentoId', ParseIntPipe) status_atendimentoId: number, @Body() updateCursoDto: UpdateStatus_atendimentoDto): Promise<Status_atendimentoEntity> {
        const status_atendimentoEntity = await this.status_atendimentoService.update(status_atendimentoId, updateCursoDto);

        if (!!Status_atendimentoEntity) {
            return status_atendimentoEntity;
        }

        throw new NotFoundException();
    }

    @ApiOperation({ operationId: 'deleteStatus_atendimento' })
    @Delete(':status_atendimentoId')
    @ApiResponse({
        status: 200,
        description: 'OK',
        type: Status_atendimentoEntity,
    })
    @ApiResponse({
        status: 404,
        description: 'Not Found',
    })
    async delete(@Param('status_atendimentoId', ParseIntPipe) status_atendimentoId: number): Promise<Status_atendimentoEntity> {
        const status_atendimentoEntity = await this.status_atendimentoService.delete(status_atendimentoId);

        if (!!status_atendimentoEntity) {
            return status_atendimentoEntity;
        }

        throw new NotFoundException();
    }

}
