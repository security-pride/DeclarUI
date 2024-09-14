import 'package:flutter/material.dart';
class ProfilePage extends StatefulWidget {
@override
_ProfilePageState createState() => _ProfilePageState();
}
class _ProfilePageState extends State<ProfilePage> {
bool colorToggle = true;
bool notificationsOn = true;
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text(''),
backgroundColor: Colors.transparent,
elevation: 0,
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Center(
child: Column(
children: [
CircleAvatar(
radius: 50,
backgroundImage: AssetImage('assets/images/template.png'),
),
SizedBox(height: 10),
Text(
'Martha Craig',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
Text(
'Messenger',
style: TextStyle(color: Colors.grey),
),
],
),
),
SizedBox(height: 20),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildActionButton(Icons.call, 'Audio'),
_buildActionButton(Icons.videocam, 'Video'),
_buildActionButton(Icons.person, 'Profile'),
_buildActionButton(Icons.notifications, 'Mute'),
],
),
SizedBox(height: 20),
_buildSettingItem('Color', isToggle: true),
_buildSettingItem('Emoji'),
_buildSettingItem('Nicknames'),
Padding(
padding: EdgeInsets.all(16),
child: Text('MORE ACTIONS', style: TextStyle(color: Colors.grey)),
),
_buildSettingItem('Search in Conversation', trailing: Icons.search),
_buildSettingItem('Create group', trailing: Icons.group_add),
Padding(
padding: EdgeInsets.all(16),
child: Text('PRIVACY', style: TextStyle(color: Colors.grey)),
),
_buildSettingItem('Notifications', trailing: 'On'),
_buildSettingItem('Ignore Messages', trailing: Icons.block),
_buildSettingItem('Block'),
],
),
),
);
}
Widget _buildActionButton(IconData icon, String label) {
return Column(
children: [
IconButton(
icon: Icon(icon),
onPressed: () {
// Action button logic
},
),
Text(label),
],
);
}
Widget _buildSettingItem(String title, {dynamic trailing, bool isToggle = false}) {
return ListTile(
title: Text(title),
trailing: isToggle
? Switch(
value: colorToggle,
onChanged: (value) {
setState(() {
colorToggle = value;
});
},
)
: trailing is IconData
? Icon(trailing)
: trailing != null
? Text(trailing)
: Icon(Icons.chevron_right),
onTap: () {
// Setting item tap logic
if (title == 'Notifications') {
setState(() {
notificationsOn = !notificationsOn;
});
}
},
);
}
}