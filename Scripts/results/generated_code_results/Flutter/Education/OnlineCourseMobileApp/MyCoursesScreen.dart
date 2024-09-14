import 'package:flutter/material.dart';
class MyCoursesScreen extends StatefulWidget {
@override
_MyCoursesScreenState createState() => _MyCoursesScreenState();
}
class _MyCoursesScreenState extends State<MyCoursesScreen> with SingleTickerProviderStateMixin {
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
appBar: AppBar(
title: Text('My Courses'),
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
'9+',
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
bottom: TabBar(
controller: _tabController,
tabs: [
Tab(
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text('Ongoing'),
SizedBox(width: 5),
Container(
padding: EdgeInsets.symmetric(horizontal: 6, vertical: 2),
decoration: BoxDecoration(
color: Colors.green,
borderRadius: BorderRadius.circular(10),
),
child: Text(
'8',
style: TextStyle(color: Colors.white),
),
),
],
),
),
Tab(text: 'Completed'),
],
),
),
body: TabBarView(
controller: _tabController,
children: [
_buildCourseList(),
Center(child: Text('No completed courses yet')),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.book), label: 'My Courses'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'Discover');
}
},
),
);
}
Widget _buildCourseList() {
return ListView.builder(
itemCount: 3,
itemBuilder: (context, index) {
return _buildCourseCard(
title: 'Graphics Designer for Beginner',
instructor: 'Nicola Tesla',
rating: 4.9,
reviewCount: 1435,
sessions: '7 / 15',
progress: 0.82,
color: index == 0 ? Colors.blue : (index == 1 ? Colors.purple : Colors.pink),
icon: index == 0 ? Icons.headset : (index == 1 ? Icons.book : Icons.storage),
);
},
);
}
Widget _buildCourseCard({
required String title,
required String instructor,
required double rating,
required int reviewCount,
required String sessions,
required double progress,
required Color color,
required IconData icon,
}) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'CourseDetail');
},
child: Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Column(
children: [
Container(
height: 80,
decoration: BoxDecoration(
color: color,
borderRadius: BorderRadius.vertical(top: Radius.circular(4)),
),
child: Row(
children: [
SizedBox(width: 16),
Icon(icon, color: Colors.white, size: 32),
Spacer(),
IconButton(
icon: Icon(Icons.more_vert, color: Colors.white),
onPressed: () {},
),
],
),
),
Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
title,
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 12,
),
SizedBox(width: 8),
Text(instructor),
Spacer(),
Icon(Icons.star, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text('$rating ($reviewCount Reviews)'),
],
),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.calendar_today, size: 16),
SizedBox(width: 4),
Text('Sessions $sessions'),
Spacer(),
Text('${(progress * 100).toInt()}%'),
],
),
SizedBox(height: 8),
LinearProgressIndicator(
value: progress,
backgroundColor: Colors.grey[300],
valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
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