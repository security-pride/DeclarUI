import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/DetailsScreen.dart';
import 'screens/SettingScreen.dart';
import 'screens/AddLocationsScreen.dart';
import 'screens/EditLocationScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Weather App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'Details': (context) => DetailsScreen(),
'Setting': (context) => SettingScreen(),
'AddLocations': (context) => AddLocationsScreen(),
'EditLocation': (context) => EditLocationScreen(),
},
);
}
}