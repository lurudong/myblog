# Ubuntu部署Harbor


>Docker容器应用的开发和运行路不开可靠的镜像管理，虽然Docker官方也提供了公共的镜像仓库，但是从安全和效率等方面考虑，部署我们私有环境的Registry也是非常必要的。 Harbor是由VMware公司开源的企业级的Docker Registry管理项目，它包括权限管理(RBAC)、LDAP、日志审核、管理界面、自我注册、镜像复制和中文支持等功能。
## 首先
配置hosts文件
``` shell
sudo nano /etc/hosts
添加
127.0.1.1  harbor 
```
  
## Harbor 部署
- 首先我们在服务器上安装好操作系统（或有操作系统），并安装好 docker 引擎和 docker-compose.
- docker-compose 需要安装新版的 V2.
- 至于 [Docker Engine](https://docs.docker.com/engine/install/ubuntu) 和 [Docker Compose](https://docs.docker.com/compose/install/linux) 的配置可以参考 docker 官网,这里不再赘述.参考链接如下:
- 首先在官网点击[Download Now](https://github.com/goharbor/harbor/releases)会跳转到 GitHub 的 Release,选择自己喜欢的版本下载就行.本文以 v2.9.2 版本为例.
- GitHub 的安装包分为在**线安装**和**离线安装**两种,可以根据自己的网络情况选择适合自己的包即可.
  ``` shell
  sudo wget https://github.com/goharbor/harbor/releases/download/v2.9.2/harbor-offline-installer-v2.9.2.tgz
  解压下载的包
  sudo tar xzvf harbor-offline-installer-v2.9.2.tgz 
  解压后当前命令符目录下应该会多出来一个 harbor 文件夹
  cd harbor 
  拷贝配置文件
  sudo cp /home/ubuntu/harbor.yml.tmpl /home/ubuntu/harbor/harbor.yml
  设置文件权限
  sudo chmod 777 harbor.yml
  ```
- 修改配置文件**harbor.yml**
```shell
sudo nano /root/harbor/harbor.yml
```
- 修下内容以下
```yaml
我使用是http的，没有使用https，根据自身需要
# hostname直接填写为本机的主机名就行,如我这里就叫harbor
hostname: harbor
# http我这里没有使用,所以注释掉了.
http:
  port: 8088
# https配置
#https:
  # https port for harbor, default is 443
  #port: 443
  # 这里写入证书的路径,需要先将域名服务商颁发的证书复制到对应目录,若是没有证书,可以仅使用http.
  #certificate: /home/ubuntu/harbor/xx.csr
  #private_key: /home/ubuntu/harbor/x.csr
  
以下该文件内容自行修改
```
 - Https配置以下：
  
   [有详细教程](https://goharbor.io/docs/2.10.0/install-config/configure-https)

- 配置文件**harbor.yml**调整后，执行以下安装命令
```shell
# 后边的--with-trivy是添加了一个扫描器,用来扫描镜像漏洞的.若是不需要可以不加.也可以后期再执行这个命令添加上去.
sudo ./install.sh --with-trivy
等待一段时间,就可以部署成功了
```
注意：
部署过程中有可能出现等待非常长时候还没有部署成功，就需要执行以下操作
``` shell
sudo docker image import ./harbor.v2.9.2.tar.gz
再次执行以下命令
sudo ./install.sh --with-trivy
```
- 安装完harbor后验证
```shell
ubuntu@VM-12-9-ubuntu:~/harbor$ docker ps 
CONTAINER ID   IMAGE                                                COMMAND                  CREATED        STATUS                            PORTS                                                                                           NAMES
ad736922a8f9   goharbor/nginx-photon:v2.9.2                         "nginx -g 'daemon of…"   23 hours ago   Up 23 hours (healthy)             0.0.0.0:8088->8080/tcp, :::8088->8080/tcp                                                       nginx
57123351b966   goharbor/harbor-jobservice:v2.9.2                    "/harbor/entrypoint.…"   23 hours ago   Up 23 hours (healthy)                                                                                                             harbor-jobservice
738ed3112c98   goharbor/harbor-core:v2.9.2                          "/harbor/entrypoint.…"   23 hours ago   Up 23 hours (healthy)                                                                                                             harbor-core
6f90a32727b2   goharbor/trivy-adapter-photon:v2.9.2                 "/home/scanner/entry…"   23 hours ago   Up 23 hours (healthy)                                                                                                             trivy-adapter
c28b438e9f26   goharbor/redis-photon:v2.9.2                         "redis-server /etc/r…"   23 hours ago   Up 23 hours (healthy)                                                                                                             redis
5038746da448   goharbor/harbor-portal:v2.9.2                        "nginx -g 'daemon of…"   23 hours ago   Up 23 hours (healthy)                                                                                                             harbor-portal
25a52f6d9893   goharbor/harbor-registryctl:v2.9.2                   "/home/harbor/start.…"   23 hours ago   Up 23 hours (healthy)                                                                                                             registryctl
61b6180de85f   goharbor/harbor-db:v2.9.2                            "/docker-entrypoint.…"   23 hours ago   Up 23 hours (healthy)                                                                                                             harbor-db
9388c40ee0d4   goharbor/registry-photon:v2.9.2                      "/home/harbor/entryp…"   23 hours ago   Up 23 hours (healthy)                                                                                                             registry
59ed94536a3c   goharbor/harbor-log:v2.9.2                           "/bin/sh -c /usr/loc…"   23 hours ago   Up 23 hours (healthy)             127.0.0.1:1514->10514/tcp                                                                       harbor-log

  ```
  也可使用http://[ip]:[port]访问
  然后输入账号与密码登录及可
  账号为admin
  密码是默认的，请看配置文件

## 登录仓库
最好使用https登录
```shell
# 语法: docker login [OPTIONS] [SERVER]
# 请将域名替换为自己的.
# 账号为admin
# 密码Harbor12345
docker login xxxx
```

### 问题
有可能没有使用域名只使用IP地址访问。

 `Error response from daemon: Get "https://xxxx:8088/v2/": http: server gave HTTP response to HTTPS client`
 
```shell
sudo nano /etc/docker/daemon.json
```
在文件中添加所需的配置。例如，要配置Docker以允许通过HTTP连接到某个非安全的Registry，可以添加如下内容：
```json
{
  "insecure-registries" : ["https://xxxx:443","http://xxx.8088"]
}
```

#### 重启Docker服务

```shell
sudo systemctl daemon-reload
#sudo systemctl restart docker.service
sudo systemctl restart docker


```
#### 验证配置
重启Docker服务后，可以通过检查Docker的状态和日志来验证配置是否生效：
- 检查Docker服务状态：
```shell
sudo systemctl status docker
```
- 查看Docker日志，寻找有关启动或配置错误的信息：
```shell
journalctl -u docker.service
```
确保没有错误消息，并且Docker守护进程正常运行。如果出现问题，检查daemon.json中的配置是否正确，并确认没有语法错误。
## 退出仓库
```shell
#语法: docker logout [SERVER]
docker logout xxx
```


## 参考
[Ubuntu 系统 Harbor 部署](https://github.com/EasilyNET/docs/blob/main/Harbor/harbor%E9%83%A8%E7%BD%B2.md?plain=1#L148)

[Harbor私有仓库搭建并配置https对接docker与kubernetes](https://segmentfault.com/a/1190000043223828)

