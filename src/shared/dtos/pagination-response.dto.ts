import { ApiProperty } from '@nestjs/swagger';

export class PaginationResponseDto<T> {
  @ApiProperty({ example: 1 })
  current: number;
  @ApiProperty({ example: 0 })
  skippedRecords: number;
  @ApiProperty({ example: 2 })
  pages: number;
  @ApiProperty({ example: true })
  hasNext: boolean;
  @ApiProperty()
  records: T[];
  @ApiProperty({ example: 5 })
  payloadSize: number;
  @ApiProperty({ example: 9 })
  total: number;
}
