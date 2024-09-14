import 'package:flutter/material.dart';
class HomePage extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
leading: Icon(Icons.inbox),
title: Image.asset('assets/images/template.png', height: 30),
actions: [
Icon(Icons.upload),
TextButton(
child: Text('编辑', style: TextStyle(color: Colors.blue)),
onPressed: () {},
),
],
),
body: SingleChildScrollView(
child: Column(
children: [
SizedBox(height: 20),
_buildStepCount(),
SizedBox(height: 20),
_buildDailyStats(),
SizedBox(height: 20),
_buildChallenges(),
],
),
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.explore), label: '发现'),
BottomNavigationBarItem(icon: Icon(Icons.today), label: '今天'),
BottomNavigationBarItem(icon: Icon(Icons.people), label: '好友'),
BottomNavigationBarItem(icon: Icon(Icons.star), label: 'Premium'),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Discovery');
} else if (index == 2) {
Navigator.pushNamed(context, 'Friends');
}
},
),
);
}
Widget _buildStepCount() {
return Container(
width: 200,
height: 200,
decoration: BoxDecoration(
shape: BoxShape.circle,
border: Border.all(color: Colors.blue, width: 2),
),
child: Column(
mainAxisAlignment: MainAxisAlignment.center,
children: [
Icon(Icons.directions_walk, size: 50, color: Colors.blue),
Text(
'0',
style: TextStyle(fontSize: 48, fontWeight: FontWeight.bold),
),
Text('步', style: TextStyle(fontSize: 18)),
],
),
);
}
Widget _buildDailyStats() {
return Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
_buildStatItem(Icons.location_on, '0', '公里'),
_buildStatItem(Icons.whatshot, '12', '卡'),
],
);
}
Widget _buildStatItem(IconData icon, String value, String unit) {
return Column(
children: [
Icon(icon, size: 30, color: Colors.blue),
Text(value, style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
Text(unit),
],
);
}
Widget _buildChallenges() {
return Column(
children: [
_buildChallengeItem(Icons.psychology, '追踪您的正念', '本周剩 5 天'),
_buildChallengeItem(Icons.directions_run, '追踪锻炼情况', '本周剩 5 天'),
_buildChallengeItem(Icons.favorite, '经期健康', '记录与趋势'),
],
);
}
Widget _buildChallengeItem(IconData icon, String title, String subtitle) {
return ListTile(
leading: CircleAvatar(child: Icon(icon)),
title: Text(title),
subtitle: Text(subtitle),
trailing: Icon(Icons.add),
);
}
}