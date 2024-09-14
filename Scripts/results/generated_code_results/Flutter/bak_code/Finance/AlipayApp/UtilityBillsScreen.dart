import 'package:flutter/material.dart';
class UtilityBillsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Utility Bills'),
),
body: Center(
child: ElevatedButton(
child: Text('Back to Home'),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
),
);
}
}