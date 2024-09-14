import 'package:flutter/material.dart';
class ListenScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('9:41 AM'),
actions: [
Icon(Icons.signal_cellular_alt),
SizedBox(width: 8),
Icon(Icons.wifi),
SizedBox(width: 8),
Icon(Icons.battery_full),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Hots now',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold, color: Colors.orange),
),
),
SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: [
_buildPlaylistCard('Summer Vibes', '1,300,231 FOLLOWERS'),
_buildPlaylistCard('Monday Party', '650,231 FOLLOWERS'),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Recents',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
_buildListTile('Ranking', Icons.trending_up, isNew: true),
_buildListTile('Weekly featured', Icons.bookmark_border),
_buildListTile('Podcast', Icons.mic_none),
_buildListTile('Live', Icons.music_note),
_buildListTile('Concerts', Icons.event),
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Playlists',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
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
IconButton(
icon: Icon(Icons.headphones),
color: Colors.orange,
onPressed: () {},
),
IconButton(icon: Icon(Icons.search), onPressed: () {}),
IconButton(icon: Icon(Icons.person), onPressed: () {}),
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
return Card(
child: Stack(
children: [
Image.asset('assets/images/template.png', width: 150, height: 150, fit: BoxFit.cover),
Positioned(
bottom: 8,
left: 8,
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(title, style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),
Text(followers, style: TextStyle(color: Colors.white, fontSize: 12)),
],
),
),
],
),
);
}
Widget _buildListTile(String title, IconData icon, {bool isNew = false}) {
return ListTile(
leading: Icon(icon),
title: Text(title),
trailing: isNew
? Container(
padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
decoration: BoxDecoration(
color: Colors.orange,
borderRadius: BorderRadius.circular(12),
),
child: Text(
'New',
style: TextStyle(color: Colors.white, fontSize: 12),
),
)
: Icon(Icons.arrow_forward_ios),
);
}
}