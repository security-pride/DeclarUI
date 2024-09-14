import 'package:flutter/material.dart';
class SearchCategoryScreen extends StatefulWidget {
@override
_SearchCategoryScreenState createState() => _SearchCategoryScreenState();
}
class _SearchCategoryScreenState extends State<SearchCategoryScreen> {
int _selectedIndex = 0;
bool _showTotalPrice = false;
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Expanded(
child: Container(
decoration: BoxDecoration(
color: Colors.grey[200],
borderRadius: BorderRadius.circular(32),
),
child: Row(
children: [
IconButton(
icon: Icon(Icons.search),
onPressed: () => Navigator.pushNamed(context, 'Search'),
),
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: '任何地方',
border: InputBorder.none,
),
),
),
TextButton(child: Text('添加日期'), onPressed: () {}),
TextButton(child: Text('添加人数'), onPressed: () {}),
],
),
),
),
IconButton(
icon: Icon(Icons.tune),
onPressed: () {},
),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildCategoryIcon('海景民宿', Icons.beach_access, isSelected: true),
_buildCategoryIcon('魅力泳池', Icons.pool),
_buildCategoryIcon('湖区', Icons.landscape),
_buildCategoryIcon('近滑雪场', Icons.snowboarding),
_buildCategoryIcon('OMG 妙屋', Icons.house),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: SwitchListTile(
title: Text('显示总价'),
subtitle: Text('税前价格，包含所有费用'),
value: _showTotalPrice,
onChanged: (bool value) {
setState(() {
_showTotalPrice = value;
});
},
),
),
Expanded(
child: ListView(
children: [
_buildListing(),
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
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 8.0),
child: Column(
children: [
Icon(icon, color: isSelected ? Colors.pink : Colors.grey),
Text(label, style: TextStyle(color: isSelected ? Colors.pink : Colors.grey)),
],
),
);
}
Widget _buildListing() {
return GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Details'),
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
left: 8,
child: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(16),
),
child: Text('房客推荐', style: TextStyle(fontWeight: FontWeight.bold)),
),
),
Positioned(
top: 8,
right: 8,
child: IconButton(
icon: Icon(Icons.favorite_border, color: Colors.white),
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
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('英国 多塞特(Dorset)', style: TextStyle(fontWeight: FontWeight.bold)),
Row(
children: [
Icon(Icons.star, size: 16),
Text('4.8'),
],
),
],
),
Text("Man O'War海滩"),
Text('9月2日至7日'),
Text('房客说"会推荐再次入住，风景漂亮。"'),
SizedBox(height: 8),
Text('¥2,424 /晚', style: TextStyle(fontWeight: FontWeight.bold)),
],
),
),
],
),
),
);
}
}