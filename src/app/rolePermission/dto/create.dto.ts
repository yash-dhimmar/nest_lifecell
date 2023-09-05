import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  // 1: Role, 2: Permission
  @IsNumber()
  @IsNotEmpty()
  type: number;
}
