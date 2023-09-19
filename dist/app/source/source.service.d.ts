import { Repository } from "typeorm";
import { CreateSourceDTO, UpdateSourceDTO } from "./dto";
import { Medium, Source } from "src/entities";
export declare class SourceService {
    private readonly sourceRepository;
    private readonly mediumRepository;
    constructor(sourceRepository: Repository<Source>, mediumRepository: Repository<Medium>);
    createSource(body: CreateSourceDTO): Promise<any>;
    updateSource(body: UpdateSourceDTO): Promise<any>;
    sourceList(type: any): Promise<any>;
    SourceGetById(query: any): Promise<any>;
    deleteSource(query: any): Promise<any>;
}
