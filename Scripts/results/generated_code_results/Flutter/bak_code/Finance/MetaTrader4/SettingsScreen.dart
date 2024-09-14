import 'package:flutter/material.dart';
class SettingsScreen extends StatelessWidget {
final List<Map<String, dynamic>> menuItems = [
{'icon': 'assets/images/new_account.png', 'text': 'New Account'},
{'icon': 'assets/images/mailbox.png', 'text': 'Mailbox', 'description': 'Built-in Virtual Hosting — trading robots and signals'},
{'icon': 'assets/images/news.png', 'text': 'News', 'description': 'UAE is poised to hit its oil capacity a year earlier t...'},
{'icon': 'assets/images/tradays.png', 'text': 'Tradays', 'description': 'Economic calendar'},
{'icon': 'assets/images/chat.png', 'text': 'Chat and Messages', 'description': 'Sign in to MQL5.community!'},
{'icon': 'assets/images/traders.png', 'text': 'Traders Community'},
{'icon': 'assets/images/algo_trading.png', 'text': 'MQL5 Algo Trading'},
{'icon': 'assets/images/otp.png', 'text': 'OTP', 'description': 'One-time password generator'},
{'icon': 'assets/images/interface.png', 'text': 'Interface', 'description': 'English'},
{'icon': 'assets/images/charts.png', 'text': 'Charts'},
{'icon': 'assets/images/journal.png', 'text': 'Journal'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Settings'),
),
body: ListView(
children: [
ListTile(
title: Text('iPhone'),
subtitle: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('MetaQuotes Software Corp.'),
Text('152932025 - MetaQuotes-Demo'),
Text('Main'),
],
),
trailing: Icon(Icons.chevron_right),
),
Divider(),
...menuItems.map((item) => ListTile(
leading: Image.asset(item['icon'], width: 24, height: 24),
title: Text(item['text']),
subtitle: item['description'] != null ? Text(item['description']) : null,
trailing: Icon(Icons.chevron_right),
onTap: () {
// Handle menu item tap
},
)).toList(),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 4,
items: [
BottomNavigationBarItem(icon: Icon(Icons.candlestick_chart), label: 'Quotes'),
BottomNavigationBarItem(icon: Icon(Icons.show_chart), label: 'Chart'),
BottomNavigationBarItem(icon: Icon(Icons.attach_money), label: 'Trade'),
BottomNavigationBarItem(icon: Icon(Icons.history), label: 'History'),
BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'QuoteSimple');
break;
case 1:
Navigator.pushNamed(context, 'Charts');
break;
// Add other cases for Trade and History if needed
}
},
),
);
}
}