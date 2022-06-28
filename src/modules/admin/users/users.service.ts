import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
/**
 * 1. 验证用户名是否重复
 * 2. 用户创建（用户名/密码/头像？）
 * 3. 用户更新
 * 4. 用户列表
 * 5. 用户分页
 * 6. 用户单个查询
 * 7. 用户删除
 * 8.
 */
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  public async findUserByUsername(username: string) {
    return await this.userRepository.findOneBy({
      username,
    });
  }
}
