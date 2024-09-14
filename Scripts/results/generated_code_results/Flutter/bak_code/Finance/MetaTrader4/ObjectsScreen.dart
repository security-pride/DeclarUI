import 'package:flutter/material.dart';
class ObjectsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Charts'),
),
title: Text('Objects'),
actions: [
IconButton(
icon: Icon(Icons.delete),
onPressed: () {
// Implement delete functionality
},
),
],
),
body: Column(
children: [
ListTile(
title: Text('Add Object'),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Implement add object functionality
},
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
IconButton(
icon: Icon(Icons.vertical_align_center),
onPressed: () {
// Implement vertical line tool
},
),
IconButton(
icon: Icon(Icons.horizontal_rule),
onPressed: () {
// Implement horizontal line tool
},
),
IconButton(
icon: Icon(Icons.timeline),
onPressed: () {
// Implement trendline tool
},
),
IconButton(
icon: Icon(Icons.architecture),
onPressed: () {
// Implement angle tool
},
),
IconButton(
icon: Icon(Icons.stacked_line_chart),
onPressed: () {
// Implement fibonacci tool
},
),
IconButton(
icon: Icon(Icons.arrow_forward),
onPressed: () {
// Implement arrow tool
},
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Long tap the object on the chart to edit or delete it',
style: TextStyle(color: Colors.grey),
),
),
],
),
);
}
}