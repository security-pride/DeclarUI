import 'package:flutter/material.dart';
class ContactsScreen extends StatelessWidget {
final List<Map<String, dynamic>> contacts = [
{'name': 'Antonio Banderas', 'status': 'Online', 'initials': 'AB'},
{'name': 'Billie Eilish', 'status': 'Online', 'initials': 'BE'},
{'name': 'Chris Evans', 'status': 'Last seen today at 8:40', 'initials': 'CE'},
{'name': 'Dasha Taran', 'initials': 'DT'},
{'name': 'Dwayne Johnson', 'status': 'Last seen today at 6:02', 'initials': 'DJ'},
{'name': 'Emily Blunt', 'status': 'Last seen today at 8:33', 'initials': 'EB'},
];
@override
Widget build(BuildContext context) {
return Scaffold(
appBar: AppBar(
title: Text('Contacts'),
elevation: 0,
),
body: Column(
children: [
ListTile(
leading: Icon(Icons.person_add),
title: Text('Invite friends'),
onTap: () {},
),
ListTile(
leading: Icon(Icons.location_on),
title: Text('Find people nearby'),
onTap: () {},
),
Expanded(
child: ListView.builder(
itemCount: contacts.length,
itemBuilder: (context, index) {
final contact = contacts[index];
return ListTile(
leading: CircleAvatar(
backgroundColor: Colors.grey[300],
child: Text(contact['initials']),
),
title: Text(contact['name']),
subtitle: Text(contact['status'] ?? ''),
onTap: () {
Navigator.pushNamed(context, 'Chat', arguments: contact);
},
);
},
),
),
],
),
bottomNavigationBar: BottomNavigationBar(
currentIndex: 1,
type: BottomNavigationBarType.fixed,
items: [
BottomNavigationBarItem(
icon: Icon(Icons.message),
label: 'Messages',
),
BottomNavigationBarItem(
icon: Icon(Icons.people),
label: 'Contacts',
),
BottomNavigationBarItem(
icon: Icon(Icons.phone),
label: 'Calls',
),
BottomNavigationBarItem(
icon: Icon(Icons.person),
label: 'Profile',
),
],
onTap: (index) {
if (index == 0) {
Navigator.pushNamed(context, 'Messages');
}
},
),
);
}
}