import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> {
bool muteNotifications = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
actions: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
body: ListView(
children: [
ListTile(
leading: CircleAvatar(
backgroundColor: Colors.grey[300],
child: Text('AB'),
),
title: Text('Antonio Banderas'),
subtitle: Text('Online', style: TextStyle(color: Colors.green)),
),
SwitchListTile(
title: Text('Mute notifications'),
value: muteNotifications,
onChanged: (value) {
setState(() {
muteNotifications = value;
});
},
),
ListTile(
title: Text('Custom notifications'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
title: Text('Bio and phone number'),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('UI Design enthusiast'),
SizedBox(height: 4),
Text('June 24, 2020', style: TextStyle(color: Colors.grey)),
SizedBox(height: 8),
Row(
children: [
Expanded(child: Text('+62 009 1212 3131')),
IconButton(
icon: Icon(Icons.phone),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.videocam),
onPressed: () {},
),
],
),
Text('Mobile', style: TextStyle(color: Colors.grey)),
],
),
),
SizedBox(height: 16),
DefaultTabController(
length: 4,
child: Column(
children: [
TabBar(
tabs: [
Tab(text: 'Media'),
Tab(text: 'Documents'),
Tab(text: 'Links'),
Tab(text: 'Groups'),
],
labelColor: Colors.blue,
unselectedLabelColor: Colors.grey,
),
Container(
height: 200,
child: TabBarView(
children: [
GridView.builder(
gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
crossAxisCount: 3,
crossAxisSpacing: 4,
mainAxisSpacing: 4,
),
itemCount: 6,
itemBuilder: (context, index) {
return Container(
color: Colors.grey[300],
child: Image.asset('assets/images/template.png', fit: BoxFit.cover),
);
},
),
Center(child: Text('No documents')),
Center(child: Text('No links')),
Center(child: Text('No groups')),
],
),
),
],
),
),
],
),
);
}
}