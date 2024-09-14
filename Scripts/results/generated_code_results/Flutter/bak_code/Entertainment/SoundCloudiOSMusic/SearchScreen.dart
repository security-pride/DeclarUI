import 'package:flutter/material.dart';
class SearchScreen extends StatelessWidget {
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
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
children: [
Expanded(
child: TextField(
decoration: InputDecoration(
hintText: 'Search that song!',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
),
),
),
),
SizedBox(width: 8),
CircleAvatar(
backgroundColor: Colors.blue,
child: Icon(Icons.mic, color: Colors.white),
),
],
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Align(
alignment: Alignment.centerLeft,
child: Text(
'Recents',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
),
Expanded(
child: ListView(
children: [
_buildRecentSearchItem('Better Now', 'Post Malone'),
_buildRecentSearchItem('Kimberly Evans', 'Calvin Harris, Dua Lipa'),
_buildRecentSearchItem('I Like It', 'Cardi B, Bad Bunny, J Balvin'),
_buildRecentSearchItem('Girls Like You (feat Cardi B)', 'Maroon 5'),
_buildRecentSearchItem('Back To You', 'Selena Gomez'),
_buildRecentSearchItem('Lucid Dreams', 'Juice WRLD'),
_buildRecentSearchItem('No Tears Left To Cry', 'Ariana Grande'),
_buildRecentSearchItem('Nice For What', 'Drake'),
_buildRecentSearchItem('Youngblood', '5 Seconds of Summer'),
],
),
),
],
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
IconButton(
icon: Icon(Icons.search),
color: Colors.orange,
onPressed: () {},
),
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
Widget _buildRecentSearchItem(String title, String artist) {
return ListTile(
leading: Image.asset('assets/images/template.png', width: 40, height: 40),
title: Text(title),
subtitle: Text(artist),
trailing: IconButton(
icon: Icon(Icons.close),
onPressed: () {},
),
);
}
}