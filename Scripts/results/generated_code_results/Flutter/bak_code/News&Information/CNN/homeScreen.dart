import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 5, vsync: this);
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
title: Image.asset('assets/images/template.png', height: 30),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Implement search functionality
},
),
],
bottom: TabBar(
controller: _tabController,
isScrollable: true,
tabs: [
Tab(text: 'Top News'),
Tab(text: 'Your CNN'),
Tab(text: 'World'),
Tab(text: 'U.S. Politics'),
Tab(text: 'Business'),
],
),
),
body: TabBarView(
controller: _tabController,
children: [
_buildTopNewsTab(),
Center(child: Text('Your CNN')),
Center(child: Text('World')),
Center(child: Text('U.S. Politics')),
Center(child: Text('Business')),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.how_to_vote), label: 'Elections'),
BottomNavigationBarItem(icon: Icon(Icons.play_circle_outline), label: 'Watch'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Settings'),
],
onTap: (index) {
switch (index) {
case 1:
Navigator.pushNamed(context, 'Elections');
break;
case 3:
Navigator.pushNamed(context, 'Settings');
break;
}
},
),
);
}
Widget _buildTopNewsTab() {
return SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Card(
margin: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png'),
Positioned(
top: 10,
left: 10,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
color: Colors.black.withOpacity(0.7),
child: Text(
'BUTLER FARM SHOW GROUNDS',
style: TextStyle(color: Colors.white, fontSize: 12),
),
),
),
],
),
Padding(
padding: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Minute-by-minute: Visual timeline of the assassination attempt on Donald Trump',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Text('7h ago', style: TextStyle(color: Colors.grey)),
],
),
),
],
),
),
Padding(
padding: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'LIVE UPDATES',
style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Text(
'Biden condemns Trump shooting; authorities search for gunman's motive',
style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.play_circle_outline),
SizedBox(width: 8),
Text('VIDEO'),
],
),
Text('Watch Biden's entire Oval Office address'),
SizedBox(height: 8),
Text(
'ANALYSIS',
style: TextStyle(fontWeight: FontWeight.bold),
),
Text(
'A nation traumatized and a campaign transformed as Trump is set to reemerge',
style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
),
],
),
),
],
),
);
}
}