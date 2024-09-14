import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
int _currentIndex = 0;
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
appBar: AppBar(
title: Text('Hi, Steven!'),
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
'3',
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
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Learn new sentences right away',
style: TextStyle(fontSize: 16, color: Colors.grey),
),
),
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'NEW FEED'),
Tab(text: 'SUBSCRIPTION'),
],
),
Expanded(
child: TabBarView(
controller: _tabController,
children: [
_buildNewFeed(),
Center(child: Text('Subscription content')),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _currentIndex,
onTap: (index) {
setState(() {
_currentIndex = index;
});
if (index == 1) {
Navigator.pushNamed(context, 'Search');
} else if (index == 2) {
Navigator.pushNamed(context, 'Speak');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.mic), label: 'Speak'),
BottomNavigationBarItem(icon: Icon(Icons.book), label: 'Word'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
),
);
}
Widget _buildNewFeed() {
return ListView(
children: [
_buildFeedItem(
author: 'Charlie Herrera',
title: 'ENGLISH TOURISM',
subtitle: 'Through the airport security door',
ctaButton: 'LEARN FREE NOW',
),
_buildVideoItem(
title: 'When get hurt',
author: 'Ellen Jacobs',
duration: '0:17',
),
],
);
}
Widget _buildFeedItem({
required String author,
required String title,
required String subtitle,
required String ctaButton,
}) {
return Card(
margin: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(author),
),
Image.asset('assets/images/template.png'),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
title,
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Text(subtitle),
SizedBox(height: 8),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'LessonDetail');
},
child: Text(ctaButton),
),
],
),
),
],
),
);
}
Widget _buildVideoItem({
required String title,
required String author,
required String duration,
}) {
return Card(
margin: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
title: Text(title),
trailing: Text('view all'),
),
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(author),
),
Stack(
alignment: Alignment.bottomRight,
children: [
Image.asset('assets/images/template.png'),
Padding(
padding: const EdgeInsets.all(8.0),
child: Text(
duration,
style: TextStyle(color: Colors.white, backgroundColor: Colors.black54),
),
),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'LessonDetail');
},
child: Text('Watch Now'),
),
),
],
),
);
}
}