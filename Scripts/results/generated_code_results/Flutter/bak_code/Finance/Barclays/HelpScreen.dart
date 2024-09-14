import 'package:flutter/material.dart';
class HelpScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Help'),
),
body: SingleChildScrollView(
child: Padding(
padding: EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
TextField(
decoration: InputDecoration(
hintText: 'Search or ask a question',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(8.0),
),
),
),
SizedBox(height: 24),
Text(
'Quick links',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
_buildQuickLink(Icons.warning, 'Report fraud', () {}),
_buildQuickLink(Icons.credit_card, 'Cards', () {
Navigator.pushNamed(context, 'Cards');
}),
_buildQuickLink(Icons.description, 'Statements', () {
Navigator.pushNamed(context, 'StatementsandDocuments');
}),
],
),
SizedBox(height: 24),
Text(
'Help topics',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
ListTile(
leading: Icon(Icons.help_outline, color: Colors.blue),
title: Text('Browse all topics'),
subtitle: Text('Check how to manage Direct Debits, pay in a cheque and more.'),
trailing: Icon(Icons.arrow_forward_ios),
onTap: () {},
),
SizedBox(height: 24),
Text(
'More help',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 16),
_buildHelpListTile(Icons.attach_money, 'Money worries and support'),
_buildHelpListTile(Icons.accessibility_new, 'Accessible services'),
_buildHelpListTile(Icons.bar_chart, 'Our service status'),
_buildHelpListTile(Icons.play_circle_outline, 'Tour the app'),
],
),
),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 3,
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
case 4:
Navigator.pushNamed(context, 'More');
break;
}
},
),
);
}
Widget _buildQuickLink(IconData icon, String label, VoidCallback onTap) {
return GestureDetector(
onTap: onTap,
child: Column(
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
Text(label),
],
),
);
}
Widget _buildHelpListTile(IconData icon, String title) {
return ListTile(
leading: Icon(icon, color: Colors.blue),
title: Text(title),
trailing: Icon(Icons.arrow_forward_ios),
onTap: () {},
);
}
}