import 'package:flutter/material.dart';
class HomeGridScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Home'),
actions: [
IconButton(
icon: Icon(Icons.settings),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.view_list),
onPressed: () {
Navigator.pushNamed(context, 'HomeList');
},
),
IconButton(
icon: Icon(Icons.sort_by_alpha),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.search),
onPressed: () {},
),
],
),
body: GridView.count(
crossAxisCount: 2,
children: [
_buildGridItem('Photos & videos', '3471 items', Colors.red),
_buildGridItem('Favourite videos', '13 items', Colors.blue),
_buildGridItem('iTunes', '27 items', Colors.orange),
_buildGridItem('Recently deleted', '13 items', Colors.black),
_buildImageItem('Plant photoshoot', '25.Feb 2020'),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.access_time), label: 'Recent'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
BottomNavigationBarItem(icon: Icon(Icons.wifi), label: 'Wi-Fi'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Stats'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Recents');
} else if (index == 3) {
Navigator.pushNamed(context, 'Connections');
}
},
),
);
}
Widget _buildGridItem(String title, String subtitle, Color color) {
return Card(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.folder, size: 50, color: color),
SizedBox(height: 8),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(subtitle, style: TextStyle(color: Colors.grey)),
Align(
alignment: Alignment.centerRight,
child: PopupMenuButton(
icon: Icon(Icons.more_vert),
itemBuilder: (context) => [
PopupMenuItem(child: Text('Option 1')),
PopupMenuItem(child: Text('Option 2')),
],
),
),
],
),
);
}
Widget _buildImageItem(String title, String date) {
return Card(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(
child: Image.asset(
'assets/images/template.png',
fit: BoxFit.cover,
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
child: PopupMenuButton(
icon: Icon(Icons.more_vert),
itemBuilder: (context) => [
PopupMenuItem(child: Text('Option 1')),
PopupMenuItem(child: Text('Option 2')),
],
),
),
],
),
);
}
}