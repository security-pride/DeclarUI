import 'package:flutter/material.dart';
class SettingScreen extends StatelessWidget {
const SettingScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('Settings'),
),
body: ListView(
children: [
ListTile(
title: const Text('Manage location'),
trailing: const Icon(Icons.chevron_right),
onTap: () {
Navigator.pushNamed(context, 'EditLocation');
},
),
ListTile(
title: const Text('Temperature'),
trailing: const Icon(Icons.chevron_right),
onTap: () {
// TODO: Implement temperature settings
},
),
// Add more settings options here
],
),
);
}
}