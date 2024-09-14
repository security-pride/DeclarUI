import 'package:flutter/material.dart';
class ShowHistoryScreen extends StatefulWidget {
@override
_ShowHistoryScreenState createState() => _ShowHistoryScreenState();
}
class _ShowHistoryScreenState extends State<ShowHistoryScreen> {
bool _isDarkMode = false;
List<String> _history = ['45 × 24 = 1080', '25 × 2 = 50'];
Widget _buildOperationButton(String symbol) {
return Padding(
padding: const EdgeInsets.all(4.0),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: Colors.purple,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
),
onPressed: () {},
child: Text(symbol, style: TextStyle(fontSize: 24, color: Colors.white)),
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
Text('45 × 24', style: TextStyle(fontSize: 24, color: Colors.grey)),
Text('1080', style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold, color: _isDarkMode ? Colors.white : Colors.black)),
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
onPressed: () {},
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
'1080',
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
Expanded(
child: Container(
margin: EdgeInsets.all(16),
decoration: BoxDecoration(
color: Colors.white,
borderRadius: BorderRadius.circular(16),
),
child: ListView.builder(
itemCount: _history.length,
itemBuilder: (context, index) {
return ListTile(
title: Text(_history[index], style: TextStyle(color: Colors.purple)),
);
},
),
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: Colors.purple,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),
),
onPressed: () {
Navigator.pushNamed(context, 'ClearHistory');
},
child: Text('Clear History', style: TextStyle(color: Colors.white)),
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildOperationButton('/'),
_buildOperationButton('×'),
_buildOperationButton('-'),
_buildOperationButton('+'),
],
),
SizedBox(height: 16),
Container(
width: double.infinity,
padding: EdgeInsets.symmetric(horizontal: 16),
child: ElevatedButton(
style: ElevatedButton.styleFrom(
backgroundColor: Colors.pink,
shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
),
onPressed: () {},
child: Text('=', style: TextStyle(fontSize: 24, color: Colors.white)),
),
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