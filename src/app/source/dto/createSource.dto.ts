import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSourceDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  // 1: source, 2: Medium
  @IsNumber()
  @IsNotEmpty()
  type: number;
}
