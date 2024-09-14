import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
final TextEditingController _searchController = TextEditingController();
bool _showClearButton = false;
@override
void initState() {
super.initState();
_searchController.addListener(() {
setState(() {
_showClearButton = _searchController.text.isNotEmpty;
});
});
}
@override
void dispose() {
_searchController.dispose();
super.dispose();
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('9:41', style: TextStyle(color: Colors.black)),
backgroundColor: Colors.white,
elevation: 0,
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: 'Search Twitter',
prefixIcon: Icon(Icons.search),
suffixIcon: _showClearButton
? IconButton(
icon: Icon(Icons.clear),
onPressed: () {
_searchController.clear();
},
)
: null,
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(30),
borderSide: BorderSide.none,
),
filled: true,
fillColor: Colors.grey[200],
),
onSubmitted: (value) {
if (value.isNotEmpty) {
Navigator.pushNamed(context, 'Trends');
}
},
),
),
Expanded(
child: ListView(
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Recent searches', style: TextStyle(fontWeight: FontWeight.bold)),
GestureDetector(
onTap: () {
// Clear recent searches
},
child: Icon(Icons.clear, size: 18),
),
],
),
),
_buildRecentSearchItem('Sab Khasa...', '@s_khasan...'),
_buildRecentSearchItem('Martha Cr...', '@craig_love'),
_buildRecentSearchItem('Tibitha P...', '@mis_potter', isVerified: true),
_buildRecentSearchItem('Figma', '@figmadesign', isLogo: true),
_buildRecentSearchItem('Figma', '@figma', isLogo: true),
ListTile(
leading: Icon(Icons.history),
title: Text('skhasanov'),
trailing: Icon(Icons.north_west),
),
],
),
),
],
),
bottomNavigationBar: BottomAppBar(
child: Container(
height: 270,
child: Column(
children: [
Expanded(
child: GridView.count(
crossAxisCount: 10,
children: 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map((letter) {
return Center(child: Text(letter, style: TextStyle(fontSize: 20)));
}).toList(),
),
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
TextButton(child: Text('123'), onPressed: () {}),
Expanded(child: TextButton(child: Text('space'), onPressed: () {})),
TextButton(child: Text('Go'), onPressed: () {}),
],
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceEvenly,
children: [
IconButton(icon: Icon(Icons.sentiment_satisfied), onPressed: () {}),
Expanded(child: SizedBox()),
IconButton(icon: Icon(Icons.mic), onPressed: () {}),
],
),
],
),
),
),
);
}
Widget _buildRecentSearchItem(String name, String handle, {bool isVerified = false, bool isLogo = false}) {
return ListTile(
leading: CircleAvatar(
backgroundImage: isLogo ? AssetImage('assets/images/template.png') : null,
child: !isLogo ? Text(name[0]) : null,
),
title: Text(name),
subtitle: Row(
children: [
Text(handle),
if (isVerified) Icon(Icons.verified, size: 14, color: Colors.blue),
],
),
trailing: Icon(Icons.close, size: 18),
onTap: () {
_searchController.text = name;
Navigator.pushNamed(context, 'Trends');
},
);
}
}