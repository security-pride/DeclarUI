import 'package:flutter/material.dart';
class SettingsScreen extends StatefulWidget {
const SettingsScreen({Key? key}) : super(key: key);
@override
_SettingsScreenState createState() => _SettingsScreenState();
}
class _SettingsScreenState extends State<SettingsScreen> {
bool notificationSound = true;
bool vibration = true;
bool messageWithPicture = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('设置'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'MoreDetails');
},
),
),
body: ListView(
children: [
SizedBox(height: 20),
Center(
child: Column(
children: [
CircleAvatar(
radius: 50,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 10),
ElevatedButton(
child: Text('注册'),
style: ElevatedButton.styleFrom(backgroundColor: Colors.red),
onPressed: () {
Navigator.pushNamed(context, 'LogIn');
},
),
SizedBox(height: 5),
Text('登录并加入该社群'),
],
),
),
SizedBox(height: 20),
_buildSectionHeader('内容'),
_buildListTile('改变国家', Icons.language, () {}),
_buildListTile('话题', Icons.topic, () {}),
_buildListTile('来源管理', Icons.source, () {}),
SizedBox(height: 20),
_buildSectionHeader('消息'),
_buildSwitchTile('通知声音', Icons.notifications, notificationSound, (value) {
setState(() => notificationSound = value);
}),
_buildSwitchTile('震动提醒', Icons.vibration, vibration, (value) {
setState(() => vibration = value);
}),
_buildSwitchTile('消息带图', Icons.image, messageWithPicture, (value) {
setState(() => messageWithPicture = value);
}),
_buildListTile('通知管理', Icons.notifications_active, () {}),
],
),
);
}
Widget _buildSectionHeader(String title) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Text(
title,
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold, color: Colors.grey[600]),
),
);
}
Widget _buildListTile(String title, IconData icon, VoidCallback onTap) {
return ListTile(
leading: Icon(icon),
title: Text(title),
trailing: Icon(Icons.chevron_right),
onTap: onTap,
);
}
Widget _buildSwitchTile(String title, IconData icon, bool value, Function(bool) onChanged) {
return ListTile(
leading: Icon(icon),
title: Text(title),
trailing: Switch(
value: value,
onChanged: onChanged,
activeColor: Colors.red,
),
);
}
}