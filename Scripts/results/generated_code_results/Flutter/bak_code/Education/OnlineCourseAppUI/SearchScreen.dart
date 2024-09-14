import 'package:flutter/material.dart';
class SearchScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('9:41'),
actions: [
Icon(Icons.wifi),
SizedBox(width: 8),
Icon(Icons.signal_cellular_4_bar),
SizedBox(width: 8),
Icon(Icons.battery_full),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: TextField(
decoration: InputDecoration(
hintText: '3Di',
prefixIcon: Icon(Icons.arrow_back),
suffixIcon: IconButton(
icon: Icon(Icons.filter_list),
onPressed: () {},
),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Align(
alignment: Alignment.centerLeft,
child: Text(
'Results',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
),
Expanded(
child: ListView(
children: [
_buildCourseItem(context, '3D Design Basic', '24 lessons', 4.9, '\$24.99'),
_buildCourseItem(context, 'Characters Animation', '22 lessons', 4.8, '\$22.69'),
_buildCourseItem(context, '3D Abstract Design', '18 lessons', 4.7, '\$19.29'),
_buildCourseItem(context, 'Product Design', '23 lessons', 4.8, '\$25.79'),
],
),
),
],
),
);
}
Widget _buildCourseItem(BuildContext context, String title, String lessons, double rating, String price) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: InkWell(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
Text(lessons, style: TextStyle(color: Colors.grey)),
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
Text(' $rating', style: TextStyle(fontWeight: FontWeight.bold)),
],
),
],
),
),
Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(price, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 16)),
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
],
),
],
),
),
),
);
}
}