import 'package:flutter/material.dart';
import 'screens/MessagesScreen.dart';
import 'screens/ContactsScreen.dart';
import 'screens/ChatScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Chat App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: MessagesScreen(),
routes: {
'Messages': (context) => MessagesScreen(),
'Contacts': (context) => ContactsScreen(),
'Chat': (context) => ChatScreen(),
'Profile': (context) => ProfileScreen(),
'Search': (context) => SearchScreen(),
},
);
}
}