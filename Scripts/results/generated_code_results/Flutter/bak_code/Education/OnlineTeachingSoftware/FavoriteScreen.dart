import 'package:flutter/material.dart';
class FavoritesScreen extends StatefulWidget {
@override
_FavoritesScreenState createState() => _FavoritesScreenState();
}
class _FavoritesScreenState extends State<FavoritesScreen> {
int _selectedIndex = 2;
String _selectedCategory = 'All Course';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Favorite'),
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
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search...',
prefixIcon: Icon(Icons.search),
suffixIcon: Icon(Icons.filter_list),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: ['All Course', 'UX Design', 'UI Design', '3D Anima']
.map((category) => Padding(
padding: const EdgeInsets.symmetric(horizontal: 4.0),
child: FilterChip(
label: Text(category),
selected: _selectedCategory == category,
onSelected: (bool selected) {
setState(() {
_selectedCategory = category;
});
},
),
))
.toList(),
),
),
Expanded(
child: ListView(
children: [
_buildDateSection('May 12, 2023'),
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
_buildDateSection('May 08, 2023'),
_buildCourseCard(
'Expert Wireframing for Mobile Design',
'Graphic Design',
'Jerremy Mamika',
'$48',
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
switch (index) {
case 0:
Navigator.pushReplacementNamed(context, 'Discover');
break;
case 1:
Navigator.pushReplacementNamed(context, 'Statistics');
break;
case 2:
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
Widget _buildDateSection(String date) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
date,
style: TextStyle(fontWeight: FontWeight.bold),
),
TextButton(
onPressed: () {},
child: Text('See All'),
),
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
child: Stack(
children: [
Image.asset('assets/images/template.png'),
Positioned(
top: 8,
right: 8,
child: Icon(Icons.favorite, color: Colors.red),
),
],
),
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
],
),
),
),
);
}
}