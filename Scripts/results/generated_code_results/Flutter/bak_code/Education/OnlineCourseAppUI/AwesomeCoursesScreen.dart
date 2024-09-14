import 'package:flutter/material.dart';
class AwesomeCoursesScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Awesome Courses'),
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
ElevatedButton(
child: Text('Medium'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
ElevatedButton(
child: Text('Medium'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
ElevatedButton(
child: Text('Medium'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
],
),
),
Expanded(
child: ListView(
children: [
_buildCourseItem(
context,
'3D Design Basic',
'24 lessons',
4.9,
'\$24.99',
),
_buildCourseItem(
context,
'Characters Animation',
'22 lessons',
4.8,
'\$22.69',
),
_buildCourseItem(
context,
'3D Abstract Design',
'18 lessons',
4.7,
'\$19.29',
),
_buildCourseItem(
context,
'Product Design',
'23 lessons',
4.8,
'\$25.79',
),
_buildCourseItem(
context,
'Game Design',
'25 lessons',
4.9,
'\$26.39',
),
],
),
),
],
),
);
}
Widget _buildCourseItem(BuildContext context, String title, String lessons, double rating, String price) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: ListTile(
leading: Image.asset('assets/images/template.png', width: 60, height: 60),
title: Text(title),
subtitle: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(lessons),
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
Text(' $rating'),
],
),
],
),
trailing: Column(
mainAxisAlignment: MainAxisAlignment.center,
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
Icon(Icons.favorite_border),
],
),
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
),
);
}
}