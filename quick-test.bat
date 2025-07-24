@echo off
echo 🚀 快速Release测试

echo 📦 安装依赖...
call npm install --silent

echo 🔧 生成Bundle...
if not exist "android\app\src\main\assets" mkdir "android\app\src\main\assets"
call npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ --reset-cache

echo 🏗️ 构建APK...
cd android
call gradlew.bat assembleRelease -q
cd ..

echo ✅ 完成！APK位置:
for %%f in ("android\app\build\outputs\apk\release\*.apk") do echo %%f

echo.
echo 💡 使用方法:
echo 1. 复制APK到手机安装
echo 2. 或使用: adb install "APK路径"
pause
