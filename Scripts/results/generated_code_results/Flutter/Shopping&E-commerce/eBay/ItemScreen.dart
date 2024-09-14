import 'package:flutter/material.dart';
class ItemScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('物品'),
actions: [
IconButton(
icon: Icon(Icons.share),
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
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
alignment: Alignment.topRight,
children: [
Image.asset('assets/images/template.png'),
Padding(
padding: const EdgeInsets.all(8.0),
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(12),
),
child: Row(
mainAxisSize: MainAxisSize.min,
children: [
Text('1/1', style: TextStyle(color: Colors.black)),
],
),
),
),
Positioned(
bottom: 8,
right: 8,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(12),
),
child: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.favorite_border, color: Colors.blue),
SizedBox(width: 4),
Text('65', style: TextStyle(color: Colors.blue)),
],
),
),
),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Ottogi Jin Ramen Mild Noodles (Pack of 20)',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
children: [
Image.asset('assets/images/template.png', width: 24, height: 24),
SizedBox(width: 8),
Text('Wa Na Hong Oriental Supermarket (25024)'),
Icon(Icons.chat_bubble_outline),
],
),
Text('99.3% 好评率'),
SizedBox(height: 16),
Text(
'每件 £22.99',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.green),
),
Text(
'Free 3 day postage',
style: TextStyle(color: Colors.green),
),
Text('预计在7月19日，星期五至7月20日，星期六之间送达'),
SizedBox(height: 16),
Text('www.WaNaHong.co.uk'),
Text('Packing: 120g x 20'),
Text('NET WT: 120g'),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 0,
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
}