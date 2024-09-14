import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/ItemScreen.dart';
import 'screens/ProfileScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/HistoryScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'eBay Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Item': (context) => ItemScreen(),
'Profile': (context) => ProfileScreen(),
'Search': (context) => SearchScreen(),
'History': (context) => HistoryScreen(),
},
);
}
}