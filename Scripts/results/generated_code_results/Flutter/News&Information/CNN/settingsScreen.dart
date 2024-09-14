import 'package:flutter/material.dart';
class SettingsScreen extends StatefulWidget {
@override
_SettingsScreenState createState() => _SettingsScreenState();
}
class _SettingsScreenState extends State<SettingsScreen> {
bool _enableThisIsCNN = false;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Settings'),
actions: [
Icon(Icons.sd_card),
SizedBox(width: 10),
Icon(Icons.battery_full),
],
),
body: ListView(
children: [
_buildSectionHeader('ACCOUNT'),
ListTile(
title: Text('Log In to your CNN Account'),
onTap: () => Navigator.pushNamed(context, 'LogIn'),
),
Divider(),
ListTile(
title: Text('Create a free CNN Account'),
onTap: () => Navigator.pushNamed(context, 'CreateAccont'),
),
Divider(),
ListTile(
title: Text('Saved Stories'),
subtitle: Text('Find your saved articles, videos & audio here'),
onTap: () {
// Navigate to Saved Stories
},
),
_buildSectionHeader('APP PREFERENCES'),
ListTile(
title: Text('Edition'),
subtitle: Text('International'),
onTap: () {
// Open Edition selection
},
),
Divider(),
ListTile(
title: Text('Alerts'),
onTap: () {
// Open Alerts settings
},
),
Divider(),
ListTile(
title: Text('Android Notification Settings'),
onTap: () {
// Open Android Notification Settings
},
),
Divider(),
SwitchListTile(
title: Text('Enable 'This is CNN''),
subtitle: Text('A sound effect when you open the app'),
value: _enableThisIsCNN,
onChanged: (bool value) {
setState(() {
_enableThisIsCNN = value;
});
},
),
Divider(),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'You are currently viewing CNN in light mode. To switch to dark mode, adjust the display setting on your device.',
style: TextStyle(color: Colors.grey),
),
),
_buildSectionHeader('GENERAL'),
ListTile(
title: Text('Send Feedback'),
onTap: () {
// Open feedback form
},
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 3,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.how_to_vote), label: 'Elections'),
BottomNavigationBarItem(icon: Icon(Icons.play_circle_outline), label: 'Watch'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Settings'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 1:
Navigator.pushNamed(context, 'Elections');
break;
case 2:
// Handle Watch navigation
break;
}
},
),
);
}
Widget _buildSectionHeader(String title) {
return Padding(
padding: const EdgeInsets.fromLTRB(16, 24, 16, 8),
child: Text(
title,
style: TextStyle(
fontSize: 14,
fontWeight: FontWeight.bold,
color: Colors.grey[600],
),
),
);
}
}