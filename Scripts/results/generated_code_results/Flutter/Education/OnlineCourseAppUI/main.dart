import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/EnrolledCoursesScreen.dart';
import 'screens/CourseDetailScreen.dart';
import 'screens/AwesomeCoursesScreen.dart';
import 'screens/SearchScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Course App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'EnrolledCourses': (context) => EnrolledCoursesScreen(),
'CourseDetail': (context) => CourseDetailScreen(),
'AwesomeCourses': (context) => AwesomeCoursesScreen(),
'Search': (context) => SearchScreen(),
},
);
}
}