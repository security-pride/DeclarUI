import 'package:flutter/material.dart';
class FilesScreen extends StatelessWidget {
final List<Map<String, dynamic>> folders = [
{'name': 'Alarms', 'items': 1, 'size': '1 KB'},
{'name': 'Android', 'items': 6, 'size': '12 MB'},
{'name': 'Backups', 'items': 1, 'size': '821 MB'},
{'name': 'Browser', 'items': 3, 'size': '204 KB'},
{'name': 'Canva', 'items': 23, 'size': '98 MB', 'favorite': true},
{'name': 'DCIM', 'items': 3, 'size': '18.4 GB'},
{'name': 'Documents', 'items': 6, 'size': '2.4 GB'},
{'name': 'Download', 'items': 5, 'size': '4.6 GB', 'favorite': true},
{'name': 'Notifications', 'items': 0, 'size': '0 B'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Internal Storage'),
actions: [
IconButton(
icon: Icon(Icons.add),
onPressed: () {
// Add new folder logic
},
),
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Search functionality
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
Icon(Icons.grid_view),
],
),
),
Expanded(
child: ListView.builder(
itemCount: folders.length,
itemBuilder: (context, index) {
final folder = folders[index];
return ListTile(
leading: folder['favorite'] == true
? Icon(Icons.folder, color: Colors.blue)
: Icon(Icons.folder),
title: Text(folder['name']),
subtitle: Text('${folder['items']} items | ${folder['size']}'),
trailing: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {
// Show more options
},
),
);
},
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
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
case 2:
Navigator.pushReplacementNamed(context, 'CloudStorage');
break;
case 3:
Navigator.pushReplacementNamed(context, 'Cleaner');
break;
}
},
),
);
}
}