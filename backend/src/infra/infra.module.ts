import { Module } from '@nestjs/common';
import { MongooseConfigModule } from './mongoose-config/mongoose-config.module';

@Module({
	imports: [MongooseConfigModule],
})
export class InfraModule {}
