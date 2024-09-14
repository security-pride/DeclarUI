import 'package:flutter/material.dart';
class ActivityScreen extends StatefulWidget {
@override
_ActivityScreenState createState() => _ActivityScreenState();
}
class _ActivityScreenState extends State<ActivityScreen> with SingleTickerProviderStateMixin {
late TabController _tabController;
final List<String> _tabs = ['All', 'Answers', 'Mentions', 'Verifi'];
final List<Map<String, dynamic>> _activityList = [
{'name': 'thomas', 'action': 'Started following you'},
{'name': 'mike', 'action': 'Started following you'},
{'name': 'michael', 'action': 'Started following you'},
{'name': 'willie', 'action': 'Started following you'},
{'name': 'peter', 'action': 'Started following you'},
{'name': 'angela', 'action': 'Started following you'},
{'name': 'devon', 'action': 'Started following you'},
{'name': 'col', 'action': 'Started following you'},
{'name': 'templeton', 'action': 'Started following you'},
{'name': 'willie', 'action': 'Started following you'},
{'name': 'dori', 'action': 'Started following you'},
];
@override
void initState() {
super.initState();
_tabController = TabController(length: _tabs.length, vsync: this);
}
@override
void dispose() {
_tabController.dispose();
super.dispose();
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Activity'),
actions: [
Icon(Icons.wifi),
],
bottom: TabBar(
controller: _tabController,
tabs: _tabs.map((String name) => Tab(text: name)).toList(),
),
),
body: TabBarView(
controller: _tabController,
children: _tabs.map((String name) {
return ListView.builder(
itemCount: _activityList.length,
itemBuilder: (context, index) {
final item = _activityList[index];
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(item['name']),
subtitle: Text(item['action']),
trailing: ElevatedButton(
onPressed: () {},
child: Text('Follow'),
),
onTap: () {
Navigator.pushNamed(context, 'UserProfile');
},
);
},
);
}).toList(),
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),
BottomNavigationBarItem(icon: Icon(Icons.add_box), label: 'Create'),
BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),
BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),
],
onTap: (index) {
switch (index) {
case 0:
Navigator.pushNamed(context, 'Feed');
break;
case 1:
Navigator.pushNamed(context, 'Search');
break;
case 4:
Navigator.pushNamed(context, 'Profile');
break;
}
},
),
);
}
}