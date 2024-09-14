import 'package:flutter/material.dart';
class AddTaskScreen extends StatefulWidget {
@override
_AddTaskScreenState createState() => _AddTaskScreenState();
}
class _AddTaskScreenState extends State<AddTaskScreen> {
DateTime _selectedDate = DateTime.now();
String _taskTitle = 'Website redesign';
String _taskType = 'Important';
String _selectedTime = '9:00 AM-12:00 PM';
bool _getAlert = true;
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Add New Task',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 25,
),
],
),
),
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
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Task title',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
TextField(
decoration: InputDecoration(
hintText: 'Enter task title',
),
onChanged: (value) {
setState(() {
_taskTitle = value;
});
},
controller: TextEditingController(text: _taskTitle),
),
SizedBox(height: 16),
Text(
'Task type',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Row(
children: [
ElevatedButton(
onPressed: () {
setState(() {
_taskType = 'Important';
});
},
child: Text('Important'),
style: ElevatedButton.styleFrom(
backgroundColor: _taskType == 'Important' ? Colors.orange : Colors.grey,
),
),
SizedBox(width: 16),
OutlinedButton(
onPressed: () {
setState(() {
_taskType = 'Personal';
});
},
child: Text('Personal'),
style: OutlinedButton.styleFrom(
side: BorderSide(color: _taskType == 'Personal' ? Colors.blue : Colors.grey),
),
),
],
),
SizedBox(height: 16),
Text(
'Choose date & time',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
TextField(
decoration: InputDecoration(
hintText: 'Date',
),
controller: TextEditingController(text: '${_selectedDate.day}-${_selectedDate.month}-${_selectedDate.year}'),
readOnly: true,
),
TextField(
decoration: InputDecoration(
hintText: 'Time',
),
controller: TextEditingController(text: _selectedTime),
onTap: () {
// Implement time picker here
},
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Get alert for this task',
style: TextStyle(fontSize: 18),
),
Switch(
value: _getAlert,
onChanged: (value) {
setState(() {
_getAlert = value;
});
},
),
],
),
SizedBox(height: 32),
SizedBox(
width: double.infinity,
child: ElevatedButton(
onPressed: () {
// Implement task saving logic here
Navigator.pop(context);
},
child: Text('Done'),
style: ElevatedButton.styleFrom(
padding: EdgeInsets.symmetric(vertical: 16),
),
),
),
],
),
),
],
),
),
),
);
}
}