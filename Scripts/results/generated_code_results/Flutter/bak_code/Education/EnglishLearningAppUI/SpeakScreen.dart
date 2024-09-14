import 'package:flutter/material.dart';
class SpeakScreen extends StatefulWidget {
const SpeakScreen({Key? key}) : super(key: key);
@override
_SpeakScreenState createState() => _SpeakScreenState();
}
class _SpeakScreenState extends State<SpeakScreen> {
int _selectedIndex = 2;
String _selectedCategory = 'All';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Speaking Course'),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Improve your speak skill with many courses',
style: TextStyle(fontSize: 16, color: Colors.grey),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Studying Course',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
_buildFeaturedCourse(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Courses',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
padding: EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
children: [
_buildCategoryButton('All'),
SizedBox(width: 8),
_buildCategoryButton('Beginner'),
SizedBox(width: 8),
_buildCategoryButton('Intermediate'),
SizedBox(width: 8),
_buildCategoryButton('Advanced'),
],
),
),
SizedBox(height: 16),
_buildCourseItem(
'Basic communication English',
'Primary',
'12 Lessons',
),
SizedBox(height: 16),
_buildCourseItem(
'Essential Structures',
'Primary',
'6 Lessons',
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
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'Search');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.mic), label: 'Speak'),
BottomNavigationBarItem(icon: Icon(Icons.book), label: 'Vocabulary'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildFeaturedCourse() {
return Container(
margin: EdgeInsets.all(16),
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(16),
color: Colors.grey[200],
),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ClipRRect(
borderRadius: BorderRadius.vertical(top: Radius.circular(16)),
child: Image.asset(
'assets/images/template.png',
height: 200,
width: double.infinity,
fit: BoxFit.cover,
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'English REAL TALK',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.green,
borderRadius: BorderRadius.circular(16),
),
child: Text(
'Intermediate',
style: TextStyle(color: Colors.white),
),
),
],
),
SizedBox(height: 8),
Text(
"Is speak English as easy but rigid as a textbook? No no! You're wrong!",
maxLines: 2,
overflow: TextOverflow.ellipsis,
),
SizedBox(height: 8),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Conversation');
},
child: Text('Start Course'),
),
],
),
),
],
),
);
}
Widget _buildCategoryButton(String category) {
return ElevatedButton(
onPressed: () {
setState(() {
_selectedCategory = category;
});
},
style: ElevatedButton.styleFrom(
backgroundColor: _selectedCategory == category ? Colors.blue : Colors.grey[300],
foregroundColor: _selectedCategory == category ? Colors.white : Colors.black,
),
child: Text(category),
);
}
Widget _buildCourseItem(String title, String level, String lessons) {
return Container(
margin: EdgeInsets.symmetric(horizontal: 16),
decoration: BoxDecoration(
borderRadius: BorderRadius.circular(16),
color: Colors.grey[200],
),
child: Row(
children: [
ClipRRect(
borderRadius: BorderRadius.horizontal(left: Radius.circular(16)),
child: Image.asset(
'assets/images/template.png',
width: 100,
height: 100,
fit: BoxFit.cover,
),
),
Expanded(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
title,
style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Row(
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.orange,
borderRadius: BorderRadius.circular(16),
),
child: Text(
level,
style: TextStyle(color: Colors.white, fontSize: 12),
),
),
SizedBox(width: 8),
Text(lessons, style: TextStyle(color: Colors.grey)),
],
),
],
),
),
),
IconButton(
icon: Icon(Icons.arrow_forward, color: Colors.blue),
onPressed: () {
Navigator.pushNamed(context, 'Conversation');
},
),
],
),
);
}
}