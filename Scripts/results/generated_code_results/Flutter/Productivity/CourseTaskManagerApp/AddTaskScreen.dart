import 'package:flutter/material.dart';
class AddTaskScreen extends StatefulWidget {
@override
_AddTaskScreenState createState() => _AddTaskScreenState();
}
class _AddTaskScreenState extends State<AddTaskScreen> {
String selectedCategory = 'Class';
String selectedSubject = 'Biology';
String topicName = '';
DateTime selectedDate = DateTime(2020, 9, 25);
TimeOfDay selectedTime = TimeOfDay(hour: 9, minute: 30);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Add a task'),
actions: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
],
),
body: SingleChildScrollView(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Category', style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Wrap(
spacing: 8,
children: ['Class', 'Exam', 'Lab', 'Assignment', 'Presentation'].map((category) {
return ElevatedButton(
onPressed: () => setState(() => selectedCategory = category),
style: ElevatedButton.styleFrom(
backgroundColor: selectedCategory == category ? Colors.blue : Colors.grey[300],
),
child: Text(category),
);
}).toList(),
),
SizedBox(height: 16),
ListTile(
leading: Icon(Icons.subject),
title: Text(selectedSubject),
trailing: Icon(Icons.arrow_drop_down),
onTap: () {
// Implement subject selection
},
),
TextField(
decoration: InputDecoration(
labelText: 'Topic / Chapter Name',
border: OutlineInputBorder(),
),
onChanged: (value) => topicName = value,
),
SizedBox(height: 16),
Row(
children: [
Icon(Icons.calendar_today),
SizedBox(width: 8),
Text('${selectedDate.day}/${selectedDate.month}/${selectedDate.year}'),
Spacer(),
TextButton(
onPressed: () async {
final date = await showDatePicker(
context: context,
initialDate: selectedDate,
firstDate: DateTime(2020),
lastDate: DateTime(2025),
);
if (date != null) setState(() => selectedDate = date);
},
child: Text('Change'),
),
],
),
SizedBox(height: 16),
Row(
children: [
Icon(Icons.access_time),
SizedBox(width: 8),
Text('${selectedTime.format(context)}'),
Spacer(),
TextButton(
onPressed: () async {
final time = await showTimePicker(
context: context,
initialTime: selectedTime,
);
if (time != null) setState(() => selectedTime = time);
},
child: Text('Change'),
),
],
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Tasks'),
BottomNavigationBarItem(icon: Icon(Icons.school), label: 'Classroom'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
floatingActionButton: ElevatedButton(
onPressed: () {
// Implement add task logic
Navigator.pushNamed(context, 'Home');
},
child: Text('Add Task'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.green,
minimumSize: Size(double.infinity, 50),
),
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerFloat,
);
}
}