import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('突发新闻'),
actions: [
IconButton(
icon: Icon(Icons.search),
onPressed: () {
// Implement search functionality
},
),
IconButton(
icon: Icon(Icons.person),
onPressed: () {
// Implement user profile action
},
),
],
),
body: Column(
children: [
Container(
padding: EdgeInsets.all(8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('选择您的城市'),
Row(
children: [
Text('Mon, 15 M07 2024, 08:35'),
SizedBox(width: 8),
Icon(Icons.wb_sunny),
],
),
],
),
),
Container(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('猜你喜欢', style: TextStyle(fontWeight: FontWeight.bold)),
Text('热门'),
Text('视频'),
Text('同城'),
Text('突发重大'),
Text('最新资讯'),
],
),
),
Expanded(
child: ListView(
children: [
NewsItem(
title: '总统核定成立大法官提名审查小组 拟明日开會',
source: 'UDN.COM',
time: '33分钟',
),
AdItem(
adText: 'RSI C6',
imagePath: 'assets/images/template.png',
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
items: [
BottomNavigationBarItem(icon: Icon(Icons.newspaper), label: '新闻'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: '话题墙'),
BottomNavigationBarItem(icon: Icon(Icons.campaign), label: 'BELOUD'),
BottomNavigationBarItem(icon: Icon(Icons.notifications), label: '提醒'),
BottomNavigationBarItem(icon: Icon(Icons.more_horiz), label: '更多'),
],
onTap: (index) {
if (index == 3) {
Navigator.pushNamed(context, 'Notice');
} else if (index == 4) {
Navigator.pushNamed(context, 'MoreDetails');
}
},
),
);
}
}
class NewsItem extends StatelessWidget {
final String title;
final String source;
final String time;
const NewsItem({
Key? key,
required this.title,
required this.source,
required this.time,
}) : super(key: key);
@override
Widget build(BuildContext context) {
return Card(
margin: EdgeInsets.all(8),
child: Padding(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(fontWeight: FontWeight.bold, fontSize: 18)),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('$source - $time'),
Row(
children: [
Icon(Icons.thumb_up),
SizedBox(width: 8),
Icon(Icons.comment),
SizedBox(width: 8),
Icon(Icons.share),
],
),
],
),
],
),
),
);
}
}
class AdItem extends StatelessWidget {
final String adText;
final String imagePath;
const AdItem({
Key? key,
required this.adText,
required this.imagePath,
}) : super(key: key);
@override
Widget build(BuildContext context) {
return Card(
margin: EdgeInsets.all(8),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(8),
child: Text('AD', style: TextStyle(color: Colors.grey)),
),
Image.asset(imagePath),
Padding(
padding: EdgeInsets.all(8),
child: Text(adText, style: TextStyle(fontWeight: FontWeight.bold)),
),
],
),
);
}
}