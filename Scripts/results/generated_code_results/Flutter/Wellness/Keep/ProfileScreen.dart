import 'package:flutter/material.dart';
class ProfileScreen extends StatefulWidget {
const ProfileScreen({Key? key}) : super(key: key);
@override
_ProfileScreenState createState() => _ProfileScreenState();
}
class _ProfileScreenState extends State<ProfileScreen> {
int _selectedIndex = 4;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Boots--2333'),
actions: [
IconButton(icon: Icon(Icons.qr_code_scanner), onPressed: () {}),
IconButton(icon: Icon(Icons.hexagon), onPressed: () {}),
IconButton(icon: Icon(Icons.settings), onPressed: () {}),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
radius: 30,
),
title: Text('Boots--2333'),
subtitle: Text('关注 1 | 粉丝 0 | 加油 1'),
trailing: Icon(Icons.chevron_right),
),
Wrap(
spacing: 8,
children: [
Chip(label: Text('Kg 3 新升级!')),
Chip(label: Text('14 新挑战')),
Chip(label: Text('2016.07.07')),
],
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Expanded(
child: Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('我的数据'),
SizedBox(height: 8),
Text('0 分钟', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
Text('本周运动'),
],
),
),
),
),
Expanded(
child: Card(
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('体重数据'),
SizedBox(height: 8),
Text('70.0 公斤', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
Text('近 12 个月'),
],
),
),
),
),
],
),
),
Container(
margin: EdgeInsets.all(16),
padding: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.purple,
borderRadius: BorderRadius.circular(8),
),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('keep·会员', style: TextStyle(color: Colors.white)),
Text('告别肚腩计划', style: TextStyle(color: Colors.white)),
],
),
ElevatedButton(
onPressed: () {},
child: Text('立即开通'),
style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
),
],
),
),
ListTile(
leading: Icon(Icons.edit),
title: Text('我的动态'),
trailing: Text('1 条动态 >'),
onTap: () {},
),
ListTile(
leading: Icon(Icons.star),
title: Text('收藏与加油'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.play_circle_outline),
title: Text('我的课程'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.emoji_events),
title: Text('我的活动'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.restaurant_menu),
title: Text('我的饮食'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.account_balance_wallet),
title: Text('订单与钱包'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
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
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.school), label: '课程'),
BottomNavigationBarItem(icon: Icon(Icons.directions_run), label: '运动'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: '商城'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的'),
],
),
);
}
}