@echo off
echo ========================================
echo   Android环境配置脚本
echo ========================================
echo.

REM 设置Android SDK路径 (请根据实际安装路径修改)
set ANDROID_HOME=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
set ANDROID_SDK_ROOT=%ANDROID_HOME%

REM 添加到PATH
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;%ANDROID_HOME%\cmdline-tools\latest\bin

echo 当前Android环境变量:
echo ANDROID_HOME=%ANDROID_HOME%
echo.

echo 检查Android SDK...
if exist "%ANDROID_HOME%" (
    echo ✅ Android SDK目录存在: %ANDROID_HOME%
) else (
    echo ❌ Android SDK目录不存在: %ANDROID_HOME%
    echo 请安装Android Studio或修改ANDROID_HOME路径
    pause
    exit /b 1
)

echo.
echo 检查必需工具...

REM 检查adb
"%ANDROID_HOME%\platform-tools\adb.exe" version >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ ADB工具正常
) else (
    echo ❌ ADB工具未找到
)

echo.
echo 环境配置完成！
echo 请重新打开命令行窗口以使环境变量生效
echo.
pause
