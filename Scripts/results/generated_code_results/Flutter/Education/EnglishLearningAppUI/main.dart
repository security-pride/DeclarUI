import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/LessonDetailScreen.dart';
import 'screens/SearchScreen.dart';
import 'screens/SpeakScreen.dart';
import 'screens/ConversationScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Language Learning App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'LessonDetail': (context) => LessonDetailScreen(),
'Search': (context) => SearchScreen(),
'Speak': (context) => SpeakScreen(),
'Conversation': (context) => ConversationScreen(),
},
);
}
}