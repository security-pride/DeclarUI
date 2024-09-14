import 'package:flutter/material.dart';
class TicketsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Tickets'),
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