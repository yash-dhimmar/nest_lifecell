import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ResetPasswordDTO {
  @IsNumber()
  @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  @IsString()
  password: string;
}
