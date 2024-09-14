import 'package:flutter/material.dart';
class DiscoverScreen extends StatefulWidget {
@override
_DiscoverScreenState createState() => _DiscoverScreenState();
}
class _DiscoverScreenState extends State<DiscoverScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Discover'),
leading: IconButton(
icon: Icon(Icons.grid_view),
onPressed: () {},
),
actions: [
IconButton(
icon: Stack(
children: [
Icon(Icons.notifications),
Positioned(
right: 0,
top: 0,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(
minWidth: 12,
minHeight: 12,
),
child: Text(
'',
style: TextStyle(
color: Colors.white,
fontSize: 8,
),
textAlign: TextAlign.center,
),
),
)
],
),
onPressed: () => Navigator.pushNamed(context, 'Notifications'),
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Study what you want\nanytime anywhere',
style: Theme.of(context).textTheme.headline5,
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Interface Design'),
SizedBox(height: 8),
Text(
'User interface for beginners',
style: Theme.of(context).textTheme.headline6,
),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.star, color: Colors.yellow),
Text('4.7 (1,242 Reviews)'),
],
),
SizedBox(height: 8),
LinearProgressIndicator(value: 0.48),
SizedBox(height: 8),
Text('48% completed'),
SizedBox(height: 8),
Image.asset('assets/images/template.png'),
],
),
),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Popular Course',
style: Theme.of(context).textTheme.headline6,
),
TextButton(
onPressed: () {},
child: Text('See All'),
),
],
),
),
ListView(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
children: [
_buildCourseCard(
'Expert Wireframing for Mobile Design',
'Graphic Design',
'Jerremy Mamika',
'$48',
),
_buildCourseCard(
'Bootstrapping Principles',
'Development',
'Alexander Be',
'',
),
],
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
switch (index) {
case 0:
break;
case 1:
Navigator.pushNamed(context, 'Statistics');
break;
case 2:
Navigator.pushNamed(context, 'Favorites');
break;
case 3:
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Statistic'),
BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Favorites'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildCourseCard(String title, String category, String instructor, String price) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: InkWell(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Expanded(
flex: 2,
child: Image.asset('assets/images/template.png'),
),
SizedBox(width: 16),
Expanded(
flex: 3,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(category, style: TextStyle(color: Colors.purple)),
SizedBox(height: 4),
Text(title, style: Theme.of(context).textTheme.subtitle1),
SizedBox(height: 4),
Text(instructor, style: TextStyle(color: Colors.grey)),
if (price.isNotEmpty) SizedBox(height: 4),
if (price.isNotEmpty) Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
],
),
),
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
],
),
),
),
);
}
}