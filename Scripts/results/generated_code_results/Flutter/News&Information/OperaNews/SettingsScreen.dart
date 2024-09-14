import 'package:flutter/material.dart';
class SettingsScreen extends StatefulWidget {
@override
_SettingsScreenState createState() => _SettingsScreenState();
}
class _SettingsScreenState extends State<SettingsScreen> {
bool newsNotification = true;
bool message = true;
bool picturelessMode = false;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'Me'),
),
title: Text('Settings'),
),
body: ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('Features', style: TextStyle(color: Colors.grey)),
),
SwitchListTile(
title: Text('News notification'),
value: newsNotification,
onChanged: (bool value) {
setState(() {
newsNotification = value;
});
},
),
ListTile(
title: Text('News notification settings'),
onTap: () {
// Implement news notification settings
},
),
SwitchListTile(
title: Text('Message'),
value: message,
onChanged: (bool value) {
setState(() {
message = value;
});
},
),
ListTile(
title: Text('Messaging settings'),
onTap: () {
// Implement messaging settings
},
),
ListTile(
title: Text('Reader mode'),
trailing: Text('Auto', style: TextStyle(color: Colors.grey)),
onTap: () {
// Implement reader mode settings
},
),
ListTile(
title: Text('Clear cache'),
onTap: () {
// Implement clear cache functionality
},
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('Data', style: TextStyle(color: Colors.grey)),
),
ListTile(
title: Text('Data Saving'),
trailing: Text('0 B saved', style: TextStyle(color: Colors.grey)),
onTap: () {
// Implement data saving settings
},
),
SwitchListTile(
title: Text('Pictureless Mode'),
value: picturelessMode,
onChanged: (bool value) {
setState(() {
picturelessMode = value;
});
},
secondary: Text(picturelessMode ? 'Enabled' : 'Disabled', style: TextStyle(color: Colors.red)),
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text('Terms', style: TextStyle(color: Colors.grey)),
),
ListTile(
title: Text('End-user license agreement'),
onTap: () {
// Show end-user license agreement
},
),
ListTile(
title: Text('Privacy statement'),
onTap: () {
// Show privacy statement
},
),
ListTile(
title: Text('Delete my data'),
onTap: () {
// Implement delete my data functionality
},
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