import 'package:flutter/material.dart';
class DiscoverScreen extends StatefulWidget {
@override
_DiscoverScreenState createState() => _DiscoverScreenState();
}
class _DiscoverScreenState extends State<DiscoverScreen> {
final List<String> categories = ['All', 'Challenge', 'Entertainment', 'Dance'];
int _selectedIndex = 1;
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
_buildSearchBar(),
_buildBanner(),
_buildCategories(),
Expanded(
child: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildSection('Hot', ['420.8K', '316.0K', '180.6K']),
_buildSection('Featured', []),
],
),
),
),
],
),
),
bottomNavigationBar: _buildBottomNavigationBar(),
);
}
Widget _buildSearchBar() {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'search'),
child: Container(
margin: EdgeInsets.all(16),
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(20),
),
child: Row(
children: [
Icon(Icons.search, color: Colors.grey),
SizedBox(width: 8),
Text('Search', style: TextStyle(color: Colors.grey)),
],
),
),
);
}
Widget _buildBanner() {
return Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover, height: 200),
Positioned(
bottom: 20,
left: 20,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Camp day', style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
ElevatedButton(
onPressed: () {},
child: Text('Join now'),
style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
),
],
),
),
],
);
}
Widget _buildCategories() {
return Container(
height: 40,
child: ListView.builder(
scrollDirection: Axis.horizontal,
itemCount: categories.length,
itemBuilder: (context, index) {
return Padding(
padding: EdgeInsets.symmetric(horizontal: 8),
child: Chip(
label: Text(categories[index]),
backgroundColor: index == 0 ? Colors.red : Colors.blue,
labelStyle: TextStyle(color: Colors.white),
),
);
},
),
);
}
Widget _buildSection(String title, List<String> views) {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
Icon(Icons.arrow_forward),
],
),
),
Container(
height: 200,
child: ListView.builder(
scrollDirection: Axis.horizontal,
itemCount: 3,
itemBuilder: (context, index) {
return Container(
width: 150,
margin: EdgeInsets.symmetric(horizontal: 8),
child: Stack(
fit: StackFit.expand,
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Positioned(
bottom: 8,
left: 8,
child: Row(
children: [
Icon(Icons.play_arrow, color: Colors.white, size: 16),
SizedBox(width: 4),
Text(
views.isNotEmpty ? views[index] : '',
style: TextStyle(color: Colors.white),
),
],
),
),
],
),
);
},
),
),
],
);
}
Widget _buildBottomNavigationBar() {
return BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'home');
}
},
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.add_circle_outline), label: 'Create'),
BottomNavigationBarItem(icon: Icon(Icons.favorite_border), label: 'Activity'),
BottomNavigationBarItem(icon: Icon(Icons.person_outline), label: 'Profile'),
],
);
}
}