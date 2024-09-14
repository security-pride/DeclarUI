import 'package:flutter/material.dart';
import 'dart:math';
class ExpandedViewScreen extends StatefulWidget {
@override
_ExpandedViewScreenState createState() => _ExpandedViewScreenState();
}
class _ExpandedViewScreenState extends State<ExpandedViewScreen> {
bool _isDarkMode = false;
String _currentCalculation = '45 × 24';
String _currentResult = '1080';
bool _isRadianMode = false;
Widget _buildButton(String label, {Color color = Colors.white, VoidCallback? onPressed}) {
return Expanded(
child: Padding(
padding: const EdgeInsets.all(2.0),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: color,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
),
onPressed: onPressed ?? () {},
child: Text(label, style: TextStyle(fontSize: 18, color: Colors.black)),
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
Container(
padding: EdgeInsets.all(16),
alignment: Alignment.centerRight,
child: Column(
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(_currentCalculation, style: TextStyle(fontSize: 24, color: _isDarkMode ? Colors.white : Colors.black)),
Text(_currentResult, style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: _isDarkMode ? Colors.white : Colors.black)),
],
),
),
Divider(color: Colors.purple, thickness: 2),
Expanded(
child: Container(
color: Colors.purple.withOpacity(0.1),
child: Column(
children: [
Row(
children: [
IconButton(
icon: Icon(Icons.access_time, color: Colors.purple),
onPressed: () {
Navigator.pushNamed(context, 'ExpandedView-ShowHistory');
},
),
IconButton(
icon: Icon(Icons.fullscreen, color: Colors.purple),
onPressed: () {},
),
Expanded(
child: Container(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
decoration: BoxDecoration(
color: Colors.purple.withOpacity(0.2),
borderRadius: BorderRadius.circular(20),
),
child: Text(
_currentResult,
style: TextStyle(color: Colors.purple, fontSize: 24),
textAlign: TextAlign.center,
),
),
),
IconButton(
icon: Icon(Icons.close, color: Colors.purple),
onPressed: () {},
),
],
),
Row(
children: [
_buildButton('↺'),
_buildButton(_isRadianMode ? 'Rad' : 'Deg', onPressed: () {
setState(() {
_isRadianMode = !_isRadianMode;
});
}),
_buildButton('√'),
_buildButton('C'),
_buildButton('()'),
_buildButton('%'),
_buildButton('/'),
],
),
Row(
children: [
_buildButton('sin'),
_buildButton('cos'),
_buildButton('tan'),
_buildButton('7'),
_buildButton('8'),
_buildButton('9'),
_buildButton('×'),
],
),
Row(
children: [
_buildButton('log10'),
_buildButton('log'),
_buildButton('1/x'),
_buildButton('4'),
_buildButton('5'),
_buildButton('6'),
_buildButton('-'),
],
),
Row(
children: [
_buildButton('eⁿ'),
_buildButton('x²'),
_buildButton('xⁿ'),
_buildButton('1'),
_buildButton('2'),
_buildButton('3'),
_buildButton('+'),
],
),
Row(
children: [
_buildButton('|x|'),
_buildButton('π'),
_buildButton('e'),
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
);
}
}