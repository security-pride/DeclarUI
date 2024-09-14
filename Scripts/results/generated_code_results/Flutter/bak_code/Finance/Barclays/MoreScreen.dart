import 'package:flutter/material.dart';
class MoreScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('More'),
actions: [
TextButton(
child: Text('Logout', style: TextStyle(color: Colors.blue)),
onPressed: () {
// Implement logout functionality
},
),
],
),
body: SingleChildScrollView(
child: Column(
children: [
_buildListItem(context, Icons.description, 'Statements and documents', () {
Navigator.pushNamed(context, 'StatementsandDocuments');
}),
_buildListItem(context, Icons.credit_card, 'Cards', () {
Navigator.pushNamed(context, 'Cards');
}),
_buildListItem(context, Icons.account_balance, 'Manage accounts', () {}),
_buildListItem(context, Icons.refresh, 'Subscriptions', () {}),
_buildListItem(context, Icons.account_balance_wallet, 'Spending', () {}),
_buildListItem(context, Icons.card_giftcard, 'Rewards', () {}),
_buildListItem(context, Icons.phone_android, 'Mobile PINsentry', () {}),
_buildListItem(context, Icons.settings, 'Settings', () {}),
Padding(
padding: EdgeInsets.all(16.0),
child: Text('Last log in 21:28, 10th Jul 2024', style: TextStyle(color: Colors.grey)),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16.0),
child: Text(
'Independent service quality survey results',
style: TextStyle(color: Colors.blue, decoration: TextDecoration.underline),
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 4,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Accounts'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_bag), label: 'Products'),
BottomNavigationBarItem(icon: Icon(Icons.swap_horiz), label: 'Pay & Transfer'),
BottomNavigationBarItem(icon: Icon(Icons.help), label: 'Help'),
BottomNavigationBarItem(icon: Icon(Icons.more_horiz), label: 'More'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 3:
Navigator.pushNamed(context, 'Help');
break;
}
},
),
);
}
Widget _buildListItem(BuildContext context, IconData icon, String title, VoidCallback onTap) {
return ListTile(
leading: Icon(icon, color: Colors.blue),
title: Text(title),
trailing: Icon(Icons.chevron_right),
onTap: onTap,
);
}
}