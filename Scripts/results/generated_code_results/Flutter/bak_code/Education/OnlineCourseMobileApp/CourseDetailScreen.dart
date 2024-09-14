import 'package:flutter/material.dart';
class CourseDetailScreen extends StatefulWidget {
@override
_CourseDetailScreenState createState() => _CourseDetailScreenState();
}
class _CourseDetailScreenState extends State<CourseDetailScreen> {
int _selectedTabIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Details Course'),
actions: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Positioned(
bottom: 16,
left: 16,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.blue,
borderRadius: BorderRadius.circular(4),
),
child: Text(
'GRAPICS DESIGN',
style: TextStyle(color: Colors.white),
),
),
),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'How to make modern design for Beginner',
style: Theme.of(context).textTheme.titleLarge,
),
SizedBox(height: 8),
Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 8),
Text('Nicola Tesla'),
Spacer(),
Icon(Icons.star, color: Colors.yellow),
Text('4.9 (1.2k)'),
],
),
SizedBox(height: 16),
Text(
'Lorem ipsum dolor sit amet consectetur. Mattis amet accumsan tellus sapien amet tempus elit feugiat. Elementum vulputate arcu urna.',
),
SizedBox(height: 16),
Row(
children: [
Expanded(
child: InkWell(
onTap: () => setState(() => _selectedTabIndex = 0),
child: Text(
'Lessons',
textAlign: TextAlign.center,
style: TextStyle(
fontWeight: _selectedTabIndex == 0 ? FontWeight.bold : FontWeight.normal,
),
),
),
),
Expanded(
child: InkWell(
onTap: () => setState(() => _selectedTabIndex = 1),
child: Text(
'Reviews',
textAlign: TextAlign.center,
style: TextStyle(
fontWeight: _selectedTabIndex == 1 ? FontWeight.bold : FontWeight.normal,
),
),
),
),
],
),
SizedBox(height: 16),
_selectedTabIndex == 0 ? _buildLessonsTab() : _buildReviewsTab(),
],
),
),
],
),
),
bottomNavigationBar: Padding(
padding: const EdgeInsets.all(16.0),
child: ElevatedButton(
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text('Buy \$23.00'),
Icon(Icons.arrow_forward),
],
),
onPressed: () {},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
padding: EdgeInsets.symmetric(vertical: 16),
),
),
),
);
}
Widget _buildLessonsTab() {
return Column(
children: [
ListTile(
leading: Icon(Icons.play_circle_outline),
title: Text('Graphics Design Introduction'),
subtitle: Text('12:34'),
trailing: Icon(Icons.lock_open),
),
ListTile(
leading: Icon(Icons.play_circle_outline),
title: Text('Shape & Line'),
subtitle: Text('12:34'),
trailing: Icon(Icons.lock),
),
],
);
}
Widget _buildReviewsTab() {
return Center(
child: Text('Reviews content goes here'),
);
}
}