import{_ as e,r as t,o,c as i,a as n,b as s,d as c,e as l}from"./app-2ff14493.js";const p={},u=n("h2",{id:"summary",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#summary","aria-hidden":"true"},"#"),s(" summary")],-1),r={href:"https://github.com/dotnet/aspnetcore/blob/main/docs/BuildFromSource.md",target:"_blank",rel:"noopener noreferrer"},d=l(`<h2 id="my-current-configuration" tabindex="-1"><a class="header-anchor" href="#my-current-configuration" aria-hidden="true">#</a> my current configuration</h2><ul><li><p><code>aspnetcore.git</code> tag <code>7.09</code></p></li><li><p><code>global.json</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;sdk&quot;: {
    &quot;version&quot;: &quot;7.0.302&quot;
  },
  &quot;tools&quot;: {
    &quot;vswhere&quot;: &quot;3.1.1&quot;,  // added
    &quot;dotnet&quot;: &quot;7.0.302&quot;,
    &quot;runtimes&quot;: {
      &quot;dotnet/x86&quot;: [
        &quot;$(MicrosoftNETCoreBrowserDebugHostTransportVersion)&quot;
      ],
      &quot;dotnet&quot;: [
        &quot;$(MicrosoftNETCoreBrowserDebugHostTransportVersion)&quot;
      ]
    },
    &quot;Git&quot;: &quot;2.22.0&quot;,
    &quot;jdk&quot;: &quot;11.0.3&quot;,
    &quot;vs&quot;: {
      &quot;version&quot;: &quot;17.6.2&quot;,
      &quot;components&quot;: [
        &quot;Microsoft.VisualStudio.Component.VC.ATL&quot;,
        &quot;Microsoft.VisualStudio.Component.VC.ATL.ARM64&quot;,
        &quot;Microsoft.VisualStudio.Component.VC.Tools.ARM64&quot;,
        &quot;Microsoft.VisualStudio.Component.VC.Tools.x86.x64&quot;
      ]
    },
    &quot;xcopy-msbuild&quot;: &quot;17.1.0&quot;
  },
  &quot;msbuild-sdks&quot;: {
    &quot;Yarn.MSBuild&quot;: &quot;1.22.10&quot;,
    &quot;Microsoft.DotNet.Arcade.Sdk&quot;: &quot;7.0.0-beta.23313.4&quot;,
    &quot;Microsoft.DotNet.Helix.Sdk&quot;: &quot;7.0.0-beta.23313.4&quot;
  }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>eng\\Versions.props</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>    ...
&lt;MicrosoftNETCoreBrowserDebugHostTransportVersion&gt;7.0.1&lt;/MicrosoftNETCoreBrowserDebugHostTransportVersion&gt;
    ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>visual studio version: enterprise 2022 7.0.302</p></li></ul><h2 id="steps" tabindex="-1"><a class="header-anchor" href="#steps" aria-hidden="true">#</a> steps</h2><p>run <code>.\\restore.cmd</code></p><p>full output:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Building of C<span class="token comment"># project is enabled and has dependencies on NodeJS projects. Building of NodeJS projects is enabled since node is detected in C:\\Program Files.</span>
Detected JDK <span class="token keyword">in</span> c:<span class="token punctuation">\\</span>Program Files<span class="token punctuation">\\</span>Java<span class="token punctuation">\\</span>jdk1.8.0_321 <span class="token punctuation">(</span>via JAVA_HOME<span class="token punctuation">)</span>

  正在确定要还原的项目…
  宸ュ叿鈥渄otnet-dump鈥?鐗堟湰鈥?.0.322601鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: dotnet-dump
  宸ュ叿鈥渄otnet-ef鈥?鐗堟湰鈥?.0.9鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: dotnet-ef
  宸ュ叿鈥渄otnet-serve鈥?鐗堟湰鈥?.10.93鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: dotnet-serve
  宸ュ叿鈥渕icrosoft.playwright.cli鈥?鐗堟湰鈥?.2.3鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: playwright

  杩樺師鎴愬姛銆?
  所有项目均是最新的，无法还原。
  正在确定要还原的项目…
  所有项目均是最新的，无法还原。
  GenerateFiles -<span class="token operator">&gt;</span> E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>artifacts<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>GenerateFiles<span class="token punctuation">\\</span>Directory.Build.props
  GenerateFiles -<span class="token operator">&gt;</span> E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>artifacts<span class="token punctuation">\\</span>bin<span class="token punctuation">\\</span>GenerateFiles<span class="token punctuation">\\</span>Directory.Build.targets
  GenerateFiles -<span class="token operator">&gt;</span> E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>.config<span class="token punctuation">\\</span>dotnet-tools.json
Attempting to <span class="token function">install</span> dotnet from public location.
dotnet-install: .NET Core Runtime with version <span class="token string">&#39;7.0.9&#39;</span> is already installed.
dotnet-install: Adding to current process <span class="token environment constant">PATH</span><span class="token builtin class-name">:</span> <span class="token string">&quot;E:\\dhgaspnetcore\\.dotnet<span class="token entity" title="\\x86">\\x86</span><span class="token entity" title="\\&quot;">\\&quot;</span>. Note: This change will not be visible if PowerShell was run as a child process.
Attempting to install dotnet from public location.
dotnet-install: .NET Core Runtime with version &#39;7.0.9&#39; is already installed.
dotnet-install: Adding to current process PATH: &quot;</span>E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>.dotnet<span class="token punctuation">\\</span>&quot;. Note: This change will not be visible <span class="token keyword">if</span> PowerShell was run as a child process.
  正在确定要还原的项目…
  已还原 E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>tools<span class="token punctuation">\\</span>RepoTasks<span class="token punctuation">\\</span>RepoTasks.csproj <span class="token punctuation">(</span>用时 <span class="token number">567</span> ms<span class="token punctuation">)</span>。
  
CSC <span class="token builtin class-name">:</span> error CS9057: 分析器程序集
“E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>.dotnet<span class="token punctuation">\\</span>sdk<span class="token punctuation">\\</span><span class="token number">7.0</span>.306<span class="token punctuation">\\</span>Sdks<span class="token punctuation">\\</span>Microsoft.NET.Sdk<span class="token punctuation">\\</span>codestyle<span class="token punctuation">\\</span>cs<span class="token punctuation">\\</span>Microsoft.CodeAnalysis.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 <span class="token punctuation">[</span>E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>tools<span class="token punctuation">\\</span>RepoTasks<span class="token punctuation">\\</span>RepoTasks.csproj::TargetFramework<span class="token operator">=</span>net7.0<span class="token punctuation">]</span>

CSC <span class="token builtin class-name">:</span> error CS9057: 分析器程序集
“E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>.dotnet<span class="token punctuation">\\</span>sdk<span class="token punctuation">\\</span><span class="token number">7.0</span>.306<span class="token punctuation">\\</span>Sdks<span class="token punctuation">\\</span>Microsoft.NET.Sdk<span class="token punctuation">\\</span>codestyle<span class="token punctuation">\\</span>cs<span class="token punctuation">\\</span>Microsoft.CodeAnalysis.CSharp.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 
<span class="token punctuation">[</span>E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>tools<span class="token punctuation">\\</span>RepoTasks<span class="token punctuation">\\</span>RepoTasks.csproj::TargetFramework<span class="token operator">=</span>net7.0<span class="token punctuation">]</span>

CSC <span class="token builtin class-name">:</span> error CS9057: 分析器程序集“E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>.dotnet<span class="token punctuation">\\</span>sdk<span class="token punctuation">\\</span><span class="token number">7.0</span>.306<span class="token punctuation">\\</span>Sdks<span class="token punctuation">\\</span>Microsoft.NET.Sdk<span class="token punctuation">\\</span>codestyle<span class="token punctuation">\\</span>cs<span class="token punctuation">\\</span>Microsoft.CodeAnalysis.CodeStyle.dll”引用了编译器 的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 
<span class="token punctuation">[</span>E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>tools<span class="token punctuation">\\</span>RepoTasks<span class="token punctuation">\\</span>RepoTasks.csproj::TargetFramework<span class="token operator">=</span>net472<span class="token punctuation">]</span>

CSC <span class="token builtin class-name">:</span> error CS9057: 分析器程序集
“E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>.dotnet<span class="token punctuation">\\</span>sdk<span class="token punctuation">\\</span><span class="token number">7.0</span>.306<span class="token punctuation">\\</span>Sdks<span class="token punctuation">\\</span>Microsoft.NET.Sdk<span class="token punctuation">\\</span>codestyle<span class="token punctuation">\\</span>cs<span class="token punctuation">\\</span>Microsoft.CodeAnalysis.CSharp.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 <span class="token punctuation">[</span>E:<span class="token punctuation">\\</span>dhgaspnetcore<span class="token punctuation">\\</span>eng<span class="token punctuation">\\</span>tools<span class="token punctuation">\\</span>RepoTasks<span class="token punctuation">\\</span>RepoTasks.csproj::TargetFramework<span class="token operator">=</span>net472<span class="token punctuation">]</span>

Build failed with <span class="token builtin class-name">exit</span> code <span class="token number">1</span>. Check errors above.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>error: <code>CSC: error CS9057: profiler assembly</code></p><p><code>“E:\\dhgaspnetcore\\.dotnet\\sdk\\7.0.306\\Sdks\\Microsoft.NET.Sdk\\codestyle\\cs\\Microsoft.CodeAnalysis.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 [E:\\dhgaspnetcore\\eng\\tools\\RepoTasks\\RepoTasks.csproj::TargetFramework=net7.0]</code></p><p><code>&quot;E:\\ dhgaspnetcore\\ .dotnet\\ sdk\\ 7.0.306\\ Sdks\\ Microsoft.NET.Sdk\\ codestyle\\ cs\\ Microsoft.CodeAnalysis.CodeStyle.dll&quot; refers to the compiler&#39;s version &quot;4.6.0.0&quot;, which is higher than the currently running version &quot;4.4.0.0&quot;. [e:\\ dhgaspnetcore\\ eng\\ tools\\ RepoTasks\\ RepoTasks.csproj::TargetFramework=net7.0]</code></p>`,9);function v(k,m){const a=t("ExternalLinkIcon");return o(),i("div",null,[u,n("p",null,[s("I'm building asp.net core from source, according to "),n("a",r,[s("Build ASP.NET Core from Source"),c(a)])]),d])}const g=e(p,[["render",v],["__file","githug提交bug.html.vue"]]);export{g as default};
