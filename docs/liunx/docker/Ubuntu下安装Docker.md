# Ubuntu下安装Docker

## 准备工作

### 系统

 [Ubuntu](https://ubuntu.com/server) 操作系统下载,最好选择最新LTS 版本。

假如使用云服务就不能自行下载。

Docker 可以安装在 64 位的 x86 平台或 ARM 平台上。Ubuntu 发行版中，LTS（Long-Term-Support）长期支持版本，会获得 5 年的升级维护支持，这样的版本会更稳定，因此在生产环境中推荐使用 LTS 版本。

`选自己所喜欢的版本，选错的大不了重选。当你没有选到合适的版本的话，就撮合用吧。人生就是这样，不一定所选都是对的，假如不选，就错过，就不一定有对的时候，错了大不了重选。`

## 手动安装

### 卸载旧版本

旧版本的 Docker 称为 `docker` 或者 `docker-engine`，使用以下命令卸载旧版本：

```sh
sudo apt-get remove docker \
               docker-engine \
               docker.io
```

### 使用 APT 安装

由于 `apt` 源使用 HTTPS 以确保软件下载过程中不被篡改。因此，我们首先需要添加使用 HTTPS 传输的软件包以及 CA 证书。

```sh
sudo apt-get update



sudo apt-get install \

​    apt-transport-https \

​    ca-certificates \

​    curl \

​    gnupg \

​    lsb-release
```

鉴于国内网络问题，强烈建议使用国内源，官方源请在注释中查看。

为了确认所下载软件包的合法性，需要添加软件源的 `GPG` 密钥。

```sh
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 官方源

#  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

然后，我们需要向 `sources.list` 中添加 Docker 软件源

```sh
echo \
  "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


# 官方源
# echo \
#   "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
#   $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

> **以上命令会添加稳定版本的 Docker APT 镜像源，如果需要测试版本的 Docker 请将 stable 改为 test。**

### 安装 Docker

更新 apt 软件包缓存，并安装 `docker-ce`：

```sh
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io
```

### 启动 Docker

```sh
sudo systemctl enable docker
sudo systemctl start docker
```

### 建立 docker 用户组

认情况下，`docker` 命令会使用 [Unix socket](https://en.wikipedia.org/wiki/Unix_domain_socket) 与 Docker 引擎通讯。而只有 `root` 用户和 `docker` 组的用户才可以访问 Docker 引擎的 Unix socket。出于安全考虑，一般 Linux 系统上不会直接使用 `root` 用户。因此，更好地做法是将需要使用 `docker` 的用户加入 `docker` 用户组。

建立 `docker` 组：

```sh
sudo groupadd docker
```

将当前用户加入 `docker` 组：

```sh
sudo usermod -aG docker $USER
```

退出当前终端并重新登录，进行如下测试。

### 卸载 docker

删除安装包：

```sh
sudo apt-get purge docker-ce
```

删除镜像、容器、配置文件等内容：

```sh
sudo rm -rf /var/lib/docker
```

## 镜像加速

参考文档：

[Docker 镜像加速 | 菜鸟教程 (runoob.com)](https://www.runoob.com/docker/docker-mirror-acceleration.html)

#### Ubuntu16.04+、Debian8+、CentOS7

对于使用 systemd 的系统，请在 /etc/docker/daemon.json 中写入如下内容（如果文件不存在请新建该文件）：

```json
{
  "registry-mirrors": [
    "https://hub-mirror.c.163.com",
    "https://mirror.baidubce.com"
  ]
}

```

> 注意，一定要保证该文件符合 json 规范，否则 Docker 将不能启动。
>
> 选自己所喜欢的镜像，选错的算你自己。

之后重新启动服务：

```sh
sudo systemctl daemon-reload

sudo systemctl restart docker
```

#### 检查加速器是否生效

执行 `$ docker info`，如果从结果中看到了如下内容，说明配置成功。

```sh
Registry Mirrors:
https://hub-mirror.c.163.com/
```

#### 不再提供服务的镜像

某些镜像不再提供服务，添加无用的镜像加速器，会拖慢镜像拉取速度，你可以从镜像配置列表中删除它们。

- https://dockerhub.azk8s.cn **已转为私有**
- https://reg-mirror.qiniu.com
- https://registry.docker-cn.com

建议 **watch（页面右上角）** [镜像测试](https://github.com/docker-practice/docker-registry-cn-mirror-test) 这个 GitHub 仓库，我们会在此更新各个镜像地址的状态。

这些镜像服务商给钱你，才考虑一下。

## 安装Docker Compose
Linux 上我们可以从 Github 上下载它的二进制包来使用，最新发行的版本地址：https://github.com/docker/compose/releases。

1.运行以下命令以下载 Docker Compose 的当前稳定版本：
```sh
$ sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

或者

sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```
要安装其他版本的 Compose，请替换 v2.2.2。

Docker Compose 存放在 GitHub，不太稳定。

你可以也通过执行下面的命令，高速安装 Docker Compose。

``` sh

curl -L https://get.daocloud.io/docker/compose/releases/download/v2.4.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose
```
2.授予docker-compose文件执行权限：
``` sh
sudo chmod +x /usr/local/bin/docker-compose
```
3.创建软链：

``` sh
sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

> 如果不执行这步，执行 `docker-compose --version` 会报如下错误：
>
> `-bash: /usr/bin/docker-compose: No such file or directory`
>
> 要么就使用
>
> `sudo docker-compose --version`
>
>   

> ln -s  作用
>
> `ln -s`命令用于创建符号链接（Symbolic Link），也称为软链接。符号链接是指向另一个文件或目录的特殊文件。当您通过符号链接访问目标文件时，实际上是通过符号链接跳转到目标文件。
>
> 具体地说，`ln -s`命令的作用是创建一个指向目标文件或目录的符号链接。
>
> `ln -s <目标文件/目录> <符号链接路径>`

4.验证Docker Compose是否成功安装。您可以运行以下命令来检查版本信息：

``` sh
docker-compose --version

如果您看到类似于"docker-compose version x.x.x"的输出，表示Docker Compose已成功安装。
```
## 参考：

[Docker官网Ubuntu安装文档](https://docs.docker.com/engine/install/ubuntu/)

[Ubuntu Docker 安装 | 菜鸟教程 (runoob.com)](https://www.runoob.com/docker/ubuntu-docker-install.html)