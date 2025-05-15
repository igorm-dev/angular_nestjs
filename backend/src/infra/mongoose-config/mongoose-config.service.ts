import { Injectable } from '@nestjs/common';
import {
	MongooseModuleOptions,
	MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
	constructor() {}

	createMongooseOptions():
		| Promise<MongooseModuleOptions>
		| MongooseModuleOptions {
		return {
			uri: process.env.MONGODB_URI,
		};
	}
}
