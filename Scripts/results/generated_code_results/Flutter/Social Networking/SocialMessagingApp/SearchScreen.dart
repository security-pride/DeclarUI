import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
final TextEditingController _searchController = TextEditingController();
final List<String> _recentSearches = ['Designers', 'Dasha Taran', 'Billie Eilish'];
String _selectedFilter = 'Chats';
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: 'Search...',
border: InputBorder.none,
prefixIcon: Icon(Icons.search),
),
),
leading: IconButton(
icon: Icon(Icons.arrow_back),
onPressed: () => Navigator.pop(context),
),
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.symmetric(vertical: 8.0),
child: SingleChildScrollView(
scrollDirection: Axis.horizontal,
child: Row(
children: ['Chats', 'Photos', 'Videos'].map((filter) {
return Padding(
padding: const EdgeInsets.symmetric(horizontal: 4.0),
child: ChoiceChip(
label: Text(filter),
selected: _selectedFilter == filter,
onSelected: (selected) {
setState(() {
_selectedFilter = filter;
});
},
),
);
}).toList(),
),
),
),
Expanded(
child: Column(
crossAxisAlignment: CrossAxisAlignment.start,
children: [
Padding(
padding: const EdgeInsets.all(16.0),
child: Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
Text('Recent searches', style: TextStyle(fontWeight: FontWeight.bold)),
TextButton(
child: Text('Clear all'),
onPressed: () {
setState(() {
_recentSearches.clear();
});
},
),
],
),
),
Expanded(
child: ListView.builder(
itemCount: _recentSearches.length,
itemBuilder: (context, index) {
return ListTile(
leading: Icon(Icons.history),
title: Text(_recentSearches[index]),
trailing: IconButton(
icon: Icon(Icons.close),
onPressed: () {
setState(() {
_recentSearches.removeAt(index);
});
},
),
onTap: () {
_searchController.text = _recentSearches[index];
},
);
},
),
),
],
),
),
],
),
bottomSheet: Container(
height: 300,
child: Column(
children: [
Expanded(
child: GridView.count(
crossAxisCount: 10,
children: 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('').map((char) {
return TextButton(
child: Text(char),
onPressed: () {
_searchController.text += char;
_searchController.selection = TextSelection.fromPosition(
TextPosition(offset: _searchController.text.length),
);
},
);
}).toList(),
),
),
Row(
children: [
Expanded(
child: TextButton(
child: Text('123'),
onPressed: () {},
),
),
Expanded(
flex: 4,
child: TextButton(
child: Text('space'),
onPressed: () {
_searchController.text += ' ';
_searchController.selection = TextSelection.fromPosition(
TextPosition(offset: _searchController.text.length),
);
},
),
),
Expanded(
child: TextButton(
child: Text('Go'),
onPressed: () {
if (_searchController.text.isNotEmpty) {
setState(() {
if (!_recentSearches.contains(_searchController.text)) {
_recentSearches.insert(0, _searchController.text);
}
});
}
},
),
),
],
),
Row(
mainAxisAlignment: MainAxisAlignment.spaceBetween,
children: [
IconButton(
icon: Icon(Icons.emoji_emotions),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.mic),
onPressed: () {},
),
],
),
],
),
),
);
}
}