import 'package:flutter/material.dart';
class HomeScreen extends StatefulWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
_HomeScreenState createState() => _HomeScreenState();
}
class _HomeScreenState extends State<HomeScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
decoration: InputDecoration(
hintText: '心火已燃',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
Expanded(
child: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: RichText(
text: TextSpan(
style: DefaultTextStyle.of(context).style,
children: [
TextSpan(text: '关注 '),
TextSpan(
text: '发现',
style: TextStyle(fontWeight: FontWeight.bold),
),
TextSpan(text: ' 活动'),
],
),
),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
ElevatedButton(
onPressed: () {},
child: Text('跟练'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
ElevatedButton(
onPressed: () {},
child: Text('同城'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
ElevatedButton(
onPressed: () {},
child: Text('心火已燃'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
ElevatedButton(
onPressed: () {},
child: Text('城市K车'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.blue,
),
),
],
),
SizedBox(height: 16),
Stack(
children: [
Container(
height: 200,
color: Colors.grey[300],
child: Center(
child: Text('Map View'),
),
),
Positioned(
right: 8,
top: 8,
child: Column(
children: [
Icon(Icons.zoom_in),
Icon(Icons.zoom_out),
Icon(Icons.fullscreen),
],
),
),
],
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
Icon(Icons.directions_walk),
Text('户外跑步'),
Spacer(),
Text('5.00'),
Text('公里'),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: Row(
children: [
CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(width: 8),
Text('朱七七教瘦'),
Spacer(),
Row(
children: [
Icon(Icons.favorite),
Text('1373'),
],
),
],
),
),
Stack(
children: [
Image.asset('assets/images/template.png'),
Positioned(
bottom: 8,
right: 8,
child: FloatingActionButton(
onPressed: () {},
child: Icon(Icons.play_arrow),
),
),
],
),
],
),
),
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
switch (index) {
case 0:
break;
case 1:
Navigator.pushNamed(context, 'Store');
break;
case 2:
Navigator.pushNamed(context, 'SearchSports');
break;
case 3:
Navigator.pushNamed(context, 'Store');
break;
case 4:
Navigator.pushNamed(context, 'Profile');
break;
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