import 'package:flutter/material.dart';
class ReminderScreen extends StatefulWidget {
@override
_ReminderScreenState createState() => _ReminderScreenState();
}
class _ReminderScreenState extends State<ReminderScreen> {
String selectedDosage = '';
TimeOfDay selectedTime = TimeOfDay(hour: 0, minute: 27);
List<TimeOfDay> additionalTimes = [];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Edit Reminder'),
leading: TextButton(
child: Text('Cancel'),
onPressed: () => Navigator.pushNamed(context, 'ResultDetail'),
),
),
body: SingleChildScrollView(
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Card(
child: ListTile(
leading: Image.asset('assets/images/template.png', width: 40, height: 40),
title: Text('Abilify', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
),
),
SizedBox(height: 20),
_buildListTile(
icon: Icons.medical_services,
title: 'Dosage',
trailing: Text(
selectedDosage.isEmpty ? 'Select Dosage' : selectedDosage,
style: TextStyle(color: Colors.blue),
),
onTap: _selectDosage,
),
_buildListTile(
icon: Icons.access_time,
title: 'Time',
trailing: Text(
selectedTime.format(context),
style: TextStyle(color: Colors.black),
),
onTap: () => _selectTime(context),
),
_buildListTile(
icon: Icons.access_time,
title: 'Add Another Time',
trailing: Text('Enter Time', style: TextStyle(color: Colors.grey)),
onTap: () => _addAnotherTime(context),
),
...additionalTimes.map((time) => _buildListTile(
icon: Icons.access_time,
title: 'Additional Time',
trailing: Text(time.format(context)),
onTap: () => _editAdditionalTime(context, time),
)),
],
),
),
),
bottomNavigationBar: Padding(
padding: EdgeInsets.all(16.0),
child: ElevatedButton(
child: Text('Done'),
onPressed: () {
// Save reminder logic here
Navigator.pushNamed(context, 'ResultDetail');
},
style: ElevatedButton.styleFrom(
minimumSize: Size(double.infinity, 50),
),
),
),
);
}
Widget _buildListTile({required IconData icon, required String title, required Widget trailing, required VoidCallback onTap}) {
return ListTile(
leading: Icon(icon, color: Colors.blue),
title: Text(title),
trailing: trailing,
onTap: onTap,
);
}
void _selectDosage() {
showModalBottomSheet(
context: context,
builder: (BuildContext context) {
return Container(
height: 200,
child: ListView(
children: ['5 mg', '10 mg', '15 mg', '20 mg', '30 mg'].map((String value) {
return ListTile(
title: Text(value),
onTap: () {
setState(() {
selectedDosage = value;
});
Navigator.pop(context);
},
);
}).toList(),
),
);
},
);
}
Future<void> _selectTime(BuildContext context) async {
final TimeOfDay? picked = await showTimePicker(
context: context,
initialTime: selectedTime,
);
if (picked != null && picked != selectedTime) {
setState(() {
selectedTime = picked;
});
}
}
Future<void> _addAnotherTime(BuildContext context) async {
final TimeOfDay? picked = await showTimePicker(
context: context,
initialTime: TimeOfDay.now(),
);
if (picked != null) {
setState(() {
additionalTimes.add(picked);
});
}
}
Future<void> _editAdditionalTime(BuildContext context, TimeOfDay currentTime) async {
final TimeOfDay? picked = await showTimePicker(
context: context,
initialTime: currentTime,
);
if (picked != null && picked != currentTime) {
setState(() {
additionalTimes[additionalTimes.indexOf(currentTime)] = picked;
});
}
}
}