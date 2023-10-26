import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  static schedule(schedule: any) {
    throw new Error('Method not implemented.');
  }
  @ApiProperty()
  message: string;

  @ApiProperty()
  chatid: number;

  @ApiProperty()
  tokenbot: string;

 @ApiProperty()
 images: string[] | undefined

 @ApiProperty()
 schedule: string | Date
}
