import 'package:flutter/material.dart';
class DetailsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Search'),
),
title: Text('MOBILES.CO.UK'),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png'),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Exclusive Free £50 Currys Voucher with Vodafone Pay Monthly Contracts - Use with Code VC10OFF for £10 off Upfront Cost of Handsets',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Online Reward', style: TextStyle(color: Colors.orange)),
Text('Ends 20 Jul', style: TextStyle(color: Colors.grey)),
],
),
SizedBox(height: 16),
GestureDetector(
onTap: () => Navigator.pushNamed(context, 'Terms'),
child: Text(
'Terms and Conditions',
style: TextStyle(decoration: TextDecoration.underline),
),
),
SizedBox(height: 16),
ListTile(
leading: Icon(Icons.star, color: Colors.yellow),
title: Text(
'This is a VIP retailer! VIPs get a £5 gift card for every two shops with any VIP retailer',
style: TextStyle(fontSize: 14),
),
),
SizedBox(height: 16),
ElevatedButton(
onPressed: () {},
child: Text('Sign In to Get Reward'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.yellow,
minimumSize: Size(double.infinity, 50),
),
),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.star),
Positioned(
right: 0,
child: Container(
padding: EdgeInsets.all(1),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(minWidth: 12, minHeight: 12),
child: Text(
'NEW',
style: TextStyle(color: Colors.white, fontSize: 8),
textAlign: TextAlign.center,
),
),
),
],
),
label: 'VIP',
),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Account'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Search');
} else if (index == 3) {
Navigator.pushNamed(context, 'Account');
}
},
),
);
}
}