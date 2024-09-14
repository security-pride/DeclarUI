import 'package:flutter/material.dart';
class HomeScreen extends StatelessWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: const Text('PDF file management'),
actions: [
IconButton(
icon: const Icon(Icons.search),
onPressed: () {
Navigator.pushNamed(context, 'search');
},
),
IconButton(
icon: const Icon(Icons.sort),
onPressed: () {
Navigator.pushNamed(context, 'sort');
},
),
],
),
body: ListView.builder(
itemCount: 7,
itemBuilder: (context, index) {
return ListTile(
leading: Image.asset('assets/images/template.png'),
title: const Text('Travel plan_America.pdf'),
subtitle: const Text('Oct 22,2022 98KB'),
trailing: IconButton(
icon: const Icon(Icons.more_vert),
onPressed: () {
Navigator.pushNamed(context, 'more');
},
),
);
},
),
floatingActionButton: FloatingActionButton(
onPressed: () {
Navigator.pushNamed(context, 'select');
},
child: const Icon(Icons.add),
),
);
}
}