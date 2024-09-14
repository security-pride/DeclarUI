import 'package:flutter/material.dart';
class PersonalCentralScreen extends StatefulWidget {
const PersonalCentralScreen({Key? key}) : super(key: key);
@override
_PersonalCentralScreenState createState() => _PersonalCentralScreenState();
}
class _PersonalCentralScreenState extends State<PersonalCentralScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Apps'),
),
title: Text('9:13'),
actions: [
Container(
width: 40,
height: 40,
decoration: BoxDecoration(
shape: BoxShape.circle,
color: Colors.black,
),
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 30,
),
title: Text(
'Tap to sign in',
style: TextStyle(fontWeight: FontWeight.bold),
),
trailing: Icon(Icons.arrow_forward_ios),
onTap: () {
// Handle sign in action
},
),
Card(
margin: EdgeInsets.all(16),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('My Rewards'),
Text('0', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
],
),
Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text("Today's points"),
Text('0/30'),
],
),
],
),
SizedBox(height: 8),
LinearProgressIndicator(value: 0),
],
),
),
),
_buildListTile(Icons.notifications, 'Notifications', () {}),
_buildListTile(Icons.settings, 'Settings', () {
Navigator.pushNamed(context, 'Settings');
}),
_buildListTile(Icons.star, 'Interests', () {}),
_buildListTile(Icons.history, 'History', () {}),
_buildListTile(Icons.bookmark, 'Bookmarks and saves', () {}),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 4:
Navigator.pushNamed(context, 'Apps');
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Weather'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.tab),
Positioned(
right: 0,
child: Container(
padding: EdgeInsets.all(1),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(
minWidth: 12,
minHeight: 12,
),
child: Text(
'4',
style: TextStyle(
color: Colors.white,
fontSize: 8,
),
textAlign: TextAlign.center,
),
),
),
],
),
label: 'Tabs',
),
BottomNavigationBarItem(icon: Icon(Icons.apps), label: 'Apps'),
],
),
);
}
Widget _buildListTile(IconData icon, String title, VoidCallback onTap) {
return ListTile(
leading: Icon(icon),
title: Text(title),
onTap: onTap,
);
}
}