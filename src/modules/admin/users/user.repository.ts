import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  // findUserByUsername(username: string) {
  //   return this.findOneBy({
  //     username,
  //   });
  // return this.createQueryBuilder('u')
  //   .where('u.username = :username', { username })
  //   .getOne();
  // }
}
