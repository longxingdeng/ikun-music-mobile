# 📱 ikun-music-mobile APK构建指南

## ⚠️ 当前环境状态

根据检测，您的系统缺少以下必需组件：
- ❌ JDK (Java Development Kit)
- ❌ Android Studio
- ❌ Android SDK
- ❌ ANDROID_HOME 环境变量

## 🚀 快速解决方案

### 方案1: 在线构建服务 (推荐)
如果您只是想快速测试APK，建议使用在线构建服务：

1. **GitHub Actions** (免费)
   - Fork项目到您的GitHub
   - 启用GitHub Actions
   - 自动构建APK并下载

2. **EAS Build** (Expo)
   - 注册Expo账号
   - 使用EAS CLI构建

### 方案2: 完整环境安装

## 🔧 环境要求

### 必需软件
1. **Node.js** (>= 18) ✅ 已安装
2. **Java Development Kit (JDK)** (推荐 JDK 17) ❌ 未安装
3. **Android Studio** ❌ 未安装
4. **Android SDK** ❌ 未安装

### 环境变量设置
```bash
# Windows PowerShell
$env:JAVA_HOME = "C:\Program Files\Java\jdk-17"
$env:ANDROID_HOME = "C:\Users\YourName\AppData\Local\Android\Sdk"
$env:PATH += ";$env:JAVA_HOME\bin;$env:ANDROID_HOME\platform-tools;$env:ANDROID_HOME\tools"

# Windows CMD
set JAVA_HOME=C:\Program Files\Java\jdk-17
set ANDROID_HOME=C:\Users\YourName\AppData\Local\Android\Sdk
set PATH=%PATH%;%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\tools
```

## 🚀 快速构建步骤

### 1. 安装依赖
```bash
cd D:\ikun-music-mobile
npm install
```

### 2. 清理构建缓存
```bash
cd android
.\gradlew.bat clean
```

### 3. 构建Debug APK
```bash
.\gradlew.bat assembleDebug
```

### 4. 构建Release APK (需要签名)
```bash
.\gradlew.bat assembleRelease
```

## 📦 APK输出位置

构建完成后，APK文件将位于：

### Debug APK
```
android/app/build/outputs/apk/debug/
├── app-arm64-v8a-debug.apk
├── app-armeabi-v7a-debug.apk
├── app-universal-debug.apk
├── app-x86-debug.apk
└── app-x86_64-debug.apk
```

### Release APK
```
android/app/build/outputs/apk/release/
├── app-arm64-v8a-release.apk
├── app-armeabi-v7a-release.apk
├── app-universal-release.apk
├── app-x86-release.apk
└── app-x86_64-release.apk
```

**推荐使用**: `app-universal-debug.apk` (兼容所有架构)

## 🔑 签名配置 (Release版本)

### 1. 生成签名密钥
```bash
keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

### 2. 配置签名信息
在 `android/gradle.properties` 中添加：
```properties
MYAPP_UPLOAD_STORE_FILE=my-release-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=****
MYAPP_UPLOAD_KEY_PASSWORD=****
```

## 🛠️ 故障排除

### 常见问题

#### 1. JAVA_HOME未设置
**错误**: `ERROR: JAVA_HOME is not set`
**解决**: 安装JDK并设置JAVA_HOME环境变量

#### 2. Android SDK未找到
**错误**: `SDK location not found`
**解决**: 安装Android Studio或设置ANDROID_HOME

#### 3. 构建内存不足
**错误**: `OutOfMemoryError`
**解决**: 在 `android/gradle.properties` 中增加内存：
```properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=2048m
```

#### 4. 网络问题
**错误**: 依赖下载失败
**解决**: 配置代理或使用国内镜像

### 环境检查命令
```bash
# 检查Java
java -version
javac -version

# 检查Android SDK
adb version

# 检查Gradle
.\gradlew.bat --version
```

## 📋 完整构建脚本

创建 `build-apk.bat` 文件：
```batch
@echo off
echo 开始构建 ikun-music-mobile APK...

echo 1. 安装依赖...
call npm install

echo 2. 清理构建缓存...
cd android
call gradlew.bat clean

echo 3. 构建Debug APK...
call gradlew.bat assembleDebug

echo 4. 构建完成！
echo APK位置: android\app\build\outputs\apk\debug\
pause
```

## 🎯 测试建议

### 安装测试
```bash
# 通过ADB安装
adb install android/app/build/outputs/apk/debug/app-universal-debug.apk

# 或直接复制到手机安装
```

### 功能测试重点
1. **横屏播放界面** - 验证我们修改的布局
2. **歌词下载功能** - 测试自动下载歌词
3. **本地音乐扫描** - 测试音乐库功能
4. **在线歌词搜索** - 测试本地音乐匹配在线歌词

## 🎉 构建成功后

APK构建成功后，您可以：
1. 通过USB连接手机，使用ADB安装
2. 将APK文件复制到手机，直接安装
3. 测试我们添加的新功能：
   - 横屏播放界面布局
   - 歌词自动下载
   - 歌词时间轴调节
   - 本地音乐在线歌词搜索

**注意**: Debug版本APK较大且未优化，仅用于测试。生产环境请使用Release版本。
