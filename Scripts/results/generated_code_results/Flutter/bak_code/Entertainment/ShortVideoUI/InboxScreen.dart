import 'package:flutter/material.dart';
class InboxScreen extends StatefulWidget {
const InboxScreen({Key? key}) : super(key: key);
@override
_InboxScreenState createState() => _InboxScreenState();
}
class _InboxScreenState extends State<InboxScreen> {
int _selectedIndex = 3;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.white,
elevation: 0,
title: Row(
children: [
Text(
'All activity',
style: TextStyle(color: Colors.black),
),
Icon(Icons.arrow_drop_down, color: Colors.black),
],
),
actions: [
IconButton(
icon: Icon(Icons.send, color: Colors.black),
onPressed: () {},
),
],
leading: Text(
'9:41',
style: TextStyle(color: Colors.black),
),
),
body: Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(
Icons.message_outlined,
size: 64,
color: Colors.grey,
),
SizedBox(height: 16),
Text(
"Notifications aren't available",
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text(
'Notifications about your account will appear here',
style: TextStyle(color: Colors.grey),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
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
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Discover'),
BottomNavigationBarItem(
icon: Container(
width: 48,
height: 27,
decoration: BoxDecoration(
color: Colors.black,
borderRadius: BorderRadius.circular(8),
),
child: Icon(Icons.add, color: Colors.white),
),
label: '',
),
BottomNavigationBarItem(icon: Icon(Icons.inbox), label: 'Inbox'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Me'),
],
),
);
}
}