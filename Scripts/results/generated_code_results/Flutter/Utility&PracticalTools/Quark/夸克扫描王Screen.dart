import 'package:flutter/material.dart';



class ScannerScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('夸克扫描王'),

        actions: [

          IconButton(icon: Icon(Icons.refresh), onPressed: () {}),

          IconButton(

            icon: Icon(Icons.close),

            onPressed: () => Navigator.pushNamed(context, 'Home'),

          ),

        ],

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Row(

                children: [

                  CircleAvatar(child: Icon(Icons.person)),

                  SizedBox(width: 16),

                  Text('登录查看扫描件'),

                  Spacer(),

                  ElevatedButton(

                    onPressed: () {},

                    child: Text('立即登录'),

                  ),

                ],

              ),

            ),

            GridView.count(

              shrinkWrap: true,

              crossAxisCount: 4,

              children: [

                _buildFeatureItem('万能扫描', Icons.document_scanner),

                _buildFeatureItem('提取文字', Icons.text_fields),

                _buildFeatureItem('转Word', Icons.description),

                _buildFeatureItem('拍照翻译', Icons.translate),

                _buildFeatureItem('提取表格', Icons.table_chart),

                _buildFeatureItem('拍证件照', Icons.camera_alt),

                _buildFeatureItem('扫描证件', Icons.badge),

                _buildFeatureItem('寸照换底色', Icons.color_lens),

                _buildFeatureItem('会议记录', Icons.meeting_room),

                _buildFeatureItem('取词翻译', Icons.translate),

                _buildFeatureItem('去手写', Icons.edit),

                _buildFeatureItem('文档变高清', Icons.hd),

                _buildFeatureItem('图片转PDF', Icons.picture_as_pdf),

                _buildFeatureItem('图片转Excel', Icons.table_chart),

                _buildFeatureItem('图片转TXT', Icons.text_fields),

                _buildFeatureItem('记录屏幕', Icons.screen_record),

                _buildFeatureItem('万物识别', Icons.search),

                _buildFeatureItem('图像矫正', Icons.image),

                _buildFeatureItem('更多', Icons.more_horiz),

              ],

            ),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Text('选择导入方式，快速发起扫描'),

            ),

            Row(

              mainAxisAlignment: MainAxisAlignment.spaceEvenly,

              children: [

                OutlinedButton.icon(

                  onPressed: () {},

                  icon: Icon(Icons.insert_drive_file),

                  label: Text('文档导入'),

                ),

                OutlinedButton.icon(

                  onPressed: () {},

                  icon: Icon(Icons.photo_library),

                  label: Text('相册导入'),

                ),

                OutlinedButton.icon(

                  onPressed: () {},

                  icon: Icon(Icons.wechat),

                  label: Text('微信导入'),

                ),

              ],

            ),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Text('最近使用'),

            ),

            ListTile(

              leading: Stack(

                children: [

                  Image.asset('assets/images/template.png', width: 48, height: 48),

                  Positioned(

                    right: 0,

                    bottom: 0,

                    child: Container(

                      padding: EdgeInsets.all(2),

                      decoration: BoxDecoration(

                        color: Colors.blue,

                        shape: BoxShape.circle,

                      ),

                      child: Text('8', style: TextStyle(color: Colors.white, fontSize: 12)),

                    ),

                  ),

                ],

              ),

              title: Text('夸克扫描王操作手册'),

              subtitle: Text('2024-07-16 11:30 · 8MB'),

              trailing: Icon(Icons.chevron_right),

            ),

          ],

        ),

      ),

      floatingActionButton: FloatingActionButton(

        onPressed: () {},

        child: Icon(Icons.camera_alt),

      ),

      bottomNavigationBar: BottomNavigationBar(

        currentIndex: 2,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),

          BottomNavigationBarItem(icon: Icon(Icons.folder), label: '文件管理'),

          BottomNavigationBarItem(icon: Icon(Icons.camera_alt), label: '扫描'),

          BottomNavigationBarItem(icon: Icon(Icons.grid_view), label: '全部工具'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: '扫描会员'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          }

        },

      ),

    );

  }



  Widget _buildFeatureItem(String label, IconData icon) {

    return Column(

      mainAxisAlignment: MainAxisAlignment.center,

      children: [

        Icon(icon, size: 32),

        SizedBox(height: 4),

        Text(label, textAlign: TextAlign.center, style: TextStyle(fontSize: 12)),

      ],

    );

  }

}