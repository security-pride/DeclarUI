import 'package:flutter/material.dart';
class SearchScreen extends StatelessWidget {
final List<String> topSearches = ['Camp day', 'Halloween', 'Candy Challenge', 'Dancing', 'Christmas'];
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: Colors.black,
appBar: AppBar(
backgroundColor: Colors.black,
leading: IconButton(
icon: Icon(Icons.arrow_back, color: Colors.white),
onPressed: () => Navigator.pushNamed(context, 'home'),
),
title: TextField(
decoration: InputDecoration(
hintText: 'Search',
hintStyle: TextStyle(color: Colors.grey),
prefixIcon: Icon(Icons.search, color: Colors.grey),
filled: true,
fillColor: Colors.grey[800],
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
borderSide: BorderSide.none,
),
),
style: TextStyle(color: Colors.white),
),
),
body: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Top Search',
style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
),
),
Wrap(
spacing: 8,
runSpacing: 8,
children: topSearches.map((search) => _buildChip(search)).toList(),
),
],
),
);
}
Widget _buildChip(String label) {
return Chip(
label: Text(
label,
style: TextStyle(color: Colors.white),
),
backgroundColor: Colors.grey[800],
);
}
}