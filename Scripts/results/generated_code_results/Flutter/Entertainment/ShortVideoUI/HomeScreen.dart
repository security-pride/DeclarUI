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
body: Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
SafeArea(
child: Column(
children: [
_buildHeader(),
Expanded(child: _buildContent()),
_buildBottomBar(),
],
),
),
],
),
);
}
Widget _buildHeader() {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('9:41', style: TextStyle(color: Colors.white)),
Icon(Icons.signal_cellular_4_bar, color: Colors.white),
],
),
);
}
Widget _buildContent() {
return Column(
children: [
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Following'),
Tab(text: 'For You'),
],
),
Expanded(
child: Stack(
alignment: Alignment.bottomCenter,
children: [
TabBarView(
controller: _tabController,
children: [
_buildVideoContent(),
_buildVideoContent(),
],
),
Positioned(
right: 16,
bottom: 100,
child: _buildInteractionButtons(),
),
],
),
),
],
);
}
Widget _buildVideoContent() {
return Column(
mainAxisAlignment: MainAxisAlignment.end,
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
title: Text('@craig_love', style: TextStyle(color: Colors.white)),
subtitle: Text('The most satisfying Job #fyp #satisfying #roadmarking',
style: TextStyle(color: Colors.white70)),
),
Padding(
padding: const EdgeInsets.only(left: 16, bottom: 16),
child: Row(
children: [
Icon(Icons.music_note, color: Colors.white, size: 20),
SizedBox(width: 8),
Text('Roddy Roundich - The Rou', style: TextStyle(color: Colors.white)),
],
),
),
],
);
}
Widget _buildInteractionButtons() {
return Column(
mainAxisSize: MainAxisSize.min,
children: [
_buildIconButton(Icons.account_circle, '+', () {}),
SizedBox(height: 16),
_buildIconButton(Icons.favorite, '328.7K', () {}),
SizedBox(height: 16),
_buildIconButton(Icons.chat_bubble, '578', () {
Navigator.pushNamed(context, 'Comments');
}),
SizedBox(height: 16),
_buildIconButton(Icons.share, 'Share', () {
Navigator.pushNamed(context, 'Share');
}),
SizedBox(height: 16),
Container(
width: 45,
height: 45,
decoration: BoxDecoration(
shape: BoxShape.circle,
image: DecorationImage(
image: AssetImage('assets/images/template.png'),
fit: BoxFit.cover,
),
),
),
],
);
}
Widget _buildIconButton(IconData icon, String label, VoidCallback onTap) {
return GestureDetector(
onTap: onTap,
child: Column(
children: [
Icon(icon, color: Colors.white, size: 32),
SizedBox(height: 4),
Text(label, style: TextStyle(color: Colors.white)),
],
),
);
}
Widget _buildBottomBar() {
return BottomNavigationBar(
currentIndex: _currentIndex,
onTap: (index) {
setState(() => _currentIndex = index);
if (index == 3) Navigator.pushNamed(context, 'Inbox');
if (index == 4) Navigator.pushNamed(context, 'Profile');
},
type: BottomNavigationBarType.fixed,
backgroundColor: Colors.black,
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Discover'),
BottomNavigationBarItem(
icon: Container(
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(8),
),
child: Icon(Icons.add, color: Colors.black),
padding: EdgeInsets.all(2),
),
label: '',
),
BottomNavigationBarItem(icon: Icon(Icons.inbox), label: 'Inbox'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Me'),
],
);
}
}