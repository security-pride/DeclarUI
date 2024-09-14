import 'package:flutter/material.dart';
class CloudStorageScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Cloud Storage'),
actions: [
IconButton(
icon: Icon(Icons.add),
onPressed: () {
// Add new cloud storage
},
),
IconButton(
icon: Icon(Icons.list),
onPressed: () {
Navigator.pushNamed(context, 'CloudStorage-ListView');
},
),
Padding(
padding: const EdgeInsets.only(right: 16.0),
child: Text('9:41'),
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
Text('A - Z'),
Icon(Icons.arrow_drop_down),
],
),
Icon(Icons.wifi),
],
),
),
Expanded(
child: GridView.count(
crossAxisCount: 2,
childAspectRatio: 1.2,
padding: EdgeInsets.all(16),
children: [
_buildCloudStorageCard('Dropbox', '2 items', '1.2 Gb', 0.12),
_buildCloudStorageCard('Kangxpukul@gmail.com', '4 items', '13.5 Gb', 0.52),
_buildCloudStorageCard('Nirwna - OneDrive', '5 items', '164.3 Gb', 0.31),
_buildCloudStorageCard('PIDT - OneDrive', '7 items', '131.1 Gb', 0.62),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Files'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Cloud'),
BottomNavigationBarItem(icon: Icon(Icons.cleaning_services), label: 'Clean'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushReplacementNamed(context, 'HomePage');
break;
case 1:
Navigator.pushReplacementNamed(context, 'Files');
break;
case 3:
Navigator.pushReplacementNamed(context, 'Cleaner');
break;
}
},
),
);
}
Widget _buildCloudStorageCard(String title, String items, String size, double progress) {
return Card(
child: Padding(
padding: const EdgeInsets.all(12.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {
// Show more options
},
),
],
),
SizedBox(height: 8),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 4),
Text('$items | $size'),
SizedBox(height: 8),
LinearProgressIndicator(
value: progress,
backgroundColor: Colors.grey[300],
valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
),
],
),
),
);
}
}