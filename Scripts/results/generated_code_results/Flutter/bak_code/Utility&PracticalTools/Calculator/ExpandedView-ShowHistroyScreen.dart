import 'package:flutter/material.dart';
class ExpandedViewShowHistoryScreen extends StatefulWidget {
@override
_ExpandedViewShowHistoryScreenState createState() => _ExpandedViewShowHistoryScreenState();
}
class _ExpandedViewShowHistoryScreenState extends State<ExpandedViewShowHistoryScreen> {
bool _isDarkMode = false;
String _currentCalculation = '45 × 24';
String _currentResult = '1080';
List<String> _history = ['45 × 24 = 1080', '25 × 2 = 50'];
Widget _buildButton(String label, {Color color = Colors.white, VoidCallback? onPressed}) {
return Expanded(
child: Padding(
padding: const EdgeInsets.all(4.0),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: color,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
),
onPressed: onPressed ?? () {},
child: Text(label, style: TextStyle(fontSize: 24, color: Colors.black)),
),
),
);
}
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
'Switch to Dark',
style: TextStyle(color: _isDarkMode ? Colors.white : Colors.black),
),
Switch(
value: _isDarkMode,
onChanged: (value) {
setState(() {
_isDarkMode = value;
});
},
activeColor: Colors.purple,
),
],
),
),
Expanded(
child: Row(
children: [
Expanded(
flex: 1,
child: Container(
color: Colors.purple.withOpacity(0.1),
child: Column(
children: [
Expanded(
child: ListView.builder(
itemCount: _history.length,
itemBuilder: (context, index) {
return ListTile(
title: Text(_history[index], style: TextStyle(color: Colors.purple)),
);
},
),
),
ElevatedButton(
child: Text('Clear History'),
style: ElevatedButton.styleFrom(backgroundColor: Colors.purple),
onPressed: () {
setState(() {
_history.clear();
});
},
),
],
),
),
),
Expanded(
flex: 2,
child: Column(
children: [
Container(
padding: EdgeInsets.all(16),
alignment: Alignment.centerRight,
child: Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(_currentCalculation, style: TextStyle(fontSize: 24)),
Text(_currentResult, style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold)),
],
),
),
Expanded(
child: Container(
color: Colors.purple.withOpacity(0.1),
child: Column(
children: [
Row(
children: [
_buildButton('C'),
_buildButton('()'),
_buildButton('%'),
_buildButton('/', color: Colors.purple.shade200),
],
),
Row(
children: [
_buildButton('7'),
_buildButton('8'),
_buildButton('9'),
_buildButton('x', color: Colors.purple.shade200),
],
),
Row(
children: [
_buildButton('4'),
_buildButton('5'),
_buildButton('6'),
_buildButton('-', color: Colors.purple.shade200),
],
),
Row(
children: [
_buildButton('1'),
_buildButton('2'),
_buildButton('3'),
_buildButton('+', color: Colors.purple.shade200),
],
),
Row(
children: [
_buildButton('+/-'),
_buildButton('0'),
_buildButton('.'),
_buildButton('=', color: Colors.purple),
],
),
],
),
),
),
],
),
),
],
),
),
],
),
),
);
}
}