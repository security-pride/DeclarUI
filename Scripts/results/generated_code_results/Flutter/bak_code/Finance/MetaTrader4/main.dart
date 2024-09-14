import 'package:flutter/material.dart';
import 'screens/ChartsScreen.dart';
import 'screens/ObjectsScreen.dart';
import 'screens/QuoteAdvancedScreen.dart';
import 'screens/QuoteSimpleScreen.dart';
import 'screens/SettingsScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Trading App',
theme: ThemeData(
primarySwatch: Colors.blue,
brightness: Brightness.dark,
),
home: QuoteSimpleScreen(),
routes: {
'Charts': (context) => ChartsScreen(),
'Objects': (context) => ObjectsScreen(),
'QuoteAdvanced': (context) => QuoteAdvancedScreen(),
'QuoteSimple': (context) => QuoteSimpleScreen(),
'Settings': (context) => SettingsScreen(),
},
);
}
}