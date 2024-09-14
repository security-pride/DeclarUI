import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 2, vsync: this);
}
@override
void dispose() {
_tabController.dispose();
super.dispose();
}
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Color(0xFF1E1E1E),
appBar: AppBar(
backgroundColor: Colors.transparent,
elevation: 0,
title: TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Home'),
Tab(text: 'My List'),
],
indicatorColor: Colors.yellow,
labelColor: Colors.white,
unselectedLabelColor: Colors.grey,
),
actions: [
Padding(
padding: const EdgeInsets.all(8.0),
child: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
),
body: TabBarView(
controller: _tabController,
children: [
_buildHomeTab(),
_buildMyListTab(),
],
),
bottomNavigationBar: BottomNavigationBar(
backgroundColor: Color(0xFF1E1E1E),
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
currentIndex: 0,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.search),
label: 'Search',
),
BottomNavigationBarItem(
icon: Icon(Icons.file_download),
label: 'Downloads',
),
],
onTap: (index) {
if (index == 2) {
Navigator.pushNamed(context, 'Downloads');
}
},
),
);
}
Widget _buildHomeTab() {
return SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildSectionHeader('New Courses'),
_buildNewCourses(),
SizedBox(height: 20),
_buildSectionHeader('Popular Courses'),
_buildPopularCourses(),
],
),
);
}
Widget _buildMyListTab() {
return Center(
child: ElevatedButton(
child: Text('Go to My List'),
onPressed: () => Navigator.pushNamed(context, 'MyList'),
),
);
}
Widget _buildSectionHeader(String title) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
title,
style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
),
);
}
Widget _buildNewCourses() {
return Container(
height: 250,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildNewCourseItem('Mendy Santiago', 'Teach Effective and Authentic Communication'),
_buildNewCourseItem('John Wiseberg', 'Teach Advertising and Creativity'),
],
),
);
}
Widget _buildNewCourseItem(String instructor, String title) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Container(
width: 200,
margin: EdgeInsets.only(left: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', height: 150, fit: BoxFit.cover),
),
SizedBox(height: 8),
Text(instructor, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
Text(title, style: TextStyle(color: Colors.grey)),
],
),
),
);
}
Widget _buildPopularCourses() {
return ListView(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
children: [
_buildPopularCourseItem('Masood El Toure', 'Teaches Creativity and Songwriting'),
_buildPopularCourseItem('Sophie Asveld', 'Teaches Screenwriting'),
_buildPopularCourseItem('Maria Trofimova', 'Building a Digital Brand'),
_buildPopularCourseItem('Lucy Miller', ''),
],
);
}
Widget _buildPopularCourseItem(String instructor, String title) {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'CourseDetail'),
child: Container(
padding: EdgeInsets.all(16),
child: Row(
children: [
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset('assets/images/template.png', width: 60, height: 60, fit: BoxFit.cover),
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(instructor, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
if (title.isNotEmpty) Text(title, style: TextStyle(color: Colors.grey)),
],
),
),
],
),
),
);
}
}