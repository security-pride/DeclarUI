import 'package:flutter/material.dart';
class EditLocationScreen extends StatelessWidget {
const EditLocationScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('Edit Location'),
),
body: ListView(
children: [
ListTile(
title: const Text('Current location'),
trailing: const Icon(Icons.chevron_right),
onTap: () {
// TODO: Implement current location functionality
},
),
ListTile(
title: const Text('Automatic detection'),
trailing: const Icon(Icons.chevron_right),
onTap: () {
// TODO: Implement automatic detection functionality
},
),
ListTile(
title: const Text('Add location by searching city name'),
trailing: const Icon(Icons.chevron_right),
onTap: () {
// TODO: Implement search functionality
},
),
],
),
);
}
}