import 'package:flutter/material.dart';
class 夸克网盘Screen extends StatefulWidget {
const 夸克网盘Screen({Key? key}) : super(key: key);
@override
_夸克网盘ScreenState createState() => _夸克网盘ScreenState();
}
class _夸克网盘ScreenState extends State<夸克网盘Screen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('夸克网盘'),
actions: [
IconButton(
icon: const Icon(Icons.computer),
onPressed: () {},
),
IconButton(
icon: const Icon(Icons.close),
onPressed: () => Navigator.pushNamed(context, '首页'),
),
],
),
body: SingleChildScrollView(
child: Column(
children: [
_buildSearchBar(),
_buildLoginSection(),
_buildFileTypeSection(),
_buildFunctionsSection(),
_buildDeviceSection(),
_buildRecentFilesSection(),
],
),
),
bottomNavigationBar: _buildBottomNavigationBar(),
floatingActionButton: FloatingActionButton(
onPressed: () {},
child: const Icon(Icons.add),
),
);
}
Widget _buildSearchBar() {
return Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: '搜索网盘文件',
prefixIcon: const Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
filled: true,
fillColor: Colors.grey[200],
),
),
);
}
Widget _buildLoginSection() {
return Card(
margin: const EdgeInsets.all(8.0),
child: Column(
children: [
ListTile(
leading: const CircleAvatar(
child: Icon(Icons.person),
),
title: const Text('登录夸克网盘'),
subtitle: const Text('登录后领取10G空间'),
trailing: ElevatedButton(
onPressed: () {},
child: const Text('立即登录'),
),
),
Container(
padding: const EdgeInsets.all(8.0),
color: Colors.blue[50],
child: Row(
children: [
const Icon(Icons.card_giftcard, color: Colors.orange),
const SizedBox(width: 8),
const Expanded(
child: Text('0元秒杀免费领SVIP月卡', style: TextStyle(color: Colors.orange)),
),
Image.asset('assets/images/template.png', width: 40, height: 40),
],
),
),
],
),
);
}
Widget _buildFileTypeSection() {
return Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildFileTypeButton(Icons.play_arrow, '视频'),
_buildFileTypeButton(Icons.photo_album, '相册'),
_buildFileTypeButton(Icons.insert_drive_file, '文档'),
_buildFileTypeButton(Icons.headphones, '音频'),
_buildFileTypeButton(Icons.archive, '压缩包'),
],
);
}
Widget _buildFileTypeButton(IconData icon, String label) {
return Column(
children: [
IconButton(
icon: Icon(icon, color: Colors.blue),
onPressed: () {},
),
Text(label),
],
);
}
Widget _buildFunctionsSection() {
return GridView.count(
shrinkWrap: true,
physics: const NeverScrollableScrollPhysics(),
crossAxisCount: 4,
children: [
_buildFunctionButton(Icons.cloud, '云收藏'),
_buildFunctionButton(Icons.lock, '加密空间'),
_buildFunctionButton(Icons.picture_as_pdf, 'PDF转换'),
_buildFunctionButton(Icons.delete, '回收站'),
_buildFunctionButton(Icons.record_voice_over, 'AI听记'),
_buildFunctionButton(Icons.group, '群组'),
],
);
}
Widget _buildFunctionButton(IconData icon, String label) {
return Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, color: Colors.blue),
Text(label, textAlign: TextAlign.center),
],
);
}
Widget _buildDeviceSection() {
return Card(
margin: const EdgeInsets.all(8.0),
child: ListTile(
leading: const Icon(Icons.phone_iphone),
title: const Text('iPhone手机'),
subtitle: const Text('本机备份未开启'),
trailing: ElevatedButton(
onPressed: () {},
child: const Text('立即开启'),
),
),
);
}
Widget _buildRecentFilesSection() {
return Column(
children: [
ListTile(
title: const Text('最近文件'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
IconButton(
icon: const Icon(Icons.visibility),
onPressed: () {},
),
IconButton(
icon: const Icon(Icons.arrow_forward_ios),
onPressed: () {},
),
],
),
),
Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', width: 100, height: 100),
const SizedBox(height: 16),
const Text('暂无内容'),
],
),
),
const SizedBox(height: 20),
const Text('已经到底了', style: TextStyle(color: Colors.grey)),
],
);
}
Widget _buildBottomNavigationBar() {
return BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: const [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.folder), label: '文件'),
BottomNavigationBarItem(icon: Icon(Icons.swap_horiz), label: '传输'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '会员'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, '首页');
}
},
);
}
}