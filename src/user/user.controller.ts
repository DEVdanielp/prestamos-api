import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service.js';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  
  @Get('roles')
  async getUserRoles(): Promise<{ userRoles: string[]; userPermissions: string[] }> {
    return this.userService.getUserRoles(1); // Replace 1 with the actual user ID
  }


}
