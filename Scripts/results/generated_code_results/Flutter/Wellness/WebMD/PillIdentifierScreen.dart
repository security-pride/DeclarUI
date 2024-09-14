import 'package:flutter/material.dart';
class PillIdentifierScreen extends StatefulWidget {
@override
_PillIdentifierScreenState createState() => _PillIdentifierScreenState();
}
class _PillIdentifierScreenState extends State<PillIdentifierScreen> {
String selectedShape = '';
TextEditingController _searchController = TextEditingController();
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Home'),
),
title: Text('Pill Identifier'),
actions: [
TextButton(
child: Text('Clear'),
onPressed: () {
setState(() {
selectedShape = '';
_searchController.clear();
});
},
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: 'Text or imprint on pill',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
),
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
Text('Shape', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
Text('Color', style: TextStyle(fontSize: 18, color: Colors.grey)),
],
),
Divider(),
Padding(
padding: const EdgeInsets.all(8.0),
child: Text(
'Select the shape that best matches your prescription or OTC drug',
textAlign: TextAlign.center,
),
),
Expanded(
child: GridView.count(
crossAxisCount: 3,
children: [
_buildShapeOption('Round', Icons.circle_outlined),
_buildShapeOption('Oblong', Icons.panorama_horizontal_outlined),
_buildShapeOption('3 Sided', Icons.change_history_outlined),
_buildShapeOption('Square', Icons.square_outlined),
_buildShapeOption('Rectangle', Icons.rectangle_outlined),
_buildShapeOption('Diamond', Icons.diamond_outlined),
_buildShapeOption('5 Sided', Icons.pentagon_outlined),
_buildShapeOption('6 Sided', Icons.hexagon_outlined),
_buildShapeOption('7 Sided', Icons.crop_square),
_buildShapeOption('8 Sided', Icons.stop),
_buildShapeOption('Other', Icons.help_outline),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: ElevatedButton(
child: Text('View Results'),
onPressed: () {
if (selectedShape.isNotEmpty || _searchController.text.isNotEmpty) {
Navigator.pushNamed(context, 'IdentifyResult');
}
},
style: ElevatedButton.styleFrom(
minimumSize: Size(double.infinity, 50),
),
),
),
],
),
);
}
Widget _buildShapeOption(String label, IconData icon) {
return GestureDetector(
onTap: () {
setState(() {
selectedShape = label;
});
},
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Container(
decoration: BoxDecoration(
border: Border.all(
color: selectedShape == label ? Colors.blue : Colors.grey,
width: 2,
),
shape: BoxShape.circle,
),
child: Icon(icon, size: 40, color: selectedShape == label ? Colors.blue : Colors.grey),
),
SizedBox(height: 8),
Text(label, style: TextStyle(color: selectedShape == label ? Colors.blue : Colors.black)),
],
),
);
}
}