import 'package:flutter/material.dart';
class MessageScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Message', style: TextStyle(color: Colors.black, fontWeight: FontWeight.bold)),
backgroundColor: Colors.transparent,
elevation: 0,
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search ...',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
borderSide: BorderSide.none,
),
filled: true,
fillColor: Colors.grey[200],
),
),
),
Expanded(
child: ListView(
children: [
_buildMessageTile('Jonathan D. Dye', 'Hello', 'Now'),
_buildMessageTile('Charles L. Wenner', 'Its need urgently', '10:00 am'),
_buildMessageTile('Luther K. Cusack', 'Check this design', '04:00 pm'),
_buildMessageTile('Devignedge UI Design T.', 'Hello, Manik are you there?', 'Yesterday', isGroup: true),
_buildMessageTile('Gloria G. Johnson', 'Hi Nik', '3 day'),
_buildMessageTile('Madge T. Crews', 'Check it', '04 Sep'),
_buildMessageTile('Rosemary J. Strickland', '', '03 Sep'),
],
),
),
],
),
bottomNavigationBar: BottomAppBar(
shape: CircularNotchedRectangle(),
notchMargin: 8.0,
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.grid_view),
onPressed: () => Navigator.pushNamed(context, 'Board'),
),
IconButton(
icon: Icon(Icons.check_circle_outline),
onPressed: () => Navigator.pushNamed(context, 'Dashboard'),
),
SizedBox(width: 48),
IconButton(
icon: Icon(Icons.description_outlined),
onPressed: () => Navigator.pushNamed(context, 'Task'),
),
IconButton(icon: Icon(Icons.chat_bubble_outline), onPressed: () {}),
],
),
),
floatingActionButton: FloatingActionButton(
child: Icon(Icons.add),
backgroundColor: Colors.orange,
onPressed: () => Navigator.pushNamed(context, 'AddTask'),
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
);
}
Widget _buildMessageTile(String name, String message, String time, {bool isGroup = false}) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
child: isGroup ? Text('+3', style: TextStyle(color: Colors.white, fontSize: 12)) : null,
),
title: Row(
children: [
Expanded(child: Text(name, style: TextStyle(fontWeight: FontWeight.bold))),
Text(time, style: TextStyle(fontSize: 12, color: Colors.grey)),
],
),
subtitle: Text(message, style: TextStyle(color: Colors.grey)),
onTap: () {
// TODO: Implement chat detail view navigation
},
);
}
}