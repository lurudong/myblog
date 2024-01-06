# K8S下部署.NET8程序，并支持外部访问


```yaml
apiVersion: apps/v1 #api版本，通过“kubetl api-versions” 命令来查看
#资源类型，区分大小写，可通过“kubetl api-resource” 命令查看
kind: Deployment 
metadata:
  name: aspnetcore-deployment #当前Deployment对象名字，同一个命名空间下必须唯一
spec: #部署规范（目标），Deployment控制器如何找到pod
  replicas: 3 #pod数量，可以运行3个
  selector: 
    matchLabels: #匹配标签
      app: aspnetcore
  template:
    metadata:
      labels:
        app: aspnetcore
    spec:
      containers:
      - name: aspnetcore
        image: mcr.microsoft.com/dotnet/samples:aspnetapp
        ports:
        - containerPort: 8080 #容器端口
---  #可以拆分文件
apiVersion: v1
kind: Service #服务
metadata:
  name: aspnetcore-deployment
spec:
  type: NodePort #node port类型
  ports:
  - protocol: TCP # 协议类型
    port: 8080 # 指定Service访问的端口
    targetPort: 8080 # 指定Service转发请求的端口
    nodePort: 31001 #端口 “3000-32767”端口不要冲突
  selector:
    app: aspnetcore
```
执行`sudo kubectl apply -f xx.yaml`

访问`http://<ip>:<nodePort>`
