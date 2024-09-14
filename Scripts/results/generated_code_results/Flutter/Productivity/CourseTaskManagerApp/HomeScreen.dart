import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Hello Liana',
style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
),
Text(
"You've got 4 tasks today",
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
],
),
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Courses',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Your running subjects',
style: TextStyle(fontSize: 14, color: Colors.grey),
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildCourseCard('Mathematics', Colors.pink, Icons.calculate),
_buildCourseCard('Chemistry', Colors.orange, Icons.science),
],
),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Your schedule',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Upcoming classes and tasks',
style: TextStyle(fontSize: 14, color: Colors.grey),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Card(
color: Colors.purple[100],
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Physics',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Icon(Icons.more_vert),
],
),
Text('Chapter 3: Force'),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.access_time, size: 16),
SizedBox(width: 4),
Text('09:30'),
SizedBox(width: 16),
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 10,
),
SizedBox(width: 4),
Text('Alex Jesus'),
],
),
SizedBox(height: 4),
Row(
children: [
Icon(Icons.video_call, size: 16),
SizedBox(width: 4),
Text('Google Meet'),
],
),
],
),
),
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
onTap: (index) {
switch (index) {
case 1:
Navigator.pushNamed(context, 'Calendar');
break;
case 2:
Navigator.pushNamed(context, 'Classroom');
break;
case 3:
Navigator.pushNamed(context, 'Discussion');
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Tasks'),
BottomNavigationBarItem(icon: Icon(Icons.school), label: 'Classroom'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Discuss'),
],
),
);
}
Widget _buildCourseCard(String title, Color color, IconData icon) {
return Container(
width: 120,
height: 120,
decoration: BoxDecoration(
color: color,
borderRadius: BorderRadius.circular(12),
),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, size: 40, color: Colors.white),
SizedBox(height: 8),
Text(
title,
style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
),
],
),
);
}
}