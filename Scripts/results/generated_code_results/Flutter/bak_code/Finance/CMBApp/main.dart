import 'package:flutter/material.dart';
import 'screens/HomeScreen.dart';
import 'screens/CreditCardScreen.dart';
import 'screens/CustomServiceScreen.dart';
import 'screens/RepaymentScreen.dart';
import 'screens/SearchBranchScreen.dart';
void main() {
runApp(MyApp());
}
class MyApp extends StatelessWidget {
@override
Widget build(BuildContext context) {
return MaterialApp(
title: 'Bank App',
theme: ThemeData(
primarySwatch: Colors.blue,
visualDensity: VisualDensity.adaptivePlatformDensity,
),
initialRoute: 'Home',
routes: {
'Home': (context) => HomeScreen(),
'CreditCard': (context) => CreditCardScreen(),
'CustomService': (context) => CustomServiceScreen(),
'Repayment': (context) => RepaymentScreen(),
'SearchBranch': (context) => SearchBranchScreen(),
},
);
}
}