import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildHeader(context),
_buildSearchBar(context),
_buildPromotionSection(context),
_buildAwesomeCoursesSection(context),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(
icon: Icon(Icons.book),
label: 'Course',
),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'EnrolledCourses');
}
},
),
);
}
Widget _buildHeader(BuildContext context) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
CircleAvatar(
backgroundColor: Colors.blue,
child: Icon(Icons.person, color: Colors.white),
),
SizedBox(width: 16),
Text(
'Hello, Daniel !',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
],
),
Row(
children: [
IconButton(
icon: Icon(Icons.notifications_none),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
],
),
],
),
);
}
Widget _buildSearchBar(BuildContext context) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search',
suffixIcon: Icon(Icons.filter_list),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
onTap: () => Navigator.pushNamed(context, 'Search'),
),
);
}
Widget _buildPromotionSection(BuildContext context) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Promotion',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
TextButton(
child: Text('See all'),
onPressed: () {},
),
],
),
SizedBox(height: 8),
Card(
color: Colors.blue,
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 100, height: 100),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'3D Design Fundamentals',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.white),
),
SizedBox(height: 8),
ElevatedButton(
child: Text('Small Button'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
),
],
),
),
],
),
),
),
],
),
);
}
Widget _buildAwesomeCoursesSection(BuildContext context) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Awesome Courses',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
TextButton(
child: Text('See all'),
onPressed: () => Navigator.pushNamed(context, 'AwesomeCourses'),
),
],
),
SizedBox(height: 8),
Row(
children: [
ElevatedButton(
child: Text('Medium'),
onPressed: () {},
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
SizedBox(width: 8),
OutlinedButton(
child: Text('Popular'),
onPressed: () {},
),
SizedBox(width: 8),
OutlinedButton(
child: Text('Medium'),
onPressed: () {},
),
],
),
SizedBox(height: 16),
_buildCourseItem(
context,
'3D Design Basic',
'24 lessons',
4.9,
'\$24.99',
),
SizedBox(height: 16),
_buildCourseItem(
context,
'Characters Animation',
'22 lessons',
4.8,
'\$22.69',
),
],
),
);
}
Widget _buildCourseItem(BuildContext context, String title, String lessons, double rating, String price) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text(lessons),
Row(
children: [
Icon(Icons.star, color: Colors.yellow, size: 16),
Text(' $rating'),
],
),
],
),
),
Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(price, style: TextStyle(fontWeight: FontWeight.bold)),
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
],
),
],
),
);
}
}