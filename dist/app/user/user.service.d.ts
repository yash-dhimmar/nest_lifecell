import { JwtService } from "@nestjs/jwt";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import { Zone } from "src/entities/zone.entity";
import { Center } from "src/entities/center.entity";
import { Zip } from "src/entities/zip.entity";
import { Role } from "src/entities/role.entity";
import { LoginUserDTO } from "./dto/login-user.dto";
import { UserToken } from "src/entities";
export declare class UserService {
    private jwtService;
    private readonly userRepository;
    private readonly zoneRepository;
    private readonly centerRepository;
    private readonly zipRepository;
    private readonly roleRepository;
    private readonly tokenRepository;
    constructor(jwtService: JwtService, userRepository: Repository<User>, zoneRepository: Repository<Zone>, centerRepository: Repository<Center>, zipRepository: Repository<Zip>, roleRepository: Repository<Role>, tokenRepository: Repository<UserToken>);
    createUser(body: CreateUserDTO): Promise<any>;
    updateUserDetail(user_id: number, body: UpdateUserDTO): Promise<any>;
    userList(): Promise<any>;
    UserGetById(id: any): Promise<any>;
    deleteUser(id: any): Promise<any>;
    login(body: LoginUserDTO): Promise<any>;
}
