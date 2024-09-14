import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/MeScreen.dart';
import 'screens/OfflineReadingScreen.dart';
import 'screens/NewOptionsScreen.dart';
import 'screens/SettingsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Opera News App',
theme: ThemeData(
primarySwatch: Colors.red,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Me': (context) => MeScreen(),
'OfflineReading': (context) => OfflineReadingScreen(),
'NewOptions': (context) => NewOptionsScreen(),
'Settings': (context) => SettingsScreen(),
},
);
}
}