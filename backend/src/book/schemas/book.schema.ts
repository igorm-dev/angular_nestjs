import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema({ collection: 'books', timestamps: true })
export class BookSchema {
	@Prop({ name: 'uuid', unique: true, isRequired: true })
	uuid: string;

	@Prop({ name: 'title', isRequired: true })
	title: string;

	@Prop({ name: 'description', isRequired: true })
	description: string;

	@Prop({ name: 'image_url', isRequired: false, default: null })
	imageUrl: string;
}

export type BookSchemaDocument = HydratedDocument<BookSchema>;

export const BookSchemaFactory = SchemaFactory.createForClass(BookSchema);
