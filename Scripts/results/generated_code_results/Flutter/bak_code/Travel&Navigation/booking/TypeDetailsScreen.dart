import 'package:flutter/material.dart';
class TypeDetailsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Details'),
),
title: Text('选择客房 - 烟台南山皇冠假日酒店'),
actions: [
IconButton(
icon: Icon(Icons.share),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('筛选条件', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Wrap(
spacing: 8,
children: [
Chip(label: Text('包括早餐')),
],
),
Text('住客人数', style: TextStyle(fontSize: 16)),
Row(
children: [
Expanded(
child: ElevatedButton(
child: Text('2'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
),
SizedBox(width: 8),
Expanded(
child: ElevatedButton(
child: Text('3'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.grey[300]),
),
),
],
),
SizedBox(height: 16),
Text('有17个选项符合你的筛选条件', style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 16),
RoomTypeCard(),
SizedBox(height: 16),
RoomTypeCard(),
],
),
),
),
);
}
}
class RoomTypeCard extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('标准间', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Image.asset('assets/images/template.png', width: 80, height: 80),
],
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.block, size: 16),
SizedBox(width: 4),
Text('不可退款', style: TextStyle(color: Colors.red)),
],
),
Row(
children: [
Icon(Icons.check, size: 16, color: Colors.green),
SizedBox(width: 4),
Text('无需预付 - 到店付款'),
],
),
Row(
children: [
Icon(Icons.person, size: 16),
SizedBox(width: 4),
Text('2位成人的入住价格'),
],
),
Text('选项1：2张单人床'),
Text('选项2：1张超大号双人床'),
Text('客房面积：46平方米'),
Text('提供早餐（到店付款）'),
Wrap(
spacing: 8,
children: [
Icon(Icons.wifi, size: 16),
Icon(Icons.landscape, size: 16),
Icon(Icons.ac_unit, size: 16),
Icon(Icons.bathtub, size: 16),
Icon(Icons.tv, size: 16),
Icon(Icons.local_bar, size: 16),
],
),
SizedBox(height: 8),
Text('Booking.com上只剩1间房了', style: TextStyle(color: Colors.red)),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('1晚房价（7月18日 - 7月19日）'),
Text('707元', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('含税费及其他费用', style: TextStyle(fontSize: 12)),
],
),
ElevatedButton(
child: Text('选择并定制'),
onPressed: () => Navigator.pushNamed(context, 'Reservation'),
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
],
),
],
),
),
],
),
);
}
}