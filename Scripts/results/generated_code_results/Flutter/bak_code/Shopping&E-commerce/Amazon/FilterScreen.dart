import 'package:flutter/material.dart';
class FilterScreen extends StatefulWidget {
@override
_FilterScreenState createState() => _FilterScreenState();
}
class _FilterScreenState extends State<FilterScreen> {
String selectedOrderType = 'Orders';
String selectedOrderDate = 'Last 3 months';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: TextField(
decoration: InputDecoration(
hintText: 'Search Amazon.co.uk',
suffixIcon: Row(
mainAxisSize: MainAxisSize.min,
children: [
Icon(Icons.camera_alt),
Icon(Icons.mic),
],
),
),
),
),
body: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Back', style: TextStyle(fontSize: 18)),
ElevatedButton(
onPressed: () {
Navigator.pushNamed(context, 'Orders');
},
child: Text('Apply'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.yellow,
),
),
],
),
),
Expanded(
child: ListView(
children: [
_buildFilterSection('FILTER BY ORDER TYPE', [
'Orders',
'Not Yet Dispatched',
'Local shops',
'Cancelled'
], selectedOrderType, (value) {
setState(() => selectedOrderType = value!);
}),
_buildFilterSection('FILTER BY ORDER DATE', [
'Last 30 days',
'Last 3 months',
'2024',
'2023',
'2022',
'2021'
], selectedOrderDate, (value) {
setState(() => selectedOrderDate = value!);
}),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: 'Cart'),
BottomNavigationBarItem(icon: Icon(Icons.menu), label: 'Menu'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
Widget _buildFilterSection(String title, List<String> options, String groupValue, Function(String?) onChanged) {
return Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: EdgeInsets.all(16.0),
child: Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
),
...options.map((option) => RadioListTile<String>(
title: Text(option),
value: option,
groupValue: groupValue,
onChanged: onChanged,
activeColor: Colors.teal,
)).toList(),
],
);
}
}