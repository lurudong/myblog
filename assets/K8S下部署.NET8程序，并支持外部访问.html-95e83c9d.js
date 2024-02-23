import{_ as n,o as s,c as a,e}from"./app-2ff14493.js";const t={},p=e(`<h1 id="k8s下部署-net8程序-并支持外部访问" tabindex="-1"><a class="header-anchor" href="#k8s下部署-net8程序-并支持外部访问" aria-hidden="true">#</a> K8S下部署.NET8程序，并支持外部访问</h1><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> apps/v1 <span class="token comment">#api版本，通过“kubetl api-versions” 命令来查看</span>
<span class="token comment">#资源类型，区分大小写，可通过“kubetl api-resource” 命令查看</span>
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Deployment 
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> aspnetcore<span class="token punctuation">-</span>deployment <span class="token comment">#当前Deployment对象名字，同一个命名空间下必须唯一</span>
<span class="token key atrule">spec</span><span class="token punctuation">:</span> <span class="token comment">#部署规范（目标），Deployment控制器如何找到pod</span>
  <span class="token key atrule">replicas</span><span class="token punctuation">:</span> <span class="token number">3</span> <span class="token comment">#pod数量，可以运行3个</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span> 
    <span class="token key atrule">matchLabels</span><span class="token punctuation">:</span> <span class="token comment">#匹配标签</span>
      <span class="token key atrule">app</span><span class="token punctuation">:</span> aspnetcore
  <span class="token key atrule">template</span><span class="token punctuation">:</span>
    <span class="token key atrule">metadata</span><span class="token punctuation">:</span>
      <span class="token key atrule">labels</span><span class="token punctuation">:</span>
        <span class="token key atrule">app</span><span class="token punctuation">:</span> aspnetcore
    <span class="token key atrule">spec</span><span class="token punctuation">:</span>
      <span class="token key atrule">containers</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> aspnetcore
        <span class="token key atrule">image</span><span class="token punctuation">:</span> mcr.microsoft.com/dotnet/samples<span class="token punctuation">:</span>aspnetapp
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> <span class="token key atrule">containerPort</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment">#容器端口</span>
<span class="token punctuation">---</span>  <span class="token comment">#可以拆分文件</span>
<span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Service <span class="token comment">#服务</span>
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> aspnetcore<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">type</span><span class="token punctuation">:</span> NodePort <span class="token comment">#node port类型</span>
  <span class="token key atrule">ports</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">protocol</span><span class="token punctuation">:</span> TCP <span class="token comment"># 协议类型</span>
    <span class="token key atrule">port</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment"># 指定Service访问的端口</span>
    <span class="token key atrule">targetPort</span><span class="token punctuation">:</span> <span class="token number">8080</span> <span class="token comment"># 指定Service转发请求的端口</span>
    <span class="token key atrule">nodePort</span><span class="token punctuation">:</span> <span class="token number">31001</span> <span class="token comment">#端口 “3000-32767”端口不要冲突</span>
  <span class="token key atrule">selector</span><span class="token punctuation">:</span>
    <span class="token key atrule">app</span><span class="token punctuation">:</span> aspnetcore
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用ingress暴露到外部" tabindex="-1"><a class="header-anchor" href="#使用ingress暴露到外部" aria-hidden="true">#</a> 使用Ingress暴露到外部</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">apiVersion</span><span class="token punctuation">:</span> networking.k8s.io/v1
<span class="token key atrule">kind</span><span class="token punctuation">:</span> Ingress
<span class="token key atrule">metadata</span><span class="token punctuation">:</span>
  <span class="token key atrule">name</span><span class="token punctuation">:</span> aspnetcore<span class="token punctuation">-</span>deployment
<span class="token key atrule">spec</span><span class="token punctuation">:</span>
  <span class="token key atrule">rules</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">http</span><span class="token punctuation">:</span>
      <span class="token key atrule">paths</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token key atrule">path</span><span class="token punctuation">:</span> /
        <span class="token key atrule">pathType</span><span class="token punctuation">:</span> Prefix
        <span class="token key atrule">backend</span><span class="token punctuation">:</span>
          <span class="token key atrule">service</span><span class="token punctuation">:</span>
            <span class="token key atrule">name</span><span class="token punctuation">:</span> aspnetcore<span class="token punctuation">-</span>deployment
            <span class="token key atrule">port</span><span class="token punctuation">:</span>
              <span class="token key atrule">number</span><span class="token punctuation">:</span> <span class="token number">8080</span>  <span class="token comment">#程序端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="kuboard安装" tabindex="-1"><a class="header-anchor" href="#kuboard安装" aria-hidden="true">#</a> kuboard安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token function">docker</span> run <span class="token parameter variable">-d</span>  <span class="token parameter variable">--restart</span><span class="token operator">=</span>unless-stopped  <span class="token parameter variable">--name</span><span class="token operator">=</span>kuboard  <span class="token parameter variable">-p</span> <span class="token number">8081</span>:80/tcp   <span class="token parameter variable">-p</span> <span class="token number">10081</span>:10081/tcp   <span class="token parameter variable">-e</span> <span class="token assign-left variable">KUBOARD_ENDPOINT</span><span class="token operator">=</span><span class="token string">&quot;http://114.132.177.254:8090&quot;</span>   <span class="token parameter variable">-e</span> <span class="token assign-left variable">KUBOARD_AGENT_SERVER_TCP_PORT</span><span class="token operator">=</span><span class="token string">&quot;10081&quot;</span>   <span class="token parameter variable">-v</span> /home/kuboard-data:/data   swr.cn-east-2.myhuaweicloud.com/kuboard/kuboard:v3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行<code>sudo kubectl apply -f xx.yaml</code></p><p>访问<code>http://&lt;ip&gt;:&lt;nodePort&gt;</code></p>`,8),l=[p];function c(o,i){return s(),a("div",null,l)}const r=n(t,[["render",c],["__file","K8S下部署.NET8程序，并支持外部访问.html.vue"]]);export{r as default};
