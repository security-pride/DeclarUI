import 'package:flutter/material.dart';



class DefaultViewScreen extends StatefulWidget {

  const DefaultViewScreen({Key? key}) : super(key: key);



  @override

  _DefaultViewScreenState createState() => _DefaultViewScreenState();

}



class _DefaultViewScreenState extends State<DefaultViewScreen> {

  bool _isDarkMode = false;

  String _expression = '45 × 24';

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

              child: Column(

                mainAxisAlignment: MainAxisAlignment.center,

                children: [

                  Text(

                    _expression,

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

                  GridView.count(

                    crossAxisCount: 4,

                    shrinkWrap: true,

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

                ],

              ),

            ),

            Padding(

              padding: const EdgeInsets.all(16.0),

              child: Row(

                mainAxisAlignment: MainAxisAlignment.center,

                children: [

                  IconButton(

                    icon: Icon(Icons.expand_more, color: Colors.purple),

                    onPressed: () {

                      Navigator.pushNamed(context, 'ExpandedView');

                    },

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

            _expression = '';

            _result = '0';

          } else if (label == '=') {

            _result = _expression;

            _expression = '';

          } else {

            _expression += label;

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