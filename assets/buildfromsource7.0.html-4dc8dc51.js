import{_ as i,r as t,o,c as l,a as n,b as e,d as a,e as r}from"./app-2ff14493.js";const c="/assets/image-20230726195957808-06f82a41.png",d="/assets/image-20230726200332575-5f3f96c5.png",p={},u=r(`<h1 id="asp-net-core-7-0-源码编译" tabindex="-1"><a class="header-anchor" href="#asp-net-core-7-0-源码编译" aria-hidden="true">#</a> ASP.NET CORE 7.0 源码编译</h1><p><code>勇气可嘉</code></p><p><code>最后还是失败</code></p><h2 id="基础环境" tabindex="-1"><a class="header-anchor" href="#基础环境" aria-hidden="true">#</a> 基础环境：</h2><p>前言：</p><p>源码GitHub地址</p><p><code>[dotnet/aspnetcore at v7.0.0 (github.com)](https://github.com/dotnet/aspnetcore/tree/v7.0.0)</code></p><h2 id="准备工作" tabindex="-1"><a class="header-anchor" href="#准备工作" aria-hidden="true">#</a> 准备工作：</h2><ol><li>首先安装git https://gitforwindows.org/</li><li>以及各种.net sdk</li></ol><h2 id="下载-net-core源码" tabindex="-1"><a class="header-anchor" href="#下载-net-core源码" aria-hidden="true">#</a> 下载.net core源码</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1.下载安装Git
2.从git克隆
#执行如下指令下载源代码
git clone --recursive https://github.com/dotnet/aspnetcore.git
#注意这里需要加 --recursive，这样可以把依赖项一同下载
#如果执行过程因为网络原因报错，则多次执行下面指令
#用gitee国内加速
git clone --recursive https://gitee.com/microsoft/AspNetCore.git
git clone --recursive https://gitee.com/dong21/dhgaspnetcore.git

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此下源码下载完</p><p>子项还是用github下载，我们可以修改成gitee</p><p><img src="`+c+'" alt="image-20230726195957808"></p><p>修改如下：</p><p>进入<code>.git</code>文件夹下config下</p><p>看到源配置文件如下：</p><p><img src="'+d+`" alt="image-20230726200332575"></p><p>修改成：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>core<span class="token punctuation">]</span>
	repositoryformatversion <span class="token operator">=</span> <span class="token number">0</span>
	filemode <span class="token operator">=</span> <span class="token boolean">false</span>
	bare <span class="token operator">=</span> <span class="token boolean">false</span>
	logallrefupdates <span class="token operator">=</span> <span class="token boolean">true</span>
	symlinks <span class="token operator">=</span> <span class="token boolean">false</span>
	ignorecase <span class="token operator">=</span> <span class="token boolean">true</span>
<span class="token punctuation">[</span>submodule<span class="token punctuation">]</span>
	active <span class="token operator">=</span> <span class="token builtin class-name">.</span>
<span class="token punctuation">[</span>remote <span class="token string">&quot;origin&quot;</span><span class="token punctuation">]</span>
	url <span class="token operator">=</span> https://gitee.com/dong21/dhgaspnetcore.git
	fetch <span class="token operator">=</span> +refs/heads/*:refs/remotes/origin/*
<span class="token punctuation">[</span>branch <span class="token string">&quot;main&quot;</span><span class="token punctuation">]</span>
	remote <span class="token operator">=</span> origin
	merge <span class="token operator">=</span> refs/heads/main
<span class="token punctuation">[</span>submodule <span class="token string">&quot;src/submodules/MessagePack-CSharp&quot;</span><span class="token punctuation">]</span>
	url <span class="token operator">=</span> https://gitee.com/dong21/MessagePack-CSharp.git
<span class="token punctuation">[</span>submodule <span class="token string">&quot;src/submodules/googletest&quot;</span><span class="token punctuation">]</span>
	url <span class="token operator">=</span> https://gitee.com/dong21/googletest
<span class="token punctuation">[</span>submodule <span class="token string">&quot;src/submodules/spa-templates&quot;</span><span class="token punctuation">]</span>
	url <span class="token operator">=</span> https://gitee.com/dong21/spa-templates.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>然后我们终止掉窗口，但是子模块是没有下载下来的。找到子模块，进入 src\\submodules， 然后把googletest、MessagePack-CSharp （不一定这两个，他下载多少个就，删除多少个）删除掉.
---------------------------------------------------------------------
#执行下面指令更新子模块
git submodule update --init --recursive
---------------------------------------------------------------------
假如出现错误
Failed to clone &#39;src/submodules/googletest&#39;. Retry scheduled
BUG: submodule considered for cloning, doesn&#39;t need cloning any more?
解决：
1.到.git\\modules
2.删除meson文件夹
3.重新 git submodule update --init --recursive
---------------------------------------------------------------------
出现以下操作说明成功：
Cloning into &#39;C:/Users/lurud/Desktop/code/dhgaspnetcore/src/submodules/MessagePack-CSharp&#39;...
Cloning into &#39;C:/Users/lurud/Desktop/code/dhgaspnetcore/src/submodules/googletest&#39;...
Submodule path &#39;src/submodules/MessagePack-CSharp&#39;: checked out &#39;ecc4e18ad7a0c7db51cd7e3d2997a291ed01444d&#39;
Submodule path &#39;src/submodules/googletest&#39;: checked out &#39;1ed6a8c67a0bd675149ece27bbec0ef1759854cf&#39;



</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装依赖" tabindex="-1"><a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a> 安装依赖</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#首先通过管理员角色打开powershel 1窗口
#然后切换目录进入下载的源代码文件夹aspnetcore中。执行如下代码，安装visual studio
#设置权限
Set-ExecutionPolicy -ExecutionPolicy Remotesigned -scope currentuser
#安装Visual studio
./eng/scripts/InstallVisualStudio.ps1 -EditionProfessional
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装-nodejs" tabindex="-1"><a class="header-anchor" href="#安装-nodejs" aria-hidden="true">#</a> 安装 nodejs:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#下载最新版本的nodejs,网站如下 https://nodejs.org/en/
#然后执行如下指令
npm install -g yarn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="安装java-jdk" tabindex="-1"><a class="header-anchor" href="#安装java-jdk" aria-hidden="true">#</a> 安装java JDK</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#执行如下指令安装java jdk
./eng/scripts/InstallJdk.psi

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="开始编译" tabindex="-1"><a class="header-anchor" href="#开始编译" aria-hidden="true">#</a> 开始编译</h2><p>首先切换到我们需要编译的分支 ，先看看有哪些分支 git tag,由于分支很多，一下显示不全 需要我们翻页或者下滑，向下键下滑,enter翻页， ：q退出。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>配置源码
clone好源码之后，使用命令行进入该文件夹然后执行git tag，查看tag版本
git tag 查看tag版本：
向下键下滑,enter翻页， ：q退出。

如果你想查看其它分支版本的话，可以执行类似的命令：
git checkout v7.0.1  选版本
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-更改-global-json" tabindex="-1"><a class="header-anchor" href="#_1-更改-global-json" aria-hidden="true">#</a> 1.更改 <code>global.json</code></h3><p><code>&quot;tools&quot;</code>下添加<code>vswhere: &quot;3.1.1&quot;</code></p><p>修改 <code>&quot;sdk&quot;:version</code>、<code>&quot;tools&quot;:&quot;dotnet&quot;</code> 修改成自己本地sdk版本</p><p><code>&quot;vs&quot;</code>下 <code>version</code> 可以修改，可以不修改，但是不能高于你本地VS版本 <code>jdk,git</code>，想修改可以自行修改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>
<span class="token punctuation">{</span>
  <span class="token string">&quot;sdk&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;7.0.306&quot;</span> //修改成自己本地版本
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;tools&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;vswhere&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;3.1.1&quot;</span>,  //添加
    <span class="token string">&quot;dotnet&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;7.0.306&quot;</span>, //修改成自己本地版本
    <span class="token string">&quot;runtimes&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;dotnet/x86&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>MicrosoftNETCoreBrowserDebugHostTransportVersion<span class="token variable">)</span></span>&quot;</span>
      <span class="token punctuation">]</span>,
      <span class="token string">&quot;dotnet&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>MicrosoftNETCoreBrowserDebugHostTransportVersion<span class="token variable">)</span></span>&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;Git&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;2.22.0&quot;</span>,
    <span class="token string">&quot;jdk&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;11.0.3&quot;</span>,
    <span class="token string">&quot;vs&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
      <span class="token string">&quot;version&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;17.2&quot;</span>,
      <span class="token string">&quot;components&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;Microsoft.VisualStudio.Component.VC.ATL&quot;</span>,
        <span class="token string">&quot;Microsoft.VisualStudio.Component.VC.ATL.ARM64&quot;</span>,
        <span class="token string">&quot;Microsoft.VisualStudio.Component.VC.Tools.ARM64&quot;</span>,
        <span class="token string">&quot;Microsoft.VisualStudio.Component.VC.Tools.x86.x64&quot;</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>,
    <span class="token string">&quot;xcopy-msbuild&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;17.1.0&quot;</span>
  <span class="token punctuation">}</span>,
  <span class="token string">&quot;msbuild-sdks&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;Yarn.MSBuild&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;1.22.10&quot;</span>,
    <span class="token string">&quot;Microsoft.DotNet.Arcade.Sdk&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;7.0.0-beta.22561.2&quot;</span>,
    <span class="token string">&quot;Microsoft.DotNet.Helix.Sdk&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;7.0.0-beta.22561.2&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

vswhere 的版本需要你自己去看自己安装了什么版本  C:<span class="token punctuation">\\</span>Program Files <span class="token punctuation">(</span>x86<span class="token punctuation">)</span><span class="token punctuation">\\</span>Microsoft Visual Studio<span class="token punctuation">\\</span>Installer 找到vswhere 属性详细信息查看版本，待会安装的时候需要你拷贝进文件夹的。

提示
Downloading vswhere
找不到某个文件 ，那么就需要我们去把文件给补回来 ，比如我们的vswhere 文件 你嫌下载的慢 可以直接复制 到 .tools/vswhere/3.0.1/里面去。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-更改versions-props" tabindex="-1"><a class="header-anchor" href="#_2-更改versions-props" aria-hidden="true">#</a> 2.更改<code>Versions.props</code></h3><p>找到<code>/eng/Versions.props</code>下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>源：
<span class="token operator">&lt;</span>MicrosoftNETCoreBrowserDebugHostTransportVersion<span class="token operator">&gt;</span><span class="token number">7.0</span>.1-servicing.22568.<span class="token operator"><span class="token file-descriptor important">4</span>&lt;</span>/MicrosoftNETCoreBrowserDebugHostTransportVersion<span class="token operator">&gt;</span>
修改成：           <span class="token operator">&lt;</span>MicrosoftNETCoreBrowserDebugHostTransportVersion<span class="token operator">&gt;</span><span class="token number">7.0</span>.<span class="token operator"><span class="token file-descriptor important">1</span>&lt;</span>/MicrosoftNETCoreBrowserDebugHostTransportVersion<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-更改nuget-config" tabindex="-1"><a class="header-anchor" href="#_3-更改nuget-config" aria-hidden="true">#</a> 3.更改NuGet.config</h3><p>在根目录下 把以下的去掉，不是会报错</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token operator">&lt;</span>add <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;darc-int-dotnet-efcore-8b903ca&quot;</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token string">&quot;https://pkgs.dev.azure.com/dnceng/internal/_packaging/darc-int-dotnet-efcore-8b903ca4/nuget/v3/index.json&quot;</span> /<span class="token operator">&gt;</span>
   
  <span class="token operator">&lt;</span>add <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token string">&quot;darc-int-dotnet-runtime-97203d3&quot;</span> <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token string">&quot;https://pkgs.dev.azure.com/dnceng/internal/_packaging/darc-int-dotnet-runtime-97203d38/nuget/v3/index.json&quot;</span> /<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-执行-restore-cmd" tabindex="-1"><a class="header-anchor" href="#_4-执行-restore-cmd" aria-hidden="true">#</a> 4.执行 .\\restore.cmd</h3><p>漫长的等待，抽烟，看美女小姐姐，看黑丝（蓝光），做什么都可以，就是等待。。。。。。。。。。。。玩命加载中。。。。。。。</p><p>最后出现，说明成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> [1/4] Resolving packages...
  [2/4] Fetching packages...
  [3/4] Linking dependencies...
  [4/4] Building fresh packages...
  Done in 3.57s.
  Running yarn install on E:\\dhgaspnetcore\\src\\SignalR\\clients\\ts\\signalr\\signalr.npmproj
  yarn install v1.22.10
  [1/4] Resolving packages...
  [2/4] Fetching packages...
  [3/4] Linking dependencies...
  [4/4] Building fresh packages...
  Done in 2.67s.
  Running yarn install on E:\\dhgaspnetcore\\src\\JSInterop\\Microsoft.JSInterop.JS\\src\\Microsoft.JSInterop.JS.npmproj
  yarn install v1.22.10
  [1/4] Resolving packages...
  [2/4] Fetching packages...
  [3/4] Linking dependencies...
  [4/4] Building fresh packages...
  Done in 7.15s.

已成功生成。
    0 个警告
    0 个错误

已用时间 00:10:35.12

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-执行build" tabindex="-1"><a class="header-anchor" href="#_5-执行build" aria-hidden="true">#</a> 5.执行build</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>build.cmd <span class="token parameter variable">-all</span> <span class="token parameter variable">-pack</span> <span class="token parameter variable">-arch</span> x64
.<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>build.cmd <span class="token parameter variable">-all</span> <span class="token parameter variable">-pack</span> <span class="token parameter variable">-arch</span> x86 <span class="token parameter variable">-noBuildJava</span>
.<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>build.cmd <span class="token parameter variable">-buildInstallers</span>

-------------------------------------------
慢慢等吧。。。。。。。。。。。
有可能一堆错误解决，也有可能没有错误。。。。。

 .<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>build.cmd <span class="token parameter variable">-noBuildNative</span> <span class="token parameter variable">-noBuildManage</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-用科学打开vs" tabindex="-1"><a class="header-anchor" href="#_6-用科学打开vs" aria-hidden="true">#</a> 6.用科学打开VS</h3><p>请用此方式打开项目。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\startvs.cmd .\\src\\Mvc\\Mvc.sln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考：</h2>`,51),v={href:"https://www.cnblogs.com/guoxiaotian/p/16378181.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/dotnet/aspnetcore/issues/41656",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/dotnet/aspnetcore/blob/main/docs/BuildFromSource.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://zhuanlan.zhihu.com/p/461838889",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/dotnet/aspnetcore/issues/6304",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/dotnet/aspnetcore/blob/main/docs/BuildErrors.md",target:"_blank",rel:"noopener noreferrer"};function q(f,x){const s=t("ExternalLinkIcon");return o(),l("div",null,[u,n("p",null,[n("a",v,[e("如何编译Asp.net Core 6 源码 教你快速踩坑 - 果小天 - 博客园 (cnblogs.com)"),a(s)])]),n("p",null,[n("a",m,[e("restore failed, error NU1103: Unable to find a stable package · Issue #41656 · dotnet/aspnetcore (github.com)"),a(s)])]),n("p",null,[n("a",b,[e("aspnetcore/docs/BuildFromSource.md at main · dotnet/aspnetcore (github.com)"),a(s)])]),n("p",null,[n("a",g,[e("asp.net core从头学03--编译asp.net core源码 - 知乎 (zhihu.com)"),a(s)])]),n("p",null,[n("a",k,[e("Make build.cmd with no args build everything · Issue #6304 · dotnet/aspnetcore --- 使build.cmd没有args构建一切 ·问题 #6304 ·dotnet/aspnetcore (github.com)"),a(s)])]),n("p",null,[n("a",h,[e("aspnetcore/docs/BuildErrors.md at main · dotnet/aspnetcore (github.com)"),a(s)])])])}const S=i(p,[["render",q],["__file","buildfromsource7.0.html.vue"]]);export{S as default};
