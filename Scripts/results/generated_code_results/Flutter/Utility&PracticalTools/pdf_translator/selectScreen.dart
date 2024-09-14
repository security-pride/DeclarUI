import 'package:flutter/material.dart';
class SelectScreen extends StatelessWidget {
const SelectScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('File Conversion'),
),
body: Center(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
ElevatedButton(
onPressed: () {
// Implement DOC TO PDF conversion
Navigator.pushNamed(context, 'home');
},
child: const Text('DOC TO PDF'),
),
const SizedBox(height: 20),
ElevatedButton(
onPressed: () {
// Implement IMG TO PDF conversion
Navigator.pushNamed(context, 'home');
},
child: const Text('IMG TO PDF'),
),
],
),
),
);
}
}