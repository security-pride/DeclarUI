import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/ExploreScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/MoveScreen.dart';
import 'screens/CalmMethodsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Headspace',
theme: ThemeData(
primarySwatch: Colors.blue,
scaffoldBackgroundColor: Colors.black,
textTheme: TextTheme(
bodyText1: TextStyle(color: Colors.white),
bodyText2: TextStyle(color: Colors.white),
),
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Explore': (context) => ExploreScreen(),
'Profile': (context) => ProfileScreen(),
'Move': (context) => MoveScreen(),
'CalmMethods': (context) => CalmMethodsScreen(),
},
);
}
}