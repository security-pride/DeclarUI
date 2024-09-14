import 'package:flutter/material.dart';
import 'screens/AddTaskScreen.dart';
import 'screens/BoardScreen.dart';
import 'screens/DashboardScreen.dart';
import 'screens/MessageScreen.dart';
import 'screens/TaskScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Task Management App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: BoardScreen(),
routes: {
'AddTask': (context) => AddTaskScreen(),
'Board': (context) => BoardScreen(),
'Dashboard': (context) => DashboardScreen(),
'Message': (context) => MessageScreen(),
'Task': (context) => TaskScreen(),
},
);
}
}