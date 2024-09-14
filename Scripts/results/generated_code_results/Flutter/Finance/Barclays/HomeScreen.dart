import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: Icon(Icons.person),
title: Text('Miss Muyi Li'),
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
),
),
],
),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 24, height: 24),
SizedBox(width: 8),
Text('STUDENT ADDITIONS', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
],
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('£3,760.06', style: TextStyle(fontSize: 32, fontWeight: FontWeight.bold)),
Text('Available balance | 20-25-24 90427500', style: TextStyle(color: Colors.grey)),
],
),
),
Padding(
padding: EdgeInsets.all(16.0),
child: Card(
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Dreaming of your first home?', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
IconButton(
icon: Icon(Icons.close),
onPressed: () {},
),
],
),
Text('You could buy with a 5% deposit. Tap to get started. T&Cs apply.'),
],
),
),
),
),
Padding(
padding: EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildQuickAction(Icons.credit_card, 'Your cards'),
_buildQuickAction(Icons.star, 'Your rewards'),
_buildQuickAction(Icons.account_balance_wallet, 'Spending'),
_buildQuickAction(Icons.phone_android, 'Mobile PINsentry'),
],
),
),
Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('Living more sustainably', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
SizedBox(height: 8),
Image.asset('assets/images/template.png', width: double.infinity, fit: BoxFit.cover),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Accounts'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_bag), label: 'Products'),
BottomNavigationBarItem(icon: Icon(Icons.swap_horiz), label: 'Pay & Transfer'),
BottomNavigationBarItem(icon: Icon(Icons.help), label: 'Help'),
BottomNavigationBarItem(icon: Icon(Icons.more_horiz), label: 'More'),
],
onTap: (index) {
if (index == 3) {
Navigator.pushNamed(context, 'Help');
} else if (index == 4) {
Navigator.pushNamed(context, 'More');
}
},
),
);
}
Widget _buildQuickAction(IconData icon, String label) {
return Column(
children: [
Container(
width: 60,
height: 60,
decoration: BoxDecoration(
color: Colors.blue,
shape: BoxShape.circle,
),
child: Icon(icon, color: Colors.white, size: 30),
),
SizedBox(height: 8),
Text(label, textAlign: TextAlign.center),
],
);
}
}