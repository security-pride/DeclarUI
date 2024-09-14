import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
class TaskScreen extends StatefulWidget {
@override
_TaskScreenState createState() => _TaskScreenState();
}
class _TaskScreenState extends State<TaskScreen> {
final DateTime selectedDate = DateTime.now();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Task', style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
backgroundColor: Colors.transparent,
elevation: 0,
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
DateFormat('MMMM dd, yyyy').format(selectedDate),
style: TextStyle(color: Colors.grey),
),
Text(
'Today',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
],
),
),
_buildWeekView(),
Expanded(
child: ListView(
children: [
_buildTaskCard('URGENT', 'New Web UI Design Project', 'Website UI Design for $500', '10 - 11 AM', 2),
_buildTaskCard('RUNNING', 'Application Design Meeting', 'Website UI Design for $500', '10 - 11 AM', 2),
_buildTaskCard('ONGOING', 'Web Design Meeting', '', '', 0),
],
),
),
],
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
backgroundColor: Colors.orange,
onPressed: () => Navigator.pushNamed(context, 'AddTask'),
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
bottomNavigationBar: BottomAppBar(
shape: CircularNotchedRectangle(),
notchMargin: 8.0,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.grid_view),
onPressed: () => Navigator.pushNamed(context, 'Board'),
),
IconButton(
icon: Icon(Icons.check_circle_outline),
onPressed: () => Navigator.pushNamed(context, 'Dashboard'),
),
SizedBox(width: 48),
IconButton(icon: Icon(Icons.description_outlined), onPressed: () {}),
IconButton(
icon: Icon(Icons.chat_bubble_outline),
onPressed: () => Navigator.pushNamed(context, 'Message'),
),
],
),
),
);
}
Widget _buildWeekView() {
final weekDays = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
return Container(
height: 80,
child: ListView.builder(
scrollDirection: Axis.horizontal,
itemCount: 7,
itemBuilder: (context, index) {
final day = selectedDate.add(Duration(days: index - selectedDate.weekday + 1));
final isSelected = day.day == selectedDate.day;
return Container(
width: 50,
margin: EdgeInsets.symmetric(horizontal: 4),
decoration: BoxDecoration(
color: isSelected ? Colors.blue.withOpacity(0.1) : Colors.transparent,
borderRadius: BorderRadius.circular(10),
),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text(weekDays[index], style: TextStyle(color: Colors.grey)),
SizedBox(height: 4),
Text(
'${day.day}',
style: TextStyle(
fontWeight: FontWeight.bold,
color: isSelected ? Colors.blue : Colors.black,
),
),
],
),
);
},
),
);
}
Widget _buildTaskCard(String status, String title, String description, String time, int persons) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(status, style: TextStyle(color: _getStatusColor(status))),
SizedBox(height: 8),
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
if (description.isNotEmpty) Text(description, style: TextStyle(color: Colors.grey)),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.access_time, size: 16, color: Colors.grey),
SizedBox(width: 4),
Text(time, style: TextStyle(color: Colors.grey)),
if (persons > 0) ...[
SizedBox(width: 16),
Icon(Icons.person, size: 16, color: Colors.grey),
SizedBox(width: 4),
Text('$persons Persons', style: TextStyle(color: Colors.grey)),
],
],
),
],
),
),
);
}
Color _getStatusColor(String status) {
switch (status) {
case 'URGENT':
return Colors.red;
case 'RUNNING':
return Colors.green;
case 'ONGOING':
return Colors.blue;
default:
return Colors.grey;
}
}
}