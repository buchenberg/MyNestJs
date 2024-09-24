import { Test, TestingModule } from '@nestjs/testing';
import { FooController } from './foo.controller';
import { AppService } from './app.service';

describe('FooController', () => {
  let subject: FooController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FooController],
      providers: [AppService],
    }).compile();

    subject = app.get<FooController>(FooController);
  });

  describe('foo', () => {
    it('should return "This action returns all foo"', () => {
      expect(subject.findAllFoo()).toEqual({
        message: 'This action returns all foo',
      });
    });
  });

  describe('foo/bar', () => {
    it('should return "This action returns all bar"', () => {
      expect(subject.findAllBar()).toEqual({
        message: 'This action returns all bar',
      });
    });
  });
});
