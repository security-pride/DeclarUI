import 'package:flutter/material.dart';
import 'screens/ConnectionsScreen.dart';
import 'screens/ConnectToComputerScreen.dart';
import 'screens/HomeGridScreen.dart';
import 'screens/HomeListScreen.dart';
import 'screens/RecentsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'File Manager App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeGridScreen(),
routes: {
'Connections': (context) => ConnectionsScreen(),
'ConnectToComputer': (context) => ConnectToComputerScreen(),
'HomeGrid': (context) => HomeGridScreen(),
'HomeList': (context) => HomeListScreen(),
'Recents': (context) => RecentsScreen(),
},
);
}
}