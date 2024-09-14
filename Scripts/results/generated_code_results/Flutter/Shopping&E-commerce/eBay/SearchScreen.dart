import 'package:flutter/material.dart';
class SearchScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
decoration: InputDecoration(
hintText: '搜索任何物品',
prefixIcon: Icon(Icons.search),
suffixIcon: Icon(Icons.camera_alt),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(25.0),
borderSide: BorderSide.none,
),
filled: true,
fillColor: Colors.grey[200],
),
),
actions: [
IconButton(
icon: Icon(Icons.shopping_cart),
onPressed: () {},
),
],
),
body: Column(
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
Text('最近', style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(width: 16),
Text('已保存', style: TextStyle(color: Colors.grey)),
],
),
),
Expanded(
child: Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.search, size: 80, color: Colors.grey),
SizedBox(height: 16),
Text(
'搜索 eBay',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text(
'发现下一件您最喜爱的物品。',
style: TextStyle(color: Colors.grey),
),
],
),
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: '主页',
),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: '我的 eBay',
),
BottomNavigationBarItem(
icon: Icon(Icons.search, color: Colors.blue),
label: '搜索',
),
BottomNavigationBarItem(
icon: Icon(Icons.notifications),
label: '通知',
),
BottomNavigationBarItem(
icon: Icon(Icons.sell),
label: '出售物品',
),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
}