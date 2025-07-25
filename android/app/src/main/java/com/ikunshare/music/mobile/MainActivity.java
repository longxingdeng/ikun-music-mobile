package com.ikunshare.music.mobile;

import android.os.Bundle;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {

  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // 确保Activity正确初始化
    try {
      // 这里可以添加额外的初始化逻辑
      android.util.Log.d("MainActivity", "MainActivity created successfully");
    } catch (Exception e) {
      android.util.Log.e("MainActivity", "Error in MainActivity onCreate", e);
    }
  }
}
