@echo off
chcp 65001 >nul
echo ========================================
echo   ikun-music-mobile Debug APK构建
echo ========================================
echo.

REM 自动检测Android SDK路径
set ANDROID_HOME_CANDIDATES[0]=C:\Users\%USERNAME%\AppData\Local\Android\Sdk
set ANDROID_HOME_CANDIDATES[1]=C:\Android\Sdk
set ANDROID_HOME_CANDIDATES[2]=D:\Android\Sdk
set ANDROID_HOME_CANDIDATES[3]=C:\Program Files\Android\Android Studio\sdk

echo 正在检测Android SDK...
for /L %%i in (0,1,3) do (
    call set "candidate=%%ANDROID_HOME_CANDIDATES[%%i]%%"
    if exist "!candidate!" (
        set ANDROID_HOME=!candidate!
        echo ✅ 找到Android SDK: !candidate!
        goto :sdk_found
    )
)

echo ❌ 未找到Android SDK，请先安装Android Studio
echo 或手动设置ANDROID_HOME环境变量
echo.
echo 安装指南:
echo 1. 下载Android Studio: https://developer.android.com/studio
echo 2. 安装后运行 setup-android-env.bat 配置环境
echo.
pause
exit /b 1

:sdk_found
REM 设置环境变量
set ANDROID_SDK_ROOT=%ANDROID_HOME%
set PATH=%PATH%;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools;%ANDROID_HOME%\cmdline-tools\latest\bin

echo.
echo 开始构建Debug APK...
echo.

echo 1. 检查依赖...
if not exist "node_modules" (
    echo 安装npm依赖...
    call npm install
    if errorlevel 1 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
)

echo.
echo 2. 创建local.properties...
echo sdk.dir=%ANDROID_HOME:\=/% > android\local.properties
echo ✅ 已创建 android\local.properties

echo.
echo 3. 清理构建缓存...
cd android
call gradlew.bat clean
if errorlevel 1 (
    echo ❌ 清理失败
    cd ..
    pause
    exit /b 1
)

echo.
echo 4. 构建Debug APK...
call gradlew.bat assembleDebug
if errorlevel 1 (
    echo ❌ APK构建失败
    cd ..
    pause
    exit /b 1
)

cd ..

echo.
echo ========================================
echo           构建成功！
echo ========================================
echo.
echo APK文件位置:
dir "android\app\build\outputs\apk\debug\*.apk" /b 2>nul
echo.
echo 完整路径: %CD%\android\app\build\outputs\apk\debug\
echo.
echo 推荐测试文件: app-universal-debug.apk
echo.
echo 安装方法:
echo 1. 连接手机，启用USB调试
echo 2. 运行: adb install android\app\build\outputs\apk\debug\app-universal-debug.apk
echo 3. 或直接将APK复制到手机安装
echo.
pause
