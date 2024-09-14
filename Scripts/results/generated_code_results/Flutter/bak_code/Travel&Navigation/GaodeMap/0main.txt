import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/GasInformationScreen.dart';
import 'screens/GasStationDetailsScreen.dart';
import 'screens/TicketSearchResultScreen.dart';
import 'screens/TicketServiceScreen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Gaode Map App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: HomeScreen(),
      routes: {
        'Home': (context) => HomeScreen(),
        'GasInformation': (context) => GasInformationScreen(),
        'GasStationDetails': (context) => GasStationDetailsScreen(),
        'TicketSearchResult': (context) => TicketSearchResultScreen(),
        'TicketService': (context) => TicketServiceScreen(),
      },
    );
  }
}