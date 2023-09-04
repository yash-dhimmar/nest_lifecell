import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class VerifyOtpDTO {
  @IsNumber()
  @IsNotEmpty()
  otp: number;

  @IsNumber()
  @IsNotEmpty()
  user_id: number;
}
