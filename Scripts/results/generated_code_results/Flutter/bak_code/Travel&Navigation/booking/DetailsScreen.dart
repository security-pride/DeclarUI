import 'package:flutter/material.dart';
class DetailsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'Search');
},
),
title: Text('烟台南山皇冠假日酒店'),
actions: [
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.share),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Positioned(
bottom: 10,
right: 10,
child: Container(
padding: EdgeInsets.all(8),
color: Colors.black54,
child: Text(
'+118',
style: TextStyle(color: Colors.white),
),
),
),
],
),
Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Text(
'8.6',
style: TextStyle(
fontSize: 24,
fontWeight: FontWeight.bold,
color: Colors.blue,
),
),
SizedBox(width: 8),
Row(
children: List.generate(5, (index) => Icon(Icons.star, color: Colors.yellow)),
),
Icon(Icons.thumb_up, color: Colors.blue),
],
),
SizedBox(height: 16),
Text('入住时间', style: TextStyle(fontWeight: FontWeight.bold)),
Text('7月18日 周四'),
SizedBox(height: 8),
Text('退房时间', style: TextStyle(fontWeight: FontWeight.bold)),
Text('7月19日 周五'),
SizedBox(height: 8),
Text('客房与客人数', style: TextStyle(fontWeight: FontWeight.bold)),
Text('1间房 · 2位成人 · 无儿童'),
SizedBox(height: 16),
Text('设施', style: TextStyle(fontWeight: FontWeight.bold)),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
Column(children: [Icon(Icons.local_parking), Text('免费停车')]),
Column(children: [Icon(Icons.pool), Text('室内游泳池')]),
Column(children: [Icon(Icons.restaurant), Text('餐厅')]),
Column(children: [Icon(Icons.spa), Text('Spa及健康中心')]),
Column(children: [Icon(Icons.wifi), Text('免费无线网络连接')]),
],
),
],
),
),
SizedBox(height: 16),
ElevatedButton(
child: Text('查看房型列表'),
onPressed: () {
Navigator.pushNamed(context, 'TypeDetails');
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
minimumSize: Size(double.infinity, 50),
),
),
SizedBox(height: 16),
ElevatedButton(
child: Text('查看周边地区'),
onPressed: () {
Navigator.pushNamed(context, 'Surroundings');
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.green,
minimumSize: Size(double.infinity, 50),
),
),
],
),
),
);
}
}