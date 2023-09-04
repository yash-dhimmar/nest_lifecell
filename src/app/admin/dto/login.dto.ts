import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
