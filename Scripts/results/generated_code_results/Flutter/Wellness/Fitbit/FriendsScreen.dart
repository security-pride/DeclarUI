import 'package:flutter/material.dart';
class FriendsPage extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('好友'),
actions: [
IconButton(
icon: Icon(Icons.person_add),
onPressed: () {
Navigator.pushNamed(context, 'FindFriend');
},
),
],
),
body: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset(
'assets/images/template.png',
width: 200,
height: 200,
),
SizedBox(height: 20),
Text(
'和朋友一起继续向前！',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'记录进度、发送鼓励，并通过友好竞赛让自己更有活力。',
textAlign: TextAlign.center,
style: TextStyle(fontSize: 16),
),
),
SizedBox(height: 20),
ElevatedButton.icon(
icon: Icon(Icons.person_add),
label: Text('添加好友'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
minimumSize: Size(200, 50),
),
onPressed: () {
Navigator.pushNamed(context, 'FindFriend');
},
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 2,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.explore),
label: '发现',
),
BottomNavigationBarItem(
icon: Icon(Icons.today),
label: '今天',
),
BottomNavigationBarItem(
icon: Icon(Icons.people),
label: '好友',
),
BottomNavigationBarItem(
icon: Icon(Icons.star),
label: 'Premium',
),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
}