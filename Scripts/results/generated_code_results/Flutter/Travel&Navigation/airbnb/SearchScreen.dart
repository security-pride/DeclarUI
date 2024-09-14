import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Container(
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(32),
boxShadow: [
BoxShadow(
color: Colors.grey.withOpacity(0.3),
spreadRadius: 1,
blurRadius: 5,
offset: Offset(0, 3),
),
],
),
child: Row(
children: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {},
),
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: '任何地方',
border: InputBorder.none,
),
),
),
TextButton(
child: Text('添加日期'),
onPressed: () {},
),
TextButton(
child: Text('添加人数'),
onPressed: () {},
),
],
),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCategoryIcon('王牌', Icons.star, isSelected: true),
_buildCategoryIcon('小木屋', Icons.house),
_buildCategoryIcon('海景民宿', Icons.beach_access),
_buildCategoryIcon('魅力泳池', Icons.pool),
_buildCategoryIcon('湖区', Icons.landscape),
],
),
),
Expanded(
child: ListView(
children: [
_buildFeaturedListing(),
// Add more listings here
],
),
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
},
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.search), label: '探索'),
BottomNavigationBarItem(icon: Icon(Icons.favorite_border), label: '心愿单'),
BottomNavigationBarItem(icon: Icon(Icons.calendar_today), label: '行程'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),
BottomNavigationBarItem(icon: Icon(Icons.person_outline), label: '我的'),
],
),
);
}
Widget _buildCategoryIcon(String label, IconData icon, {bool isSelected = false}) {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'SearchCategory');
},
child: Container(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Column(
children: [
Icon(icon, color: isSelected ? Colors.pink : Colors.grey),
Text(label, style: TextStyle(color: isSelected ? Colors.pink : Colors.grey)),
],
),
),
);
}
Widget _buildFeaturedListing() {
return GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'Details');
},
child: Card(
margin: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Positioned(
top: 8,
right: 8,
child: IconButton(
icon: Icon(Icons.upload, color: Colors.white),
onPressed: () {},
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
'在 X 学院参加训练',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
Text('房东: Jubilee'),
Text('预订通道已关闭', style: TextStyle(color: Colors.red)),
],
),
),
],
),
),
);
}
}