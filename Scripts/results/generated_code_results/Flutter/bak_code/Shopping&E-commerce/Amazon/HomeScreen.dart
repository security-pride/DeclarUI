import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
decoration: InputDecoration(
hintText: 'Search Amazon.co.uk',
prefixIcon: Icon(Icons.search),
suffixIcon: Icon(Icons.camera_alt),
),
),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
Text('Prime', style: TextStyle(fontSize: 16)),
Text('Video', style: TextStyle(fontSize: 16)),
Text('Music', style: TextStyle(fontSize: 16)),
],
),
ListTile(
leading: Icon(Icons.location_on),
title: Text('Deliver to Muyi - St. Andrews KY16 9'),
trailing: Icon(Icons.arrow_drop_down),
),
Container(
height: 200,
child: Stack(
children: [
Image.asset('assets/images/template.png', fit: BoxFit.cover),
Positioned(
left: 10,
bottom: 10,
child: Text(
'Shop Electronics today',
style: TextStyle(fontSize: 24, color: Colors.white),
),
),
],
),
),
Padding(
padding: EdgeInsets.all(8.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildDealCard('Recommended deal for you', 'assets/images/template.png'),
_buildDealCard('4+ star deal for you', 'assets/images/template.png'),
_buildDealCard('Sports & Outdoors', 'assets/images/template.png'),
],
),
),
Padding(
padding: EdgeInsets.all(8.0),
child: Text('Prime Day by category', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildCategoryItem('Bags & Luggage', Icons.luggage),
_buildCategoryItem('Office', Icons.print),
_buildCategoryItem('Automotive', Icons.directions_car),
_buildCategoryItem('Jewellery & Watches', Icons.watch),
],
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Cart'),
BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Profile');
}
},
),
);
}
Widget _buildDealCard(String title, String imagePath) {
return Card(
child: Column(
children: [
Image.asset(imagePath, height: 100, width: 100, fit: BoxFit.cover),
Text(title, style: TextStyle(fontSize: 12)),
],
),
);
}
Widget _buildCategoryItem(String label, IconData icon) {
return Column(
children: [
CircleAvatar(
backgroundColor: Colors.blue,
child: Icon(icon, color: Colors.white),
),
SizedBox(height: 4),
Text(label, style: TextStyle(fontSize: 12)),
],
);
}
}