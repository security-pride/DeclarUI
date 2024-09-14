import 'package:flutter/material.dart';
class AccountScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'Profile');
},
),
title: TextField(
decoration: InputDecoration(
hintText: 'Search Amazon.co.uk',
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
Text('Orders', style: Theme.of(context).textTheme.headline6),
ListTile(
title: Text('Your Orders'),
trailing: Icon(Icons.chevron_right),
onTap: () {
Navigator.pushNamed(context, 'Orders');
},
),
ListTile(
title: Text('Your Subscribe & Save'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
title: Text('Your Amazon Day'),
trailing: Icon(Icons.chevron_right),
),
Text('Payments', style: Theme.of(context).textTheme.headline6),
ListTile(
title: Text('Payments and transactions'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
title: Text('Manage gift card balance'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
title: Text('Shop with Points'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
title: Text('Top up account'),
trailing: Icon(Icons.chevron_right),
),
ListTile(
title: Text('In-Store Promo Wallet'),
trailing: Icon(Icons.chevron_right),
),
Text('Customer Service', style: Theme.of(context).textTheme.headline6),
ListTile(
title: Text('Contact Us'),
trailing: Icon(Icons.chevron_right),
),
Text('Account Settings', style: Theme.of(context).textTheme.headline6),
],
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
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'Profile');
}
},
),
);
}
}