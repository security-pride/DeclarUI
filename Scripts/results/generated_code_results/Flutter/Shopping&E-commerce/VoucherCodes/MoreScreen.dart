import 'package:flutter/material.dart';
class MoreScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Search'),
),
title: Text('Reward Offers'),
backgroundColor: Colors.yellow,
),
body: ListView(
children: [
_buildRewardCard(
'amazon.co.uk',
'Exclusive Great Savings with Prime Day Deals Plus a £3...',
'Ends 22 Jul',
),
_buildRewardCard(
'currys',
'Exclusive Free £10 Currys Voucher with Orders Over £...',
'Ends 1 Aug',
),
_buildRewardCard(
'just eat',
'Exclusive Free £3 Amazon Voucher with Orders Over £...',
'Ends today',
),
_buildRewardCard(
'Booking.com',
'Exclusive 15% off Selected Hotel Bookings: Free £5 A...',
'Ends 1 Aug',
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
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
Widget _buildRewardCard(String logo, String title, String expiryDate) {
return Card(
margin: EdgeInsets.all(8),
child: Padding(
padding: EdgeInsets.all(16),
child: Row(
children: [
Image.asset(
'assets/images/template.png',
width: 60,
height: 60,
),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
title,
style: TextStyle(fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Online Reward',
style: TextStyle(color: Colors.orange),
),
Text(
expiryDate,
style: TextStyle(color: Colors.grey),
),
],
),
],
),
),
],
),
),
);
}
}