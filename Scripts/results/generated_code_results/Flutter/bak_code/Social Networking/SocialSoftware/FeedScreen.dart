import 'package:flutter/material.dart';
class FeedScreen extends StatefulWidget {
@override
_FeedScreenState createState() => _FeedScreenState();
}
class _FeedScreenState extends State<FeedScreen> {
final List<Map<String, dynamic>> _posts = [
{
'user': 'arochinski',
'content': 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
'image': true,
'stats': {'answers': 7, 'likes': 59},
'timeAgo': '2 min'
},
{
'user': 'arochinski',
'content': 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
'stats': {'answers': 7, 'likes': 59},
'timeAgo': '2 min'
},
{
'user': 'aura',
'content': 'Tempor dolor proident duis incididunt et. Cillum incididunt irure nisi excepteur sit ad ipsum consectetur proident deserunt sint',
'timeAgo': '1min'
},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Image.asset('assets/images/template.png', height: 30),
actions: [
IconButton(
icon: Icon(Icons.menu),
onPressed: () {},
),
],
),
body: ListView.builder(
itemCount: _posts.length,
itemBuilder: (context, index) {
final post = _posts[index];
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(post['user']),
subtitle: Text(post['timeAgo']),
trailing: IconButton(
icon: Icon(Icons.more_horiz),
onPressed: () {},
),
onTap: () => Navigator.pushNamed(context, 'UserProfile'),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text(post['content']),
),
if (post['image'] == true)
Padding(
padding: const EdgeInsets.all(16.0),
child: Image.asset('assets/images/template.png'),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Row(
children: [
IconButton(
icon: Icon(Icons.favorite_border),
onPressed: () {},
),
Text('${post['stats']['likes']}'),
],
),
Row(
children: [
IconButton(
icon: Icon(Icons.chat_bubble_outline),
onPressed: () {},
),
Text('${post['stats']['answers']}'),
],
),
IconButton(
icon: Icon(Icons.repeat),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.send),
onPressed: () {},
),
],
),
),
Divider(),
],
);
},
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.add_box), label: 'Create'),
BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
switch (index) {
case 1:
Navigator.pushNamed(context, 'Search');
break;
case 3:
Navigator.pushNamed(context, 'Activity');
break;
case 4:
Navigator.pushNamed(context, 'Profile');
break;
}
},
),
);
}
}