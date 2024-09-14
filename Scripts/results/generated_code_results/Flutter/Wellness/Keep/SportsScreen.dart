import 'package:flutter/material.dart';
class SportsScreen extends StatefulWidget {
const SportsScreen({Key? key}) : super(key: key);
@override
_SportsScreenState createState() => _SportsScreenState();
}
class _SportsScreenState extends State<SportsScreen> {
String selectedRunType = '轻松跑';
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
Text(
'为你推荐更适合的跑步方式',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
IconButton(
icon: Icon(Icons.lightbulb_outline),
onPressed: () {
// 开始定制逻辑
},
),
],
),
),
Expanded(
child: Container(
color: Colors.purple,
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text(
'Hi~ 我是你的轻松跑教练',
style: TextStyle(color: Colors.white, fontSize: 20),
),
SizedBox(height: 16),
Text(
'帮你轻松面对 3 公里',
style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
Wrap(
spacing: 8,
children: [
Chip(label: Text('#高效减脂')),
Chip(label: Text('#不窒气')),
Chip(label: Text('#轻松跑更远')),
],
),
SizedBox(height: 16),
TextButton(
onPressed: () {
// 限时免费逻辑
},
child: Text('限时免费，剩余 3 次 >', style: TextStyle(color: Colors.white)),
),
],
),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: ['目标跑', '自由跑', '轻松跑', '课程跑', '自定义'].map((type) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 8.0),
child: ChoiceChip(
label: Text(type),
selected: selectedRunType == type,
onSelected: (selected) {
setState(() {
selectedRunType = type;
});
},
),
);
}).toList(),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
TextButton.icon(
onPressed: () {
// 路线逻辑
},
icon: Icon(Icons.map),
label: Text('路线'),
),
ElevatedButton(
onPressed: () {
// GO 逻辑
},
child: Text('GO'),
style: ElevatedButton.styleFrom(
shape: CircleBorder(),
padding: EdgeInsets.all(24),
),
),
TextButton.icon(
onPressed: () {
// 跑鞋逻辑
},
icon: Icon(Icons.shopping_bag),
label: Text('跑鞋'),
),
],
),
),
BottomNavigationBar(
currentIndex: 1,
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'SearchSports');
}
},
items: [
BottomNavigationBarItem(
icon: Icon(Icons.calendar_today),
label: '运动日历',
),
BottomNavigationBarItem(
icon: Icon(Icons.directions_run),
label: '户外跑步',
),
BottomNavigationBarItem(
icon: Icon(Icons.directions_walk),
label: '户外行走',
),
BottomNavigationBarItem(
icon: Icon(Icons.sports_gymnastics),
label: '跳绳',
),
BottomNavigationBarItem(
icon: Icon(Icons.grid_view),
label: '',
),
],
),
],
),
),
);
}
}