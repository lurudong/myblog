# Dokcer下安装Redis容器

### 1、获取Redis镜像 


>Docker如果想安装软件 , 必须先到 Docker 镜像仓库下载镜像。 
>[Docker 镜像仓库](https://hub.docker.com/_/redis?tab=tags)

### 2、下载Redis镜像

```sh
docker pull redis
下载最新版Redis镜像 (其实此命令就等同于 : docker pull redis:latest )
```

### 3、创建Redis配置文件

1. 新建挂载配置文件夹

```shell

## 创建目录
sudo mkdir -p /home/unubut/redis/conf
## 创建文件
sudo touch /home/unubut/redis/conf/redis.conf
或者
sudo mkdir -p ./redis/{data,conf}

##设置权限
sudo  chmod -R 777 /home/unubut/redis/
```

2.下载官网的配置文件并修改 redis.conf：[redis.conf下载](http://download.redis.io/redis-stable/redis.conf)

修改配置文件

```sh
bind 0.0.0.0

protected-mode yes
appendonly yes  #延迟化
#rdb持久化
save 900 1 #表示15分钟(900秒钟)
save 300 10 
save 60  10000

redis通过配置文件设置密码
requirepass foobared
requirepass 123456
```

3..docker 启动 redis

```shell
docker run --name redis -p 6379:6379 \
-v /home/ubuntu/redis/data:/data \
-v /home/ubuntu/redis/conf/redis.conf:/etc/redis/redis.conf \
-d redis redis-server /etc/redis/redis.conf
```

说明：

> -p 6379:6379 端口映射：前表示主机部分，：后表示容器部分。
>
> –name redis 指定该容器名称，查看和进行操作都比较方便。
>
> -v /home/ubuntu/redis/data:/data 挂载Reids数据卷
>
> -v /home/ubuntu/redis/conf/redis.conf:/etc/redis/redis.conf 挂载配置 文件，要不要 挂载自行决定
>
> -d redis 表示后台启动redis
>
> redis-server /etc/redis/redis.conf
>         指定配置文件的路径。/etc/redis/redis.conf指的是容器内的文件路径，对应的宿主机的路径要根据挂载卷的路径找到。我的宿主机路径就是/home/ubuntu/redis/conf/redis.conf
>
> 

4.查看Redis是否运行

```sh
docker ps 
docker ps | grep redis
```

> Docker日志查看
>
> 发现
>
> **Failed opening the RDB file zzh (in server root dir /etc/cron.d) for saving: Permission denied**
> **1:M 19 Jun ** 
>
>  **Failed opening the RDB file crontab (in server root dir /etc) for saving: Permission denied**
>
> 出现这个错误，导致数据丢失，然后生成几个备份文件
>
> 原因：
>
> 在正式机器上，密码没有设置
>
> [该文章详细说明](https://stackoverflow.com/questions/41887280/redis-config-dir-periodically-modified-to-var-spool-cron-with-failed-opening)

### 4、进入Redis容器

```shell
   docker exec -it redis /bin/bash
   ### 进入 Redis 控制台
   redis-cli
   
   auth default 密码  //没有设置密码不用这一步，设置了密码必须有一步，不是会出错，default 为用户名，直接默认就可以了
   
   set dong 444
   get dong 
   ```

   

   

