import { Controller, Get } from '@nestjs/common';

interface IFooMessage {
  message: string;
}

@Controller('foo')
export class FooController {
  @Get()
  findAllFoo(): IFooMessage {
    return { message: 'This action returns all foo' };
  }
  @Get('bar')
  findAllBar(): IFooMessage {
    return { message: 'This action returns all bar' };
  }
}
