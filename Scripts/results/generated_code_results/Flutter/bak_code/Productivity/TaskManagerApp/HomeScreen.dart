import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Linda C. Ng', style: TextStyle(fontSize: 18)),
Text('18 Feb 2022', style: TextStyle(fontSize: 14)),
],
),
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Implement search functionality
},
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
DailyProgressCard(),
SizedBox(height: 24),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text("Today's Task", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
TextButton(
child: Text('See All'),
onPressed: () {
Navigator.pushNamed(context, 'AllTasks');
},
),
],
),
SizedBox(height: 16),
Row(
children: [
Expanded(child: TaskCard(title: 'User experience design', progress: 40, color: Colors.blue)),
SizedBox(width: 16),
Expanded(child: TaskCard(title: 'Meeting with designer', progress: 60, color: Colors.orange)),
],
),
SizedBox(height: 24),
Text('Upcoming Task', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 16),
UpcomingTaskCard(title: 'Website Design', date: '23 Feb 2022'),
],
),
),
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
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Calendar');
} else if (index == 2) {
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
class DailyProgressCard extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Card(
color: Colors.indigo[800],
child: Padding(
padding: EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Your daily task\nalmost done!', style: TextStyle(color: Colors.white, fontSize: 18)),
SizedBox(height: 8),
ElevatedButton(
child: Text('View Task'),
onPressed: () {
Navigator.pushNamed(context, 'TaskDetails');
},
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
],
),
Stack(
alignment: Alignment.center,
children: [
SizedBox(
width: 80,
height: 80,
child: CircularProgressIndicator(
value: 0.95,
strokeWidth: 8,
backgroundColor: Colors.white.withOpacity(0.3),
valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
),
),
Text('95%', style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold)),
],
),
],
),
),
);
}
}
class TaskCard extends StatelessWidget {
final String title;
final int progress;
final Color color;
TaskCard({required this.title, required this.progress, required this.color});
@override
Widget build(BuildContext context) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'TaskDetails');
},
child: Card(
color: color,
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Icon(Icons.person, color: Colors.white),
SizedBox(height: 8),
Text(title, style: TextStyle(color: Colors.white, fontSize: 16)),
SizedBox(height: 8),
Text('Progress', style: TextStyle(color: Colors.white.withOpacity(0.7))),
SizedBox(height: 4),
LinearProgressIndicator(
value: progress / 100,
backgroundColor: Colors.white.withOpacity(0.3),
valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
),
SizedBox(height: 4),
Text('$progress%', style: TextStyle(color: Colors.white)),
],
),
),
),
);
}
}
class UpcomingTaskCard extends StatelessWidget {
final String title;
final String date;
UpcomingTaskCard({required this.title, required this.date});
@override
Widget build(BuildContext context) {
return Card(
child: ListTile(
leading: Icon(Icons.assignment, color: Colors.blue),
title: Text(title),
subtitle: Text(date),
trailing: Icon(Icons.more_vert),
onTap: () {
Navigator.pushNamed(context, 'TaskDetails');
},
),
);
}
}