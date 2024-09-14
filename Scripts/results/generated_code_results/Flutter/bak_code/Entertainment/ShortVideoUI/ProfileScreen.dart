import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
const ProfileScreen({Key? key}) : super(key: key);
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> {
int _selectedIndex = 4;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
backgroundColor: Colors.white,
elevation: 0,
leading: IconButton(
icon: Icon(Icons.person_add, color: Colors.black),
onPressed: () {},
),
title: Row(
children: [
Text(
'Jacob West',
style: TextStyle(color: Colors.black),
),
Icon(Icons.arrow_drop_down, color: Colors.black),
],
),
actions: [
IconButton(
icon: Icon(Icons.more_horiz, color: Colors.black),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
children: [
SizedBox(height: 20),
CircleAvatar(
radius: 50,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 10),
Text('@jacob_w', style: TextStyle(fontSize: 18)),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildStatColumn('14', 'Following'),
_buildStatColumn('38', 'Followers'),
_buildStatColumn('91', 'Likes'),
],
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
ElevatedButton(
onPressed: () {},
child: Text('Edit profile'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.white,
foregroundColor: Colors.black,
),
),
SizedBox(width: 10),
IconButton(
icon: Icon(Icons.bookmark_border),
onPressed: () {},
),
],
),
SizedBox(height: 10),
Text('Tap to add bio', style: TextStyle(color: Colors.grey)),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
Icon(Icons.grid_on),
Icon(Icons.favorite_border),
],
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 3,
children: List.generate(5, (index) {
if (index == 4) {
return Container(
margin: EdgeInsets.all(2),
color: Colors.grey[200],
child: Center(
child: Text(
'Tap to create\na new video',
textAlign: TextAlign.center,
),
),
);
}
return Container(
margin: EdgeInsets.all(2),
color: Colors.grey[300],
child: Image.asset('assets/images/template.png', fit: BoxFit.cover),
);
}),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
},
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Discover'),
BottomNavigationBarItem(
icon: Container(
width: 48,
height: 27,
decoration: BoxDecoration(
color: Colors.black,
borderRadius: BorderRadius.circular(8),
),
child: Icon(Icons.add, color: Colors.white),
),
label: '',
),
BottomNavigationBarItem(icon: Icon(Icons.chat_bubble_outline), label: 'Inbox'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Me'),
],
),
);
}
Widget _buildStatColumn(String count, String label) {
return Column(
children: [
Text(count, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
Text(label, style: TextStyle(color: Colors.grey)),
],
);
}
}