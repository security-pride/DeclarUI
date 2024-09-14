import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
decoration: InputDecoration(
hintText: 'team wang联名',
border: InputBorder.none,
),
),
actions: [
IconButton(
icon: Icon(Icons.camera_alt),
onPressed: () {
// Open camera functionality
},
),
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Perform search
},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCategoryButton('关注'),
_buildCategoryButton('推荐', isSelected: true),
_buildCategoryButton('小时达'),
_buildCategoryButton('狂暑季'),
_buildCategoryButton('穿搭'),
_buildCategoryButton('居家'),
_buildCategoryButton('数码', isEnabled: false),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildQuickAccessItem('飞猪旅行'),
_buildQuickAccessItem('百亿补贴'),
_buildQuickAccessItem('饿了么'),
_buildQuickAccessItem('芭芭农场'),
_buildQuickAccessItem('天猫国际'),
],
),
),
_buildSection(
'淘宝直播',
'爆款抽免单',
[
_buildStreamItem('觅橘官方'),
_buildStreamItem('吉杰'),
_buildStreamItem('李宁官方'),
],
),
_buildSection(
'淘宝秒杀',
'仅剩 22:35:11',
[
_buildProductItem('小竹', '¥2.01'),
_buildProductItem('不锈钢清洁球', '¥2.96'),
_buildProductItem('湿厕纸', '¥1.42'),
],
),
_buildFeaturedProduct(
'明日香EVA动漫水洗做旧',
'¥536',
'87人付款',
),
_buildFeaturedProduct(
'MEDMXEVA联名',
'¥279',
'每300减30',
tag: '潮流男装 热卖好店上新',
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 0,
onTap: (index) {
switch (index) {
case 3:
Navigator.pushNamed(context, 'Cart');
break;
case 2:
Navigator.pushNamed(context, 'Message');
break;
case 4:
Navigator.pushNamed(context, 'Profile');
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: '逛逛'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: '购物车'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的淘宝'),
],
),
);
}
Widget _buildCategoryButton(String text, {bool isSelected = false, bool isEnabled = true}) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 8.0),
child: TextButton(
onPressed: isEnabled ? () {} : null,
child: Text(
text,
style: TextStyle(
color: isSelected ? Colors.orange : (isEnabled ? Colors.black : Colors.grey),
fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,
),
),
),
);
}
Widget _buildQuickAccessItem(String text) {
return Column(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
Text(text, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildSection(String title, String subtitle, List<Widget> items) {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text(subtitle, style: TextStyle(color: Colors.grey)),
],
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(children: items),
),
],
);
}
Widget _buildStreamItem(String name) {
return Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 30,
),
Text(name),
],
),
);
}
Widget _buildProductItem(String name, String price) {
return Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
Text(name),
Text(price, style: TextStyle(color: Colors.red)),
],
),
);
}
Widget _buildFeaturedProduct(String name, String price, String subtext, {String? tag}) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png', width: double.infinity, height: 200, fit: BoxFit.cover),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(name, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
Text(price, style: TextStyle(color: Colors.red, fontSize: 18)),
Text(subtext, style: TextStyle(color: Colors.grey)),
if (tag != null) Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
color: Colors.orange[100],
child: Text(tag, style: TextStyle(color: Colors.orange)),
),
],
),
),
],
),
);
}
}