import 'package:flutter/material.dart';
class SortScreen extends StatefulWidget {
const SortScreen({Key? key}) : super(key: key);
@override
_SortScreenState createState() => _SortScreenState();
}
class _SortScreenState extends State<SortScreen> {
String _selectedSortOption = 'Date (new to old)';
final List<String> _sortOptions = [
'Date (new to old)',
'Date (old to new)',
'Size (large to small)',
'Size (small to large)',
'Name (from A to Z)',
'Name (from Z to A)',
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('Sort Options'),
),
body: ListView.builder(
itemCount: _sortOptions.length,
itemBuilder: (context, index) {
return RadioListTile<String>(
title: Text(_sortOptions[index]),
value: _sortOptions[index],
groupValue: _selectedSortOption,
onChanged: (value) {
setState(() {
_selectedSortOption = value!;
});
Navigator.pushNamed(context, 'home');
},
);
},
),
);
}
}