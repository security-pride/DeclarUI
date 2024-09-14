import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 2, vsync: this);
}
@override
void dispose() {
_tabController.dispose();
super.dispose();
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.language),
onPressed: () {},
),
actions: [
IconButton(
icon: Icon(Icons.link),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.menu),
onPressed: () {},
),
],
),
body: ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Alisson Rochinski',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text('@arochinski'),
Text('threads.net'),
Text("UI Designer | Let's redesign the world"),
Text('alisson.rochinski@gmail.com'),
Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 10,
),
SizedBox(width: 4),
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 10,
),
SizedBox(width: 4),
Text('2957 seguidores'),
],
),
],
),
Stack(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 40,
),
Positioned(
right: 0,
bottom: 0,
child: Icon(Icons.verified, color: Colors.blue),
),
],
),
],
),
SizedBox(height: 16),
Row(
children: [
Expanded(
child: ElevatedButton(
onPressed: () {},
child: Text('Editar perfil'),
),
),
SizedBox(width: 8),
Expanded(
child: ElevatedButton(
onPressed: () {},
child: Text('Compartilhar Perfil'),
),
),
],
),
],
),
),
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Chirps'),
Tab(text: 'Answers'),
],
),
Container(
height: 300,
child: TabBarView(
controller: _tabController,
children: [
_buildChirpsList(),
_buildAnswersList(),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.add_box), label: 'Create'),
BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Feed');
break;
case 1:
Navigator.pushNamed(context, 'Search');
break;
case 3:
Navigator.pushNamed(context, 'Activity');
break;
}
},
),
);
}
Widget _buildChirpsList() {
return ListView.builder(
itemCount: 1,
itemBuilder: (context, index) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('arochinski'),
subtitle: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint'),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.favorite_border, size: 16),
SizedBox(width: 4),
Text('59'),
SizedBox(width: 16),
Icon(Icons.chat_bubble_outline, size: 16),
SizedBox(width: 4),
Text('7'),
],
),
],
),
trailing: Text('2 min'),
);
},
);
}
Widget _buildAnswersList() {
return Center(child: Text('No answers yet'));
}
}