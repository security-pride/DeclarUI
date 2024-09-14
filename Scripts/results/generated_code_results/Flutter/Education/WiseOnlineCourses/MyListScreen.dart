import 'package:flutter/material.dart';
class MyListScreen extends StatefulWidget {
@override
_MyListScreenState createState() => _MyListScreenState();
}
class _MyListScreenState extends State<MyListScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 2, vsync: this);
}
@override
void dispose() {
_tabController.dispose();
super.dispose();
}
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Color(0xFF1E1E1E),
appBar: AppBar(
backgroundColor: Colors.transparent,
elevation: 0,
title: TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Home'),
Tab(text: 'My List'),
],
indicatorColor: Colors.yellow,
labelColor: Colors.white,
unselectedLabelColor: Colors.grey,
),
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: ListView(
padding: EdgeInsets.all(16),
children: [
Text(
'Instructors',
style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildInstructorItem(),
SizedBox(height: 24),
Text(
'Lessons',
style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildLessonItem(
'Gift yourself this UI Kit and enjoy!',
'John Wiseberg',
'08:12',
),
SizedBox(height: 16),
_buildLessonItem(
'Make your Mess Your Message',
'Mendy Santiago',
'12:38',
),
],
),
bottomNavigationBar: BottomNavigationBar(
backgroundColor: Color(0xFF1E1E1E),
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
currentIndex: 0,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.search),
label: 'Search',
),
BottomNavigationBarItem(
icon: Icon(Icons.file_download),
label: 'Downloads',
),
],
),
);
}
Widget _buildInstructorItem() {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Container(
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Color(0xFF2A2A2A),
borderRadius: BorderRadius.circular(8),
),
child: Row(
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset(
'assets/images/template.png',
width: 60,
height: 60,
fit: BoxFit.cover,
),
),
SizedBox(width: 16),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Boniface Esanji',
style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
),
Text(
'Teaches Guitar',
style: TextStyle(color: Colors.grey, fontSize: 14),
),
],
),
],
),
),
);
}
Widget _buildLessonItem(String title, String instructor, String duration) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Container(
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Color(0xFF2A2A2A),
borderRadius: BorderRadius.circular(8),
),
child: Row(
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
title,
style: TextStyle(color: Colors.white, fontSize: 16, fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Text(
instructor,
style: TextStyle(color: Colors.grey, fontSize: 14),
),
],
),
),
],
),
),
);
}
}