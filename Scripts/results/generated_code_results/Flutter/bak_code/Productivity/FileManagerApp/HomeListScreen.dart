import 'package:flutter/material.dart';
class HomeListScreen extends StatelessWidget {
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Home'),
leading: IconButton(
icon: Icon(Icons.settings),
onPressed: () {},
),
actions: [
IconButton(
icon: Icon(Icons.grid_view),
onPressed: () {
Navigator.pushNamed(context, 'HomeGrid');
},
),
TextButton.icon(
icon: Icon(Icons.sort),
label: Text('Name'),
onPressed: () {},
),
TextButton(
child: Text('Select'),
onPressed: () {},
),
IconButton(
icon: Icon(Icons.search),
onPressed: () {},
),
],
),
body: ListView(
children: [
_buildListItem('Photos & video', '3471 items', Icons.folder, Colors.red),
_buildListItem('Recent videos', '13 items', Icons.play_circle_filled, Colors.blue),
_buildListItem('iTunes', '27 items', Icons.music_note, Colors.orange),
_buildListItem('Recently deleted', '13 items', Icons.folder, Colors.black),
_buildImageListItem('The Chainsmoker Closer', '28.Feb 2020'),
_buildImageListItem('Plant photoshoot', '25.Feb 2020'),
_buildListItem('Quotes', '25.Feb 2020', Icons.text_fields, Colors.blue),
_buildListItem('Business management', '21.Feb 2020', Icons.picture_as_pdf, Colors.red),
],
),
bottomNavigationBar: BottomNavigationBar(
type: BottomNavigationBarType.fixed,
currentIndex: 0,
items: [
BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
BottomNavigationBarItem(icon: Icon(Icons.access_time), label: 'Recent'),
BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Add'),
BottomNavigationBarItem(icon: Icon(Icons.wifi), label: 'Wi-Fi'),
BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Stats'),
],
onTap: (index) {
if (index == 1) {
Navigator.pushNamed(context, 'Recents');
} else if (index == 3) {
Navigator.pushNamed(context, 'Connections');
}
},
),
);
}
Widget _buildListItem(String title, String subtitle, IconData icon, Color color) {
return ListTile(
leading: Icon(icon, color: color, size: 40),
title: Text(title),
subtitle: Text(subtitle),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
);
}
Widget _buildImageListItem(String title, String date) {
return ListTile(
leading: Image.asset('assets/images/template.png', width: 40, height: 40, fit: BoxFit.cover),
title: Text(title),
subtitle: Text(date),
trailing: Row(
mainAxisSize: MainAxisSize.min,
children: [
IconButton(
icon: Icon(Icons.more_vert),
onPressed: () {},
),
],
),
);
}
}