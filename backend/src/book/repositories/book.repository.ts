import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { BookSchema, BookSchemaDocument } from '../schemas/book.schema';
import { Model } from 'mongoose';

@Injectable()
export class BookRepository {
	constructor(
		@InjectModel(BookSchema.name)
		private readonly model: Model<BookSchemaDocument>,
	) {}

	async create(data: Omit<BookSchema, 'uuid'>) {
		const uuid = Date.now();

		await new this.model({
			...data,
			uuid,
		}).save();
	}

	async findByTitle(title: string): Promise<BookSchemaDocument | null> {
		return await this.model.findOne({ title });
	}

	async findAll(): Promise<BookSchemaDocument[]> {
		return await this.model.find();
	}

	async deleteOne(id: string): Promise<void> {
		await this.model.deleteOne({
			uuid: id,
		});
	}
}
