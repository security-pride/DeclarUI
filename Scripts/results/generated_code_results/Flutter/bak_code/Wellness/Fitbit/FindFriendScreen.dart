import 'package:flutter/material.dart';
class FindFriendPage extends StatefulWidget {
@override
_FindFriendPageState createState() => _FindFriendPageState();
}
class _FindFriendPageState extends State<FindFriendPage> with SingleTickerProviderStateMixin {
late TabController _tabController;
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
appBar: AppBar(
title: Text('寻找朋友'),
actions: [
TextButton(
child: Text('完成', style: TextStyle(color: Colors.white)),
onPressed: () {
Navigator.pushNamed(context, 'Friends');
},
),
],
),
body: Column(
children: [
TabBar(
controller: _tabController,
tabs: [
Tab(icon: Icon(Icons.contacts), text: '通讯录'),
Tab(icon: Icon(Icons.email), text: '电子邮箱'),
Tab(icon: Icon(Icons.person), text: 'Username'),
],
),
Expanded(
child: TabBarView(
controller: _tabController,
children: [
_buildContactsTab(),
_buildEmailTab(),
_buildUsernameTab(),
],
),
),
],
),
);
}
Widget _buildContactsTab() {
return Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text(
'利用您的电话号码查找好友！',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
Text(
'输入您的电话号码，从您的联系人列表中添加好友。',
textAlign: TextAlign.center,
),
SizedBox(height: 32),
ElevatedButton(
child: Text('连接通讯录'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
minimumSize: Size(double.infinity, 50),
),
onPressed: () {
// Implement connect to contacts logic here
},
),
],
);
}
Widget _buildEmailTab() {
return Center(
child: Text('电子邮箱查找功能待实现'),
);
}
Widget _buildUsernameTab() {
return Center(
child: Text('用户名查找功能待实现'),
);
}
}