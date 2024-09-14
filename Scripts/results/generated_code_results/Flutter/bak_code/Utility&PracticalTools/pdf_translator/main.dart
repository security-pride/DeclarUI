import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/MoreScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/SelectScreen.dart';
import 'screens/SortScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'PDF File Management',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'home',
routes: {
'home': (context) => HomeScreen(),
'more': (context) => MoreScreen(),
'search': (context) => SearchScreen(),
'select': (context) => SelectScreen(),
'sort': (context) => SortScreen(),
},
);
}
}