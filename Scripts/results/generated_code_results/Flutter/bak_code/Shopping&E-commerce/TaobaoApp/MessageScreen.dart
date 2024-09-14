import 'package:flutter/material.dart';
class MessageScreen extends StatefulWidget {
const MessageScreen({Key? key}) : super(key: key);
@override
_MessageScreenState createState() => _MessageScreenState();
}
class _MessageScreenState extends State<MessageScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('消息'),
actions: [
IconButton(icon: Icon(Icons.edit), onPressed: () {}),
IconButton(icon: Icon(Icons.search), onPressed: () {}),
IconButton(icon: Icon(Icons.add), onPressed: () {}),
],
),
body: Column(
children: [
_buildCategories(),
_buildBanner(),
Expanded(
child: ListView(
children: [
_buildSectionHeader('两周前的消息'),
_buildMessageItem(
'romoss旗舰店',
'24/07/03',
'商品使用说明',
unreadCount: 4,
),
_buildMessageItem(
'订阅号消息',
'24/06/13',
'COURTMAN野球帝:新品揭晓，所有等待都值得。',
),
_buildMessageItem(
'jELLYCAT海外旗舰店',
'24/04/03',
'Jellycat 2024新生系列焕新上市！会员臻享...',
unreadCount: 3,
),
_buildMessageItem(
'YOMIK',
'24/03/25',
'亲，对藜香抹微云、的服务满意吗？',
unreadCount: 1,
),
_buildMessageItem(
'Starbucks星巴克官方旗舰店',
'24/03/19',
'亲爱的，你感兴趣的宝贝降价啦，不要错过限...',
unreadCount: 4,
),
_buildMessageItem(
'良品铺子旗舰店',
'24/03/13',
'周三会员福利日！千万别错过！',
unreadCount: 5,
),
_buildMessageItem(
'jELLYCAT旗舰店',
'24/02/22',
'龙腾新岁，开工大吉！入会臻享爆品优先购。',
unreadCount: 2,
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 2,
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 3:
Navigator.pushNamed(context, 'Cart');
break;
case 4:
Navigator.pushNamed(context, 'Profile');
break;
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: '首页'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: '逛逛'),
BottomNavigationBarItem(icon: Icon(Icons.message), label: '消息'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: '购物车'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '我的淘宝'),
],
),
);
}
Widget _buildCategories() {
return Container(
height: 80,
child: ListView(
scrollDirection: Axis.horizontal,
children: [
_buildCategoryItem('交易物流', Icons.local_shipping, () {
Navigator.pushNamed(context, 'Logistics');
}),
_buildCategoryItem('售后', Icons.support_agent, () {}),
_buildCategoryItem('提醒', Icons.notifications, () {}),
_buildCategoryItem('互动', Icons.people, () {}),
],
),
);
}
Widget _buildCategoryItem(String label, IconData icon, VoidCallback onTap) {
return GestureDetector(
onTap: onTap,
child: Container(
width: 80,
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(icon, size: 30),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
),
),
);
}
Widget _buildBanner() {
return Container(
padding: EdgeInsets.all(16),
color: Colors.orange[100],
child: Row(
children: [
Image.asset('assets/images/template.png', width: 40, height: 40),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('热门活动抢先看', style: TextStyle(fontWeight: FontWeight.bold)),
Text('更多优惠尽在掌握', style: TextStyle(fontSize: 12)),
],
),
),
Text('6.1-8.31', style: TextStyle(color: Colors.orange)),
],
),
);
}
Widget _buildSectionHeader(String title) {
return Container(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
color: Colors.grey[200],
child: Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
);
}
Widget _buildMessageItem(String title, String date, String content, {int? unreadCount}) {
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title),
Text(date, style: TextStyle(fontSize: 12, color: Colors.grey)),
],
),
subtitle: Text(content, maxLines: 1, overflow: TextOverflow.ellipsis),
trailing: unreadCount != null
? CircleAvatar(
radius: 10,
backgroundColor: Colors.red,
child: Text(
unreadCount.toString(),
style: TextStyle(color: Colors.white, fontSize: 10),
),
)
: null,
onTap: () {
// Handle message tap
},
);
}
}