import 'package:flutter/material.dart';
class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Row(
children: [
CircleAvatar(
backgroundColor: Colors.pink[100],
child: Text('M', style: TextStyle(color: Colors.black)),
),
SizedBox(width: 10),
Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('mu_447895'),
Text('注册时间 2021', style: TextStyle(fontSize: 12)),
],
),
],
),
actions: [
Stack(
alignment: Alignment.topRight,
children: [
IconButton(
icon: Icon(Icons.mail_outline),
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
'5',
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
IconButton(
icon: Icon(Icons.shopping_cart_outlined),
onPressed: () {},
),
],
),
body: ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('购物', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
_buildListTile(Icons.favorite_border, '追踪列表', '密切关注追踪物品'),
_buildListTile(Icons.bookmark_border, '已保存', '搜索、卖家、动态消息'),
_buildListTile(Icons.refresh, '再次购买', '购买已购买过的物品'),
_buildListTile(Icons.shopping_bag_outlined, '购买记录', '您的订购历史记录', onTap: () {
Navigator.pushNamed(context, 'History');
}),
_buildListTile(Icons.gavel, '出价和议价', '进行中的拍卖和卖家议价'),
_buildListTile(Icons.history, '最近浏览', '您最近浏览的物品'),
_buildListTile(Icons.straighten, '我的尺码', '查看您保存的偏好设置'),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('快捷方式', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
_buildListTile(Icons.sell, '出售记录', ''),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '主页'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的 eBay'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: '搜索'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: '通知'),
BottomNavigationBarItem(icon: Icon(Icons.sell), label: '出售物品'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildListTile(IconData icon, String title, String subtitle, {VoidCallback? onTap}) {
return ListTile(
leading: Container(
padding: EdgeInsets.all(8),
decoration: BoxDecoration(
color: Colors.grey[200],
shape: BoxShape.circle,
),
child: Icon(icon),
),
title: Text(title),
subtitle: Text(subtitle),
trailing: Icon(Icons.arrow_forward_ios, size: 16),
onTap: onTap,
);
}
}