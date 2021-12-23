import {
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/successInterceptor';
import { PositiveInt } from 'src/pipes/positiveInt.pipe';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catService: CatsService) {}

  //* /cats/
  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return 'all cat';
  }

  //* /cats/:id
  @Get(':id')
  getCat(@Param('id', ParseIntPipe, PositiveInt) param: number) {
    return { cat: 'cat' };
  }

  //* /cats/
  @Post()
  createCat() {
    return 'all cat';
  }

  //* /cats/:id
  @Patch()
  updateAllCat() {
    return 'all cat';
  }

  //* /cats/:id
  @Delete()
  deleteAllCat() {
    return 'all cat';
  }
}
