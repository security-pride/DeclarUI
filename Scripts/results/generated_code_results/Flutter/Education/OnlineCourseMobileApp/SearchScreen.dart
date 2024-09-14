import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
List<String> categories = ['UI/UX DESIGN', 'GRAPHICS DESIGN', 'INTERACTION'];
String selectedCategory = 'UI/UX DESIGN';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Discover'),
actions: [
Stack(
children: [
IconButton(
icon: Icon(Icons.notifications),
onPressed: () {},
),
Positioned(
right: 8,
top: 8,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(10),
),
constraints: BoxConstraints(
minWidth: 16,
minHeight: 16,
),
child: Text(
'9+',
style: TextStyle(
color: Colors.white,
fontSize: 10,
),
textAlign: TextAlign.center,
),
),
),
],
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: 'Design',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
SizedBox(width: 8),
Stack(
children: [
IconButton(
icon: Icon(Icons.tune),
onPressed: () {},
),
Positioned(
right: 0,
top: 0,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.red,
shape: BoxShape.circle,
),
constraints: BoxConstraints(
minWidth: 16,
minHeight: 16,
),
child: Text(
'1',
style: TextStyle(
color: Colors.white,
fontSize: 10,
),
textAlign: TextAlign.center,
),
),
),
],
),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: categories.map((category) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 4.0),
child: ChoiceChip(
label: Text(category),
selected: selectedCategory == category,
onSelected: (selected) {
setState(() {
selectedCategory = category;
});
},
),
);
}).toList(),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Search Result',
style: TextStyle(
fontSize: 18,
fontWeight: FontWeight.bold,
),
),
Text(
'32 Result',
style: TextStyle(
color: Colors.grey,
),
),
],
),
),
Expanded(
child: GridView.count(
crossAxisCount: 2,
childAspectRatio: 0.75,
children: [
_buildCourseCard(
'GRAPHICS DESIGN',
'How to make modern poster for Beginner',
'\$12.00',
Colors.green.shade100,
Icons.headset,
),
_buildCourseCard(
'UI/UX DESIGN',
'How to make Design system in easy waen',
'\$23.99',
Colors.red.shade100,
Icons.book,
),
_buildCourseCard(
'INTERACTION DESIGN',
'How to make modern poster for Beginner',
'\$15.45',
Colors.grey.shade300,
Icons.touch_app,
),
_buildCourseCard(
'PHOTO EDITOR',
'How to make Design system in easy waen',
'\$16.13',
Colors.yellow.shade100,
Icons.photo_camera,
),
],
),
),
],
),
);
}
Widget _buildCourseCard(String category, String title, String price, Color color, IconData icon) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'CourseDetail');
},
child: Card(
margin: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
height: 100,
color: color,
child: Center(
child: Icon(icon, size: 40, color: Colors.white),
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
SizedBox(width: 4),
Text('4.9', style: TextStyle(fontWeight: FontWeight.bold)),
],
),
SizedBox(height: 4),
Text(
category,
style: TextStyle(fontSize: 12, color: Colors.grey),
),
SizedBox(height: 4),
Text(
title,
style: TextStyle(fontWeight: FontWeight.bold),
maxLines: 2,
overflow: TextOverflow.ellipsis,
),
SizedBox(height: 4),
Text(
price,
style: TextStyle(
fontWeight: FontWeight.bold,
color: Colors.blue,
),
),
],
),
),
],
),
),
);
}
}