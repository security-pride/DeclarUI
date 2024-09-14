import 'package:flutter/material.dart';
class ClassroomScreen extends StatefulWidget {
@override
_ClassroomScreenState createState() => _ClassroomScreenState();
}
class _ClassroomScreenState extends State<ClassroomScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 3, vsync: this);
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
title: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Today, 17 Sept', style: TextStyle(fontSize: 14)),
Text('Classroom', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
],
),
actions: [
ElevatedButton.icon(
onPressed: () {
// Add class functionality
},
icon: Icon(Icons.add),
label: Text('Add Class'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.green,
),
),
],
),
body: Column(
children: [
Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover, height: 200),
Positioned(
top: 10,
left: 10,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(4),
),
child: Text('LIVE', style: TextStyle(color: Colors.white)),
),
),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.school, color: Colors.blue),
SizedBox(width: 8),
Text('Physics', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
],
),
Text('Chapter 3: Force', style: TextStyle(color: Colors.grey)),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.person, color: Colors.grey),
SizedBox(width: 8),
Text('Alex Jesus'),
Spacer(),
Icon(Icons.people, color: Colors.grey),
SizedBox(width: 4),
Text('45 enrolled'),
],
),
],
),
),
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Description'),
Tab(text: 'Discussion'),
Tab(text: 'Resources'),
],
),
Expanded(
child: TabBarView(
controller: _tabController,
children: [
SingleChildScrollView(
padding: EdgeInsets.all(16),
child: Text(
'About this class\nForce: The push or pull on an object with mass that causes it to change its velocity.\n\nForce is a vector quantity capable of changing the state of rest or motion of a particular body.\nIt has a magnitude and a direction. The direction in which the force is applied is known as the direction of the force and the application of force is in a point where force is applied.',
),
),
Center(child: Text('Discussion Tab Content')),
Center(child: Text('Resources Tab Content')),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 3) {
Navigator.pushNamed(context, 'Discussion');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Tasks'),
BottomNavigationBarItem(icon: Icon(Icons.school), label: 'Classroom'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
],
),
);
}
}