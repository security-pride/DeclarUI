import 'package:flutter/material.dart';
class HomePageScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('File Manager'),
actions: [
Padding(
padding: const EdgeInsets.only(right: 16.0),
child: Text('9:41'),
),
],
),
body: SingleChildScrollView(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
TextField(
decoration: InputDecoration(
hintText: 'Search folder or files',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
SizedBox(height: 20),
_buildStorageCard(
'Internal Storage',
'85 GB of 128 GB used',
0.66,
'View Details',
() => Navigator.pushNamed(context, 'StorageDetails'),
),
SizedBox(height: 16),
_buildStorageCard(
'Cloud Storage',
'131 GB of 2 TB used',
0.37,
'Go to storage lists',
() => Navigator.pushNamed(context, 'CloudStorage'),
),
SizedBox(height: 20),
_buildSectionHeader('Favorites', () {}),
_buildFavoriteItem('Download', '5 items | 4.6 GB'),
_buildFavoriteItem('Canva', '31 item | 821 MB'),
SizedBox(height: 20),
_buildSectionHeader('Recent Files', () {}),
_buildRecentFile('DSC2021084133.jpg', '2MB'),
_buildRecentFile('RKAKL2022.xlsx', '140Kb'),
],
),
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Files'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Cloud'),
BottomNavigationBarItem(icon: Icon(Icons.cleaning_services), label: 'Clean'),
],
onTap: (index) {
switch (index) {
case 1:
Navigator.pushNamed(context, 'Files');
break;
case 2:
Navigator.pushNamed(context, 'CloudStorage');
break;
case 3:
Navigator.pushNamed(context, 'Cleaner');
break;
}
},
),
);
}
Widget _buildStorageCard(String title, String subtitle, double progress, String actionText, VoidCallback onTap) {
return Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
CircularProgressIndicator(
value: progress,
backgroundColor: Colors.grey[300],
valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(subtitle),
],
),
),
],
),
SizedBox(height: 8),
GestureDetector(
onTap: onTap,
child: Text(
actionText,
style: TextStyle(color: Colors.blue),
),
),
],
),
),
);
}
Widget _buildSectionHeader(String title, VoidCallback onSeeAllTap) {
return Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
TextButton(
onPressed: onSeeAllTap,
child: Text('See All'),
),
],
);
}
Widget _buildFavoriteItem(String name, String details) {
return ListTile(
leading: Stack(
children: [
Icon(Icons.folder, color: Colors.yellow, size: 40),
Positioned(
right: 0,
bottom: 0,
child: Icon(Icons.favorite, color: Colors.red, size: 16),
),
],
),
title: Text(name),
subtitle: Text(details),
trailing: Icon(Icons.more_vert),
);
}
Widget _buildRecentFile(String name, String size) {
return ListTile(
leading: Icon(Icons.insert_drive_file, color: Colors.blue),
title: Text(name),
trailing: Text(size),
);
}
}