import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Today'),
actions: [
IconButton(icon: Icon(Icons.favorite), onPressed: () {}),
IconButton(icon: Icon(Icons.history), onPressed: () {}),
],
),
body: SingleChildScrollView(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
'Good Evening, 子骆',
style: Theme.of(context).textTheme.headlineSmall,
),
),
_buildSection('Start your day'),
_buildActivityCard('How to Headspace', 'Video', '2 min'),
_buildActivityCard('Rooted in the Present', 'Mindful Activity', '2 min'),
_buildActivityCard('Enjoying the Unknown', "Today's Meditation", '3-20 min', meditatingCount: 327),
_buildSection('Your afternoon lift'),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Today'),
BottomNavigationBarItem(icon: Icon(Icons.explore), label: 'Explore'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: '子骆'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Explore');
} else if (index == 2) {
Navigator.pushNamed(context, 'Profile');
}
},
),
);
}
Widget _buildSection(String title) {
return Padding(
padding: const EdgeInsets.all(16.0),
child: Text(
title,
style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
),
);
}
Widget _buildActivityCard(String title, String type, String duration, {int? meditatingCount}) {
return Card(
margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
child: ListTile(
title: Text(title),
subtitle: Text('$type • $duration'),
trailing: meditatingCount != null
? Text('$meditatingCount meditating')
: Icon(Icons.arrow_forward_ios),
),
);
}
}