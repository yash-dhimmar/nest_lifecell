import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginUserDTO {
  @ApiProperty({
    name: "email",
    description: "name of user email",
    example: "ram12@gmail.com",
  })
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    name: "password",
    description: "name of user password",
    example: "Ram@123",
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
