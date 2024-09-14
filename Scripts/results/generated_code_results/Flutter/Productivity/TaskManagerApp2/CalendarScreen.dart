import 'package:flutter/material.dart';
class CalendarScreen extends StatefulWidget {
@override
_CalendarScreenState createState() => _CalendarScreenState();
}
class _CalendarScreenState extends State<CalendarScreen> {
final List<String> weekDays = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
final List<int> dates = [12, 13, 14, 15, 16, 17, 18];
int selectedDate = 14;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('August 2021'),
actions: [
IconButton(
icon: Icon(Icons.calendar_today),
onPressed: () {
// Calendar icon action
},
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search for task',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
Container(
height: 80,
child: ListView.builder(
scrollDirection: Axis.horizontal,
itemCount: 7,
itemBuilder: (context, index) {
return GestureDetector(
onTap: () {
setState(() {
selectedDate = dates[index];
});
},
child: Container(
width: 50,
margin: EdgeInsets.symmetric(horizontal: 5),
decoration: BoxDecoration(
color: selectedDate == dates[index] ? Colors.blue : Colors.transparent,
borderRadius: BorderRadius.circular(10),
),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text(weekDays[index], style: TextStyle(fontWeight: FontWeight.bold)),
Text(dates[index].toString()),
],
),
),
);
},
),
),
Expanded(
child: ListView(
children: [
_buildTimeSlot('07:00', [
_buildTask('Cleaning Clothes', '07:00 - 07:15', ['Urgent', 'Home']),
_buildTask('Cleaning', '07:15 - 07:30', ['Urgent']),
]),
_buildTimeSlot('08:00', [
_buildTask('Cleaning Clothes', '08:00 - 08:35', ['Urgent', 'Home']),
_buildTask('Cleaning', '08:00 - 08:15', ['Urgent']),
]),
_buildTimeSlot('09:00', [
Text("You don't have any scheduleor"),
TextButton(
onPressed: () {
Navigator.pushNamed(context, 'AddTask');
},
child: Text('+ Add'),
),
]),
_buildTimeSlot('10:00', [
_buildTask('Cleaning Clothes', '10:00 - 10:30', ['Urgent', 'Home']),
]),
],
),
),
],
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
onPressed: () {
Navigator.pushNamed(context, 'AddTask');
},
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.list), label: 'List'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Chart'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 2) {
Navigator.pushNamed(context, 'AddTask');
}
},
),
);
}
Widget _buildTimeSlot(String time, List<Widget> tasks) {
return Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
width: 50,
padding: EdgeInsets.symmetric(vertical: 8),
child: Text(time, style: TextStyle(fontWeight: FontWeight.bold)),
),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: tasks,
),
),
],
);
}
Widget _buildTask(String title, String time, List<String> tags) {
return Card(
margin: EdgeInsets.symmetric(vertical: 4, horizontal: 8),
child: ListTile(
leading: Container(
width: 4,
color: Colors.blue,
),
title: Text(title),
subtitle: Text(time),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
...tags.map((tag) => Chip(label: Text(tag))).toList(),
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {
// Show more options
},
),
],
),
),
);
}
}