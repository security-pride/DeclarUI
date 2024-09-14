import 'package:flutter/material.dart';
class LessonsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Color(0xFF1E1E1E),
appBar: AppBar(
backgroundColor: Colors.transparent,
elevation: 0,
leading: IconButton(
icon: Icon(Icons.arrow_back, color: Colors.white),
onPressed: () => Navigator.pop(context),
),
title: Row(
children: [
Text('About', style: TextStyle(color: Colors.grey)),
SizedBox(width: 20),
Text('Lessons', style: TextStyle(color: Colors.white)),
],
),
actions: [
IconButton(
icon: Icon(Icons.remove_circle_outline, color: Colors.yellow),
onPressed: () {},
),
],
),
body: ListView(
children: [
_buildLessonItem(
context,
'Lesson 1',
'What is Advertising',
'08:12',
'Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.',
),
_buildLessonItem(
context,
'Lesson 2',
'Working With Brands',
'14:10',
'Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.',
),
_buildLessonItem(
context,
'Lesson 3',
"10 things you shouldn't do!",
'13:20',
'Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula.',
),
],
),
);
}
Widget _buildLessonItem(BuildContext context, String lessonNumber, String title, String duration, String description) {
return Container(
margin: EdgeInsets.symmetric(vertical: 10, horizontal: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Stack(
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset(
'assets/images/template.png',
width: 120,
height: 80,
fit: BoxFit.cover,
),
),
Positioned(
left: 4,
bottom: 4,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
decoration: BoxDecoration(
color: Colors.black.withOpacity(0.7),
borderRadius: BorderRadius.circular(4),
),
child: Text(
duration,
style: TextStyle(color: Colors.white, fontSize: 12),
),
),
),
],
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
lessonNumber,
style: TextStyle(color: Colors.grey, fontSize: 14),
),
Text(
title,
style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
),
],
),
),
],
),
SizedBox(height: 8),
Text(
description,
style: TextStyle(color: Colors.grey, fontSize: 14),
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.end,
children: [
Text(
'DOWNLOAD',
style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
),
SizedBox(width: 8),
IconButton(
icon: Icon(Icons.file_download, color: Colors.white),
onPressed: () {},
),
],
),
Divider(color: Colors.grey.withOpacity(0.3)),
],
),
);
}
}