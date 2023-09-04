import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSourceDTO, UpdateSourceDTO } from "./dto";
import { Medium, Source } from "src/entities";

@Injectable()
export class SourceService {
  constructor(
    @InjectRepository(Source)
    private readonly sourceRepository: Repository<Source>,
    @InjectRepository(Medium)
    private readonly mediumRepository: Repository<Medium>
  ) { }

  async createSource(body: CreateSourceDTO): Promise<any> {
    try {
      let {
        name, type, user_id
      } = body;

      if (type == 1) {
        const data = await this.sourceRepository.find({
          where: { source_name: body.name },
        });
        if (data.length) {
          throw new Error("NAME_EXIT");
        }
        await this.sourceRepository.save({ source_name: body.name });
      } else {
        const data = await this.mediumRepository.find({
          where: { medium_name: name },
        });
        if (data.length) {
          throw new Error("NAME_EXIT");
        }
        await this.mediumRepository.save({ medium_name: name });
      }
      return {};
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | Update data in Source table       |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async updateSource(body: UpdateSourceDTO): Promise<any> {
    try {
      const { name, id, type } = body;

      if (type == 1) {
        const checkId = await this.sourceRepository.find({
          where: { id: id },
        });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.sourceRepository.update(
          { id: id },
          {
            source_name: name,
          }
        );
      } else {
        const checkId = await this.mediumRepository.find({
          where: { id: id },
        });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.mediumRepository.update(
          { id: id },
          {
            medium_name: name,
          }
        );
      }
      return {};
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | List of Source table data         |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async sourceList(type): Promise<any> {
    try {
      let list = [];
      if (type == 1) {
        list = await this.sourceRepository.find({ select: { id: true, source_name: true } });
      } else {
        list = await this.mediumRepository.find({ select: { id: true, medium_name: true } });
      }
      return list;
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | Source data getById in Source table|
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async SourceGetById(query): Promise<any> {
    try {
      let {
        id, type, user_id
      } = query, data;
      if (type == 1) {
        data = await this.sourceRepository.find({
          where: { id: id },
          select: { id: true, source_name: true }
        });
      } else {
        data = await this.mediumRepository.find({
          where: { id: id },
          select: { id: true, medium_name: true }
        });
      }
      if (!data.length) {
        throw new NotFoundException("ID_NOT_FOUND");
      }
      return data;
    } catch (error) {
      throw error;
    }
  }
  /*
  | --------------------------------- |
  | delete data in Source table       |
  | @param Request                    |
  | @return Response                  |
  | --------------------------------- |
  */
  async deleteSource(query): Promise<any> {
    try {
      let {
        type, id
      } = query;

      if (type == 1) {
        const checkId = await this.sourceRepository.find({ where: { id: id } });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.sourceRepository.delete({ id });
      } else {
        const checkId = await this.mediumRepository.find({ where: { id: id } });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.mediumRepository.delete({ id });
      }
      return {};
    } catch (error) {
      throw error;
    }
  }
}
