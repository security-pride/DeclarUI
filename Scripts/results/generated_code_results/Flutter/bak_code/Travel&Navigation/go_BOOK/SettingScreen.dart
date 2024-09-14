import 'package:flutter/material.dart';
class SettingScreen extends StatefulWidget {
@override
_SettingScreenState createState() => _SettingScreenState();
}
class _SettingScreenState extends State<SettingScreen> {
bool notificationEnabled = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Notification'),
actions: [
IconButton(
icon: Icon(Icons.settings),
onPressed: () {},
),
],
elevation: 0,
backgroundColor: Colors.transparent,
foregroundColor: Colors.black,
),
body: ListView(
children: [
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('Mosarraf Hossain'),
subtitle: Text('Product Designer'),
trailing: IconButton(
icon: Icon(Icons.edit),
onPressed: () {},
),
),
_buildListTile('Change Password', Icons.key),
SwitchListTile(
title: Text('Notification'),
value: notificationEnabled,
onChanged: (value) {
setState(() {
notificationEnabled = value;
});
},
secondary: Icon(Icons.notifications),
),
_buildListTile('Payment Method', Icons.payment),
_buildListTile('Security', Icons.security),
_buildListTile('Invite Friend', Icons.person_add),
_buildListTile('Terms & Condition', Icons.description),
_buildListTile('Privacy Policy', Icons.privacy_tip),
SizedBox(height: 20),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: ElevatedButton.icon(
icon: Icon(Icons.logout),
label: Text('Logout'),
onPressed: () {
Navigator.pushNamedAndRemoveUntil(context, 'Login', (route) => false);
},
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black,
foregroundColor: Colors.white,
minimumSize: Size(double.infinity, 50),
),
),
),
],
),
);
}
Widget _buildListTile(String title, IconData icon) {
return ListTile(
leading: Icon(icon),
title: Text(title),
trailing: Icon(Icons.chevron_right),
onTap: () {
// Handle navigation or action for each setting
},
);
}
}