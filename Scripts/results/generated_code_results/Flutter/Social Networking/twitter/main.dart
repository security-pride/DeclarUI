import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/MenuScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/TrendsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Twitter Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Menu': (context) => MenuScreen(),
'Profile': (context) => ProfileScreen(),
'Search': (context) => SearchScreen(),
'Trends': (context) => TrendsScreen(),
},
);
}
}