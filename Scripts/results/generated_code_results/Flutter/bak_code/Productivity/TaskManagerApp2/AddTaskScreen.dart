import 'package:flutter/material.dart';
class AddTaskScreen extends StatefulWidget {
@override
_AddTaskScreenState createState() => _AddTaskScreenState();
}
class _AddTaskScreenState extends State<AddTaskScreen> {
String title = 'Plan for a month';
DateTime selectedDate = DateTime(2021, 8, 4);
TimeOfDay startTime = TimeOfDay(hour: 7, minute: 0);
TimeOfDay endTime = TimeOfDay(hour: 7, minute: 30);
String description = "Creating this month's work plan";
String selectedType = 'Personal';
List<String> selectedTags = ['Office'];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Add Task'),
),
body: SingleChildScrollView(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Title', style: TextStyle(fontWeight: FontWeight.bold)),
TextField(
controller: TextEditingController(text: title),
onChanged: (value) => setState(() => title = value),
),
SizedBox(height: 16),
Text('Date', style: TextStyle(fontWeight: FontWeight.bold)),
Row(
children: [
Text('${selectedDate.day}/${selectedDate.month}/${selectedDate.year}'),
IconButton(
icon: Icon(Icons.calendar_today),
onPressed: () async {
final DateTime? picked = await showDatePicker(
context: context,
initialDate: selectedDate,
firstDate: DateTime(2021),
lastDate: DateTime(2025),
);
if (picked != null) setState(() => selectedDate = picked);
},
),
],
),
SizedBox(height: 16),
Text('Time', style: TextStyle(fontWeight: FontWeight.bold)),
Row(
children: [
Text('${startTime.format(context)} - ${endTime.format(context)}'),
IconButton(
icon: Icon(Icons.access_time),
onPressed: () async {
final TimeOfDay? picked = await showTimePicker(
context: context,
initialTime: startTime,
);
if (picked != null) setState(() => startTime = picked);
},
),
],
),
SizedBox(height: 16),
Text('Description', style: TextStyle(fontWeight: FontWeight.bold)),
TextField(
controller: TextEditingController(text: description),
onChanged: (value) => setState(() => description = value),
maxLines: 3,
),
SizedBox(height: 16),
Text('Type', style: TextStyle(fontWeight: FontWeight.bold)),
Row(
children: ['Personal', 'Private', 'Secret'].map((type) {
return Row(
children: [
Radio<String>(
value: type,
groupValue: selectedType,
onChanged: (value) => setState(() => selectedType = value!),
),
Text(type),
],
);
}).toList(),
),
SizedBox(height: 16),
Text('Tags', style: TextStyle(fontWeight: FontWeight.bold)),
Wrap(
spacing: 8,
children: ['Office', 'Home', 'Urgent', 'Work'].map((tag) {
return FilterChip(
label: Text(tag),
selected: selectedTags.contains(tag),
onSelected: (bool selected) {
setState(() {
if (selected) {
selectedTags.add(tag);
} else {
selectedTags.remove(tag);
}
});
},
);
}).toList(),
),
TextButton(
child: Text('+ Add new tag'),
onPressed: () {
// Implement add new tag functionality
},
),
SizedBox(height: 16),
ElevatedButton(
child: Text('Create'),
onPressed: () {
// Save task logic here
Navigator.pushNamed(context, 'Home');
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
minimumSize: Size(double.infinity, 50),
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
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
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
}