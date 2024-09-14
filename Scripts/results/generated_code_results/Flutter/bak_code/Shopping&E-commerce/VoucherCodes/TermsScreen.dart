import 'package:flutter/material.dart';
class TermsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Details'),
),
title: Text('Terms and Conditions'),
backgroundColor: Colors.yellow,
),
body: SingleChildScrollView(
padding: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
_buildTermItem('Valid on Vodafone pay monthly contracts only.'),
_buildTermItem('New customers only.'),
_buildTermItem('Excludes SIM Only plans.'),
_buildTermItem('VC10OFF Code: Some handsets may be excluded.'),
_buildTermItem('Monthly price (including out of bundle charges for Vodafone) will increase every April by the Consumer Price Index rate of inflation + 3.9%.'),
_buildTermItem('EXCLUDES KLARNA, CLEARPAY AND ANY OTHER "ORDER NOW PAY LATER" PAYMENT METHODS. Paypal Credit and Paypal Pay In 3 are also excluded types of payment.'),
_buildTermItem("If you don't receive your gift card within the expected timeframe, please wait until after your trip has been completed before contacting the VoucherCodes support team."),
_buildTermItem('Excludes retailers app orders. You must make your purchase through the brands website.'),
_buildTermItem('You must claim your gift card by clicking the Claim Your Reward button in your account within 6 months of the reward offer confirmation email or the gift card will be forfeited.'),
_buildTermItem('To be eligible for the offer you must make your Mobiles.co.uk purchase online via VoucherCodes.'),
],
),
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
if (index == 3) {
Navigator.pushNamed(context, 'Account');
}
},
),
);
}
Widget _buildTermItem(String text) {
return Padding(
padding: EdgeInsets.only(bottom: 16),
child: Text(
text,
style: TextStyle(fontSize: 16),
),
);
}
}