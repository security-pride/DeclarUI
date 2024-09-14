import 'package:flutter/material.dart';
class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Profile'),
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