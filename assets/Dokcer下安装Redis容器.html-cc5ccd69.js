import{_ as d,r,o as l,c as o,a as s,b as n,d as a,e as i}from"./app-2ff14493.js";const c={},t=s("h1",{id:"dokcer下安装redis容器",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#dokcer下安装redis容器","aria-hidden":"true"},"#"),n(" Dokcer下安装Redis容器")],-1),p=s("h3",{id:"_1、获取redis镜像",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1、获取redis镜像","aria-hidden":"true"},"#"),n(" 1、获取Redis镜像")],-1),u={href:"https://hub.docker.com/_/redis?tab=tags",target:"_blank",rel:"noopener noreferrer"},v=i(`<h3 id="_2、下载redis镜像" tabindex="-1"><a class="header-anchor" href="#_2、下载redis镜像" aria-hidden="true">#</a> 2、下载Redis镜像</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis
下载最新版Redis镜像 <span class="token punctuation">(</span>其实此命令就等同于 <span class="token builtin class-name">:</span> <span class="token function">docker</span> pull redis:latest <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、创建redis配置文件" tabindex="-1"><a class="header-anchor" href="#_3、创建redis配置文件" aria-hidden="true">#</a> 3、创建Redis配置文件</h3><ol><li>新建挂载配置文件夹</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token comment">## 创建目录</span>
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/unubut/redis/conf
<span class="token comment">## 创建文件</span>
<span class="token function">sudo</span> <span class="token function">touch</span> /home/unubut/redis/conf/redis.conf
或者
<span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> ./redis/<span class="token punctuation">{</span>data,conf<span class="token punctuation">}</span>

<span class="token comment">##设置权限</span>
<span class="token function">sudo</span>  <span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /home/unubut/redis/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),m={href:"http://download.redis.io/redis-stable/redis.conf",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>修改配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0

protected-mode <span class="token function">yes</span>
appendonly <span class="token function">yes</span>  <span class="token comment">#延迟化</span>
<span class="token comment">#rdb持久化</span>
save <span class="token number">900</span> <span class="token number">1</span> <span class="token comment">#表示15分钟(900秒钟)</span>
save <span class="token number">300</span> <span class="token number">10</span> 
save <span class="token number">60</span>  <span class="token number">10000</span>

redis通过配置文件设置密码
requirepass foobared
requirepass <span class="token number">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3..docker 启动 redis</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token function">docker</span> run <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/ubuntu/redis/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/ubuntu/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说明：</p><blockquote><p>-p 6379:6379 端口映射：前表示主机部分，：后表示容器部分。</p><p>–name redis 指定该容器名称，查看和进行操作都比较方便。</p><p>-v /home/ubuntu/redis/data:/data 挂载Reids数据卷</p><p>-v /home/ubuntu/redis/conf/redis.conf:/etc/redis/redis.conf 挂载配置 文件，要不要 挂载自行决定</p><p>-d redis 表示后台启动redis</p><p>redis-server /etc/redis/redis.conf 指定配置文件的路径。/etc/redis/redis.conf指的是容器内的文件路径，对应的宿主机的路径要根据挂载卷的路径找到。我的宿主机路径就是/home/ubuntu/redis/conf/redis.conf</p></blockquote><p>4.查看Redis是否运行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span> 
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token operator">|</span> <span class="token function">grep</span> redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),h=s("p",null,"Docker日志查看",-1),k=s("p",null,"发现",-1),f=s("p",null,[s("strong",null,"Failed opening the RDB file zzh (in server root dir /etc/cron.d) for saving: Permission denied"),n(" **1:M 19 Jun **")],-1),_=s("p",null,[s("strong",null,"Failed opening the RDB file crontab (in server root dir /etc) for saving: Permission denied")],-1),g=s("p",null,"出现这个错误，导致数据丢失，然后生成几个备份文件",-1),x=s("p",null,"原因：",-1),R=s("p",null,"在正式机器上，密码没有设置",-1),D={href:"https://stackoverflow.com/questions/41887280/redis-config-dir-periodically-modified-to-var-spool-cron-with-failed-opening",target:"_blank",rel:"noopener noreferrer"},q=i(`<h3 id="_4、进入redis容器" tabindex="-1"><a class="header-anchor" href="#_4、进入redis容器" aria-hidden="true">#</a> 4、进入Redis容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>   <span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> redis /bin/bash
   <span class="token comment">### 进入 Redis 控制台</span>
   redis-cli
   
   auth default 密码  //没有设置密码不用这一步，设置了密码必须有一步，不是会出错，default 为用户名，直接默认就可以了
   
   <span class="token builtin class-name">set</span> dong <span class="token number">444</span>
   get dong 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function y(B,w){const e=r("ExternalLinkIcon");return l(),o("div",null,[t,p,s("blockquote",null,[s("p",null,[n("Docker如果想安装软件 , 必须先到 Docker 镜像仓库下载镜像。 "),s("a",u,[n("Docker 镜像仓库"),a(e)])])]),v,s("p",null,[n("2.下载官网的配置文件并修改 redis.conf："),s("a",m,[n("redis.conf下载"),a(e)])]),b,s("blockquote",null,[h,k,f,_,g,x,R,s("p",null,[s("a",D,[n("该文章详细说明"),a(e)])])]),q])}const V=d(c,[["render",y],["__file","Dokcer下安装Redis容器.html.vue"]]);export{V as default};
