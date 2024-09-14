import 'package:flutter/material.dart';
class DiscoverScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Discover the best course that suits to you'),
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
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
TextField(
decoration: InputDecoration(
hintText: 'Search course...',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
onSubmitted: (value) {
Navigator.pushNamed(context, 'Search');
},
),
SizedBox(height: 24),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Course of the weeks',
style: Theme.of(context).textTheme.titleLarge,
),
TextButton(
child: Text('See all'),
onPressed: () {},
),
],
),
SizedBox(height: 16),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCourseCard(
context,
'How to make modern poster for Beginner',
'GRAPHICS DESIGN',
4.9,
'\$12.00',
),
SizedBox(width: 16),
_buildCourseCard(
context,
'How to make Design system in easy waen',
'UI/UX DESIGN',
4.9,
'\$12.00',
),
],
),
),
SizedBox(height: 24),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Suits to you',
style: Theme.of(context).textTheme.titleLarge,
),
TextButton(
child: Text('See all'),
onPressed: () {},
),
],
),
SizedBox(height: 16),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCourseCard(
context,
'How to make modern poster',
'GRAPHICS DESIGN',
4.9,
null,
),
SizedBox(width: 16),
_buildCourseCard(
context,
'How to make Design system',
'UI/UX DESIGN',
4.9,
null,
),
],
),
),
],
),
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.book), label: 'My Courses'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 2) {
Navigator.pushNamed(context, 'MyCourses');
}
},
),
);
}
Widget _buildCourseCard(BuildContext context, String title, String type, double rating, String? price) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'CourseDetail');
},
child: Container(
width: 200,
child: Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png', height: 100, width: 200, fit: BoxFit.cover),
Padding(
padding: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(type, style: TextStyle(fontSize: 12, color: Colors.grey)),
SizedBox(height: 4),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text('$rating', style: TextStyle(fontSize: 12)),
],
),
if (price != null) SizedBox(height: 4),
if (price != null) Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
],
),
),
],
),
),
),
);
}
}