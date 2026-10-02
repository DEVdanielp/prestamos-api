import { Injectable } from '@nestjs/common';
import { GetRolesDTO } from './DTO/getRolesDTO.js';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUserRoles(userId: number): Promise<GetRolesDTO> { 

    const usuario = await this.prisma.tBL_usuarios.findUnique({
      where: { id: userId },
      select: {
        TBL_usuario_rol: {
          select: {
            TBL_roles: {
              select: {
                permisos_roles: {
                  select: { TBL_permisos: true },
                },
              },
            },
          },
        },
      },
    })

    console.log('usuario', usuario)

    return {
      userPermissions: ['read', 'write', 'delete'], 
      userRoles: ['admin', 'user']
    }
  }
}
