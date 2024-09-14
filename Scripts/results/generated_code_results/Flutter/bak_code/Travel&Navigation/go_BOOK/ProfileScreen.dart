import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> {
int _selectedIndex = 4;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Profile'),
actions: [
IconButton(
icon: Icon(Icons.settings),
onPressed: () {
Navigator.pushNamed(context, 'Setting');
},
),
],
elevation: 0,
backgroundColor: Colors.transparent,
foregroundColor: Colors.black,
),
body: SingleChildScrollView(
child: Column(
children: [
SizedBox(height: 20),
Stack(
alignment: Alignment.center,
children: [
CircleAvatar(
radius: 60,
backgroundImage: AssetImage('assets/images/template.png'),
),
Positioned(
bottom: 0,
right: 0,
child: CircleAvatar(
radius: 20,
backgroundColor: Colors.blue,
child: Icon(Icons.edit, color: Colors.white, size: 20),
),
),
],
),
SizedBox(height: 10),
Text(
'Mosarraf Hossain',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'Product Designer',
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 20),
_buildListTile('Edit Profile', Icons.person_outline),
_buildListTile('Notification', Icons.notifications_none),
_buildListTile('Payment Method', Icons.payment),
_buildListTile('Bookmarks', Icons.bookmark_border),
_buildListTile('Security', Icons.security),
_buildListTile('Settings', Icons.settings),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'Notification');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Notification'),
BottomNavigationBarItem(icon: Icon(Icons.confirmation_number), label: 'Ticket'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: 'History'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Setting'),
],
type: BottomNavigationBarType.fixed,
),
);
}
Widget _buildListTile(String title, IconData icon) {
return ListTile(
leading: Icon(icon),
title: Text(title),
trailing: Icon(Icons.chevron_right),
onTap: () {
if (title == 'Settings') {
Navigator.pushNamed(context, 'Setting');
}
},
);
}
}