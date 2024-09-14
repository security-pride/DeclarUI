import 'package:flutter/material.dart';
class CardsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'More'),
),
title: Text('STUDENT ADDITIONS'),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'Personal debit',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
Card(
margin: EdgeInsets.symmetric(horizontal: 16.0),
child: Image.asset('assets/images/template.png'),
),
Padding(
padding: EdgeInsets.all(16.0),
child: Row(
children: [
Container(
width: 10,
height: 10,
decoration: BoxDecoration(
color: Colors.green,
shape: BoxShape.circle,
),
),
SizedBox(width: 8),
Text('Active'),
],
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Added to Apple Wallet',
style: TextStyle(color: Colors.green),
),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
ElevatedButton(
onPressed: () {},
child: Column(
children: [
Icon(Icons.warning),
Text('Report damaged,\nlost or stolen'),
],
),
),
ElevatedButton(
onPressed: () {},
child: Column(
children: [
Icon(Icons.ac_unit),
Text('Temporary\nfreeze'),
],
),
),
ElevatedButton(
onPressed: () {},
child: Column(
children: [
Icon(Icons.remove_red_eye),
Text('View card details\n& PIN'),
],
),
),
],
),
SizedBox(height: 16),
Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'Travel money',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
ListTile(
title: Text('Create travel wallet'),
trailing: Icon(Icons.arrow_forward_ios),
onTap: () {},
),
Padding(
padding: EdgeInsets.all(16.0),
child: Text(
'Spending controls',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
),
ListTile(
title: Text('Contactless limit'),
trailing: Text('£100'),
onTap: () {},
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
}