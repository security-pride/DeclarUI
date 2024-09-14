import 'package:flutter/material.dart';
class DiscoveryPage extends StatefulWidget {
const DiscoveryPage({Key? key}) : super(key: key);
@override
_DiscoveryPageState createState() => _DiscoveryPageState();
}
class _DiscoveryPageState extends State<DiscoveryPage> {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('发现'),
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'特色',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
),
Card(
margin: EdgeInsets.symmetric(horizontal: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png'),
ListTile(
title: Text('Nature rain on leaves'),
subtitle: Text('45 MIN'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Text('premium'),
IconButton(
icon: Icon(Icons.star_border),
onPressed: () {},
),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: ElevatedButton(
child: Text('播放'),
onPressed: () {
Navigator.pushNamed(context, 'EnvironmentSimulation');
},
),
),
],
),
),
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text(
'锻炼',
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
TextButton(
child: Text('查看全部'),
onPressed: () {},
),
],
),
),
Card(
margin: EdgeInsets.symmetric(horizontal: 16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png'),
ListTile(
title: Text('Total body barre: bodyweight'),
subtitle: Text('27 MIN • 英语'),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
Text('premium'),
IconButton(
icon: Icon(Icons.star_border),
onPressed: () {},
),
],
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: ElevatedButton(
child: Text('播放'),
onPressed: () {},
),
),
],
),
),
Card(
margin: EdgeInsets.all(16),
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Image.asset('assets/images/template.png'),
ListTile(
title: Text('Cardio groove dance'),
subtitle: Text('16 MIN • 英语'),
trailing: IconButton(
icon: Icon(Icons.star_border),
onPressed: () {},
),
),
Padding(
padding: const EdgeInsets.all(8.0),
child: ElevatedButton(
child: Text('播放'),
onPressed: () {},
),
),
],
),
),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.search),
label: '发现',
),
BottomNavigationBarItem(
icon: Icon(Icons.today),
label: '今天',
),
BottomNavigationBarItem(
icon: Icon(Icons.people),
label: '好友',
),
BottomNavigationBarItem(
icon: Icon(Icons.star),
label: 'Premium',
),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Home');
}
},
),
);
}
}