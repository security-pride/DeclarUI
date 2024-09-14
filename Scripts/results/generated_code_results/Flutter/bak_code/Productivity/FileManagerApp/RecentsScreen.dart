import 'package:flutter/material.dart';
class RecentsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Recents'),
leading: IconButton(
icon: Icon(Icons.list),
onPressed: () {},
),
actions: [
TextButton(
child: Text('Select'),
onPressed: () {},
),
],
),
body: GridView.count(
crossAxisCount: 2,
childAspectRatio: 0.8,
children: [
_buildImageItem('Ricardo', '15.Feb 2020'),
_buildVideoItem('Sand pot', '25.Feb 2020'),
_buildImageItemWithHeart('Subramani', '15.Feb 2020'),
_buildImageItem('Ricardo', '15.Feb 2020'),
_buildImageItem('Unknown', 'Unknown'),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.access_time), label: 'Recent'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
BottomNavigationBarItem(icon: Icon(Icons.wifi), label: 'Wi-Fi'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Stats'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'HomeGrid');
} else if (index == 3) {
Navigator.pushNamed(context, 'Connections');
}
},
),
);
}
Widget _buildImageItem(String title, String date) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(
child: ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
),
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(date, style: TextStyle(color: Colors.grey)),
],
),
),
Align(
alignment: Alignment.centerRight,
child: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
),
],
),
);
}
Widget _buildVideoItem(String title, String date) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(
child: Stack(
fit: StackFit.expand,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
),
),
Center(
child: IconButton(
icon: Icon(Icons.play_circle_filled, size: 50, color: Colors.white),
onPressed: () {},
),
),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(date, style: TextStyle(color: Colors.grey)),
],
),
),
Align(
alignment: Alignment.centerRight,
child: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
),
],
),
);
}
Widget _buildImageItemWithHeart(String title, String date) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(
child: Stack(
fit: StackFit.expand,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
),
),
Positioned(
top: 8,
right: 8,
child: Icon(Icons.favorite, color: Colors.red),
),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(date, style: TextStyle(color: Colors.grey)),
],
),
),
Align(
alignment: Alignment.centerRight,
child: IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
),
],
),
);
}
}