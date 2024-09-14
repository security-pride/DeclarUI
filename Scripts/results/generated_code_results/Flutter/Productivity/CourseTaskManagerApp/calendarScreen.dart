import 'package:flutter/material.dart';
class CalendarScreen extends StatefulWidget {
@override
_CalendarScreenState createState() => _CalendarScreenState();
}
class _CalendarScreenState extends State<CalendarScreen> {
final List<String> weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
final List<int> dates = [14, 15, 16, 17, 18, 19, 20];
int selectedDate = 17;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('17 September', style: TextStyle(fontSize: 16)),
Text('Today', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
],
),
actions: [
ElevatedButton.icon(
onPressed: () {
Navigator.pushNamed(context, 'AddTask');
},
icon: Icon(Icons.add),
label: Text('Add Task'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.green,
),
),
],
),
body: Column(
children: [
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
Text(weekDays[index], style: TextStyle(color: selectedDate == dates[index] ? Colors.white : Colors.black)),
Text(dates[index].toString(), style: TextStyle(color: selectedDate == dates[index] ? Colors.white : Colors.black, fontWeight: FontWeight.bold)),
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
_buildEventCard('9:30', '10:20', 'Physics', 'Chapter 3: Force', 'Alex Jesus', 'Google Meet', Colors.purple),
_buildEventCard('11:00', '11:30', 'Geography', 'Chapter 12: Soil Profile', 'Jennifer Clark', 'Zoom', Colors.green),
_buildEventCard('12:20', '13:00', 'Assignment', 'World Regional Pattern', 'Alexia Tenorio', 'Google Docs', Colors.orange),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
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
Widget _buildEventCard(String startTime, String endTime, String subject, String chapter, String instructor, String platform, Color color) {
return Card(
margin: EdgeInsets.symmetric(vertical: 8, horizontal: 16),
color: color,
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('$startTime - $endTime', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
Icon(Icons.more_vert, color: Colors.white),
],
),
SizedBox(height: 8),
Text(subject, style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
Text(chapter, style: TextStyle(color: Colors.white70)),
SizedBox(height: 8),
Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 12,
),
SizedBox(width: 8),
Text(instructor, style: TextStyle(color: Colors.white)),
Spacer(),
Icon(Icons.video_call, color: Colors.white, size: 20),
SizedBox(width: 4),
Text(platform, style: TextStyle(color: Colors.white)),
],
),
],
),
),
);
}
}