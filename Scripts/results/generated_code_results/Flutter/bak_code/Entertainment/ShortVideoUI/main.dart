import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/InboxScreen.dart';
import 'screens/CommentsScreen.dart';
import 'screens/ShareScreen.dart';
import 'screens/ProfileScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'TikTok Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Inbox': (context) => InboxScreen(),
'Comments': (context) => CommentsScreen(),
'Share': (context) => ShareScreen(),
'Profile': (context) => ProfileScreen(),
},
);
}
}