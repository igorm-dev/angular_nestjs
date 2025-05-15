import { Injectable } from '@nestjs/common';
import { BookRepository } from '../repositories/book.repository';
import { CreateBookDto } from '../dtos/input/create-book.dto';
import { BookResponseDto } from '../dtos/output/find-all-books.dto';

@Injectable()
export class BookService {
	constructor(private readonly repo: BookRepository) {}

	async create(data: CreateBookDto) {
		await this.repo.create({
			...data,
		});
	}

	async findAll(): Promise<BookResponseDto[]> {
		const books = await this.repo.findAll();

		return books.map((book) => {
			return new BookResponseDto({
				uuid: book.uuid,
				title: book.title,
				description: book.description,
				imageUrl: book.imageUrl,
			});
		});
	}

	async delete(id: string) {
		await this.repo.deleteOne(id);
	}
}
