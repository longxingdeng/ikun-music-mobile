@echo off
echo ========================================
echo   ikun-music-mobile APK 构建脚本
echo ========================================
echo.

echo 检查环境...
echo.

REM 检查Java
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Java未安装或未配置PATH
    echo 请安装JDK 17并设置JAVA_HOME环境变量
    echo 下载地址: https://adoptium.net/
    pause
    exit /b 1
) else (
    echo ✅ Java环境正常
)

REM 检查Android SDK
if "%ANDROID_HOME%"=="" (
    echo ❌ ANDROID_HOME环境变量未设置
    echo 请安装Android Studio并设置ANDROID_HOME
    pause
    exit /b 1
) else (
    echo ✅ Android SDK环境正常
)

REM 检查Node.js
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js未安装
    echo 请安装Node.js 18或更高版本
    pause
    exit /b 1
) else (
    echo ✅ Node.js环境正常
)

echo.
echo 开始构建APK...
echo.

echo 1. 安装依赖...
call npm install
if %errorlevel% neq 0 (
    echo ❌ 依赖安装失败
    pause
    exit /b 1
)

echo.
echo 2. 清理构建缓存...
cd android
call gradlew.bat clean
if %errorlevel% neq 0 (
    echo ❌ 清理失败
    pause
    exit /b 1
)

echo.
echo 3. 构建Debug APK...
call gradlew.bat assembleDebug
if %errorlevel% neq 0 (
    echo ❌ Debug APK构建失败
    pause
    exit /b 1
)

echo.
echo 4. 构建Release APK...
call gradlew.bat assembleRelease
if %errorlevel% neq 0 (
    echo ⚠️  Release APK构建失败 (可能需要签名配置)
    echo Debug APK构建成功，可以用于测试
) else (
    echo ✅ Release APK构建成功
)

echo.
echo ========================================
echo           构建完成！
echo ========================================
echo.
echo APK文件位置:
echo Debug版本: android\app\build\outputs\apk\debug\
echo Release版本: android\app\build\outputs\apk\release\
echo.
echo 推荐测试文件: app-universal-debug.apk
echo.
echo 安装方法:
echo 1. 通过ADB: adb install app-universal-debug.apk
echo 2. 复制到手机直接安装
echo.
pause
