import 'package:flutter/material.dart';
import 'screens/LoginScreen.dart';
import 'screens/HomeScreen.dart';
import 'screens/DiscoverScreen.dart';
import 'screens/CommentsScreen.dart';
import 'screens/SearchScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'CutG',
theme: ThemeData(
primarySwatch: Colors.blue,
scaffoldBackgroundColor: Colors.black,
textTheme: Theme.of(context).textTheme.apply(bodyColor: Colors.white, displayColor: Colors.white),
),
initialRoute: 'login',
routes: {
'login': (context) => LoginScreen(),
'home': (context) => HomeScreen(),
'discover': (context) => DiscoverScreen(),
'comments': (context) => CommentsScreen(),
'search': (context) => SearchScreen(),
},
);
}
}