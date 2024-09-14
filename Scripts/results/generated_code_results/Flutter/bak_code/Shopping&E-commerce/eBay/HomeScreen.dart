import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Image.asset('assets/images/ebay_logo.png', height: 30),
actions: [
IconButton(
icon: Icon(Icons.shopping_cart),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: '搜索任何物品',
prefixIcon: Icon(Icons.search),
suffixIcon: Icon(Icons.camera_alt),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(25),
),
),
onTap: () => Navigator.pushNamed(context, 'Search'),
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
TextButton.icon(
icon: Icon(Icons.favorite),
label: Text('已保存'),
onPressed: () {},
),
TextButton.icon(
icon: Icon(Icons.shop),
label: Text('时尚'),
onPressed: () {},
),
TextButton.icon(
icon: Icon(Icons.explore),
label: Text('探索（全新！）'),
onPressed: () {},
),
],
),
Container(
color: Colors.amber,
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Join the party with 15% off',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'Celebrate eBay UK with big deals on brands from selected sellers.',
),
ElevatedButton(
child: Text('Use code SIZZLE15'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black87,
),
),
Text(
'Ends 21 July. Min spend £9.99. Max £75 off. T&Cs.',
style: TextStyle(decoration: TextDecoration.underline),
),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('您最近浏览的物品', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('浏览全部', style: TextStyle(color: Colors.blue)),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildProductCard(
'Ottogi Jin Ramen Mild Noodles (Pack of 20)',
'GBP 22.99',
'assets/images/template.png',
context,
),
_buildProductCard(
'Spiderman Push Pop for it Bubble Fidget T...',
'GBP 4.10',
'assets/images/template.png',
context,
),
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
BottomNavigationBarItem(icon: Icon(Icons.home, color: Colors.blue), label: '主页'),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: '我的eBay',
),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '搜索'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: '通知'),
BottomNavigationBarItem(icon: Icon(Icons.sell), label: '出售物品'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Profile');
} else if (index == 2) {
Navigator.pushNamed(context, 'Search');
}
},
),
);
}
Widget _buildProductCard(String title, String price, String imagePath, BuildContext context) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Item'),
child: Card(
margin: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
alignment: Alignment.topRight,
children: [
Image.asset(imagePath, width: 150, height: 150, fit: BoxFit.cover),
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
],
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(price, style: TextStyle(color: Colors.green)),
],
),
),
],
),
),
);
}
}