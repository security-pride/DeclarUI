import 'package:flutter/material.dart';
class CloudStorageListViewScreen extends StatefulWidget {
const CloudStorageListViewScreen({Key? key}) : super(key: key);
@override
_CloudStorageListViewScreenState createState() => _CloudStorageListViewScreenState();
}
class _CloudStorageListViewScreenState extends State<CloudStorageListViewScreen> {
String sortOrder = 'A - Z';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Cloud Storage'),
actions: [
IconButton(
icon: Icon(Icons.add),
onPressed: () {
// Add new folder or upload logic
},
),
IconButton(
icon: Icon(Icons.grid_view),
onPressed: () {
Navigator.pushReplacementNamed(context, 'CloudStorage');
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
GestureDetector(
onTap: () {
setState(() {
sortOrder = sortOrder == 'A - Z' ? 'Z - A' : 'A - Z';
});
},
child: Row(
children: [
Text(sortOrder),
Icon(Icons.arrow_drop_down),
],
),
),
],
),
),
Expanded(
child: ListView(
children: [
_buildCloudStorageItem('Dropbox', '2 items | 1.2 Gb', 'assets/images/template.png'),
_buildCloudStorageItem('Kangxpukul@gmail.com', '4 items | 13.5 Gb', 'assets/images/template.png'),
_buildCloudStorageItem('Nirwna - OneDrive', '5 items | 164.3 Gb', 'assets/images/template.png'),
_buildCloudStorageItem('PIDT - OneDrive', '7 items | 131.1 Gb', 'assets/images/template.png'),
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
Widget _buildCloudStorageItem(String title, String subtitle, String iconPath) {
return ListTile(
leading: Image.asset(iconPath, width: 40, height: 40),
title: Text(title),
subtitle: Text(subtitle),
trailing: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {
// Show more options
},
),
);
}
}