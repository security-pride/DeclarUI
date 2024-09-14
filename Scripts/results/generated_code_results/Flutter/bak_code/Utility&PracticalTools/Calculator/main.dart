import 'package:flutter/material.dart';
import 'screens/ClearHistoryScreen.dart';
import 'screens/DefaultViewScreen.dart';
import 'screens/ExpandedViewScreen.dart';
import 'screens/ExpandedViewShowHistoryScreen.dart';
import 'screens/ShowHistoryScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Calculator App',
theme: ThemeData(
primarySwatch: Colors.purple,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'DefaultView',
routes: {
'ClearHistory': (context) => ClearHistoryScreen(),
'DefaultView': (context) => DefaultViewScreen(),
'ExpandedView': (context) => ExpandedViewScreen(),
'ExpandedView-ShowHistory': (context) => ExpandedViewShowHistoryScreen(),
'ShowHistory': (context) => ShowHistoryScreen(),
},
);
}
}