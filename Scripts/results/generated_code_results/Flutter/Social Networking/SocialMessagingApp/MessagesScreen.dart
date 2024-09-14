import 'package:flutter/material.dart';
class MessagesScreen extends StatelessWidget {
final List<Map<String, dynamic>> messages = [
{'name': 'Antonio Banderas', 'lastMessage': "You're welcome", 'time': '9:39', 'status': 'Online', 'initials': 'AB'},
{'name': 'Chris Evans', 'lastMessage': 'Hello there?', 'time': '8:45', 'initials': 'CE'},
{'name': 'Scarlett Johansson', 'lastMessage': 'Thanks ray!', 'time': '8:30', 'unreadCount': 2, 'status': 'Online', 'initials': 'AB'},
{'name': 'Billie Eilish', 'lastMessage': 'Okay thank you billie', 'time': '7:55', 'status': 'Online', 'initials': 'AB'},
{'name': 'Dasha Taran', 'lastMessage': 'Photo', 'time': '6:00', 'unreadCount': 2, 'initials': 'DT'},
{'name': 'Ilay Serah', 'lastMessage': 'Video', 'time': 'Yesterday', 'unreadCount': 2, 'initials': 'IS'},
{'name': 'Emily Blunt', 'lastMessage': 'Audio', 'time': 'Yesterday', 'initials': 'EB'},
{'name': 'Johnny Deep', 'lastMessage': 'Cool!', 'time': 'Yesterday', 'initials': 'JD'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Messages'),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () => Navigator.pushNamed(context, 'Search'),
),
],
),
body: ListView.builder(
itemCount: messages.length,
itemBuilder: (context, index) {
final message = messages[index];
return ListTile(
leading: Stack(
children: [
CircleAvatar(
backgroundColor: Colors.grey[300],
child: Text(message['initials']),
),
if (message['status'] == 'Online')
Positioned(
right: 0,
bottom: 0,
child: Container(
width: 12,
height: 12,
decoration: BoxDecoration(
color: Colors.green,
shape: BoxShape.circle,
border: Border.all(color: Colors.white, width: 2),
),
),
),
],
),
title: Text(message['name']),
subtitle: Row(
children: [
if (message['lastMessage'] == 'Photo')
Icon(Icons.photo, size: 16, color: Colors.grey)
else if (message['lastMessage'] == 'Video')
Icon(Icons.videocam, size: 16, color: Colors.grey)
else if (message['lastMessage'] == 'Audio')
Icon(Icons.mic, size: 16, color: Colors.grey),
SizedBox(width: 4),
Expanded(
child: Text(
message['lastMessage'],
maxLines: 1,
overflow: TextOverflow.ellipsis,
),
),
],
),
trailing: Column(
mainAxisAlignment: MainAxisAlignment.center,
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(message['time'], style: TextStyle(fontSize: 12)),
if (message['unreadCount'] != null)
Container(
padding: EdgeInsets.all(6),
decoration: BoxDecoration(
color: Colors.blue,
shape: BoxShape.circle,
),
child: Text(
message['unreadCount'].toString(),
style: TextStyle(color: Colors.white, fontSize: 12),
),
),
],
),
onTap: () => Navigator.pushNamed(context, 'Chat', arguments: message),
);
},
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.message), label: 'Messages'),
BottomNavigationBarItem(icon: Icon(Icons.people), label: 'Contacts'),
BottomNavigationBarItem(icon: Icon(Icons.phone), label: 'Calls'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
switch (index) {
case 1:
Navigator.pushNamed(context, 'Contacts');
break;
case 3:
Navigator.pushNamed(context, 'Profile');
break;
}
},
),
);
}
}