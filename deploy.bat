@echo off
set "git_bash_path=E:\development\Git\bin\bash.exe" 
set "script_path=%~dp0"
set "script_name=deploy.sh"
set "script_full_path=%script_path%%script_name%"

"%git_bash_path%" -c "bash %script_name%"

pause
