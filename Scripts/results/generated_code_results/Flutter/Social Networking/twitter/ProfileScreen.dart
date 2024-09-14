import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
@override
void initState() {
super.initState();
_tabController = TabController(length: 4, vsync: this);
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
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Digital Goodies Team'),
actions: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
body: NestedScrollView(
headerSliverBuilder: (BuildContext context, bool innerBoxIsScrolled) {
return <Widget>[
SliverToBoxAdapter(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Container(
height: 150,
color: Colors.grey[300],
),
Positioned(
bottom: 0,
left: 16,
child: CircleAvatar(
radius: 40,
backgroundImage: AssetImage('assets/images/template.png'),
),
),
],
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
'Pixsellz',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
OutlinedButton(
onPressed: () {},
child: Text('Edit profile'),
),
],
),
Text('@pixsellz'),
SizedBox(height: 8),
Text('Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations'),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.link, size: 16),
SizedBox(width: 4),
Text('pixsellz.io', style: TextStyle(color: Colors.blue)),
SizedBox(width: 16),
Icon(Icons.calendar_today, size: 16),
SizedBox(width: 4),
Text('Joined September 2018'),
],
),
SizedBox(height: 8),
Row(
children: [
RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: '217 ', style: TextStyle(fontWeight: FontWeight.bold)),
TextSpan(text: 'Following'),
],
),
),
SizedBox(width: 16),
RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: '118 ', style: TextStyle(fontWeight: FontWeight.bold)),
TextSpan(text: 'Followers'),
],
),
),
],
),
],
),
),
],
),
),
SliverPersistentHeader(
delegate: _SliverAppBarDelegate(
TabBar(
controller: _tabController,
tabs: [
Tab(text: 'Tweets'),
Tab(text: 'Tweets & replies'),
Tab(text: 'Media'),
Tab(text: 'Likes'),
],
),
),
pinned: true,
),
];
},
body: TabBarView(
controller: _tabController,
children: [
_buildTweetList(),
Center(child: Text('Tweets & replies')),
Center(child: Text('Media')),
Center(child: Text('Likes')),
],
),
),
floatingActionButton: FloatingActionButton(
onPressed: () {},
child: Icon(Icons.create),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: 'Notifications'),
BottomNavigationBarItem(icon: Icon(Icons.mail), label: 'Messages'),
],
onTap: (index) {
if (index == 0) Navigator.pushNamed(context, 'Home');
},
),
);
}
Widget _buildTweetList() {
return ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Icon(Icons.push_pin, size: 16),
SizedBox(width: 4),
Text('Pinned Tweet', style: TextStyle(fontWeight: FontWeight.bold)),
],
),
SizedBox(height: 8),
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('Pixsellz @pixsellz · 7/31/19'),
subtitle: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Scheme Constructor - your ultimate prototyping kit for all UX web and mobileapp design!'),
Text('constructor.pixsellz.io'),
SizedBox(height: 8),
Wrap(
spacing: 8,
children: [
Text('#prototyping', style: TextStyle(color: Colors.blue)),
Text('#wireframe', style: TextStyle(color: Colors.blue)),
Text('#uiux', style: TextStyle(color: Colors.blue)),
Text('#ux', style: TextStyle(color: Colors.blue)),
],
),
SizedBox(height: 8),
Stack(
alignment: Alignment.center,
children: [
Image.asset('assets/images/template.png'),
Icon(Icons.play_circle_filled, size: 50, color: Colors.white),
],
),
SizedBox(height: 8),
Text('109 views'),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(icon: Icon(Icons.chat_bubble_outline), onPressed: () {}),
IconButton(icon: Icon(Icons.repeat), onPressed: () {}),
IconButton(icon: Icon(Icons.favorite_border), onPressed: () {}),
IconButton(icon: Icon(Icons.share), onPressed: () {}),
],
),
],
),
),
],
),
),
],
);
}
}
class _SliverAppBarDelegate extends SliverPersistentHeaderDelegate {
final TabBar _tabBar;
_SliverAppBarDelegate(this._tabBar);
@override
double get minExtent => _tabBar.preferredSize.height;
@override
double get maxExtent => _tabBar.preferredSize.height;
@override
Widget build(BuildContext context, double shrinkOffset, bool overlapsContent) {
return Container(
color: Theme.of(context).scaffoldBackgroundColor,
child: _tabBar,
);
}
@override
bool shouldRebuild(_SliverAppBarDelegate oldDelegate) {
return false;
}
}