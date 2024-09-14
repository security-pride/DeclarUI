import 'package:flutter/material.dart';
class AddLocationsScreen extends StatelessWidget {
const AddLocationsScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('Add Location'),
),
body: Center(
child: ElevatedButton(
child: const Text('Click to add location'),
onPressed: () {
// TODO: Implement add location functionality
},
),
),
);
}
}