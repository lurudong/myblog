## summary

I'm building asp.net core from source, according to [Build ASP.NET Core from Source](https://github.com/dotnet/aspnetcore/blob/main/docs/BuildFromSource.md)

## my current configuration

- `aspnetcore.git` tag  `7.09`

- `global.json`:

  ```
  {
    "sdk": {
      "version": "7.0.302"
    },
    "tools": {
      "vswhere": "3.1.1",  // added
      "dotnet": "7.0.302",
      "runtimes": {
        "dotnet/x86": [
          "$(MicrosoftNETCoreBrowserDebugHostTransportVersion)"
        ],
        "dotnet": [
          "$(MicrosoftNETCoreBrowserDebugHostTransportVersion)"
        ]
      },
      "Git": "2.22.0",
      "jdk": "11.0.3",
      "vs": {
        "version": "17.6.2",
        "components": [
          "Microsoft.VisualStudio.Component.VC.ATL",
          "Microsoft.VisualStudio.Component.VC.ATL.ARM64",
          "Microsoft.VisualStudio.Component.VC.Tools.ARM64",
          "Microsoft.VisualStudio.Component.VC.Tools.x86.x64"
        ]
      },
      "xcopy-msbuild": "17.1.0"
    },
    "msbuild-sdks": {
      "Yarn.MSBuild": "1.22.10",
      "Microsoft.DotNet.Arcade.Sdk": "7.0.0-beta.23313.4",
      "Microsoft.DotNet.Helix.Sdk": "7.0.0-beta.23313.4"
    }
  }
  
  ```

  

- `eng\Versions.props`

  ```
      ...
  <MicrosoftNETCoreBrowserDebugHostTransportVersion>7.0.1</MicrosoftNETCoreBrowserDebugHostTransportVersion>
      ...
  ```

- visual studio version: enterprise 2022 7.0.302

## steps

run `.\restore.cmd`

full output:

```sh
Building of C# project is enabled and has dependencies on NodeJS projects. Building of NodeJS projects is enabled since node is detected in C:\Program Files.
Detected JDK in c:\Program Files\Java\jdk1.8.0_321 (via JAVA_HOME)

  正在确定要还原的项目…
  宸ュ叿鈥渄otnet-dump鈥?鐗堟湰鈥?.0.322601鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: dotnet-dump
  宸ュ叿鈥渄otnet-ef鈥?鐗堟湰鈥?.0.9鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: dotnet-ef
  宸ュ叿鈥渄otnet-serve鈥?鐗堟湰鈥?.10.93鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: dotnet-serve
  宸ュ叿鈥渕icrosoft.playwright.cli鈥?鐗堟湰鈥?.2.3鈥?宸茶繕鍘熴€傚彲鐢ㄧ殑鍛戒护: playwright

  杩樺師鎴愬姛銆?
  所有项目均是最新的，无法还原。
  正在确定要还原的项目…
  所有项目均是最新的，无法还原。
  GenerateFiles -> E:\dhgaspnetcore\artifacts\bin\GenerateFiles\Directory.Build.props
  GenerateFiles -> E:\dhgaspnetcore\artifacts\bin\GenerateFiles\Directory.Build.targets
  GenerateFiles -> E:\dhgaspnetcore\.config\dotnet-tools.json
Attempting to install dotnet from public location.
dotnet-install: .NET Core Runtime with version '7.0.9' is already installed.
dotnet-install: Adding to current process PATH: "E:\dhgaspnetcore\.dotnet\x86\". Note: This change will not be visible if PowerShell was run as a child process.
Attempting to install dotnet from public location.
dotnet-install: .NET Core Runtime with version '7.0.9' is already installed.
dotnet-install: Adding to current process PATH: "E:\dhgaspnetcore\.dotnet\". Note: This change will not be visible if PowerShell was run as a child process.
  正在确定要还原的项目…
  已还原 E:\dhgaspnetcore\eng\tools\RepoTasks\RepoTasks.csproj (用时 567 ms)。
  
CSC : error CS9057: 分析器程序集
“E:\dhgaspnetcore\.dotnet\sdk\7.0.306\Sdks\Microsoft.NET.Sdk\codestyle\cs\Microsoft.CodeAnalysis.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 [E:\dhgaspnetcore\eng\tools\RepoTasks\RepoTasks.csproj::TargetFramework=net7.0]

CSC : error CS9057: 分析器程序集
“E:\dhgaspnetcore\.dotnet\sdk\7.0.306\Sdks\Microsoft.NET.Sdk\codestyle\cs\Microsoft.CodeAnalysis.CSharp.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 
[E:\dhgaspnetcore\eng\tools\RepoTasks\RepoTasks.csproj::TargetFramework=net7.0]

CSC : error CS9057: 分析器程序集“E:\dhgaspnetcore\.dotnet\sdk\7.0.306\Sdks\Microsoft.NET.Sdk\codestyle\cs\Microsoft.CodeAnalysis.CodeStyle.dll”引用了编译器 的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 
[E:\dhgaspnetcore\eng\tools\RepoTasks\RepoTasks.csproj::TargetFramework=net472]

CSC : error CS9057: 分析器程序集
“E:\dhgaspnetcore\.dotnet\sdk\7.0.306\Sdks\Microsoft.NET.Sdk\codestyle\cs\Microsoft.CodeAnalysis.CSharp.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 [E:\dhgaspnetcore\eng\tools\RepoTasks\RepoTasks.csproj::TargetFramework=net472]

Build failed with exit code 1. Check errors above.
```

error: `CSC: error CS9057: profiler assembly`

`“E:\dhgaspnetcore\.dotnet\sdk\7.0.306\Sdks\Microsoft.NET.Sdk\codestyle\cs\Microsoft.CodeAnalysis.CodeStyle.dll”引用了编译器的版本“4.6.0.0”，该版本高于当前正在运行的版本“4.4.0.0”。 [E:\dhgaspnetcore\eng\tools\RepoTasks\RepoTasks.csproj::TargetFramework=net7.0]`

`"E:\ dhgaspnetcore\ .dotnet\ sdk\ 7.0.306\ Sdks\ Microsoft.NET.Sdk\ codestyle\ cs\ Microsoft.CodeAnalysis.CodeStyle.dll" refers to the compiler's version "4.6.0.0", which is higher than the currently running version "4.4.0.0". [e:\ dhgaspnetcore\ eng\ tools\ RepoTasks\ RepoTasks.csproj::TargetFramework=net7.0]`