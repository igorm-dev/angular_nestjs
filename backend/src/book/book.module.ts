import { Module } from '@nestjs/common';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema, BookSchemaFactory } from './schemas/book.schema';
import { BookRepository } from './repositories/book.repository';

@Module({
	imports: [
		MongooseModule.forFeature([
			{ name: BookSchema.name, schema: BookSchemaFactory },
		]),
	],
	providers: [BookService, BookRepository],
	controllers: [BookController],
})
export class BookModule {}
