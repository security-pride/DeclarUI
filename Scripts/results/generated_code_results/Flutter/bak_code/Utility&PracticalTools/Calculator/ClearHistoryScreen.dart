import 'package:flutter/material.dart';
class ClearHistoryScreen extends StatefulWidget {
@override
_ClearHistoryScreenState createState() => _ClearHistoryScreenState();
}
class _ClearHistoryScreenState extends State<ClearHistoryScreen> {
bool _isDarkMode = true;
String _result = '1080';
String _calculation = '45 × 24';
@override
Widget build(BuildContext context) {
return Scaffold(
backgroundColor: _isDarkMode ? Colors.black : Colors.white,
body: SafeArea(
child: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'Switch to Light',
style: TextStyle(color: _isDarkMode ? Colors.white : Colors.black),
),
Switch(
value: _isDarkMode,
onChanged: (value) {
setState(() {
_isDarkMode = value;
});
if (!_isDarkMode) {
Navigator.pushNamed(context, 'DefaultView');
}
},
activeColor: Colors.purple,
),
],
),
),
Expanded(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Text(
_calculation,
style: TextStyle(fontSize: 24, color: _isDarkMode ? Colors.white : Colors.black),
),
SizedBox(height: 16),
Text(
_result,
style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: _isDarkMode ? Colors.white : Colors.black),
),
],
),
),
Container(
padding: EdgeInsets.all(16),
child: Column(
children: [
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.access_time, color: Colors.purple),
onPressed: () {},
),
Container(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
decoration: BoxDecoration(
color: Colors.grey[800],
borderRadius: BorderRadius.circular(20),
),
child: Text(
_result,
style: TextStyle(color: Colors.white, fontSize: 24),
),
),
IconButton(
icon: Icon(Icons.close, color: Colors.purple),
onPressed: () {},
),
],
),
SizedBox(height: 16),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildOperationButton('/'),
_buildOperationButton('x'),
_buildOperationButton('-'),
_buildOperationButton('+'),
],
),
SizedBox(height: 16),
Container(
width: double.infinity,
child: ElevatedButton(
child: Text('=', style: TextStyle(fontSize: 24)),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.purple,
padding: EdgeInsets.symmetric(vertical: 16),
),
onPressed: () {},
),
),
SizedBox(height: 16),
Card(
color: Colors.grey[900],
child: Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.access_time, color: Colors.grey),
SizedBox(width: 8),
Text('No history yet...', style: TextStyle(color: Colors.grey)),
],
),
),
),
SizedBox(height: 16),
ElevatedButton(
child: Text('Clear History'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.grey[800],
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(20),
),
),
onPressed: () {},
),
],
),
),
],
),
),
);
}
Widget _buildOperationButton(String operation) {
return ElevatedButton(
child: Text(operation, style: TextStyle(fontSize: 24)),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.orange,
shape: CircleBorder(),
padding: EdgeInsets.all(24),
),
onPressed: () {},
);
}
}