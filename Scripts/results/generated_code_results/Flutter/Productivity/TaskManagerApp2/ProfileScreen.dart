import 'package:flutter/material.dart';
class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.transparent,
elevation: 0,
actions: [
IconButton(
icon: Icon(Icons.more_vert, color: Colors.black),
onPressed: () {
// Handle more options
},
),
],
),
body: Column(
children: [
CircleAvatar(
radius: 50,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 16),
Text(
'Steve Job',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'SteveJob@gmail.com',
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 32),
Expanded(
child: GridView.count(
crossAxisCount: 2,
padding: EdgeInsets.all(16),
childAspectRatio: 1.5,
children: [
_buildTaskCategory('Personal', Icons.person, '6 Task', Colors.blue[100]!),
_buildTaskCategory('Work', Icons.work, '8 Task', Colors.green[100]!),
_buildTaskCategory('Private', Icons.lock, '3 Task', Colors.red[100]!),
_buildTaskCategory('Meeting', Icons.group, '4 Task', Colors.orange[100]!),
_buildTaskCategory('Events', Icons.event, '4 Task', Colors.purple[100]!),
_buildCreateBoard(),
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
IconButton(icon: Icon(Icons.list), onPressed: () {}),
SizedBox(width: 48),
IconButton(icon: Icon(Icons.bar_chart), onPressed: () {}),
IconButton(
icon: Icon(Icons.person, color: Colors.blue),
onPressed: () {},
),
],
),
),
);
}
Widget _buildTaskCategory(String title, IconData iconData, String taskCount, Color color) {
return Card(
color: color,
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(iconData, size: 40),
SizedBox(height: 8),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(taskCount),
],
),
);
}
Widget _buildCreateBoard() {
return Card(
color: Colors.pink[100],
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.add_box_outlined, size: 40),
SizedBox(height: 8),
Text('Create Board', style: TextStyle(fontWeight: FontWeight.bold)),
],
),
);
}
}