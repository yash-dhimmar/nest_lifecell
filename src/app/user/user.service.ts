import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
  async user(name: string) {
    try {
      const greeting = `Hello ${name}`
      return { greeting };
    } catch (error) {
      throw error;
    }
  }
}
