import { BaseEntity } from 'src/database/entities';
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({
  schema: 'admin',
  name: 'users',
})
export class UserEntity extends BaseEntity {
  @PrimaryColumn({
    name: 'id',
    type: 'uuid',
    generated: 'uuid',
  })
  id: string;

  @Column({
    name: 'username',
    type: 'varchar',
    length: 128,
    nullable: false,
  })
  username: string;

  @Column({
    name: 'avatar',
    type: 'varchar',
    length: 512,
    nullable: false,
  })
  avatar: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 32,
    nullable: false,
  })
  password: string;

  constructor(user: Partial<UserEntity>) {
    super();
    Object.assign(this, user);
  }
}
