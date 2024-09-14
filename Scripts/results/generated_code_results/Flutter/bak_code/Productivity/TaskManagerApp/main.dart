import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/AddTaskScreen.dart';
import 'screens/AllTasksScreen.dart';
import 'screens/TaskDetailsScreen.dart';
import 'screens/CalendarScreen.dart';
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
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'AddTask': (context) => AddTaskScreen(),
'AllTasks': (context) => AllTasksScreen(),
'TaskDetails': (context) => TaskDetailsScreen(),
'Calendar': (context) => CalendarScreen(),
},
);
}
}