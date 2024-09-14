import 'package:flutter/material.dart';
class ConnectionsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
title: Text('Connections'),
),
body: ListView(
children: [
Card(
margin: EdgeInsets.all(16),
child: InkWell(
onTap: () => Navigator.pushNamed(context, 'ConnectToComputer'),
child: Padding(
padding: EdgeInsets.all(16),
child: Row(
children: [
Image.asset('assets/images/template.png', width: 50, height: 50),
SizedBox(width: 16),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text('From Computer', style: TextStyle(fontWeight: FontWeight.bold)),
Text('Connect computer via address bar'),
],
),
),
],
),
),
),
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Text('Import from cloud storage', style: TextStyle(fontWeight: FontWeight.bold)),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
OutlinedButton(
onPressed: () {},
child: Text('Dropbox'),
style: OutlinedButton.styleFrom(
backgroundColor: Colors.blue[50],
),
),
ElevatedButton(
onPressed: () {},
child: Row(
children: [
Image.asset('assets/images/template.png', width: 24, height: 24),
SizedBox(width: 8),
Text('Google Drive'),
],
),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.green,
),
),
],
),
Padding(
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 16),
child: Text('Add Connection', style: TextStyle(fontWeight: FontWeight.bold)),
),
ListTile(
leading: Icon(Icons.folder),
title: Text('Box'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.cloud),
title: Text('OneDrive'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.storage),
title: Text('FTP Server'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.security),
title: Text('SFTP Server'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
ListTile(
leading: Icon(Icons.computer),
title: Text('Windows SMB'),
trailing: Icon(Icons.chevron_right),
onTap: () {},
),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 3,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.access_time), label: 'Recent'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
BottomNavigationBarItem(icon: Icon(Icons.wifi), label: 'Wi-Fi'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Stats'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'HomeGrid');
} else if (index == 1) {
Navigator.pushNamed(context, 'Recents');
}
},
),
);
}
}