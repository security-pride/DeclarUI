import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
int _currentIndex = 0;
@override
void initState() {
super.initState();
_tabController = TabController(length: 3, vsync: this);
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
Image.asset('assets/images/template.png', fit: BoxFit.cover, height: double.infinity, width: double.infinity),
SafeArea(
child: Column(
children: [
_buildHeader(),
Expanded(child: _buildContent()),
],
),
),
],
),
bottomNavigationBar: _buildBottomNavigationBar(),
floatingActionButton: FloatingActionButton(
onPressed: () {},
child: Icon(Icons.add),
backgroundColor: Colors.red,
),
floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
);
}
Widget _buildHeader() {
return Container(
padding: EdgeInsets.symmetric(vertical: 8),
child: TabBar(
controller: _tabController,
tabs: [
Tab(text: 'For You'),
Tab(text: 'Following'),
Tab(text: 'Live'),
],
labelColor: Colors.white,
unselectedLabelColor: Colors.white.withOpacity(0.7),
indicatorColor: Colors.white,
),
);
}
Widget _buildContent() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(child: Container()),
_buildUserInfo(),
_buildDescription(),
_buildMusicInfo(),
SizedBox(height: 20),
_buildInteractions(),
],
);
}
Widget _buildUserInfo() {
return Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 20,
),
SizedBox(width: 10),
Text('RomeoSmile', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
SizedBox(width: 10),
ElevatedButton(
onPressed: () {},
child: Text('Follow'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.red,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
),
),
],
);
}
Widget _buildDescription() {
return Padding(
padding: EdgeInsets.symmetric(vertical: 10),
child: Text(
'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla ac a eu eras. Et augue amet id',
style: TextStyle(color: Colors.white),
),
);
}
Widget _buildMusicInfo() {
return Row(
children: [
Icon(Icons.music_note, color: Colors.white, size: 20),
SizedBox(width: 5),
Text('eyes blue like the atlantic', style: TextStyle(color: Colors.white)),
],
);
}
Widget _buildInteractions() {
return Row(
mainAxisAlignment: MainAxisAlignment.end,
children: [
Column(
children: [
Icon(Icons.favorite, color: Colors.white),
Text('4231', style: TextStyle(color: Colors.white)),
],
),
SizedBox(width: 20),
GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'comments');
},
child: Column(
children: [
Icon(Icons.comment, color: Colors.white),
Text('644', style: TextStyle(color: Colors.white)),
],
),
),
SizedBox(width: 20),
],
);
}
Widget _buildBottomNavigationBar() {
return BottomNavigationBar(
currentIndex: _currentIndex,
onTap: (index) {
setState(() {
_currentIndex = index;
});
if (index == 1) {
Navigator.pushNamed(context, 'discover');
}
},
type: BottomNavigationBarType.fixed,
backgroundColor: Colors.black.withOpacity(0.5),
selectedItemColor: Colors.white,
unselectedItemColor: Colors.grey,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Create'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.favorite_border),
Positioned(
right: 0,
top: 0,
child: Container(
padding: EdgeInsets.all(1),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(minWidth: 12, minHeight: 12),
child: Text(
'644',
style: TextStyle(color: Colors.white, fontSize: 8),
textAlign: TextAlign.center,
),
),
),
],
),
label: 'Activity',
),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
);
}
}