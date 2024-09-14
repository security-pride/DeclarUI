import 'package:flutter/material.dart';
class MoreScreen extends StatelessWidget {
const MoreScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('File Options'),
),
body: ListView(
children: [
ListTile(
leading: const Icon(Icons.share),
title: const Text('Share'),
onTap: () {
// Implement share functionality
Navigator.pushNamed(context, 'home');
},
),
ListTile(
leading: const Icon(Icons.edit),
title: const Text('Rename'),
onTap: () {
// Implement rename functionality
Navigator.pushNamed(context, 'home');
},
),
ListTile(
leading: const Icon(Icons.delete),
title: const Text('Delete'),
onTap: () {
// Implement delete functionality
Navigator.pushNamed(context, 'home');
},
),
],
),
);
}
}