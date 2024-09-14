import 'package:flutter/material.dart';
class OrdersScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Profile'),
),
title: TextField(
decoration: InputDecoration(
hintText: 'Search Amazon.co.uk',
prefixIcon: Icon(Icons.search),
suffixIcon: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.camera_alt),
Icon(Icons.mic),
],
),
),
),
),
body: ListView(
children: [
Text('Your Orders', style: Theme.of(context).textTheme.headline5),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
child: Row(
children: [
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: 'Search all orders',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(),
),
),
),
TextButton(
onPressed: () => Navigator.pushNamed(context, 'Filter'),
child: Text('Filter >'),
),
],
),
),
_buildBuyAgainSection(),
Padding(
padding: EdgeInsets.all(16.0),
child: Text('Past three months', style: Theme.of(context).textTheme.subtitle1),
),
_buildOrderItem(
'SmithPackaging Large Bubble Wrap Roll 300mm x 5m - Sm...',
'Delivered 10 June',
'assets/images/template.png',
),
_buildOrderItem(
'AYhome Travel Pillow, Memory Foam Neck Pillow for Travel,...',
'Delivered 10 June',
'assets/images/template.png',
),
_buildOrderItem(
'Toyama Koshihikari 1kg',
'Delivered 28 May',
'assets/images/template.png',
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 1,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Cart'),
BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'Profile');
}
},
),
);
}
Widget _buildBuyAgainSection() {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Buy again', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('See more', style: TextStyle(color: Colors.teal)),
],
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildBuyAgainItem('assets/images/template.png'),
_buildBuyAgainItem('assets/images/template.png'),
_buildBuyAgainItem('assets/images/template.png'),
_buildBuyAgainItem('assets/images/template.png'),
],
),
),
],
);
}
Widget _buildBuyAgainItem(String imagePath) {
return Padding(
padding: EdgeInsets.symmetric(horizontal: 8.0),
child: Image.asset(imagePath, width: 100, height: 100),
);
}
Widget _buildOrderItem(String title, String deliveryDate, String imagePath) {
return ListTile(
leading: Image.asset(imagePath, width: 50, height: 50),
title: Text(title),
subtitle: Text(deliveryDate),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Navigate to order details page
},
);
}
}