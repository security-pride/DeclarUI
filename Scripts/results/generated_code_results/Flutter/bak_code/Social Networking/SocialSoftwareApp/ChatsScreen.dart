import 'package:flutter/material.dart';
class ChatsPage extends StatefulWidget {
@override
_ChatsPageState createState() => _ChatsPageState();
}
class _ChatsPageState extends State<ChatsPage> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Chats'),
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
actions: [
IconButton(
icon: Icon(Icons.camera_alt),
onPressed: () {
// Open camera
},
),
IconButton(
icon: Icon(Icons.edit),
onPressed: () {
Navigator.pushNamed(context, 'NewMessage');
},
),
],
),
body: Column(
children: [
Padding(
padding: EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
Container(
height: 100,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildStoryItem('Your story', isAdd: true),
_buildStoryItem('Joshua', isActive: true),
_buildStoryItem('Martin', isActive: true),
_buildStoryItem('Karen', isActive: true),
_buildStoryItem('Martha', isActive: true),
],
),
),
Expanded(
child: ListView(
children: [
_buildChatItem('Martin Randolph', "You: What's man!", '9:40 AM'),
_buildChatItem('Andrew Parker', 'You: Ok, thanks!', '9:25 AM', isRead: true),
_buildChatItem('Karen Castillo', 'You: Ok, See you in To...', 'Fri', isRead: true),
_buildChatItem('Maisy Humphrey', 'Have a good day, Maisy!', 'Fri', isRead: true),
_buildChatItem('Joshua Lawrence', 'The business plan loo...', 'Thu', isRead: true),
_buildAdItem(),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chats'),
BottomNavigationBarItem(icon: Icon(Icons.people), label: 'People'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'People');
}
},
),
);
}
Widget _buildStoryItem(String name, {bool isAdd = false, bool isActive = false}) {
return Container(
width: 70,
margin: EdgeInsets.symmetric(horizontal: 4),
child: Column(
children: [
Stack(
children: [
CircleAvatar(
radius: 30,
backgroundImage: AssetImage('assets/images/template.png'),
),
if (isAdd)
Positioned(
right: 0,
bottom: 0,
child: CircleAvatar(
radius: 10,
backgroundColor: Colors.blue,
child: Icon(Icons.add, size: 15, color: Colors.white),
),
),
if (isActive)
Positioned(
right: 0,
bottom: 0,
child: Container(
width: 15,
height: 15,
decoration: BoxDecoration(
color: Colors.green,
shape: BoxShape.circle,
border: Border.all(color: Colors.white, width: 2),
),
),
),
],
),
SizedBox(height: 4),
Text(name, overflow: TextOverflow.ellipsis),
],
),
);
}
Widget _buildChatItem(String name, String message, String time, {bool isRead = false}) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(name),
subtitle: Text(message),
trailing: Column(
mainAxisAlignment: MainAxisAlignment.center,
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(time, style: TextStyle(fontSize: 12)),
if (isRead) Icon(Icons.check, size: 16, color: Colors.blue),
],
),
onTap: () {
Navigator.pushNamed(context, 'Intro');
},
);
}
Widget _buildAdItem() {
return ListTile(
leading: Image.asset('assets/images/template.png', width: 40, height: 40),
title: Row(
children: [
Text('Pixsellz'),
SizedBox(width: 4),
Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
decoration: BoxDecoration(
color: Colors.grey[300],
borderRadius: BorderRadius.circular(4),
),
child: Text('Ad', style: TextStyle(fontSize: 10)),
),
],
),
subtitle: Text('Make design process easier...'),
trailing: Text('View More', style: TextStyle(color: Colors.blue)),
);
}
}