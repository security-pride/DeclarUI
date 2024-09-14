import 'package:flutter/material.dart';
class ElectionsScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Elections'),
actions: [
Icon(Icons.sd_card),
SizedBox(width: 10),
Icon(Icons.battery_full),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Card(
margin: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png'),
Padding(
padding: EdgeInsets.all(8.0),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(
'43 seconds of chaos: How the assassination attempt on Trump unfolded',
style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
),
SizedBox(height: 4),
Text('5h ago', style: TextStyle(color: Colors.grey)),
],
),
),
],
),
),
ListTile(
title: Text('Minute-by-minute: Visual timeline of the Trump assassination attempt'),
onTap: () {
// Handle tap
},
),
Divider(),
ListTile(
title: Text(''Let me get my shoes': What was said on stage in the seconds after Trump was shot'),
onTap: () {
// Handle tap
},
),
Divider(),
ListTile(
title: Text('Gunman was a few hundred feet away from Trump, CNN analysis shows'),
onTap: () {
// Handle tap
},
),
Divider(),
ListTile(
leading: Icon(Icons.play_circle_outline),
title: Text(''He's got a gun!': Listen to audio of rally attendees as gunman is spotted'),
trailing: Text('VIDEO'),
onTap: () {
// Handle video playback
},
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.how_to_vote), label: 'Elections'),
BottomNavigationBarItem(icon: Icon(Icons.ondemand_video), label: 'Watch'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Settings'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Home');
break;
case 2:
// Handle Watch tab
break;
case 3:
Navigator.pushNamed(context, 'Settings');
break;
}
},
),
);
}
}