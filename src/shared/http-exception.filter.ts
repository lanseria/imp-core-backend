import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { HttpErrorType } from './exception/http-error-type';
import { ErrorType } from './enums';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = +exception.getStatus();

    const res = exception.getResponse() as {
      errorType: ErrorType | string;
      message: string | string[];
    };
    let errorType = res.errorType;
    const message = res.message;
    if (!errorType) {
      errorType = HttpErrorType[status];
      errorType = errorType ? errorType : 'UNEXPECTED_ERROR';
    }

    response.status(status).json({
      errorType,
      message,
      timestamp: new Date().getTime(),
    });
  }
}
