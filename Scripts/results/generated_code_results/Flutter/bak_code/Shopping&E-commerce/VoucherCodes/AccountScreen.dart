import 'package:flutter/material.dart';
class AccountScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Tailor your offers and access exciting rewards'),
),
body: SingleChildScrollView(
child: Column(
children: [
ElevatedButton(
onPressed: () {},
child: Text('Sign In'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.yellow,
minimumSize: Size(double.infinity, 50),
),
),
ListTile(
leading: Icon(Icons.person),
title: Text('Personal details'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
leading: Icon(Icons.favorite),
title: Text('Favourite brands'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
leading: Icon(Icons.email),
title: Text('Communication preferences'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
leading: Icon(Icons.star),
title: Text('VIP rewards tracker'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 2),
decoration: BoxDecoration(
color: Colors.yellow,
borderRadius: BorderRadius.circular(10),
),
child: Text('New', style: TextStyle(color: Colors.black)),
),
Icon(Icons.chevron_right),
],
),
),
ListTile(
leading: Icon(Icons.account_balance_wallet),
title: Text('Track transaction status'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
leading: Icon(Icons.card_giftcard),
title: Text('Gift card wallet'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
leading: Icon(Icons.code),
title: Text('Submit a code'),
trailing: Icon(Icons.chevron_right),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 3,
items: [
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Discover'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.star), label: 'VIP'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Account'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Search');
}
},
),
);
}
}