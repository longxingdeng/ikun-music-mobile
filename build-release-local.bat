@echo off
chcp 65001 >nul
echo ========================================
echo 🚀 本地Release APK构建脚本
echo ========================================

echo.
echo 📋 检查环境...
where node >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js 未安装或未添加到PATH
    pause
    exit /b 1
)

where java >nul 2>&1
if errorlevel 1 (
    echo ❌ Java 未安装或未添加到PATH
    pause
    exit /b 1
)

echo ✅ 环境检查通过

echo.
echo 📦 安装依赖...
call npm install
if errorlevel 1 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo.
echo 🧹 清理旧文件...
if exist "android\app\src\main\assets\index.android.bundle" (
    del "android\app\src\main\assets\index.android.bundle"
    echo ✅ 清理旧bundle文件
)

echo.
echo 📁 创建assets目录...
if not exist "android\app\src\main\assets" (
    mkdir "android\app\src\main\assets"
)

echo.
echo 🔧 生成Release Bundle...
call npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ --reset-cache

if errorlevel 1 (
    echo ❌ Bundle生成失败
    pause
    exit /b 1
)

echo ✅ Bundle生成成功
if exist "android\app\src\main\assets\index.android.bundle" (
    echo 📏 Bundle文件已生成
)

echo.
echo 🏗️ 构建Release APK...
cd android
call gradlew.bat clean
call gradlew.bat assembleRelease

if errorlevel 1 (
    echo ❌ APK构建失败
    cd ..
    pause
    exit /b 1
)

cd ..

echo.
echo 📱 检查生成的APK文件...
if exist "android\app\build\outputs\apk\release\" (
    echo ✅ APK构建成功！
    echo.
    echo 📂 APK文件位置:
    dir "android\app\build\outputs\apk\release\*.apk" /b
    echo.
    echo 🎯 推荐使用universal版本
) else (
    echo ❌ 未找到APK文件
)

echo.
echo ========================================
echo ✅ 构建完成！
echo ========================================
pause
