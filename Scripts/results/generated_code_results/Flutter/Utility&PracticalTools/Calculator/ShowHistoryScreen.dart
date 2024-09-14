import 'package:flutter/material.dart';



class ShowHistoryScreen extends StatefulWidget {

  const ShowHistoryScreen({Key? key}) : super(key: key);



  @override

  _ShowHistoryScreenState createState() => _ShowHistoryScreenState();

}



class _ShowHistoryScreenState extends State<ShowHistoryScreen> {

  bool _isDarkMode = false;

  List<String> _history = ['45 × 24 = 1080', '25 × 2 = 50'];



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

                    'Switch to Dark',

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

                    },

                    activeColor: Colors.purple,

                  ),

                ],

              ),

            ),

            Text(

              '45 × 24',

              style: TextStyle(

                fontSize: 24,

                color: _isDarkMode ? Colors.white : Colors.black,

              ),

            ),

            Text(

              '1080',

              style: TextStyle(

                fontSize: 48,

                fontWeight: FontWeight.bold,

                color: _isDarkMode ? Colors.white : Colors.black,

              ),

            ),

            Expanded(

              child: Container(

                color: Colors.purple.withOpacity(0.1),

                child: Column(

                  children: [

                    Padding(

                      padding: const EdgeInsets.all(16.0),

                      child: Row(

                        mainAxisAlignment: MainAxisAlignment.spaceBetween,

                        children: [

                          IconButton(

                            icon: Icon(Icons.history, color: Colors.purple),

                            onPressed: () {},

                          ),

                          IconButton(

                            icon: Icon(Icons.fullscreen_exit, color: Colors.purple),

                            onPressed: () {},

                          ),

                          Container(

                            padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),

                            decoration: BoxDecoration(

                              color: Colors.purple,

                              borderRadius: BorderRadius.circular(20),

                            ),

                            child: Text(

                              '1080',

                              style: TextStyle(color: Colors.white, fontSize: 24),

                            ),

                          ),

                          IconButton(

                            icon: Icon(Icons.close, color: Colors.purple),

                            onPressed: () {},

                          ),

                        ],

                      ),

                    ),

                    Expanded(

                      child: Container(

                        margin: EdgeInsets.all(16),

                        padding: EdgeInsets.all(16),

                        decoration: BoxDecoration(

                          color: Colors.white,

                          borderRadius: BorderRadius.circular(10),

                        ),

                        child: ListView.builder(

                          itemCount: _history.length,

                          itemBuilder: (context, index) {

                            return Padding(

                              padding: const EdgeInsets.symmetric(vertical: 8.0),

                              child: Text(

                                _history[index],

                                style: TextStyle(fontSize: 18),

                              ),

                            );

                          },

                        ),

                      ),

                    ),

                    Padding(

                      padding: const EdgeInsets.all(16.0),

                      child: ElevatedButton(

                        onPressed: () {

                          Navigator.pushNamed(context, 'ClearHistory');

                        },

                        child: Text('Clear History'),

                        style: ElevatedButton.styleFrom(

                          backgroundColor: Colors.purple,

                          padding: EdgeInsets.symmetric(horizontal: 32, vertical: 16),

                          shape: RoundedRectangleBorder(

                            borderRadius: BorderRadius.circular(30),

                          ),

                        ),

                      ),

                    ),

                    Row(

                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,

                      children: [

                        _buildOperationButton('/'),

                        _buildOperationButton('×'),

                        _buildOperationButton('-'),

                        _buildOperationButton('+'),

                        _buildOperationButton('=', isEqual: true),

                      ],

                    ),

                  ],

                ),

              ),

            ),

          ],

        ),

      ),

    );

  }



  Widget _buildOperationButton(String operation, {bool isEqual = false}) {

    return ElevatedButton(

      onPressed: () {},

      child: Text(

        operation,

        style: TextStyle(fontSize: 24, color: Colors.white),

      ),

      style: ElevatedButton.styleFrom(

        backgroundColor: isEqual ? Colors.pink : Colors.purple,

        shape: CircleBorder(),

        padding: EdgeInsets.all(24),

      ),

    );

  }

}