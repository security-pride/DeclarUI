import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Home'),
),
body: Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
ElevatedButton(
child: Text('Profile'),
onPressed: () => Navigator.pushNamed(context, 'Profile'),
),
ElevatedButton(
child: Text('Tickets'),
onPressed: () => Navigator.pushNamed(context, 'Tickets'),
),
ElevatedButton(
child: Text('Trade'),
onPressed: () => Navigator.pushNamed(context, 'Trade'),
),
ElevatedButton(
child: Text('Utility Bills'),
onPressed: () => Navigator.pushNamed(context, 'UtilityBills'),
),
],
),
),
);
}
}