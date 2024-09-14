import 'package:flutter/material.dart';
class DefaultViewScreen extends StatefulWidget {
@override
_DefaultViewScreenState createState() => _DefaultViewScreenState();
}
class _DefaultViewScreenState extends State<DefaultViewScreen> {
bool _isDarkMode = false;
String _displayValue = '1080';
String _expression = '45 × 24';
void _onButtonPressed(String value) {
setState(() {
if (value == 'C') {
_displayValue = '0';
_expression = '';
} else if (value == '=') {
_expression = _displayValue;
// Perform calculation here
} else {
if (_displayValue == '0') {
_displayValue = value;
} else {
_displayValue += value;
}
_expression += value;
}
});
}
Widget _buildButton(String text, {Color color = Colors.white, Color textColor = Colors.black}) {
return Expanded(
child: Padding(
padding: const EdgeInsets.all(4.0),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: color,
shape: RoundedRectangleBorder(
borderRadius: BorderRadius.circular(8),
),
),
onPressed: () => _onButtonPressed(text),
child: Text(
text,
style: TextStyle(fontSize: 24, color: textColor),
),
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
child: Container(
alignment: Alignment.bottomRight,
padding: EdgeInsets.all(16),
child: Column(
mainAxisAlignment: MainAxisAlignment.end,
crossAxisAlignment: CrossAxisAlignment.end,
children: [
Text(
_expression,
style: TextStyle(fontSize: 24, color: _isDarkMode ? Colors.white70 : Colors.black54),
),
Text(
_displayValue,
style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: _isDarkMode ? Colors.white : Colors.black),
),
],
),
),
),
Container(
color: _isDarkMode ? Colors.grey[900] : Colors.grey[200],
child: Column(
children: [
Row(
children: [
IconButton(
icon: Icon(Icons.access_time, color: Colors.purple),
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
_displayValue,
style: TextStyle(color: Colors.purple, fontSize: 24),
textAlign: TextAlign.center,
),
),
),
IconButton(
icon: Icon(Icons.expand_less, color: Colors.purple),
onPressed: () {
Navigator.pushNamed(context, 'ExpandedView');
},
),
],
),
Row(
children: [
_buildButton('C', color: Colors.grey[300]!),
_buildButton('()', color: Colors.grey[300]!),
_buildButton('%', color: Colors.grey[300]!),
_buildButton('/', color: Colors.purple, textColor: Colors.white),
],
),
Row(
children: [
_buildButton('7'),
_buildButton('8'),
_buildButton('9'),
_buildButton('x', color: Colors.purple, textColor: Colors.white),
],
),
Row(
children: [
_buildButton('4'),
_buildButton('5'),
_buildButton('6'),
_buildButton('-', color: Colors.purple, textColor: Colors.white),
],
),
Row(
children: [
_buildButton('1'),
_buildButton('2'),
_buildButton('3'),
_buildButton('+', color: Colors.purple, textColor: Colors.white),
],
),
Row(
children: [
_buildButton('+/-'),
_buildButton('0'),
_buildButton('.'),
_buildButton('=', color: Colors.purple, textColor: Colors.white),
],
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