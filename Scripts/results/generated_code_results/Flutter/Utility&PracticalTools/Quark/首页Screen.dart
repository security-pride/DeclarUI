import 'package:flutter/material.dart';
class 首页Screen extends StatefulWidget {
const 首页Screen({Key? key}) : super(key: key);
@override
_首页ScreenState createState() => _首页ScreenState();
}
class _首页ScreenState extends State<首页Screen> {
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Colors.black,
body: SafeArea(
child: Column(
children: [
_buildStatusBar(),
_buildSearchBar(),
_buildQuickAccessGrid(),
const Spacer(),
_buildBottomNavBar(),
],
),
),
);
}
Widget _buildStatusBar() {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
const Text('11:28', style: TextStyle(color: Colors.white, fontSize: 16)),
Row(
children: [
const Icon(Icons.signal_cellular_alt, color: Colors.white),
const SizedBox(width: 4),
const Icon(Icons.wifi, color: Colors.white),
const SizedBox(width: 4),
Container(
padding: const EdgeInsets.symmetric(horizontal: 4, vertical: 2),
decoration: BoxDecoration(
color: Colors.yellow,
borderRadius: BorderRadius.circular(10),
),
child: const Text('65', style: TextStyle(color: Colors.black, fontSize: 12)),
),
],
),
],
),
);
}
Widget _buildSearchBar() {
return Container(
margin: const EdgeInsets.all(16),
padding: const EdgeInsets.symmetric(horizontal: 16),
decoration: BoxDecoration(
color: Colors.grey[900],
borderRadius: BorderRadius.circular(24),
),
child: Row(
children: [
const Expanded(
child: TextField(
style: TextStyle(color: Colors.white),
decoration: InputDecoration(
hintText: 'Search',
hintStyle: TextStyle(color: Colors.grey),
border: InputBorder.none,
),
),
),
IconButton(
icon: const Icon(Icons.mic, color: Colors.white),
onPressed: () {},
),
IconButton(
icon: const Icon(Icons.camera_alt, color: Colors.white),
onPressed: () {},
),
],
),
);
}
Widget _buildQuickAccessGrid() {
return GridView.count(
shrinkWrap: true,
crossAxisCount: 5,
children: [
_buildGridItem('夸克日报', 'assets/images/template.png', () => Navigator.pushNamed(context, '夸克日报')),
_buildGridItem('精选', 'assets/images/template.png', () => Navigator.pushNamed(context, '精选')),
_buildGridItem('夸克学习', 'assets/images/template.png', () {}),
_buildGridItem('夸克扫描王', 'assets/images/template.png', () => Navigator.pushNamed(context, '夸克扫描王')),
_buildGridItem('夸克网盘', 'assets/images/template.png', () => Navigator.pushNamed(context, '夸克网盘')),
_buildGridItem('夸克文档', 'assets/images/template.png', () {}),
_buildGridItem('更多', 'assets/images/template.png', () {}),
_buildGridItem('省钱集市', 'assets/images/template.png', () {}),
_buildGridItem('AI工具', 'assets/images/template.png', () {}),
],
);
}
Widget _buildGridItem(String label, String imagePath, VoidCallback onTap) {
return GestureDetector(
onTap: onTap,
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset(imagePath, width: 48, height: 48),
const SizedBox(height: 8),
Text(label, style: const TextStyle(color: Colors.white, fontSize: 12)),
],
),
);
}
Widget _buildBottomNavBar() {
return Container(
padding: const EdgeInsets.symmetric(vertical: 16),
color: Colors.black,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildNavBarItem(Icons.book, '阅读'),
_buildNavBarItem(Icons.crop_square, ''),
_buildNavBarItem(Icons.refresh, ''),
_buildNavBarItem(Icons.cloud, ''),
_buildNavBarItem(Icons.person, ''),
],
),
);
}
Widget _buildNavBarItem(IconData icon, String label) {
return Column(
mainAxisSize: MainAxisSize.min,
children: [
Icon(icon, color: Colors.white),
Text(label, style: const TextStyle(color: Colors.white, fontSize: 12)),
],
);
}
}