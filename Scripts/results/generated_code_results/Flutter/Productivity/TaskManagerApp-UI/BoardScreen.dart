import 'package:flutter/material.dart';
class BoardScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Board', style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
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
body: GridView.count(
crossAxisCount: 2,
padding: EdgeInsets.all(16),
childAspectRatio: 1.2,
children: [
_buildBoardCard(context, 'Personal', Icons.person, '17 Task', Colors.blue),
_buildBoardCard(context, 'Work', Icons.work, '10 Task', Colors.orange),
_buildBoardCard(context, 'Private', Icons.lock, '2 Task', Colors.green),
_buildBoardCard(context, 'Meeting', Icons.people, '5 Task', Colors.purple),
_buildBoardCard(context, 'Events', Icons.event, '3 Task', Colors.red),
_buildCreateBoardCard(context),
],
),
bottomNavigationBar: BottomAppBar(
shape: CircularNotchedRectangle(),
notchMargin: 8.0,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(icon: Icon(Icons.grid_view), onPressed: () {}),
IconButton(
icon: Icon(Icons.check_circle_outline),
onPressed: () => Navigator.pushNamed(context, 'Dashboard'),
),
SizedBox(width: 48),
IconButton(
icon: Icon(Icons.description_outlined),
onPressed: () => Navigator.pushNamed(context, 'Task'),
),
IconButton(
icon: Icon(Icons.chat_bubble_outline),
onPressed: () => Navigator.pushNamed(context, 'Message'),
),
],
),
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
backgroundColor: Colors.orange,
onPressed: () => Navigator.pushNamed(context, 'AddTask'),
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
);
}
Widget _buildBoardCard(BuildContext context, String title, IconData icon, String taskCount, Color color) {
return Card(
elevation: 2,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
child: InkWell(
onTap: () {
// TODO: Implement board specific action
},
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Container(
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: color.withOpacity(0.1),
borderRadius: BorderRadius.circular(12),
),
child: Icon(icon, color: color, size: 32),
),
SizedBox(height: 16),
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Text(taskCount, style: TextStyle(color: Colors.grey)),
],
),
),
),
);
}
Widget _buildCreateBoardCard(BuildContext context) {
return Card(
elevation: 2,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
child: InkWell(
onTap: () {
// TODO: Implement create board action
},
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Container(
padding: EdgeInsets.all(12),
decoration: BoxDecoration(
color: Colors.green.withOpacity(0.1),
borderRadius: BorderRadius.circular(12),
),
child: Icon(Icons.add, color: Colors.green, size: 32),
),
SizedBox(height: 16),
Text('Create Board', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
],
),
),
),
);
}
}