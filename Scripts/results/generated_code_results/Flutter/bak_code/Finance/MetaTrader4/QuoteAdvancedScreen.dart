import 'package:flutter/material.dart';
class QuoteAdvancedScreen extends StatefulWidget {
@override
_QuoteAdvancedScreenState createState() => _QuoteAdvancedScreenState();
}
class _QuoteAdvancedScreenState extends State<QuoteAdvancedScreen> {
final List<Map<String, dynamic>> currencyPairs = [
{'symbol': 'EURUSD', 'bid': 1.09336, 'ask': 1.09337, 'spread': 1, 'low': 1.08950, 'high': 1.09480},
{'symbol': 'GBPUSD', 'bid': 1.30080, 'ask': 1.30083, 'spread': 3, 'low': 1.29659, 'high': 1.30440},
{'symbol': 'USDJPY', 'bid': 156.346, 'ask': 156.349, 'spread': 3, 'low': 156.099, 'high': 158.615},
{'symbol': 'USDCAD', 'bid': 1.36910, 'ask': 1.36917, 'spread': 7, 'low': 1.36564, 'high': 1.37015},
{'symbol': 'USDCHF', 'bid': 0.88481, 'ask': 0.88488, 'spread': 7, 'low': 0.88358, 'high': 0.89448},
{'symbol': 'NZDUSD', 'bid': 0.60713, 'ask': 0.60719, 'spread': 6, 'low': 0.60335, 'high': 0.60972},
{'symbol': 'AUDUSD', 'bid': 0.67262, 'ask': 0.67266, 'spread': 4, 'low': 0.67207, 'high': 0.67545},
{'symbol': 'AUDNZD', 'bid': 1.10776, 'ask': 1.10796, 'spread': 20, 'low': 1.10678, 'high': 1.11490},
{'symbol': 'AUDCAD', 'bid': 0.92085, 'ask': 0.92095, 'spread': 10, 'low': 0.91985, 'high': 0.92280},
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
Text('Simple'),
Text('Advanced'),
],
isSelected: [false, true],
onPressed: (int index) {
if (index == 0) {
Navigator.pushNamed(context, 'QuoteSimple');
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
title: Text(pair['symbol']),
subtitle: Text('Spread: ${pair['spread']}'),
trailing: Column(
crossAxisAlignment: CrossAxisAlignment.end,
mainAxisSize: MainAxisSize.min,
children: [
Text('${pair['bid']}', style: TextStyle(color: Colors.blue)),
Text('${pair['ask']}', style: TextStyle(color: Colors.blue)),
Text('Low: ${pair['low']}'),
Text('High: ${pair['high']}'),
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