import 'package:flutter/material.dart';
class ProfileScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('9:41 AM'),
actions: [
Icon(Icons.wifi),
SizedBox(width: 8),
Icon(Icons.battery_full),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Container(
padding: EdgeInsets.all(16),
color: Colors.orange,
child: Row(
children: [
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'SoundCloud Premium',
style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),
),
Text(
'Remove boring advs, create infinite playlists and so much',
style: TextStyle(color: Colors.white),
),
],
),
),
Icon(Icons.star, color: Colors.white),
],
),
),
ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text('Kimberly Evans'),
subtitle: Text('Edit profile'),
trailing: Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.orange,
borderRadius: BorderRadius.circular(12),
),
child: Text('Free User', style: TextStyle(color: Colors.white)),
),
),
ListTile(
title: Text('My SoundCloud'),
trailing: Icon(Icons.arrow_forward_ios),
),
ListTile(
title: Text('Music quality'),
trailing: Icon(Icons.arrow_forward_ios),
),
ListTile(
title: Text('Help'),
trailing: Icon(Icons.arrow_forward_ios),
),
Padding(
padding: EdgeInsets.all(16),
child: Text('My playlists', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildPlaylistCard('Summer Vibes', '1,300,231 FOLLOWERS'),
_buildPlaylistCard('Rap Zone', '650,231 FOLLOWERS'),
_buildPlaylistCard('Music Mix', '50,231 FOLLOWERS'),
],
),
),
],
),
),
bottomNavigationBar: BottomAppBar(
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceAround,
children: [
IconButton(
icon: Icon(Icons.flash_on),
onPressed: () {
Navigator.pushNamed(context, 'Home');
},
),
IconButton(icon: Icon(Icons.headphones), onPressed: () {}),
IconButton(icon: Icon(Icons.search), onPressed: () {}),
IconButton(icon: Icon(Icons.person), color: Colors.orange, onPressed: () {}),
],
),
),
bottomSheet: GestureDetector(
onTap: () {
Navigator.pushNamed(context, 'Player');
},
child: Container(
color: Colors.grey[200],
padding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('All Mine - Kanye West'),
IconButton(
icon: Icon(Icons.play_arrow),
onPressed: () {
Navigator.pushNamed(context, 'Player');
},
),
],
),
),
),
);
}
Widget _buildPlaylistCard(String title, String followers) {
return Container(
width: 150,
margin: EdgeInsets.only(left: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png', height: 150, width: 150, fit: BoxFit.cover),
SizedBox(height: 8),
Text(title, style: TextStyle(fontWeight: FontWeight.bold)),
Text(followers, style: TextStyle(color: Colors.grey)),
],
),
);
}
}