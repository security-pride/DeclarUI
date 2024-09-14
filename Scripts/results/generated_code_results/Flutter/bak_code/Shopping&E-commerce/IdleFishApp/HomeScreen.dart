import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('海鲜市场'),
actions: [
IconButton(
icon: Icon(Icons.check_circle_outline),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.menu),
onPressed: () {
Navigator.pushNamed(context, 'Categories');
},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
Text('推荐', style: TextStyle(fontWeight: FontWeight.bold)),
Spacer(),
Text('武汉', style: TextStyle(color: Colors.grey)),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 8.0),
child: TextField(
decoration: InputDecoration(
hintText: '穿戴甲',
prefixIcon: Icon(Icons.search),
suffixIcon: Icon(Icons.camera_alt),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildQuickAccessButton('人才市场', 'assets/images/template.png'),
_buildQuickAccessButton('手机', 'assets/images/template.png'),
_buildQuickAccessButton('省钱神券', 'assets/images/template.png'),
_buildQuickAccessButton('充值中心', 'assets/images/template.png'),
_buildQuickAccessButton('奢品', 'assets/images/template.png'),
],
),
),
_buildPromotionCard('闲鱼特卖超低价', '全新正品1折起', '¥4.8抢', 'assets/images/template.png'),
_buildPromotionCard('极速回收', '免费上门', '', 'assets/images/template.png'),
_buildPromotionCard('闲鱼直播', '爆款好物直播中', '', 'assets/images/template.png'),
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
TextButton(
onPressed: () {},
child: Text('猜你喜欢'),
),
TextButton(
onPressed: () {},
child: Text('最新发布'),
),
TextButton(
onPressed: () {},
child: Text('鱼币抵钱'),
),
TextButton(
onPressed: () {},
child: Text('省钱小组'),
),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '闲鱼'),
BottomNavigationBarItem(icon: Icon(Icons.games), label: '游戏'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: '发布'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
onTap: (index) {
if (index == 2) {
Navigator.pushNamed(context, 'Sell');
}
},
),
floatingActionButton: FloatingActionButton(
onPressed: () {
Navigator.pushNamed(context, 'Sell');
},
child: Icon(Icons.add),
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
);
}
Widget _buildQuickAccessButton(String label, String imagePath) {
return Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
children: [
Image.asset(imagePath, width: 40, height: 40),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
),
);
}
Widget _buildPromotionCard(String title, String subtitle, String price, String imagePath) {
return Card(
margin: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
),
Row(
children: [
Expanded(
child: Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(subtitle),
if (price.isNotEmpty) Text(price, style: TextStyle(color: Colors.red)),
],
),
),
),
Image.asset(imagePath, width: 100, height: 100),
],
),
],
),
);
}
}