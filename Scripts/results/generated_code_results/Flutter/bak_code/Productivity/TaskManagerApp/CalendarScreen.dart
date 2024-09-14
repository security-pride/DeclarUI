import 'package:flutter/material.dart';
class CalendarScreen extends StatefulWidget {
@override
_CalendarScreenState createState() => _CalendarScreenState();
}
class _CalendarScreenState extends State<CalendarScreen> {
DateTime _selectedDate = DateTime.now();
String _selectedFilter = 'All';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text("Today's Task"),
actions: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
],
),
body: Column(
children: [
CalendarDatePicker(
initialDate: _selectedDate,
firstDate: DateTime(2022),
lastDate: DateTime(2025),
onDateChanged: (date) {
setState(() {
_selectedDate = date;
});
},
),
Padding(
padding: const EdgeInsets.symmetric(vertical: 8.0),
child: ToggleButtons(
children: [
Text('All'),
Text('Ongoing'),
Text('Completed'),
],
isSelected: [
_selectedFilter == 'All',
_selectedFilter == 'Ongoing',
_selectedFilter == 'Completed',
],
onPressed: (index) {
setState(() {
_selectedFilter = ['All', 'Ongoing', 'Completed'][index];
});
},
),
),
Expanded(
child: ListView(
children: [
TaskCard(
title: 'Landing page design',
time: '09AM-11AM',
progress: 100,
color: Colors.orange,
),
TaskCard(
title: 'Dashboard redesign',
time: '11AM-01PM',
progress: 55,
color: Colors.blue,
),
TaskCard(
title: 'Education app design',
time: '02PM-03PM',
progress: 30,
color: Colors.purple,
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.calendar_today), label: 'Calendar'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Notifications'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
],
currentIndex: 1,
onTap: (index) {
if (index == 2) {
Navigator.pushNamed(context, 'AddTask');
}
},
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
onPressed: () {
Navigator.pushNamed(context, 'AddTask');
},
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
);
}
}
class TaskCard extends StatelessWidget {
final String title;
final String time;
final int progress;
final Color color;
TaskCard({required this.title, required this.time, required this.progress, required this.color});
@override
Widget build(BuildContext context) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'TaskDetails');
},
child: Card(
margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
title,
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Icon(Icons.more_vert),
],
),
SizedBox(height: 8),
Text(
time,
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 8),
Row(
children: [
Expanded(
child: LinearProgressIndicator(
value: progress / 100,
backgroundColor: Colors.grey[300],
valueColor: AlwaysStoppedAnimation<Color>(color),
),
),
SizedBox(width: 8),
Text('$progress%'),
],
),
],
),
),
),
);
}
}