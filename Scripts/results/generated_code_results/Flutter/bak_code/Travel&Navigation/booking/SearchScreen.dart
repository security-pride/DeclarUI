import 'package:flutter/material.dart';
class SearchScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Booking.com'),
actions: [
IconButton(
icon: Icon(Icons.notifications),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.amber[100],
borderRadius: BorderRadius.circular(8),
),
child: Column(
children: [
GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'Surroundings');
},
child: Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(4),
),
child: Row(
children: [
Icon(Icons.search),
SizedBox(width: 8),
Text('周围地区'),
],
),
),
),
SizedBox(height: 8),
Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(4),
),
child: Row(
children: [
Icon(Icons.calendar_today),
SizedBox(width: 8),
Text('7月18日 周四 - 7月19日 周五'),
],
),
),
SizedBox(height: 8),
Container(
padding: EdgeInsets.symmetric(horizontal: 12, vertical: 8),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(4),
),
child: Row(
children: [
Icon(Icons.person),
SizedBox(width: 8),
Text('1间房 · 2位成人 · 无儿童'),
],
),
),
SizedBox(height: 8),
ElevatedButton(
child: Text('搜索'),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
minimumSize: Size(double.infinity, 40),
),
),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Text(
'临时起意?',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
ListView(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
children: [
HotelCard(
name: 'AC Hotel by Marriott Manch...',
distance: '8,540公里',
price: '£160',
imagePath: 'assets/images/template.png',
),
HotelCard(
name: 'Maldron Hotel Manc...',
distance: '8,541公里',
price: '£1',
imagePath: 'assets/images/template.png',
),
],
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.search), label: '搜索'),
BottomNavigationBarItem(icon: Icon(Icons.favorite_border), label: '已保存'),
BottomNavigationBarItem(icon: Icon(Icons.list_alt), label: '订单'),
BottomNavigationBarItem(icon: Icon(Icons.person_outline), label: '账户资料'),
],
),
);
}
}
class HotelCard extends StatelessWidget {
final String name;
final String distance;
final String price;
final String imagePath;
const HotelCard({
Key? key,
required this.name,
required this.distance,
required this.price,
required this.imagePath,
}) : super(key: key);
@override
Widget build(BuildContext context) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'Details');
},
child: Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset(imagePath, fit: BoxFit.cover, height: 200),
Padding(
padding: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(name, style: TextStyle(fontWeight: FontWeight.bold)),
Text(distance),
Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
],
),
),
],
),
),
);
}
}