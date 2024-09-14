import 'package:flutter/material.dart';
import 'screens/home_screen.dart';
import 'screens/add_task_screen.dart';
import 'screens/statistics_screen.dart';
import 'screens/profile_screen.dart';
import 'screens/calendar_screen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Task Manager',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'AddTask': (context) => AddTaskScreen(),
'Statistics': (context) => StatisticsScreen(),
'Profile': (context) => ProfileScreen(),
'Calendar': (context) => CalendarScreen(),
},
);
}
}