import { ResponseService } from "src/common/response.service";
import { CreateSourceDTO } from "./dto/createSource.dto";
import { UpdateSourceDTO } from "./dto/updateSource.dto";
import { SourceService } from "./source.service";
export declare class SourceController {
    private readonly responseService;
    private readonly sourceService;
    constructor(responseService: ResponseService, sourceService: SourceService);
    createSource(req: any, res: Response, body: CreateSourceDTO): Promise<void>;
    updateSource(req: any, res: Response, body: UpdateSourceDTO): Promise<void>;
    sourceList(req: any, res: Response): Promise<void>;
    SourceGetById(req: any, res: Response): Promise<void>;
    deleteSource(req: any, res: Response): Promise<void>;
}
