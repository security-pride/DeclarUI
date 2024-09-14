import 'package:flutter/material.dart';



class ExpandedViewShowHistoryScreen extends StatefulWidget {

  const ExpandedViewShowHistoryScreen({Key? key}) : super(key: key);



  @override

  _ExpandedViewShowHistoryScreenState createState() => _ExpandedViewShowHistoryScreenState();

}



class _ExpandedViewShowHistoryScreenState extends State<ExpandedViewShowHistoryScreen> {

  bool _isDarkMode = false;

  String _currentCalculation = '45 × 24';

  String _result = '1080';

  List<String> _history = ['25 × 2 = 50', '45 × 24 = 1080'];



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

            Expanded(

              child: Row(

                children: [

                  Expanded(

                    flex: 1,

                    child: Container(

                      color: Colors.purple.withOpacity(0.1),

                      child: Column(

                        children: [

                          Expanded(

                            child: ListView.builder(

                              itemCount: _history.length,

                              itemBuilder: (context, index) {

                                return ListTile(

                                  title: Text(_history[index]),

                                );

                              },

                            ),

                          ),

                          ElevatedButton(

                            onPressed: () {

                              setState(() {

                                _history.clear();

                              });

                            },

                            child: Text('Clear History'),

                            style: ElevatedButton.styleFrom(

                              backgroundColor: Colors.purple,

                            ),

                          ),

                        ],

                      ),

                    ),

                  ),

                  Expanded(

                    flex: 2,

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

                                icon: Icon(Icons.fullscreen_exit, color: Colors.purple),

                                onPressed: () {

                                  Navigator.pushNamed(context, 'ShowHistory');

                                },

                              ),

                            ],

                          ),

                        ),

                        Expanded(

                          child: GridView.count(

                            crossAxisCount: 4,

                            childAspectRatio: 1.5,

                            children: [

                              _buildButton('C', isFunction: true),

                              _buildButton('( )'),

                              _buildButton('%'),

                              _buildButton('/', isOperation: true),

                              _buildButton('7'),

                              _buildButton('8'),

                              _buildButton('9'),

                              _buildButton('x', isOperation: true),

                              _buildButton('4'),

                              _buildButton('5'),

                              _buildButton('6'),

                              _buildButton('-', isOperation: true),

                              _buildButton('1'),

                              _buildButton('2'),

                              _buildButton('3'),

                              _buildButton('+', isOperation: true),

                              _buildButton('+/-'),

                              _buildButton('0'),

                              _buildButton('.'),

                              _buildButton('=', isOperation: true),

                            ],

                          ),

                        ),

                      ],

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



  Widget _buildButton(String label, {bool isOperation = false, bool isFunction = false}) {

    Color buttonColor = isOperation ? Colors.purple : (isFunction ? Colors.grey : Colors.white);

    Color textColor = isOperation ? Colors.white : Colors.black;



    return ElevatedButton(

      style: ElevatedButton.styleFrom(

        backgroundColor: buttonColor,

        shape: RoundedRectangleBorder(

          borderRadius: BorderRadius.circular(10),

        ),

      ),

      onPressed: () {

        setState(() {

          if (label == 'C') {

            _currentCalculation = '';

            _result = '0';

          } else if (label == '=') {

            _history.add('$_currentCalculation = $_result');

            _currentCalculation = '';

          } else {

            _currentCalculation += label;

          }

        });

      },

      child: Text(

        label,

        style: TextStyle(fontSize: 20, color: textColor),

      ),

    );

  }

}