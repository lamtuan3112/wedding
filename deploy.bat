@echo off
echo ===================================================
echo   AUTOMATIC GIT PUSH TO GITHUB (lamtuan3112/wedding)
echo ===================================================
cd /d "%~dp0"

echo [1/3] Adding modified files...
"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\Git\cmd\git.exe" add .

echo [2/3] Committing changes...
set /p commit_msg="Nhap ghi chu thay doi (Enter de dung mac dinh): "
if "%commit_msg%"=="" set commit_msg="Cap nhat thiep cuoi online"
"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\Git\cmd\git.exe" commit -m "%commit_msg%"

echo [3/3] Pushing to branch main on GitHub...
"C:\Program Files\Microsoft Visual Studio\2022\Community\Common7\IDE\CommonExtensions\Microsoft\TeamFoundation\Team Explorer\Git\cmd\git.exe" push -u origin main

echo.
echo === HOAN THANH DANG TAI LEN GITHUB! ===
pause
