import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  // 1: Role, 2: Permission
  @IsNumber()
  @IsNotEmpty()
  type: number;
}
