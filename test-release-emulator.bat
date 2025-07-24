@echo off
echo ========================================
echo 📱 Android模拟器Release测试脚本
echo ========================================

echo.
echo 🔍 检查ADB连接...
adb devices
if %errorlevel% neq 0 (
    echo ❌ ADB未找到，请确保Android SDK已安装
    pause
    exit /b 1
)

echo.
echo 📋 可用设备:
adb devices -l

echo.
echo 🏗️ 构建Release APK...
call build-release-local.bat
if %errorlevel% neq 0 (
    echo ❌ APK构建失败
    pause
    exit /b 1
)

echo.
echo 📱 查找Universal APK...
set "APK_FILE="
for %%f in ("android\app\build\outputs\apk\release\*universal*.apk") do (
    set "APK_FILE=%%f"
    goto :found
)

:found
if "%APK_FILE%"=="" (
    echo ❌ 未找到Universal APK文件
    echo 📂 可用的APK文件:
    dir "android\app\build\outputs\apk\release\*.apk" /b
    echo.
    echo 请手动选择APK文件进行安装
    pause
    exit /b 1
)

echo ✅ 找到APK: %APK_FILE%

echo.
echo 🗑️ 卸载旧版本...
adb uninstall com.ikunshare.music.mobile
echo (忽略卸载错误，如果应用未安装)

echo.
echo 📲 安装新APK...
adb install "%APK_FILE%"
if %errorlevel% neq 0 (
    echo ❌ APK安装失败
    echo.
    echo 💡 可能的解决方案:
    echo 1. 确保模拟器正在运行
    echo 2. 检查USB调试是否开启
    echo 3. 尝试手动安装: adb install "%APK_FILE%"
    pause
    exit /b 1
)

echo.
echo 🚀 启动应用...
adb shell am start -n com.ikunshare.music.mobile/.MainActivity
if %errorlevel% neq 0 (
    echo ⚠️ 自动启动失败，请手动启动应用
)

echo.
echo 📊 查看应用日志 (按Ctrl+C停止):
echo.
adb logcat | findstr "ReactNative\|ikun\|ikunshare"

echo.
echo ========================================
echo ✅ 测试完成！
echo ========================================
pause
