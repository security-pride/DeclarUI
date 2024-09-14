import 'package:flutter/material.dart';
import 'screens/ActivityScreen.dart';
import 'screens/FeedScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/UserProfileScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Threads Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Feed',
routes: {
'Activity': (context) => ActivityScreen(),
'Feed': (context) => FeedScreen(),
'Profile': (context) => ProfileScreen(),
'Search': (context) => SearchScreen(),
'UserProfile': (context) => UserProfileScreen(),
},
);
}
}