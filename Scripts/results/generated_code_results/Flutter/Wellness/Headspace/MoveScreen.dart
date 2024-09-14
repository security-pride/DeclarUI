import 'package:flutter/material.dart';
class MoveScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Colors.black,
appBar: AppBar(
backgroundColor: Colors.black,
title: Text('Move', style: TextStyle(color: Colors.white)),
leading: IconButton(
icon: Icon(Icons.arrow_back, color: Colors.white),
onPressed: () => Navigator.pushNamed(context, 'Explore'),
),
),
body: Column(
children: [
_buildFeaturedWorkout(),
_buildTabBar(),
Expanded(child: _buildWorkoutList()),
],
),
bottomNavigationBar: BottomNavigationBar(
backgroundColor: Colors.black,
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Today'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Explore'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '子骆'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Explore');
}
},
),
);
}
Widget _buildFeaturedWorkout() {
return Container(
height: 400,
decoration: BoxDecoration(
color: Colors.blue,
borderRadius: BorderRadius.only(
bottomLeft: Radius.circular(30),
bottomRight: Radius.circular(30),
),
),
child: Stack(
children: [
Positioned(
top: 20,
left: 20,
right: 20,
child: ClipRRect(
borderRadius: BorderRadius.circular(20),
child: Image.asset('assets/images/template.png', fit: BoxFit.cover),
),
),
Positioned(
bottom: 20,
left: 20,
right: 20,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 10, vertical: 5),
decoration: BoxDecoration(
color: Colors.black.withOpacity(0.6),
borderRadius: BorderRadius.circular(15),
),
child: Text('Featured', style: TextStyle(color: Colors.white)),
),
SizedBox(height: 10),
Text(
'Easy Evening Stretch',
style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 5),
Text('Workout · 9 min', style: TextStyle(color: Colors.white70)),
SizedBox(height: 10),
ElevatedButton.icon(
icon: Icon(Icons.lock),
label: Text('Play'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
),
onPressed: () {},
),
],
),
),
],
),
);
}
Widget _buildTabBar() {
return Container(
color: Colors.black,
child: TabBar(
tabs: [
Tab(text: 'Recent'),
Tab(text: 'Featured'),
],
indicatorColor: Colors.white,
labelColor: Colors.white,
unselectedLabelColor: Colors.grey,
),
);
}
Widget _buildWorkoutList() {
return ListView(
children: [
_buildWorkoutItem('Stress Release', '29 min'),
_buildWorkoutItem('Day 1', '22 min'),
],
);
}
Widget _buildWorkoutItem(String title, String duration) {
return Container(
margin: EdgeInsets.symmetric(vertical: 10, horizontal: 20),
child: Row(
children: [
ClipRRect(
borderRadius: BorderRadius.circular(10),
child: Image.asset('assets/images/template.png', width: 80, height: 80, fit: BoxFit.cover),
),
SizedBox(width: 20),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(color: Colors.white, fontSize: 18)),
SizedBox(height: 5),
Row(
children: [
Icon(Icons.lock, color: Colors.grey, size: 16),
SizedBox(width: 5),
Text('Workout · $duration', style: TextStyle(color: Colors.grey)),
],
),
],
),
),
Icon(Icons.chevron_right, color: Colors.grey),
],
),
);
}
}