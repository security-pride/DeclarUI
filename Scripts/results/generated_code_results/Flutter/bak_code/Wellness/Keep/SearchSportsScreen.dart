import 'package:flutter/material.dart';
class SearchSportsScreen extends StatefulWidget {
const SearchSportsScreen({Key? key}) : super(key: key);
@override
_SearchSportsScreenState createState() => _SearchSportsScreenState();
}
class _SearchSportsScreenState extends State<SearchSportsScreen> {
String selectedSport = '运动日历';
final List<Map<String, dynamic>> sports = [
{'icon': Icons.calendar_today, 'name': '运动日历'},
{'icon': Icons.directions_run, 'name': '户外跑步'},
{'icon': Icons.directions_walk, 'name': '户外行走'},
{'icon': Icons.sports_gymnastics, 'name': '跳绳'},
{'icon': Icons.directions_bike, 'name': '室内骑行'},
{'icon': Icons.pedal_bike, 'name': '户外骑行'},
{'icon': Icons.directions_run, 'name': '室内跑步'},
{'icon': Icons.directions_walk, 'name': '室内行走'},
{'icon': Icons.stairs, 'name': '爬楼梯'},
{'icon': Icons.directions_walk, 'name': '室内行走'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('运动时长'),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
actions: [
IconButton(
icon: Icon(Icons.hexagon_outlined),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.settings),
onPressed: () {},
),
],
),
body: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'选择运动类别',
style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
),
),
Padding(
padding: const EdgeInsets.symmetric(horizontal: 16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('我的运动', style: TextStyle(color: Colors.grey)),
TextButton.icon(
icon: Icon(Icons.edit, size: 18),
label: Text('管理'),
onPressed: () {},
),
],
),
),
Expanded(
child: ListView.builder(
itemCount: sports.length,
itemBuilder: (context, index) {
final sport = sports[index];
return ListTile(
leading: Icon(sport['icon']),
title: Text(sport['name']),
trailing: Radio<String>(
value: sport['name'],
groupValue: selectedSport,
onChanged: (value) {
setState(() {
selectedSport = value!;
});
Navigator.pushNamed(
context,
'Sports',
arguments: {'selectedSport': value},
);
},
),
);
},
),
),
],
),
);
}
}