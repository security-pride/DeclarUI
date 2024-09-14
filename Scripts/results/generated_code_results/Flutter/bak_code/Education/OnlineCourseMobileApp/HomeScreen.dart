import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
SizedBox(width: 12),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Welcome Back',
style: TextStyle(color: Colors.grey, fontSize: 12)),
Text('Nicolas Doflamingo!✌️🤟',
style: TextStyle(fontWeight: FontWeight.bold)),
],
),
],
),
actions: [
Stack(
children: [
IconButton(
icon: Icon(Icons.notifications),
onPressed: () {},
),
Positioned(
right: 8,
top: 8,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(10),
),
constraints: BoxConstraints(
minWidth: 16,
minHeight: 16,
),
child: Text(
'1',
style: TextStyle(
color: Colors.white,
fontSize: 10,
),
textAlign: TextAlign.center,
),
),
),
],
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Best courses that\nsuits to you',
style: Theme.of(context).textTheme.titleLarge),
IconButton(
icon: Icon(Icons.arrow_forward),
onPressed: () {
Navigator.pushNamed(context, 'Discover');
},
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('My Courses',
style: Theme.of(context).textTheme.titleMedium),
TextButton(
child: Text('See all'),
onPressed: () {
Navigator.pushNamed(context, 'MyCourses');
},
),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCourseCard(
context,
'How to make modern poster for Beginner',
'GRAPHICS DESIGN',
'Nicola Tesla',
'7 / 15',
0.82,
Colors.blue,
Icons.brush,
),
_buildCourseCard(
context,
'How to make D system in easy',
'UI/UX DESIGN',
'Dwi Gunawan',
'7 / 15',
0.82,
Colors.purple,
Icons.design_services,
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Mentor of The Weeks',
style: Theme.of(context).textTheme.titleMedium),
TextButton(
child: Text('See all'),
onPressed: () {},
),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildMentorCard('Nicola Tesla', 4.9, 1435),
_buildMentorCard('Galileo Galilei', 4.9, 1435),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.book), label: 'My Courses'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Discover');
} else if (index == 2) {
Navigator.pushNamed(context, 'MyCourses');
}
},
),
);
}
Widget _buildCourseCard(BuildContext context, String title, String type,
String instructor, String sessions, double progress, Color color, IconData icon) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'CourseDetail');
},
child: Container(
width: 200,
margin: EdgeInsets.only(left: 16, right: 8),
child: Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
height: 100,
decoration: BoxDecoration(
color: color,
borderRadius: BorderRadius.vertical(top: Radius.circular(4)),
),
child: Center(
child: Icon(icon, size: 40, color: Colors.white),
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(type, style: TextStyle(color: Colors.grey)),
SizedBox(height: 4),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Text(instructor),
SizedBox(height: 4),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(sessions),
Text('${(progress * 100).toInt()}%'),
],
),
SizedBox(height: 4),
LinearProgressIndicator(value: progress),
],
),
),
],
),
),
),
);
}
Widget _buildMentorCard(String name, double rating, int reviews) {
return Container(
width: 200,
margin: EdgeInsets.only(left: 16, right: 8, bottom: 16),
child: Card(
child: Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 30,
),
SizedBox(width: 8),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(name, style: TextStyle(fontWeight: FontWeight.bold)),
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text('$rating ($reviews Reviews)'),
],
),
],
),
],
),
),
),
);
}
}