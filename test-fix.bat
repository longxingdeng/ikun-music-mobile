@echo off
echo ========================================
echo 测试APK空白问题修复效果
echo ========================================

echo.
echo 1. 清理项目...
call npm run clear

echo.
echo 2. 清理React Native缓存...
npx react-native start --reset-cache &
timeout /t 5 >nul
taskkill /f /im node.exe >nul 2>&1

echo.
echo 3. 清理Metro缓存...
npx react-native start --reset-cache --verbose &
timeout /t 3 >nul
taskkill /f /im node.exe >nul 2>&1

echo.
echo 4. 构建Debug APK...
call npm run pack:android:debug

echo.
echo 5. 检查APK是否生成成功...
if exist "android\app\build\outputs\apk\debug\app-debug.apk" (
    echo ✅ Debug APK 构建成功！
    echo 文件位置: android\app\build\outputs\apk\debug\app-debug.apk
) else (
    echo ❌ Debug APK 构建失败！
    goto :error
)

echo.
echo 6. 安装APK到设备...
adb install -r "android\app\build\outputs\apk\debug\app-debug.apk"

echo.
echo 7. 启动应用...
adb shell am start -n com.ikunshare.music.mobile/.MainActivity

echo.
echo 8. 监控应用日志...
echo 请观察设备上的应用是否正常启动，按任意键查看日志...
pause >nul
adb logcat -c
adb logcat | findstr "ReactNativeJS\|ikunshare\|MainActivity"

goto :end

:error
echo.
echo ❌ 测试失败，请检查构建错误！
pause
exit /b 1

:end
echo.
echo ✅ 测试完成！
pause
