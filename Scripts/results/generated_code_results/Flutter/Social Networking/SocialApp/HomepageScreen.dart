import 'package:flutter/material.dart';
class HomepageScreen extends StatefulWidget {
@override
_HomepageScreenState createState() => _HomepageScreenState();
}
class _HomepageScreenState extends State<HomepageScreen> {
int _currentIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.menu),
onPressed: () {},
),
title: Text('Forging New Bonds and Friendships'),
actions: [
IconButton(
icon: Icon(Icons.notifications),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.settings),
onPressed: () {},
),
],
),
body: Column(
children: [
Padding(
padding: EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search for a friend or partners',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
onTap: () {
Navigator.pushNamed(context, 'SearchResult');
},
),
),
Container(
height: 100,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildStoryAvatar('My Story', true),
_buildStoryAvatar('Hasley'),
_buildStoryAvatar('Javier'),
_buildStoryAvatar('Natalie'),
],
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
TextButton(
child: Text('All'),
onPressed: () {},
),
OutlinedButton(
child: Text('Photography'),
onPressed: () {},
),
TextButton(
child: Text('Outdoor'),
onPressed: () {},
),
OutlinedButton(
child: Text('Anime'),
onPressed: () {},
),
],
),
Expanded(
child: ListView(
children: [
_buildProfileCard(),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _currentIndex,
onTap: (index) {
setState(() {
_currentIndex = index;
});
if (index == 2) {
Navigator.pushNamed(context, 'Messages');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: 'Messages'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildStoryAvatar(String name, [bool isMyStory = false]) {
return Padding(
padding: EdgeInsets.symmetric(horizontal: 8.0),
child: Column(
children: [
CircleAvatar(
radius: 30,
backgroundImage: AssetImage('assets/images/template.png'),
child: isMyStory ? Icon(Icons.add, color: Colors.white) : null,
),
SizedBox(height: 4),
Text(name),
],
),
);
}
Widget _buildProfileCard() {
return Card(
margin: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
alignment: Alignment.topRight,
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Container(
padding: EdgeInsets.all(4),
color: Colors.blue,
child: Text(
'Potential Match!',
style: TextStyle(color: Colors.white),
),
),
],
),
Padding(
padding: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Klee Gracia, 24', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text("Hi there! I'm Gracia ✨, a fun-loving adventurer looking for great connections."),
Wrap(
spacing: 8,
children: ['Running', 'Outdoor', 'Anime'].map((interest) =>
Chip(label: Text(interest))
).toList(),
),
],
),
),
ButtonBar(
children: [
TextButton(
child: Text('View Profile'),
onPressed: () {
Navigator.pushNamed(context, 'Profile');
},
),
ElevatedButton(
child: Text('Connect'),
onPressed: () {},
),
],
),
],
),
);
}
}