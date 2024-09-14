import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/CalendarScreen.dart';
import 'screens/ClassroomScreen.dart';
import 'screens/DiscussionScreen.dart';
import 'screens/AddTaskScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Student Task Manager',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: HomeScreen(),
routes: {
'Home': (context) => HomeScreen(),
'Calendar': (context) => CalendarScreen(),
'Classroom': (context) => ClassroomScreen(),
'Discussion': (context) => DiscussionScreen(),
'AddTask': (context) => AddTaskScreen(),
},
);
}
}