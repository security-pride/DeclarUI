import 'package:flutter/material.dart';
class AllTasksScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('All tasks'),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Implement search functionality
},
),
],
),
body: ListView(
padding: EdgeInsets.all(16),
children: [
Text(
'Todays task',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
TaskCard(
status: 'Running',
title: 'Meeting with designer',
time: '09AM-10AM',
persons: 4,
progress: 60,
color: Colors.blue,
),
SizedBox(height: 16),
TaskCard(
status: 'Ongoing',
title: 'Grocery app design',
time: '10AM-11AM',
persons: 5,
progress: 95,
color: Colors.purple,
),
SizedBox(height: 16),
TaskCard(
status: 'Running',
title: 'Dashboard redesign',
time: '02PM-03PM',
persons: 3,
progress: 50,
color: Colors.orange,
),
],
),
);
}
}
class TaskCard extends StatelessWidget {
final String status;
final String title;
final String time;
final int persons;
final int progress;
final Color color;
const TaskCard({
Key? key,
required this.status,
required this.title,
required this.time,
required this.persons,
required this.progress,
required this.color,
}) : super(key: key);
@override
Widget build(BuildContext context) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'TaskDetails');
},
child: Card(
elevation: 2,
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
status,
style: TextStyle(color: color, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text(
title,
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.access_time, size: 16),
SizedBox(width: 4),
Text(time),
SizedBox(width: 16),
Icon(Icons.people, size: 16),
SizedBox(width: 4),
Text('$persons Persons'),
],
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