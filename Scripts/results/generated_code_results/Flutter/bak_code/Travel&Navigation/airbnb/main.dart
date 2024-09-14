import 'package:flutter/material.dart';
import 'screens/SearchScreen.dart';
import 'screens/SearchCategoryScreen.dart';
import 'screens/DetailsScreen.dart';
import 'screens/CommentsScreen.dart';
import 'screens/ReservationScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Airbnb Clone',
theme: ThemeData(
primarySwatch: Colors.pink,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
home: SearchScreen(),
routes: {
'Search': (context) => SearchScreen(),
'SearchCategory': (context) => SearchCategoryScreen(),
'Details': (context) => DetailsScreen(),
'Comments': (context) => CommentsScreen(),
'Reservation': (context) => ReservationScreen(),
},
);
}
}