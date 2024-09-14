import 'package:flutter/material.dart';
class DiscussionScreen extends StatefulWidget {
@override
_DiscussionScreenState createState() => _DiscussionScreenState();
}
class _DiscussionScreenState extends State<DiscussionScreen> {
final List<Map<String, dynamic>> messages = [
{
'user': 'Maya',
'content': "Here are the resource files of todays' physics class",
'files': ['Introduction to force', 'Work and energy'],
},
{
'user': 'Liana',
'content': 'Thanks a lot Maya\nIs anyone please share your class notes of this lecture.',
},
{
'user': 'Vishal',
'content': "I didn't write down class note of this lecture. But I have made powerpoint presentation on force, energy and work.",
'files': ['Force, Energy & Work'],
},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Discussion', style: TextStyle(fontSize: 14)),
Text('Physics', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
],
),
actions: [
IconButton(
icon: Icon(Icons.phone),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.videocam),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.info_outline),
onPressed: () {},
),
],
),
body: Column(
children: [
Expanded(
child: ListView.builder(
itemCount: messages.length,
itemBuilder: (context, index) {
final message = messages[index];
return MessageBubble(
user: message['user'],
content: message['content'],
files: message['files'],
isMe: message['user'] == 'Liana',
);
},
),
),
Container(
padding: EdgeInsets.symmetric(horizontal: 8.0),
height: 70.0,
color: Colors.white,
child: Row(
children: [
IconButton(
icon: Icon(Icons.add),
onPressed: () {},
),
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: 'Type something',
border: InputBorder.none,
),
),
),
IconButton(
icon: Icon(Icons.image),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.camera_alt),
onPressed: () {},
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 3,
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.list), label: 'Tasks'),
BottomNavigationBarItem(icon: Icon(Icons.school), label: 'Classroom'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
],
),
);
}
}
class MessageBubble extends StatelessWidget {
final String user;
final String content;
final List<String>? files;
final bool isMe;
MessageBubble({required this.user, required this.content, this.files, required this.isMe});
@override
Widget build(BuildContext context) {
return Container(
margin: EdgeInsets.symmetric(vertical: 10.0, horizontal: 8.0),
child: Row(
mainAxisAlignment: isMe ? MainAxisAlignment.end : MainAxisAlignment.start,
crossAxisAlignment: CrossAxisAlignment.start,
children: [
if (!isMe) CircleAvatar(backgroundImage: AssetImage('assets/images/template.png')),
SizedBox(width: 8.0),
Flexible(
child: Column(
crossAxisAlignment: isMe ? CrossAxisAlignment.end : CrossAxisAlignment.start,
children: [
if (!isMe) Text(user, style: TextStyle(fontWeight: FontWeight.bold)),
Container(
padding: EdgeInsets.all(12.0),
decoration: BoxDecoration(
color: isMe ? Colors.green : Colors.grey[200],
borderRadius: BorderRadius.circular(16.0),
),
child: Text(
content,
style: TextStyle(color: isMe ? Colors.white : Colors.black),
),
),
if (files != null)
...files!.map((file) => Container(
margin: EdgeInsets.only(top: 8.0),
padding: EdgeInsets.symmetric(vertical: 8.0, horizontal: 12.0),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(16.0),
),
child: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.insert_drive_file, size: 20.0),
SizedBox(width: 8.0),
Text(file),
SizedBox(width: 8.0),
Icon(Icons.download, size: 20.0),
],
),
)),
],
),
),
SizedBox(width: 8.0),
if (isMe) CircleAvatar(backgroundImage: AssetImage('assets/images/template.png')),
],
),
);
}
}