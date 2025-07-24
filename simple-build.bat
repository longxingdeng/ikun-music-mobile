@echo off
echo Starting Release APK build...

echo Step 1: Installing dependencies...
npm install
if errorlevel 1 goto error

echo Step 2: Creating assets directory...
if not exist "android\app\src\main\assets" mkdir "android\app\src\main\assets"

echo Step 3: Generating bundle...
npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ --reset-cache
if errorlevel 1 goto error

echo Step 4: Building APK...
cd android
gradlew.bat assembleRelease
if errorlevel 1 goto error_android
cd ..

echo Step 5: Checking results...
if exist "android\app\build\outputs\apk\release\" (
    echo SUCCESS! APK files generated:
    dir "android\app\build\outputs\apk\release\*.apk" /b
) else (
    echo ERROR: No APK files found
    goto error
)

echo.
echo Build completed successfully!
echo APK location: android\app\build\outputs\apk\release\
pause
exit /b 0

:error_android
cd ..
:error
echo.
echo BUILD FAILED!
pause
exit /b 1
