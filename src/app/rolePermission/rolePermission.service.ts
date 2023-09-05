import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Permission, Role, UserRolePermission } from "src/entities";
import { Repository } from "typeorm";
import { CreateDTO, UpdateDTO } from "./dto";

@Injectable()
export class RolePermissionService {
  constructor(
    @InjectRepository(Role)
    private readonly roleRepository: Repository<Role>,
    @InjectRepository(Permission)
    private readonly permissionRepository: Repository<Permission>,
    @InjectRepository(UserRolePermission)
    private readonly urpRepository: Repository<UserRolePermission>,
  ) { }

  async create(body: CreateDTO): Promise<any> {
    try {
      let {
        name, type, user_id
      } = body;

      if (type == 1) {
        const data = await this.roleRepository.find({
          where: { role_name: body.name },
        });
        if (data.length) {
          throw new Error("NAME_EXIT");
        }
        await this.roleRepository.save({ role_name: body.name });
      } else {
        const data = await this.permissionRepository.find({
          where: { permission_name: name },
        });
        if (data.length) {
          throw new Error("NAME_EXIT");
        }
        await this.permissionRepository.save({ permission_name: name });
      }
      return {};
    } catch (error) {
      throw error;
    }
  }

  async update(body: UpdateDTO): Promise<any> {
    try {
      const { name, id, type } = body;

      if (type == 1) {
        const checkId = await this.roleRepository.find({
          where: { id: id },
        });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.roleRepository.update(
          { id: id },
          {
            role_name: name,
          }
        );
      } else {
        const checkId = await this.permissionRepository.find({
          where: { id: id },
        });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.permissionRepository.update(
          { id: id },
          {
            permission_name: name,
          }
        );
      }
      return {};
    } catch (error) {
      throw error;
    }
  }

  async list(type): Promise<any> {
    try {
      let list = [];
      if (type == 1) {
        list = await this.roleRepository.find({ select: { id: true, role_name: true } });
      } else {
        list = await this.permissionRepository.find({ select: { id: true, permission_name: true } });
      }
      return list;
    } catch (error) {
      throw error;
    }
  }

  async getById(query): Promise<any> {
    try {
      let {
        id, type, user_id
      } = query, data;
      if (type == 1) {
        data = await this.roleRepository.find({
          where: { id: id },
          select: { id: true, role_name: true }
        });
      } else {
        data = await this.permissionRepository.find({
          where: { id: id },
          select: { id: true, permission_name: true }
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

  async delete(query): Promise<any> {
    try {
      let {
        type, id
      } = query;

      if (type == 1) {
        const checkId = await this.roleRepository.find({ where: { id: id } });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.roleRepository.delete({ id });
      } else {
        const checkId = await this.permissionRepository.find({ where: { id: id } });
        if (!checkId.length) {
          throw new NotFoundException("ID_NOT_FOUND");
        }
        await this.permissionRepository.delete({ id });
      }
      return {};
    } catch (error) {
      throw error;
    }
  }

  async addPermission(body): Promise<any> {
    try {
      let {
        role_id, permission_ids, user_id
      } = body, data = [];
      const roleDetail = await this.urpRepository.find({
        where: {
          roleDetail: { id: role_id }
        }
      });
      if (roleDetail.length) {
        await this.urpRepository.delete({ roleDetail: { id: role_id } });
      }
      if (permission_ids.length) {
        permission_ids.map(id => {
          data.push({
            role_id: role_id,
            permission_id: id
          })
        })
      }
      await this.urpRepository.save(data);

      return {};
    } catch (error) {
      throw error;
    }
  }

  async listRolePermission(query): Promise<any> {
    try {
      let {
        role_id
      } = query;

      const rolePermissions = await this.roleRepository.findOne({
        where: {
          id: role_id
        },
        select: {
          id: true,
          role_name: true,
          rolePermission: {
            id: true,
            permissionDetail: {
              id: true,
              permission_name: true,
            }
          }
        },
        relations: ["rolePermission", "rolePermission.permissionDetail"]
      })
      return rolePermissions || {};
    } catch (error) {
      throw error;
    }
  }

  async listAllRolePermission(): Promise<any> {
    try {
      const rolePermissions = await this.roleRepository.find({
        select: {
          id: true,
          role_name: true,
          rolePermission: {
            id: true,
            permissionDetail: {
              id: true,
              permission_name: true,
            }
          }
        },
        relations: ["rolePermission", "rolePermission.permissionDetail"]
      })
      return rolePermissions || {};
    } catch (error) {
      throw error;
    }
  }
}
