import 'package:flutter/material.dart';
class CourseDetailScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('3D Design Basic'),
actions: [
Icon(Icons.wifi),
SizedBox(width: 8),
Text('9:41'),
SizedBox(width: 8),
Icon(Icons.signal_cellular_4_bar),
SizedBox(width: 8),
Icon(Icons.battery_full),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
alignment: Alignment.center,
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover, height: 200),
Icon(Icons.play_circle_fill, size: 60, color: Colors.white),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Icon(Icons.people, color: Colors.blue),
SizedBox(width: 4),
Text('4,569'),
],
),
Row(
children: [
Icon(Icons.star, color: Colors.yellow),
SizedBox(width: 4),
Text('4.9'),
],
),
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.purple,
borderRadius: BorderRadius.circular(12),
),
child: Text('Best Seller', style: TextStyle(color: Colors.white)),
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'3D Design Basic',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'In this course you will learn how to build a space to a 3-dimensional product. There are 24 premium learning videos for you.',
style: TextStyle(fontSize: 16),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('24 Lessons (20 hours)', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
TextButton(
onPressed: () {},
child: Text('See all', style: TextStyle(color: Colors.blue)),
),
],
),
),
ListTile(
leading: Image.asset('assets/images/template.png', width: 48, height: 48),
title: Text('Introduction to 3D'),
subtitle: Text('20 mins'),
trailing: Icon(Icons.check_circle, color: Colors.green),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: ElevatedButton(
onPressed: () {},
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.cloud_download),
SizedBox(width: 8),
Text('Large Button'),
Spacer(),
Icon(Icons.arrow_forward),
],
),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.grey[700],
padding: EdgeInsets.symmetric(vertical: 16),
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(12),
),
),
),
),
],
),
),
);
}
}