import 'package:flutter/material.dart';
class OfflineReadingScreen extends StatefulWidget {
@override
_OfflineReadingScreenState createState() => _OfflineReadingScreenState();
}
class _OfflineReadingScreenState extends State<OfflineReadingScreen> {
bool _autoDownloadWifi = false;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Me'),
),
title: Text('Offline reading'),
actions: [
IconButton(
icon: Icon(Icons.delete),
onPressed: () {
// Implement delete functionality
},
),
IconButton(
icon: Icon(Icons.settings),
onPressed: () {
// Implement settings functionality
},
),
],
),
body: ListView(
children: [
SwitchListTile(
title: Text('Automatic download on WiFi'),
value: _autoDownloadWifi,
onChanged: (bool value) {
setState(() {
_autoDownloadWifi = value;
});
},
),
Divider(),
ListTile(
leading: Icon(Icons.download_rounded, color: Colors.blue),
title: Text('Download articles'),
trailing: ElevatedButton(
child: Text('DOWNLO...'),
onPressed: () {
// Implement download functionality
},
),
),
Divider(),
Expanded(
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Image.asset('assets/images/template.png', width: 100, height: 100),
SizedBox(height: 20),
Text(
'Download the latest news in 10 seconds',
style: TextStyle(color: Colors.grey),
),
],
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.home),
label: 'Home',
),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: 'Me',
),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Home');
} else if (index == 1) {
Navigator.pushNamed(context, 'Me');
}
},
),
);
}
}