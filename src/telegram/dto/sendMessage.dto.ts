import { ApiProperty } from '@nestjs/swagger';

export class SendMessageDto {
  static schedule(schedule: any) {
    throw new Error('Method not implemented.');
  }
  @ApiProperty({example:"Gg izi"})
  message: string;

  @ApiProperty({example: -1002033466946})
  chatid: number; 

  @ApiProperty({example: "6827435531:AAHgj-zB8zEenaJRUnrhRU0PBmmnxZUeQDU"})
  tokenbot: string;

 @ApiProperty({example:[]})
 images: string[] | undefined

 @ApiProperty({example:"2023-10-26T20:39:00"})
 schedule: string | Date
}
