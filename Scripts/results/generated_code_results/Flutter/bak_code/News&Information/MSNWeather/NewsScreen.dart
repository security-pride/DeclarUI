import 'package:flutter/material.dart';
class NewsScreen extends StatefulWidget {
const NewsScreen({Key? key}) : super(key: key);
@override
_NewsScreenState createState() => _NewsScreenState();
}
class _NewsScreenState extends State<NewsScreen> {
int _selectedIndex = 0;
String _selectedCategory = 'For You';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Apps'),
),
title: TextField(
decoration: InputDecoration(
hintText: 'Search news',
suffixIcon: Icon(Icons.mic),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
actions: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
body: Column(
children: [
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
IconButton(
icon: Icon(Icons.menu),
onPressed: () {},
),
for (var category in ['For You', 'Local', 'Top Stories', 'US'])
Padding(
padding: const EdgeInsets.symmetric(horizontal: 4),
child: ChoiceChip(
label: Text(category),
selected: _selectedCategory == category,
onSelected: (selected) {
setState(() {
_selectedCategory = category;
});
},
),
),
],
),
),
Expanded(
child: ListView(
children: [
Text('Headlines', style: Theme.of(context).textTheme.titleLarge),
_buildNewsItem(
'Argentina wins record 16th Copa America title, beats Colombia 1-0 after Messi gets hurt',
'The Associated Press · 4h',
178,
47,
9,
),
_buildNewsItem(
'Caitlin Clark Goes Viral for Dropping Player to Floor in Fever-Lynx',
'Athlon Sports · 11h',
73,
29,
3,
),
_buildNewsItem(
'This 740-Square-Foot Bungalow Proves Just The Right Fit For A Family Of Seven',
'Southern Living · 6d',
18,
5,
1,
),
_buildNewsItem(
'How big is the average Social Security check of a middle-class retiree?',
'Moneywise · 22h',
113,
86,
64,
),
TextButton(
onPressed: () {},
child: Text('See more'),
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 4) {
Navigator.pushNamed(context, 'Apps');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Weather'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.tab),
Positioned(
right: 0,
child: Container(
padding: EdgeInsets.all(1),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(
minWidth: 12,
minHeight: 12,
),
child: Text(
'4',
style: TextStyle(
color: Colors.white,
fontSize: 8,
),
textAlign: TextAlign.center,
),
),
),
],
),
label: 'Tabs',
),
BottomNavigationBarItem(icon: Icon(Icons.apps), label: 'Apps'),
],
),
);
}
Widget _buildNewsItem(String title, String source, int likes, int dislikes, int comments) {
return Card(
child: Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(source, style: TextStyle(color: Colors.grey)),
SizedBox(height: 4),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Row(
children: [
Icon(Icons.thumb_up, size: 16),
SizedBox(width: 4),
Text('$likes'),
SizedBox(width: 16),
Icon(Icons.thumb_down, size: 16),
SizedBox(width: 4),
Text('$dislikes'),
SizedBox(width: 16),
Icon(Icons.comment, size: 16),
SizedBox(width: 4),
Text('$comments'),
],
),
],
),
),
SizedBox(width: 8),
ClipRRect(
borderRadius: BorderRadius.circular(8),
child: Image.asset(
'assets/images/template.png',
width: 80,
height: 80,
fit: BoxFit.cover,
),
),
],
),
),
);
}
}