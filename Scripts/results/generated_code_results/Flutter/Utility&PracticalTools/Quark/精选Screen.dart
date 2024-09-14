import 'package:flutter/material.dart';
class 精选Screen extends StatefulWidget {
const 精选Screen({Key? key}) : super(key: key);
@override
_精选ScreenState createState() => _精选ScreenState();
}
class _精选ScreenState extends State<精选Screen> {
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Colors.black,
appBar: AppBar(
backgroundColor: Colors.black,
title: const Text('精选', style: TextStyle(color: Colors.white)),
actions: [
IconButton(
icon: const Icon(Icons.refresh, color: Colors.white),
onPressed: () {},
),
IconButton(
icon: const Icon(Icons.close, color: Colors.white),
onPressed: () => Navigator.pushNamed(context, '首页'),
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildSearchBar(),
_buildCommonlyUsed(),
_buildNewDiscoveries(),
_buildQuarkTreasure(),
_buildHotUpdates(),
],
),
),
);
}
Widget _buildSearchBar() {
return Container(
margin: const EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.grey[900],
borderRadius: BorderRadius.circular(24),
),
child: TextField(
style: const TextStyle(color: Colors.white),
decoration: InputDecoration(
hintText: '输入网址或网站名，网站访问一触即达',
hintStyle: TextStyle(color: Colors.grey[600]),
prefixIcon: const Icon(Icons.search, color: Colors.grey),
border: InputBorder.none,
),
),
);
}
Widget _buildCommonlyUsed() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
const Padding(
padding: EdgeInsets.all(16),
child: Text('常用', style: TextStyle(color: Colors.white, fontSize: 18)),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCommonItem('assets/images/template.png', '书签'),
_buildCommonItem('assets/images/template.png', '微博'),
_buildCommonItem('assets/images/template.png', '腾讯'),
_buildCommonItem('assets/images/template.png', '网易'),
_buildCommonItem('assets/images/template.png', '新浪网'),
],
),
),
],
);
}
Widget _buildCommonItem(String imagePath, String label) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 16),
child: Column(
children: [
CircleAvatar(
radius: 30,
backgroundImage: AssetImage(imagePath),
),
const SizedBox(height: 8),
Text(label, style: const TextStyle(color: Colors.white)),
],
),
);
}
Widget _buildNewDiscoveries() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
const Padding(
padding: EdgeInsets.all(16),
child: Text('今日新发现', style: TextStyle(color: Colors.white, fontSize: 18)),
),
GridView.count(
shrinkWrap: true,
physics: const NeverScrollableScrollPhysics(),
crossAxisCount: 4,
children: [
_buildDiscoveryItem('assets/images/template.png', '夸克热搜'),
_buildDiscoveryItem('assets/images/template.png', '夸克高考'),
_buildDiscoveryItem('assets/images/template.png', '携程旅行'),
_buildDiscoveryItem('assets/images/template.png', '天天领现金'),
_buildDiscoveryItem('assets/images/template.png', '梦幻西游'),
_buildDiscoveryItem('assets/images/template.png', '微博热搜'),
_buildDiscoveryItem('assets/images/template.png', '腾讯动漫'),
_buildDiscoveryItem('assets/images/template.png', '新浪微博'),
],
),
],
);
}
Widget _buildDiscoveryItem(String imagePath, String label) {
return Column(
children: [
Image.asset(imagePath, width: 50, height: 50),
const SizedBox(height: 8),
Text(label, style: const TextStyle(color: Colors.white, fontSize: 12)),
],
);
}
Widget _buildQuarkTreasure() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
const Padding(
padding: EdgeInsets.all(16),
child: Text('夸克宝藏功能', style: TextStyle(color: Colors.white, fontSize: 18)),
),
GridView.count(
shrinkWrap: true,
physics: const NeverScrollableScrollPhysics(),
crossAxisCount: 4,
children: [
_buildTreasureItem('assets/images/template.png', 'AI听记', () {}),
_buildTreasureItem('assets/images/template.png', '捷径', () {}),
_buildTreasureItem('assets/images/template.png', '夸克日报', () => Navigator.pushNamed(context, '夸克日报')),
_buildTreasureItem('assets/images/template.png', '夸克扫描王', () => Navigator.pushNamed(context, '夸克扫描王')),
_buildTreasureItem('assets/images/template.png', '夸克网盘', () => Navigator.pushNamed(context, '夸克网盘')),
_buildTreasureItem('assets/images/template.png', '书签', () {}),
_buildTreasureItem('assets/images/template.png', '实用工具', () {}),
_buildTreasureItem('assets/images/template.png', '夸克文档', () {}),
],
),
],
);
}
Widget _buildTreasureItem(String imagePath, String label, VoidCallback onTap) {
return GestureDetector(
onTap: onTap,
child: Column(
children: [
Image.asset(imagePath, width: 50, height: 50),
const SizedBox(height: 8),
Text(label, style: const TextStyle(color: Colors.white, fontSize: 12)),
],
),
);
}
Widget _buildHotUpdates() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
const Padding(
padding: EdgeInsets.all(16),
child: Text('全网热点实时更新', style: TextStyle(color: Colors.white, fontSize: 18)),
),
ListView.builder(
shrinkWrap: true,
physics: const NeverScrollableScrollPhysics(),
itemCount: 5,
itemBuilder: (context, index) {
return ListTile(
leading: Image.asset('assets/images/template.png', width: 40, height: 40),
title: Text('热点标题 ${index + 1}', style: const TextStyle(color: Colors.white)),
subtitle: Text('热点描述 ${index + 1}', style: TextStyle(color: Colors.grey[600])),
);
},
),
],
);
}
}