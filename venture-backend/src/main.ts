import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  try {
    console.log('--- PROSES BOOTSTRAP DIMULAI ---');
    console.log('Creating NestJS App...');
    const app = await NestFactory.create(AppModule);
    console.log('App created successfully');

    console.log('Setting up CORS and other configurations...');
    // Add any global configurations here if needed

    const port = process.env.PORT ?? 3000;
    console.log(`Listening on port ${port}...`);
    await app.listen(port);
    console.log(`Application is running on: http://localhost:${port}`);
  } catch (error) {
    console.error('Bootstrap failed:', error);
    process.exit(1);
  }
}

bootstrap();
