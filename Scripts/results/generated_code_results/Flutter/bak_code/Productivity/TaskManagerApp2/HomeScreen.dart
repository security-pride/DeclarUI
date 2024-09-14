import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Hi, Steven',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text("Let's make this day productive"),
],
),
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'My Task',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: GridView.count(
shrinkWrap: true,
crossAxisCount: 2,
childAspectRatio: 1.5,
crossAxisSpacing: 16,
mainAxisSpacing: 16,
children: [
_buildTaskCard('Complete', '8 Task', Colors.blue, 'assets/images/template.png'),
_buildTaskCard('Pending', '1 Task', Colors.purple, 'assets/images/template.png'),
_buildTaskCard('Canceled', '1 Task', Colors.red, 'assets/images/template.png'),
_buildTaskCard('On Going', '67 Task', Colors.green, 'assets/images/template.png'),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Today Task',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
TextButton(
onPressed: () {
Navigator.pushNamed(context, 'Calendar');
},
child: Text('View all'),
),
],
),
),
Expanded(
child: ListView(
children: [
_buildTodayTaskItem('Cleaning Clothes', '07:00 - 07:15', ['Urgent', 'Home']),
_buildTodayTaskItem('Cleaning Clothes', '08:00 - 08:35', ['Urgent', 'Home']),
],
),
),
],
),
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
onPressed: () {
Navigator.pushNamed(context, 'AddTask');
},
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
bottomNavigationBar: BottomAppBar(
shape: CircularNotchedRectangle(),
notchMargin: 8.0,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.home),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
IconButton(
icon: Icon(Icons.list),
onPressed: () {
Navigator.pushNamed(context, 'Calendar');
},
),
SizedBox(width: 48),
IconButton(
icon: Icon(Icons.bar_chart),
onPressed: () {
Navigator.pushNamed(context, 'Statistics');
},
),
IconButton(
icon: Icon(Icons.person),
onPressed: () {
Navigator.pushNamed(context, 'Profile');
},
),
],
),
),
);
}
Widget _buildTaskCard(String title, String subtitle, Color color, String imagePath) {
return Card(
color: color,
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset(imagePath, width: 24, height: 24),
Spacer(),
Text(
title,
style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),
),
Text(
subtitle,
style: TextStyle(color: Colors.white),
),
],
),
),
);
}
Widget _buildTodayTaskItem(String title, String time, List<String> tags) {
return ListTile(
leading: Container(
width: 4,
color: Colors.blue,
),
title: Text(title),
subtitle: Text(time),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
...tags.map((tag) => Container(
margin: EdgeInsets.only(right: 4),
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: tag == 'Urgent' ? Colors.red[100] : Colors.blue[100],
borderRadius: BorderRadius.circular(12),
),
child: Text(tag, style: TextStyle(fontSize: 12)),
)),
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {
// Show more options
},
),
],
),
);
}
}