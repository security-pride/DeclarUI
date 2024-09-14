import 'package:flutter/material.dart';
class MeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Me'),
actions: [
IconButton(
icon: Icon(Icons.settings),
onPressed: () {
Navigator.pushNamed(context, 'Settings');
},
),
],
),
body: ListView(
children: [
Column(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
SizedBox(height: 10),
Text('Opera News', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
],
),
ListTile(
leading: Icon(Icons.cloud_download),
title: Text('Offline reading'),
subtitle: Text('Read news without the internet'),
trailing: Icon(Icons.chevron_right),
onTap: () {
Navigator.pushNamed(context, 'OfflineReading');
},
),
ListTile(
leading: Icon(Icons.access_time),
title: Text('Read it later'),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Implement Read it later functionality
},
),
ListTile(
leading: Icon(Icons.block),
title: Text('Blocked users'),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Implement Blocked users functionality
},
),
ListTile(
leading: Icon(Icons.language),
title: Text('Country & language'),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Implement Country & language functionality
},
),
ListTile(
leading: Icon(Icons.nightlight_round),
title: Text('Dark mode'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Text('Automatic'),
Icon(Icons.chevron_right),
],
),
onTap: () {
// Implement Dark mode functionality
},
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: 'Me',
),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
}