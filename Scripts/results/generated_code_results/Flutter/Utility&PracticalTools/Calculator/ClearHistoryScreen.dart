import 'package:flutter/material.dart';



class ClearHistoryScreen extends StatefulWidget {

  const ClearHistoryScreen({Key? key}) : super(key: key);



  @override

  _ClearHistoryScreenState createState() => _ClearHistoryScreenState();

}



class _ClearHistoryScreenState extends State<ClearHistoryScreen> {

  bool _isDarkMode = true;

  String _currentCalculation = '45 × 24';

  String _result = '1080';



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      backgroundColor: _isDarkMode ? Colors.black : Colors.white,

      body: SafeArea(

        child: Column(

          children: [

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.spaceBetween,

                children: [

                  Text(

                    'Switch to Light',

                    style: TextStyle(

                      color: _isDarkMode ? Colors.white : Colors.black,

                    ),

                  ),

                  Switch(

                    value: _isDarkMode,

                    onChanged: (value) {

                      setState(() {

                        _isDarkMode = value;

                      });

                      if (!_isDarkMode) {

                        Navigator.pushNamed(context, 'DefaultView');

                      }

                    },

                    activeColor: Colors.purple,

                  ),

                ],

              ),

            ),

            Expanded(

              child: Column(

                mainAxisAlignment: MainAxisAlignment.center,

                children: [

                  Text(

                    _currentCalculation,

                    style: TextStyle(

                      fontSize: 24,

                      color: _isDarkMode ? Colors.white : Colors.black,

                    ),

                  ),

                  Text(

                    _result,

                    style: TextStyle(

                      fontSize: 48,

                      fontWeight: FontWeight.bold,

                      color: _isDarkMode ? Colors.white : Colors.black,

                    ),

                  ),

                ],

              ),

            ),

            Container(

              padding: const EdgeInsets.all(16.0),

              child: Column(

                children: [

                  Row(

                    mainAxisAlignment: MainAxisAlignment.spaceBetween,

                    children: [

                      IconButton(

                        icon: Icon(Icons.history, color: Colors.purple),

                        onPressed: () {},

                      ),

                      Container(

                        padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),

                        decoration: BoxDecoration(

                          color: Colors.purple,

                          borderRadius: BorderRadius.circular(20),

                        ),

                        child: Text(

                          _result,

                          style: TextStyle(color: Colors.white, fontSize: 24),

                        ),

                      ),

                      IconButton(

                        icon: Icon(Icons.close, color: Colors.purple),

                        onPressed: () {},

                      ),

                    ],

                  ),

                  SizedBox(height: 16),

                  Card(

                    color: _isDarkMode ? Colors.grey[900] : Colors.grey[200],

                    child: Padding(

                      padding: const EdgeInsets.all(16.0),

                      child: Center(

                        child: Column(

                          mainAxisSize: MainAxisSize.min,

                          children: [

                            Icon(

                              Icons.access_time,

                              size: 48,

                              color: _isDarkMode ? Colors.white : Colors.black54,

                            ),

                            SizedBox(height: 8),

                            Text(

                              'No history yet...',

                              style: TextStyle(

                                color: _isDarkMode ? Colors.white : Colors.black54,

                              ),

                            ),

                          ],

                        ),

                      ),

                    ),

                  ),

                  SizedBox(height: 16),

                  ElevatedButton(

                    onPressed: () {},

                    child: Text('Clear History'),

                    style: ElevatedButton.styleFrom(

                      backgroundColor: Colors.purple,

                      padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),

                      shape: RoundedRectangleBorder(

                        borderRadius: BorderRadius.circular(30),

                      ),

                    ),

                  ),

                ],

              ),

            ),

            Container(

              padding: const EdgeInsets.all(16.0),

              child: Column(

                children: [

                  Row(

                    mainAxisAlignment: MainAxisAlignment.spaceEvenly,

                    children: [

                      _buildOperationButton('/'),

                      _buildOperationButton('x'),

                      _buildOperationButton('-'),

                      _buildOperationButton('+'),

                    ],

                  ),

                  SizedBox(height: 16),

                  Container(

                    width: double.infinity,

                    child: ElevatedButton(

                      onPressed: () {},

                      child: Text('='),

                      style: ElevatedButton.styleFrom(

                        backgroundColor: Colors.purple,

                        padding: EdgeInsets.symmetric(vertical: 20),

                        shape: RoundedRectangleBorder(

                          borderRadius: BorderRadius.circular(30),

                        ),

                      ),

                    ),

                  ),

                ],

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildOperationButton(String operation) {

    return ElevatedButton(

      onPressed: () {},

      child: Text(operation, style: TextStyle(fontSize: 24)),

      style: ElevatedButton.styleFrom(

        backgroundColor: Colors.purple,

        shape: CircleBorder(),

        padding: EdgeInsets.all(24),

      ),

    );

  }

}