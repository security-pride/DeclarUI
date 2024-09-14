import 'package:flutter/material.dart';
class CleanerScreen extends StatefulWidget {
const CleanerScreen({Key? key}) : super(key: key);
@override
_CleanerScreenState createState() => _CleanerScreenState();
}
class _CleanerScreenState extends State<CleanerScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Cleaner'),
actions: [
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
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Used'),
Text('Storage'),
],
),
SizedBox(height: 8),
LinearProgressIndicator(
value: 0.66,
backgroundColor: Colors.grey[300],
valueColor: AlwaysStoppedAnimation<Color>(Colors.blue),
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('66%'),
Text('85 GB of 128 GB'),
],
),
],
),
),
InkWell(
onTap: () {
// Clean junk files logic
},
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Clean Junk files'),
Icon(Icons.arrow_forward_ios, size: 16),
],
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Unused Apps'),
TextButton(
onPressed: () {
Navigator.pushNamed(context, 'StorageDetails');
},
child: Text('See All'),
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
_buildAppCard('Waze', '1.2 GB'),
_buildAppCard('LinkedIn', '1.2 GB'),
_buildAppCard('Adobe', '1.2 GB'),
_buildAppCard('Facebook', '1.2 GB'),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('Uninstall Apps (4.7 GB)'),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Duplicate files'),
TextButton(
onPressed: () {
Navigator.pushNamed(context, 'StorageDetails');
},
child: Text('See All'),
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Column(
children: [
_buildFileItem('DSC2021084133.jpg', '2 MB'),
_buildFileItem('RKAKL2022.xlsx', '2 MB'),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('Review files (1.2 GB)'),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 3,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.folder), label: 'Files'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Cloud'),
BottomNavigationBarItem(icon: Icon(Icons.cleaning_services), label: 'Clean'),
],
),
);
}
Widget _buildAppCard(String appName, String size) {
return Column(
children: [
Image.asset('assets/images/template.png', width: 48, height: 48),
SizedBox(height: 4),
Text(appName, style: TextStyle(fontSize: 12)),
Text(size, style: TextStyle(fontSize: 10, color: Colors.grey)),
],
);
}
Widget _buildFileItem(String fileName, String size) {
return Padding(
padding: const EdgeInsets.symmetric(vertical: 8.0),
child: Row(
children: [
Icon(Icons.insert_drive_file, color: Colors.blue),
SizedBox(width: 16),
Expanded(child: Text(fileName)),
Text(size, style: TextStyle(color: Colors.grey)),
],
),
);
}
}