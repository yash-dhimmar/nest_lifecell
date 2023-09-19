import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDTO {
  @ApiProperty({
    name: "user_type",
    description: "user_type(1,2)",
    example: "1",
  })
  @IsNotEmpty()
  user_type: number;

  @ApiProperty({
    name: "first_name",
    description: "name of user first_name ",
    example: "Ram",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(20)
  first_name: string;

  @ApiProperty({
    name: "last_name",
    description: "name of user last_name",
    example: "Bhagat",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  last_name: string;

  @ApiProperty({
    name: "password",
    description: "name of user password",
    example: "Ram@123",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @MaxLength(20)
  // @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
  //   message: "password too weak",
  // })
  password?: string;

  @ApiProperty({
    name: "email",
    description: "name of user email",
    example: "ram12@gmail.com",
  })
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    name: "city",
    description: "name of user city",
    example: "Ahmedabad",
  })
  @IsString()
  @IsNotEmpty()
  city: string;

  @ApiProperty({
    name: "state",
    description: "name of user state",
    example: "Gujarat",
  })
  @IsString()
  @IsNotEmpty()
  state: string;

  @ApiProperty({
    name: "phone",
    description: "name of user phone",
    example: "8596321478",
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  phone: string;

  @ApiProperty({
    name: "dob",
    description: "name of user date of birth",
    example: "2003-09-05",
  })
  @IsString()
  @IsNotEmpty()
  dob: Date;

  @ApiProperty({
    name: "qualification",
    description: "user qualification",
    example: "MBA",
  })
  @IsString()
  @IsNotEmpty()
  qualification: string;

  @ApiProperty({
    name: "zone_id",
    description: "user zone_id",
    example: "1",
  })
  @IsNotEmpty()
  zone_id?: any;

  @ApiProperty({
    name: "center_id",
    description: "user center_id",
    example: "1",
  })
  @IsNotEmpty()
  center_id: any;

  @ApiProperty({
    name: "zip_id",
    description: "user zip_id",
    example: "1",
  })
  @IsNotEmpty()
  zip_id: any;

  @ApiProperty({
    name: "role_id",
    description: "user role_id",
    example: "1",
  })
  @IsNotEmpty()
  role_id: any;
}
