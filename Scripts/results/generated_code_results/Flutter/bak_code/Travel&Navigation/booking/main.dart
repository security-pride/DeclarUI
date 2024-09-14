import 'package:flutter/material.dart';
import 'screens/SearchScreen.dart';
import 'screens/DetailsScreen.dart';
import 'screens/SurroundingsScreen.dart';
import 'screens/TypeDetailsScreen.dart';
import 'screens/ReservationScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Booking.com Clone',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Search',
routes: {
'Search': (context) => SearchScreen(),
'Details': (context) => DetailsScreen(),
'Surroundings': (context) => SurroundingsScreen(),
'TypeDetails': (context) => TypeDetailsScreen(),
'Reservation': (context) => ReservationScreen(),
},
);
}
}