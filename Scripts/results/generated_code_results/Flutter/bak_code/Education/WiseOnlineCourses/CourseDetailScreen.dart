import 'package:flutter/material.dart';
class CourseDetailScreen extends StatefulWidget {
@override
_CourseDetailScreenState createState() => _CourseDetailScreenState();
}
class _CourseDetailScreenState extends State<CourseDetailScreen> with SingleTickerProviderStateMixin {
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
body: SafeArea(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
IconButton(
icon: Icon(Icons.remove_circle_outline),
onPressed: () {},
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'John Wiseberg',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'Teach Advertising and Creativity',
style: TextStyle(fontSize: 18, color: Colors.grey),
),
],
),
),
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'About'),
Tab(text: 'Lessons'),
],
),
Expanded(
child: TabBarView(
controller: _tabController,
children: [
_buildAboutTab(),
_buildLessonsTab(),
],
),
),
],
),
),
);
}
Widget _buildAboutTab() {
return SingleChildScrollView(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Create the big ideas',
style: TextStyle(fontSize: 22, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
Text(
'Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien, vel sodales augue mollis ut. Mauris venenatis magna eu tortor posuere luctus. Aenean tincidunt turpis sed dui aliquam vehicula. Praesent nec elit non dolor consectetur tincidunt sed in felis donec elementum.',
style: TextStyle(fontSize: 16),
),
SizedBox(height: 16),
Text(
'Or buy a good UI Kit',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text(
'Mauris dignissim semper mattis. Fusce porttitor a mi at suscipit. Praesent facilisis dolor sapien vel sodales augue mollis ut.',
style: TextStyle(fontSize: 16),
),
SizedBox(height: 24),
ElevatedButton(
onPressed: () {},
child: Text('Play Lesson'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.yellow,
foregroundColor: Colors.black,
minimumSize: Size(double.infinity, 50),
),
),
],
),
);
}
Widget _buildLessonsTab() {
return Center(
child: ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Lessons');
},
child: Text('Go to Lessons'),
),
);
}
}