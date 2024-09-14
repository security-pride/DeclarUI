import 'package:flutter/material.dart';
class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Color(0xFF1E1E2E),
appBar: AppBar(
backgroundColor: Colors.transparent,
elevation: 0,
actions: [
IconButton(
icon: Icon(Icons.settings, color: Colors.white),
onPressed: () {
// TODO: Implement settings action
},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.center,
children: [
SizedBox(height: 20),
CircleAvatar(
radius: 60,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 16),
Text(
'子骄 薛',
style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'Joined in 2024',
style: TextStyle(color: Colors.grey),
),
SizedBox(height: 32),
Text(
'Welcome!',
style: TextStyle(color: Colors.white, fontSize: 28, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildBeginningMeditationCard(),
SizedBox(height: 16),
_buildGuestPassCard(),
SizedBox(height: 16),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16),
child: Align(
alignment: Alignment.centerLeft,
child: Text(
'My progress',
style: TextStyle(color: Colors.white, fontSize: 20, fontWeight: FontWeight.bold),
),
),
),
// TODO: Add progress section here
],
),
),
bottomNavigationBar: BottomNavigationBar(
backgroundColor: Color(0xFF1E1E2E),
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
currentIndex: 2,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Today'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Explore'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '子骄'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildBeginningMeditationCard() {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16),
color: Color(0xFF2D2D42),
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
child: Padding(
padding: const EdgeInsets.all(16),
child: Row(
children: [
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Beginning meditation',
style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text(
'Learn the fundamental techniques of meditation.',
style: TextStyle(color: Colors.grey),
),
],
),
),
Image.asset('assets/images/template.png', width: 80, height: 80),
],
),
),
);
}
Widget _buildGuestPassCard() {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16),
color: Colors.yellow,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
child: Padding(
padding: const EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Headspace 30-Day Guest Pass',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text('Bring friends along the journey'),
SizedBox(height: 16),
Text(
'Send free access to new members',
style: TextStyle(fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Image.asset('assets/images/template.png', width: 60, height: 60),
Image.asset('assets/images/template.png', width: 60, height: 60),
],
),
],
),
),
);
}
}