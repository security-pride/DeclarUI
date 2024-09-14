import 'package:flutter/material.dart';
class NotificationScreen extends StatefulWidget {
@override
_NotificationScreenState createState() => _NotificationScreenState();
}
class _NotificationScreenState extends State<NotificationScreen> {
int _selectedIndex = 1;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Search'),
actions: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
elevation: 0,
backgroundColor: Colors.transparent,
foregroundColor: Colors.black,
),
body: ListView(
children: [
_buildDateSection('Today'),
_buildNotificationItem(
'Mohammad Reza',
'commented on your UI/UX Designer',
Icons.more_horiz,
),
_buildNotificationItem(
'Sandra Redden',
'like your Web UI Design Post',
Icons.favorite_border,
),
_buildNotificationItem(
'Merry Rose',
'joined to Final Presentation',
Icons.bolt,
),
_buildNotificationItem(
'Adan Eslishth',
'commented on your New shot',
Icons.comment_outlined,
),
_buildNotificationItem(
'Michael Pinson',
'want to follow you.',
Icons.person_add_outlined,
),
_buildDateSection('Yesterday'),
_buildNotificationItem(
'Merry Rose',
'joined to Final Presentation',
Icons.bolt,
),
_buildNotificationItem(
'Sandra Redden',
'like your Web UI Design Post',
Icons.favorite_border,
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Notification'),
BottomNavigationBarItem(icon: Icon(Icons.confirmation_number), label: 'Ticket'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: 'History'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Setting'),
],
type: BottomNavigationBarType.fixed,
),
);
}
Widget _buildDateSection(String date) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
date,
style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18),
),
);
}
Widget _buildNotificationItem(String name, String action, IconData iconData) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(name),
subtitle: Text('$action\nabout 2 hours ago'),
trailing: IconButton(
icon: Icon(iconData),
onPressed: () {},
),
);
}
}