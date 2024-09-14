import 'package:flutter/material.dart';
class SearchScreen extends StatefulWidget {
const SearchScreen({Key? key}) : super(key: key);
@override
_SearchScreenState createState() => _SearchScreenState();
}
class _SearchScreenState extends State<SearchScreen> {
final TextEditingController _searchController = TextEditingController();
final List<Map<String, String>> _files = List.generate(
7,
(index) => {
'name': 'Travel plan_America.pdf',
'date': 'Oct 22,2022',
'size': '98KB',
},
);
List<Map<String, String>> _filteredFiles = [];
@override
void initState() {
super.initState();
_filteredFiles = _files;
}
void _filterFiles(String query) {
setState(() {
_filteredFiles = _files
.where((file) =>
file['name']!.toLowerCase().contains(query.toLowerCase()))
.toList();
});
}
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('Search Files'),
leading: IconButton(
icon: const Icon(Icons.arrow_back),
onPressed: () {
Navigator.pushNamed(context, 'home');
},
),
),
body: Column(
children: [
Padding(
padding: const EdgeInsets.all(8.0),
child: TextField(
controller: _searchController,
decoration: InputDecoration(
hintText: 'Search your files',
prefixIcon: const Icon(Icons.search),
border: OutlineInputBorder(
borderRadius: BorderRadius.circular(20),
),
suffixIcon: IconButton(
icon: const Icon(Icons.clear),
onPressed: () {
_searchController.clear();
_filterFiles('');
},
),
),
onChanged: _filterFiles,
onSubmitted: (value) {
Navigator.pushNamed(context, 'home');
},
),
),
Expanded(
child: ListView.builder(
itemCount: _filteredFiles.length,
itemBuilder: (context, index) {
final file = _filteredFiles[index];
return ListTile(
leading: Image.asset('assets/images/template.png'),
title: Text(file['name']!),
subtitle: Text('${file['date']} ${file['size']}'),
trailing: IconButton(
icon: const Icon(Icons.more_vert),
onPressed: () {
// Handle more options
},
),
onTap: () {
Navigator.pushNamed(context, 'home');
},
);
},
),
),
],
),
);
}
@override
void dispose() {
_searchController.dispose();
super.dispose();
}
}