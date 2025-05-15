import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { BookService } from '../services/book.service';
import { CreateBookDto } from '../dtos/input/create-book.dto';
import { BookResponseDto } from '../dtos/output/find-all-books.dto';

@Controller('book')
export class BookController {
	constructor(private readonly bookService: BookService) {}

	@Post()
	async create(@Body() body: CreateBookDto) {
		return await this.bookService.create(body);
	}

	@Put()
	async update() {}

	// Vou remover isso para colocar paginação depois
	@Get()
	async findAll(): Promise<BookResponseDto[]> {
		return await this.bookService.findAll();
	}

	@Delete('/:id')
	async delete(@Param('id') id: string) {
		return await this.bookService.delete(id);
	}
}
