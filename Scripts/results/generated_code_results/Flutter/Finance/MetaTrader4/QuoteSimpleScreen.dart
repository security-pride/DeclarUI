import 'package:flutter/material.dart';
class QuoteSimpleScreen extends StatefulWidget {
@override
_QuoteSimpleScreenState createState() => _QuoteSimpleScreenState();
}
class _QuoteSimpleScreenState extends State<QuoteSimpleScreen> {
final List<Map<String, dynamic>> currencyPairs = [
{'symbol': 'EURUSD', 'bid': 1.09336, 'ask': 1.09337},
{'symbol': 'GBPUSD', 'bid': 1.30080, 'ask': 1.30083},
{'symbol': 'USDJPY', 'bid': 156.348, 'ask': 156.354},
{'symbol': 'USDCAD', 'bid': 1.36912, 'ask': 1.36919},
{'symbol': 'USDCHF', 'bid': 0.88489, 'ask': 0.88495},
{'symbol': 'NZDUSD', 'bid': 0.60713, 'ask': 0.60718},
{'symbol': 'AUDUSD', 'bid': 0.67262, 'ask': 0.67267},
{'symbol': 'AUDNZD', 'bid': 1.10778, 'ask': 1.10799},
{'symbol': 'AUDCAD', 'bid': 0.92085, 'ask': 0.92095},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Quotes'),
actions: [
IconButton(
icon: Icon(Icons.edit),
onPressed: () {
// Implement edit functionality
},
),
IconButton(
icon: Icon(Icons.add),
onPressed: () {
// Implement add functionality
},
),
],
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: ToggleButtons(
children: [
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('Simple'),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Text('Advanced'),
),
],
isSelected: [true, false],
onPressed: (int index) {
if (index == 1) {
Navigator.pushNamed(context, 'QuoteAdvanced');
}
},
),
),
Expanded(
child: ListView.builder(
itemCount: currencyPairs.length,
itemBuilder: (context, index) {
final pair = currencyPairs[index];
return ListTile(
title: Text(pair['symbol'], style: TextStyle(color: Colors.white)),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Text(
'${pair['bid']}',
style: TextStyle(color: pair['bid'] > pair['ask'] ? Colors.red : Colors.blue),
),
SizedBox(width: 20),
Text(
'${pair['ask']}',
style: TextStyle(color: pair['ask'] > pair['bid'] ? Colors.blue : Colors.red),
),
],
),
);
},
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.candlestick_chart), label: 'Quotes'),
BottomNavigationBarItem(icon: Icon(Icons.show_chart), label: 'Chart'),
BottomNavigationBarItem(icon: Icon(Icons.attach_money), label: 'Trade'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: 'History'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
],
onTap: (index) {
if (index == 4) {
Navigator.pushNamed(context, 'Settings');
}
},
),
);
}
}