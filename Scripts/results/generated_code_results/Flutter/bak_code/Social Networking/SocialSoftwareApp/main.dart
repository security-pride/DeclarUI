import 'package:flutter/material.dart';
import 'screens/ChatsScreen.dart';
import 'screens/IntroScreen.dart';
import 'screens/NewMessageScreen.dart';
import 'screens/PeopleScreen.dart';
import 'screens/ProfileScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Messenger Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: ChatsScreen(),
routes: {
'Chats': (context) => ChatsScreen(),
'Intro': (context) => IntroScreen(),
'NewMessage': (context) => NewMessageScreen(),
'People': (context) => PeopleScreen(),
'Profile': (context) => ProfileScreen(),
},
);
}
}