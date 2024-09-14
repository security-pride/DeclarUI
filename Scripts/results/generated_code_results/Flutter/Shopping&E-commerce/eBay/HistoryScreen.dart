import 'package:flutter/material.dart';
class HistoryScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Profile'),
),
title: Text('购买记录'),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.shopping_cart),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: '查找',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(),
),
),
),
SizedBox(width: 8),
Text('缩小搜索范围'),
],
),
),
Expanded(
child: ListView(
children: [
_buildPurchaseItem(
'Pack of 5 | Ottogi Jin Ramen Noodle (Mild) 120g (Pack of 5)',
'GBP 14.99',
'2022年10月8日',
'已送达',
'购买相似物品',
context,
),
_buildPurchaseItem(
'Knife Sharpening Steel Rod Sharpener Honing Stick chef tool high quality',
'GBP 3.99',
'2022年1月13日',
'已发货',
'再次购买',
context,
),
_buildPurchaseItem(
'Large Lightweight Wheeled Shopping Trolley Push Cart Luggage Bag with...',
'GBP 9.16',
'2021年11月20日',
'已送达',
'购买相似物品',
context,
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '主页'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的eBay'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '搜索'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: '通知'),
BottomNavigationBarItem(icon: Icon(Icons.sell), label: '出售物品'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildPurchaseItem(String title, String price, String date, String status, String actionText, BuildContext context) {
return Card(
margin: EdgeInsets.all(8),
child: Padding(
padding: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
SizedBox(width: 8),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(price),
Text(date),
Text(status),
],
),
),
],
),
SizedBox(height: 8),
ElevatedButton(
child: Text(actionText),
onPressed: () {
if (actionText == '再次购买' || actionText == '购买相似物品') {
Navigator.pushNamed(context, 'Item');
}
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
],
),
),
);
}
}