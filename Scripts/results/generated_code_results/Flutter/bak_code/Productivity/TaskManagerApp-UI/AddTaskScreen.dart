import 'package:flutter/material.dart';
class AddTaskScreen extends StatefulWidget {
@override
_AddTaskScreenState createState() => _AddTaskScreenState();
}
class _AddTaskScreenState extends State<AddTaskScreen> {
String selectedDate = 'May 01, 2020';
String startTime = '10:00 AM';
String endTime = '01:00 PM';
String selectedBoard = 'RUNNING';
List<String> selectedMembers = ['Parkao'];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Add Task'),
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
Icon(Icons.signal_cellular_alt),
SizedBox(width: 8),
Icon(Icons.wifi),
],
),
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('TASK NAME', style: TextStyle(color: Colors.grey)),
TextField(
decoration: InputDecoration(
hintText: 'Enter task name',
),
),
SizedBox(height: 20),
Text('TEAM MEMBER', style: TextStyle(color: Colors.grey)),
SizedBox(height: 10),
Wrap(
spacing: 8,
children: [
_buildMemberAvatar('John', 'assets/images/template.png'),
_buildMemberAvatar('Ranak', 'assets/images/template.png'),
_buildMemberAvatar('Parkao', 'assets/images/template.png', isSelected: true),
_buildMemberAvatar('Mahmud', 'assets/images/template.png'),
CircleAvatar(
child: Icon(Icons.add, color: Colors.blue),
backgroundColor: Colors.transparent,
foregroundColor: Colors.blue,
),
],
),
SizedBox(height: 20),
Text('DATE', style: TextStyle(color: Colors.grey)),
Row(
children: [
Text(selectedDate, style: TextStyle(fontSize: 16)),
Spacer(),
IconButton(
icon: Icon(Icons.calendar_today),
onPressed: () {
// TODO: Implement date picker
},
),
],
),
SizedBox(height: 20),
Row(
children: [
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('START TIME', style: TextStyle(color: Colors.grey)),
Text(startTime, style: TextStyle(fontSize: 16)),
],
),
),
Icon(Icons.arrow_drop_down),
SizedBox(width: 20),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('END TIME', style: TextStyle(color: Colors.grey)),
Text(endTime, style: TextStyle(fontSize: 16)),
],
),
),
Icon(Icons.arrow_drop_down),
],
),
SizedBox(height: 20),
Text('DESCRIPTION', style: TextStyle(color: Colors.grey)),
TextField(
decoration: InputDecoration(
hintText: 'Enter description',
),
maxLines: 3,
),
SizedBox(height: 20),
Text('BOARD', style: TextStyle(color: Colors.grey)),
SizedBox(height: 10),
Wrap(
spacing: 8,
children: [
_buildBoardChip('URGENT', Colors.red),
_buildBoardChip('RUNNING', Colors.green),
_buildBoardChip('ONGOING', Colors.blue),
Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
border: Border.all(color: Colors.grey),
borderRadius: BorderRadius.circular(20),
),
child: Icon(Icons.add, size: 20),
),
],
),
],
),
),
),
bottomNavigationBar: Container(
padding: EdgeInsets.all(16),
child: ElevatedButton(
child: Text('Done'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
padding: EdgeInsets.symmetric(vertical: 16),
),
onPressed: () {
// TODO: Implement task saving logic
Navigator.pop(context);
},
),
),
);
}
Widget _buildMemberAvatar(String name, String imagePath, {bool isSelected = false}) {
return Column(
children: [
Stack(
children: [
CircleAvatar(
backgroundImage: AssetImage(imagePath),
radius: 30,
),
if (isSelected)
Positioned(
right: 0,
bottom: 0,
child: CircleAvatar(
backgroundColor: Colors.blue,
radius: 12,
child: Icon(Icons.check, color: Colors.white, size: 16),
),
),
],
),
SizedBox(height: 4),
Text(name, style: TextStyle(fontSize: 12)),
],
);
}
Widget _buildBoardChip(String label, Color color) {
return ChoiceChip(
label: Text(label),
selected: selectedBoard == label,
selectedColor: color,
onSelected: (bool selected) {
setState(() {
selectedBoard = selected ? label : selectedBoard;
});
},
);
}
}