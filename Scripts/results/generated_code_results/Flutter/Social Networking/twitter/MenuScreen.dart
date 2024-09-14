import 'package:flutter/material.dart';
class MenuScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('9:41', style: TextStyle(color: Colors.black)),
actions: [
Stack(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
Positioned(
right: 0,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.blue,
shape: BoxShape.circle,
),
child: Text('1', style: TextStyle(color: Colors.white, fontSize: 10)),
),
),
],
),
IconButton(
icon: Icon(Icons.more_horiz),
onPressed: () {},
),
],
),
body: ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
CircleAvatar(
radius: 30,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 16),
Text(
'Pixsellz',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text('@pixsellz', style: TextStyle(color: Colors.grey)),
SizedBox(height: 16),
Row(
children: [
RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: '216 ', style: TextStyle(fontWeight: FontWeight.bold)),
TextSpan(text: 'Following'),
],
),
),
SizedBox(width: 16),
RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: '117 ', style: TextStyle(fontWeight: FontWeight.bold)),
TextSpan(text: 'Followers'),
],
),
),
],
),
],
),
),
Divider(),
ListTile(
leading: Icon(Icons.person),
title: Text('Profile'),
onTap: () => Navigator.pushNamed(context, 'Profile'),
),
ListTile(
leading: Icon(Icons.list),
title: Text('Lists'),
onTap: () {},
),
ListTile(
leading: Icon(Icons.chat_bubble_outline),
title: Text('Topics'),
onTap: () {},
),
ListTile(
leading: Icon(Icons.bookmark),
title: Text('Bookmarks'),
onTap: () {},
),
ListTile(
leading: Icon(Icons.flash_on),
title: Text('Moments'),
onTap: () {},
),
Divider(),
ListTile(
title: Text('Settings and privacy'),
onTap: () {},
),
ListTile(
title: Text('Help Center'),
onTap: () {},
),
],
),
bottomNavigationBar: BottomAppBar(
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.lightbulb_outline),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.qr_code),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.home),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
],
),
),
);
}
}