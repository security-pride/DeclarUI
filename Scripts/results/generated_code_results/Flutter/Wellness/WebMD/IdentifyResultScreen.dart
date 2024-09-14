import 'package:flutter/material.dart';
class IdentifyResultScreen extends StatelessWidget {
final List<Map<String, String>> searchResults = [
{
'name': 'Abilify',
'description': 'This medicine is a pink, round, tablet imprinted with "A-011 30".',
'image': 'assets/images/template.png',
},
{
'name': 'Abilify',
'description': 'This medicine is a white, round, tablet imprinted with "A-010 20".',
'image': 'assets/images/template.png',
},
{
'name': 'Abilify',
'description': 'This medicine is a yellow, round, tablet imprinted with "A-009 15".',
'image': 'assets/images/template.png',
},
{
'name': 'acamprosate CALCIUM',
'description': 'This medicine is a white, round, enteric-coated, tablet imprinted with "435".',
'image': 'assets/images/template.png',
},
{
'name': 'acamprosate CALCIUM',
'description': 'This medicine is a white, round, enteric-coated, tablet imprinted with "569".',
'image': 'assets/images/template.png',
},
{
'name': 'acamprosate CALCIUM',
'description': 'This medicine is a white, round, enteric-coated, tablet imprinted with "77" and "1140".',
'image': 'assets/images/template.png',
},
{
'name': 'acamprosate CALCIUM',
'description': 'This medicine is a white, round, enteric-coated, tablet imprinted with "M AC".',
'image': 'assets/images/template.png',
},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'PillIdentifier'),
),
title: Text('Search Results'),
),
body: ListView.separated(
itemCount: searchResults.length,
separatorBuilder: (context, index) => Divider(height: 1),
itemBuilder: (context, index) {
final result = searchResults[index];
return ListTile(
leading: Image.asset(result['image']!, width: 60, height: 60),
title: Text(result['name']!),
subtitle: Text(result['description']!),
trailing: Icon(Icons.chevron_right),
onTap: () => Navigator.pushNamed(context, 'ResultDetail', arguments: result),
);
},
),
);
}
}