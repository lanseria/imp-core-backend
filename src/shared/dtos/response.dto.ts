import { ApiProperty } from '@nestjs/swagger';

/**
 * Dto for the response
 */
export class ResponseDto<T> {
  @ApiProperty()
  payload: T;
  @ApiProperty({ example: 1617826799860 })
  timestamp: number;
}

export class ResponseTreeDto {
  @ApiProperty()
  key: string;

  @ApiProperty()
  label: string;

  @ApiProperty()
  children?: ResponseTreeDto[];
}
