import 'package:flutter/material.dart';
class DetailsScreen extends StatelessWidget {
const DetailsScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('Weather Details'),
),
body: ListView(
children: const [
ListTile(title: Text('Precipitation')),
ListTile(title: Text('Humidity')),
ListTile(title: Text('Wind Chill')),
ListTile(title: Text('Dew Point')),
ListTile(title: Text('Cloud Cover')),
ListTile(title: Text('Pressure')),
ListTile(title: Text('Moon Phases')),
ListTile(title: Text('Ultraviolet Index')),
ListTile(title: Text('Wind Direction')),
ListTile(title: Text('Wind Speed')),
],
),
);
}
}