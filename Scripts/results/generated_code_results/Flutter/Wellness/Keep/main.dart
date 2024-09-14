import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/StoreScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchSportsScreen.dart';
import 'screens/SportsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Keep Fitness App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Store': (context) => StoreScreen(),
'Profile': (context) => ProfileScreen(),
'SearchSports': (context) => SearchSportsScreen(),
'Sports': (context) => SportsScreen(),
},
);
}
}