import 'package:flutter/material.dart';
class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Image.asset('assets/images/template.png', height: 30),
actions: [
IconButton(
icon: Stack(
children: [
Icon(Icons.notifications),
Positioned(
right: 0,
top: 0,
child: Container(
padding: EdgeInsets.all(2),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(
minWidth: 12,
minHeight: 12,
),
child: Text(
'1',
style: TextStyle(
color: Colors.white,
fontSize: 8,
),
textAlign: TextAlign.center,
),
),
)
],
),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.search),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('Hello, ml296'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Image.asset('assets/images/template.png', width: 30),
SizedBox(width: 8),
Text('EN'),
],
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Wrap(
spacing: 8,
runSpacing: 8,
children: [
ElevatedButton(
onPressed: () => Navigator.pushNamed(context, 'Orders'),
child: Text('Your Orders'),
),
ElevatedButton(
onPressed: () {},
child: Text('Buy Again'),
),
ElevatedButton(
onPressed: () => Navigator.pushNamed(context, 'Account'),
child: Text('Your Account'),
),
ElevatedButton(
onPressed: () {},
child: Text('Your Lists'),
),
],
),
),
_buildSection('Your Orders', [
'assets/images/template.png',
'assets/images/template.png',
]),
_buildSection('Buy again', [
'assets/images/template.png',
'assets/images/template.png',
'assets/images/template.png',
'assets/images/template.png',
'assets/images/template.png',
'assets/images/template.png',
]),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.shopping_cart),
Positioned(
right: 0,
top: 0,
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
'2',
style: TextStyle(
color: Colors.white,
fontSize: 8,
),
textAlign: TextAlign.center,
),
),
)
],
),
label: 'Cart',
),
BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildSection(String title, List<String> imagePaths) {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(title, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('See all', style: TextStyle(color: Colors.blue)),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: imagePaths.map((path) => Padding(
padding: EdgeInsets.all(8),
child: Image.asset(path, width: 100, height: 100),
)).toList(),
),
),
],
);
}
}