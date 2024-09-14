import 'package:flutter/material.dart';
class NewOptionsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
title: Text('News options'),
),
body: ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Country & language',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
ListTile(
leading: Image.asset('assets/images/template.png', width: 40, height: 30),
title: Text('United States - English'),
trailing: Icon(Icons.check, color: Colors.red),
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'My channels',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
OutlinedButton(
onPressed: () {
// Implement edit functionality
},
child: Text('Edit', style: TextStyle(color: Colors.red)),
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('Long press to edit', style: TextStyle(color: Colors.grey)),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: OutlinedButton(
onPressed: () {
// Implement "For you" functionality
},
child: Text('For you'),
style: OutlinedButton.styleFrom(
side: BorderSide(color: Colors.grey),
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'Recommended',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
SizedBox(height: 8),
Text('Click to add', style: TextStyle(color: Colors.grey)),
],
),
),
],
),
);
}
}