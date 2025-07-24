# ikun-music-mobile APK构建脚本 (PowerShell版本)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   ikun-music-mobile APK构建脚本" -ForegroundColor Cyan  
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 检测Android SDK路径
$androidSdkPaths = @(
    "$env:USERPROFILE\AppData\Local\Android\Sdk",
    "C:\Android\Sdk",
    "D:\Android\Sdk",
    "C:\Program Files\Android\Android Studio\sdk"
)

$androidHome = $null
foreach ($path in $androidSdkPaths) {
    if (Test-Path $path) {
        $androidHome = $path
        Write-Host "✅ 找到Android SDK: $path" -ForegroundColor Green
        break
    }
}

if (-not $androidHome) {
    Write-Host "❌ 未找到Android SDK" -ForegroundColor Red
    Write-Host ""
    Write-Host "请先安装Android Studio:" -ForegroundColor Yellow
    Write-Host "1. 下载地址: https://developer.android.com/studio" -ForegroundColor Yellow
    Write-Host "2. 安装时选择标准安装" -ForegroundColor Yellow
    Write-Host "3. 安装完成后重新运行此脚本" -ForegroundColor Yellow
    Write-Host ""
    Read-Host "按Enter键退出"
    exit 1
}

# 设置环境变量
$env:ANDROID_HOME = $androidHome
$env:ANDROID_SDK_ROOT = $androidHome

Write-Host ""
Write-Host "开始构建Debug APK..." -ForegroundColor Yellow
Write-Host ""

# 1. 创建local.properties
Write-Host "1. 创建local.properties..." -ForegroundColor Cyan
$localPropsPath = "android\local.properties"
$sdkPath = $androidHome -replace '\\', '/'
"sdk.dir=$sdkPath" | Out-File -FilePath $localPropsPath -Encoding UTF8
Write-Host "✅ 已创建 $localPropsPath" -ForegroundColor Green

# 2. 检查依赖
Write-Host ""
Write-Host "2. 检查依赖..." -ForegroundColor Cyan
if (-not (Test-Path "node_modules")) {
    Write-Host "安装npm依赖..." -ForegroundColor Yellow
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ 依赖安装失败" -ForegroundColor Red
        Read-Host "按Enter键退出"
        exit 1
    }
} else {
    Write-Host "✅ 依赖已存在" -ForegroundColor Green
}

# 3. 清理构建缓存
Write-Host ""
Write-Host "3. 清理构建缓存..." -ForegroundColor Cyan
Set-Location "android"
& ".\gradlew.bat" clean
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ 清理失败" -ForegroundColor Red
    Set-Location ".."
    Read-Host "按Enter键退出"
    exit 1
}
Write-Host "✅ 清理完成" -ForegroundColor Green

# 4. 构建Debug APK
Write-Host ""
Write-Host "4. 构建Debug APK..." -ForegroundColor Cyan
& ".\gradlew.bat" assembleDebug
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ APK构建失败" -ForegroundColor Red
    Set-Location ".."
    Read-Host "按Enter键退出"
    exit 1
}

Set-Location ".."

Write-Host ""
Write-Host "========================================" -ForegroundColor Green
Write-Host "           构建成功！" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Green
Write-Host ""

# 显示APK文件
$apkPath = "android\app\build\outputs\apk\debug"
if (Test-Path $apkPath) {
    Write-Host "APK文件位置:" -ForegroundColor Cyan
    Get-ChildItem "$apkPath\*.apk" | ForEach-Object { 
        Write-Host "  $($_.Name)" -ForegroundColor White
    }
    Write-Host ""
    Write-Host "完整路径: $((Get-Location).Path)\$apkPath" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "推荐测试文件: app-universal-debug.apk" -ForegroundColor Yellow
} else {
    Write-Host "⚠️  APK目录未找到" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "安装方法:" -ForegroundColor Cyan
Write-Host "1. 连接手机，启用USB调试" -ForegroundColor White
Write-Host "2. 运行: adb install android\app\build\outputs\apk\debug\app-universal-debug.apk" -ForegroundColor White
Write-Host "3. 或直接将APK复制到手机安装" -ForegroundColor White
Write-Host ""

Read-Host "按Enter键退出"
