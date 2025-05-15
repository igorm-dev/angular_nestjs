import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { InfraModule } from './infra/infra.module';
import { EnvConfigModule } from './infra/env-config/env-config.module';

@Module({
	imports: [InfraModule, EnvConfigModule, BookModule],
})
export class AppModule {}
