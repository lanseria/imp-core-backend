import { ForbiddenException } from '@nestjs/common';
import { ErrorType } from '../enums';

export class BadPasswordException extends ForbiddenException {
  constructor() {
    super({
      errorType: ErrorType.BadPassword,
      message: 'The password is error',
    });
  }
}
