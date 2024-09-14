import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
final List<Map<String, String>> _searchResults = [
{'name': 'aura', 'fullName': 'Aura Brown', 'followers': '500 mil'},
{'name': 'rick', 'fullName': 'Rick Wright', 'followers': '500 mil'},
{'name': 'mike', 'fullName': 'Mike Torello', 'followers': '500 mil'},
{'name': 'theodore', 'fullName': 'Theodore T.C. Calvin', 'followers': '500 mil'},
{'name': 'kate', 'fullName': 'Kate Tanner', 'followers': '500 mil'},
{'name': 'thomas', 'fullName': 'Thomas Magnum', 'followers': '500 mil'},
{'name': 'april', 'fullName': 'April Curtis', 'followers': '500 mil'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Search'),
bottom: PreferredSize(
preferredSize: Size.fromHeight(48.0),
child: Padding(
padding: EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
child: TextField(
decoration: InputDecoration(
hintText: 'Search',
prefixIcon: Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20.0),
),
filled: true,
fillColor: Colors.grey[200],
),
),
),
),
),
body: ListView.builder(
itemCount: _searchResults.length,
itemBuilder: (context, index) {
final result = _searchResults[index];
return ListTile(
leading: CircleAvatar(
backgroundImage: AssetImage('assets/images/template.png'),
),
title: Text(result['name']!),
subtitle: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Text(result['fullName']!),
Text('${result['followers']} followers'),
],
),
trailing: ElevatedButton(
onPressed: () {
// Implement follow functionality
},
child: Text('Follow'),
style: ElevatedButton.styleFrom(
backgroundColor: Colors.black,
foregroundColor: Colors.white,
),
),
onTap: () {
Navigator.pushNamed(context, 'UserProfile');
},
);
},
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 1,
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
case 3:
Navigator.pushNamed(context, 'Activity');
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