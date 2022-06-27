# Imp-core-backend

简单的权限管理系统

## 开发指引

### 环境准备

开发之前你可能需要安装 `nodejs@16.15.1` 和 `pnpm` 

Since v16.13, Node.js is shipping Corepack for managing package managers. This is an experimental feature, so you need to enable it by running:

`corepack enable`

This will automatically install pnpm on your system. However, it probably won't be the latest version of pnpm. To upgrade it, check what is the latest pnpm version and run:

`corepack prepare pnpm@.3.0 --activate`

### 数据库准备

数据库开发使用 `docker` 开发，所以需要安装并下拉 `postgres` 与 `pgadmin`

```
docker run --name postgres1 -d -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres

docker run --name pgadmin1 -d -p 5433:80 -e PGADMIN_DEFAULT_EMAIL=root@root.com -e PGADMIN_DEFAULT_PASSWORD=123456 dpage/pgadmin4
```

### 数据库新建

由于需要连接固定数据库名称，此处命名为 `impcore`，所以需要创建一个名为这个的数据库
