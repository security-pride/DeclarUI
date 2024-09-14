import 'package:flutter/material.dart';
class UserProfileScreen extends StatefulWidget {
@override
_UserProfileScreenState createState() => _UserProfileScreenState();
}
class _UserProfileScreenState extends State<UserProfileScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
bool _isFollowing = false;
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
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Voltar'),
actions: [
IconButton(
icon: Icon(Icons.link),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.more_vert),
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
Chip(label: Text('threads.net')),
Text("UI Designer | Let's redesign the world"),
Text('alisson.rochinski@gmail.com'),
SizedBox(height: 8),
Row(
children: [
Stack(
children: List.generate(3, (index) => Positioned(
left: index * 20.0,
child: CircleAvatar(
radius: 12,
backgroundImage: AssetImage('assets/images/template.png'),
),
)),
),
SizedBox(width: 36),
Text('2957 seguidores'),
],
),
],
),
Stack(
children: [
CircleAvatar(
radius: 40,
backgroundImage: AssetImage('assets/images/template.png'),
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
ElevatedButton(
onPressed: () {
setState(() {
_isFollowing = !_isFollowing;
});
},
child: Text(_isFollowing ? 'Following' : 'Follow'),
style: ElevatedButton.styleFrom(
minimumSize: Size(double.infinity, 40),
),
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
height: 300, // Adjust as needed
child: TabBarView(
controller: _tabController,
children: [
_buildChirpsList(),
Center(child: Text('No answers yet')),
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
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.chat_bubble_outline),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.repeat),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.send),
onPressed: () {},
),
],
),
Text('7 answers · 59 likes'),
],
),
trailing: Text('2 min'),
);
},
);
}
}