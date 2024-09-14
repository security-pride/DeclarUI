import 'package:flutter/material.dart';
class StoreScreen extends StatefulWidget {
const StoreScreen({Key? key}) : super(key: key);
@override
_StoreScreenState createState() => _StoreScreenState();
}
class _StoreScreenState extends State<StoreScreen> {
int _selectedIndex = 3;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
decoration: InputDecoration(
hintText: '瑜伽服装',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
actions: [
IconButton(
icon: Icon(Icons.bolt),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.shopping_cart),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
children: [
Expanded(
child: Text(
'全部',
style: TextStyle(fontWeight: FontWeight.bold),
),
),
Expanded(child: Text('运动必备')),
],
),
Container(
padding: EdgeInsets.all(8),
color: Colors.purple,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'新人首单礼',
style: TextStyle(color: Colors.white, fontSize: 18),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
_buildProductItem('智能手表', '¥259', '¥289', '必买精选'),
_buildProductItem('智能体脂秤', '¥82', '¥109', '热销爆款'),
_buildProductItem('瑜伽垫', '¥59', '¥89', '直降 ¥30'),
_buildProductItem('跳绳', '¥13', '¥29', '60 天低价'),
],
),
],
),
),
GridView.count(
shrinkWrap: true,
physics: NeverScrollableScrollPhysics(),
crossAxisCount: 5,
children: [
_buildCategoryItem('运动奖品', Icons.star),
_buildCategoryItem('全身燃脂', Icons.whatshot),
_buildCategoryItem('身体数据', Icons.watch),
_buildCategoryItem('运动装备', Icons.fitness_center),
_buildCategoryItem('家用智能', Icons.home),
_buildCategoryItem('Keep 周边', Icons.category),
_buildCategoryItem('健康食品', Icons.restaurant),
_buildCategoryItem('女子服饰', Icons.woman),
_buildCategoryItem('男子服饰', Icons.man),
_buildCategoryItem('全部分类', Icons.menu),
],
),
Image.asset('assets/images/template.png'),
Image.asset('assets/images/template.png'),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.school), label: '课程'),
BottomNavigationBarItem(icon: Icon(Icons.directions_run), label: '运动'),
BottomNavigationBarItem(icon: Icon(Icons.store), label: '商城'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
),
);
}
Widget _buildProductItem(String name, String price, String originalPrice, String tag) {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png', width: 80, height: 80),
Text(name, style: TextStyle(color: Colors.white)),
Row(
children: [
Text(price, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
SizedBox(width: 4),
Text(originalPrice, style: TextStyle(color: Colors.white, decoration: TextDecoration.lineThrough)),
],
),
Container(
padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
color: Colors.red,
child: Text(tag, style: TextStyle(color: Colors.white, fontSize: 12)),
),
],
);
}
Widget _buildCategoryItem(String name, IconData icon) {
return Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon),
Text(name, textAlign: TextAlign.center),
],
);
}
}