import 'package:flutter/material.dart';
class SettingsScreen extends StatefulWidget {
const SettingsScreen({Key? key}) : super(key: key);
@override
_SettingsScreenState createState() => _SettingsScreenState();
}
class _SettingsScreenState extends State<SettingsScreen> {
int _selectedIndex = 0;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pushNamed(context, 'PersonalCentral'),
),
title: Text('Settings'),
actions: [
Container(
width: 40,
height: 40,
decoration: BoxDecoration(
shape: BoxShape.circle,
color: Colors.black,
),
),
],
),
body: ListView(
children: [
_buildSectionHeader('Accounts'),
_buildAccountItem('Microsoft account', Icons.person),
_buildAccountItem('Work or school account', Icons.work),
_buildSectionHeader('General'),
_buildSettingsItem('Privacy', Icons.security),
_buildSettingsItem('Region and language', Icons.language),
_buildSettingsItem('Permissions', Icons.lock),
_buildSectionHeader('Preferences'),
_buildSettingsItem('Homepage', Icons.home),
_buildSettingsItem('Notifications', Icons.notifications),
_buildSettingsItem('Theme', Icons.palette),
_buildSettingsItem('Search', Icons.search),
_buildSettingsItem('Rewards', Icons.card_giftcard),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: _selectedIndex,
onTap: (index) {
setState(() {
_selectedIndex = index;
});
if (index == 0) {
Navigator.pushNamed(context, 'Home');
}
},
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.cloud), label: 'Weather'),
BottomNavigationBarItem(icon: Icon(Icons.chat), label: 'Chat'),
BottomNavigationBarItem(
icon: Stack(
children: [
Icon(Icons.tab),
Positioned(
right: 0,
child: Container(
padding: EdgeInsets.all(1),
decoration: BoxDecoration(
color: Colors.red,
borderRadius: BorderRadius.circular(6),
),
constraints: BoxConstraints(
minWidth: 12,
minHeight: 12,
),
child: Text(
'4',
style: TextStyle(
color: Colors.white,
fontSize: 8,
),
textAlign: TextAlign.center,
),
),
),
],
),
label: 'Tabs',
),
BottomNavigationBarItem(icon: Icon(Icons.apps), label: 'Apps'),
],
),
);
}
Widget _buildSectionHeader(String title) {
return Padding(
padding: const EdgeInsets.fromLTRB(16, 16, 16, 8),
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
Widget _buildAccountItem(String title, IconData icon) {
return ListTile(
leading: Icon(icon),
title: Text(title),
trailing: TextButton(
child: Text('Sign in'),
onPressed: () {
// Handle sign in action
},
),
);
}
Widget _buildSettingsItem(String title, IconData icon) {
return ListTile(
leading: Icon(icon),
title: Text(title),
onTap: () {
// Handle settings item tap
},
);
}
}