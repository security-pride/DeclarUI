import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Menu'),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
title: Image.asset('assets/images/template.png', height: 30),
actions: [
IconButton(
icon: Icon(Icons.auto_awesome),
onPressed: () {
// Implement sparkle icon functionality
},
),
],
),
body: ListView(
children: [
_buildTweet(),
_buildTweet(),
_buildTweet(),
],
),
floatingActionButton: Column(
mainAxisAlignment: MainAxisAlignment.end,
children: [
FloatingActionButton(
heroTag: 'backToTop',
child: Icon(Icons.arrow_upward),
onPressed: () {
// Implement back to top functionality
},
),
SizedBox(height: 16),
FloatingActionButton(
heroTag: 'writePost',
child: Icon(Icons.create),
onPressed: () {
// Implement write post functionality
},
),
],
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.search),
label: 'Search',
),
BottomNavigationBarItem(
icon: Icon(Icons.notifications),
label: 'Notifications',
),
BottomNavigationBarItem(
icon: Icon(Icons.mail),
label: 'Messages',
),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Trends');
}
},
),
);
}
Widget _buildTweet() {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Profile'),
child: Container(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 8),
Expanded(
child: RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: 'User Name ', style: TextStyle(fontWeight: FontWeight.bold)),
TextSpan(text: '@username • 3h'),
],
),
),
),
],
),
SizedBox(height: 8),
Text('Tweet content goes here...'),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.chat_bubble_outline),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.repeat),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.share),
onPressed: () {},
),
],
),
],
),
),
);
}
}