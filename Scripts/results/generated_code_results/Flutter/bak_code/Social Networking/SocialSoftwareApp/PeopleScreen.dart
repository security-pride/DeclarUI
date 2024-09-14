import 'package:flutter/material.dart';
class PeoplePage extends StatefulWidget {
@override
_PeoplePageState createState() => _PeoplePageState();
}
class _PeoplePageState extends State<PeoplePage> {
final List<Map<String, dynamic>> activeList = [
{'name': 'Martha Craig', 'active': true},
{'name': 'Kieron Dotson', 'lastActive': '8 min'},
{'name': 'Zack John', 'lastActive': '10 min'},
{'name': 'Jamie Franco', 'active': true},
{'name': 'Tabitha Potter', 'lastActive': '19 min'},
];
final List<Map<String, dynamic>> recentlyActive = [
{'name': 'Albert Lasker', 'lastActive': '39 min'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
SizedBox(width: 10),
Text('People'),
],
),
actions: [
IconButton(
icon: Icon(Icons.message),
onPressed: () {
// Open new message screen
},
),
IconButton(
icon: Icon(Icons.person_add),
onPressed: () {
// Add new person
},
),
],
),
body: ListView(
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
ListTile(
leading: CircleAvatar(
child: Icon(Icons.add),
backgroundColor: Colors.grey[300],
),
title: Text('Your story'),
subtitle: Text('Add to your story'),
onTap: () {
// Add to story logic
},
),
Divider(),
...activeList.map((user) => _buildUserTile(user)).toList(),
Divider(),
Padding(
padding: EdgeInsets.all(8.0),
child: Text('RECENTLY ACTIVE', style: TextStyle(color: Colors.grey)),
),
...recentlyActive.map((user) => _buildUserTile(user)).toList(),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chats'),
BottomNavigationBarItem(icon: Icon(Icons.people), label: 'People'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Chats');
}
},
),
);
}
Widget _buildUserTile(Map<String, dynamic> user) {
return ListTile(
leading: Stack(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
if (user['active'] == true)
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
title: Text(user['name']),
subtitle: user['active'] == true
? Text('Active now')
: Text('Active ${user['lastActive']} ago'),
trailing: IconButton(
icon: Icon(Icons.waving_hand),
onPressed: () {
Navigator.pushNamed(context, 'Intro', arguments: user['name']);
},
),
onTap: () {
Navigator.pushNamed(context, 'Intro', arguments: user['name']);
},
);
}
}