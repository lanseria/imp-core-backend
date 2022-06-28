import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { MenusModule } from './menus/menus.module';
import { DictsModule } from './dicts/dicts.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [UsersModule, RolesModule, MenusModule, DictsModule, FilesModule]
})
export class AdminModule {}
