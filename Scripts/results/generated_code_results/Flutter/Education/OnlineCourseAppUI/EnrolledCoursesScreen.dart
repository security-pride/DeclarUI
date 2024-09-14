import 'package:flutter/material.dart';
class EnrolledCoursesScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('My Enrolled Courses'),
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
_buildCourseItem(context, '3D Design Basic', '24 lessons', 0.25),
_buildCourseItem(context, '3D Abstract Design', '18 lessons', 0.5),
_buildCourseItem(context, 'Characters Animation', '22 lessons', 0.75),
_buildCourseItem(context, 'Game Design', '25 lessons', 1.0),
_buildCourseItem(context, 'Product Design', '23 lessons', 1.0),
],
),
),
],
),
);
}
Widget _buildCourseItem(BuildContext context, String title, String lessons, double progress) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: ListTile(
leading: Image.asset('assets/images/template.png', width: 60, height: 60),
title: Text(title),
subtitle: Text(lessons),
trailing: SizedBox(
width: 60,
height: 60,
child: CircularProgressIndicator(
value: progress,
backgroundColor: Colors.grey[300],
valueColor: AlwaysStoppedAnimation<Color>(
progress == 1.0 ? Colors.green : Colors.blue,
),
),
),
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
),
);
}
}