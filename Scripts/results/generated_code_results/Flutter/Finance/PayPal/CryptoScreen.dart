import 'package:flutter/material.dart';



class CryptoScreen extends StatefulWidget {

  @override

  _CryptoScreenState createState() => _CryptoScreenState();

}



class _CryptoScreenState extends State<CryptoScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('Crypto'),

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            Container(

              padding: EdgeInsets.all(16),

              color: Colors.grey[200],

              child: Row(

                children: [

                  Icon(Icons.info_outline),

                  SizedBox(width: 8),

                  Expanded(

                    child: Text(

                      "PayPal's crypto purchasing service is temporarily paused while we update our system to comply with new UK regulations. You can continue to hold your crypto, or you may sell if you choose.",

                    ),

                  ),

                ],

              ),

            ),

            Padding(

              padding: EdgeInsets.all(16),

              child: Text(

                '买卖并持有加密货币',

                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),

              ),

            ),

            CryptoListItem(

              name: 'Bitcoin',

              symbol: 'BTC',

              price: '£ 49,339.33/BTC',

              icon: 'assets/images/template.png',

              onTap: () {

                Navigator.pushNamed(context, 'Bitcoin');

              },

            ),

            CryptoListItem(

              name: 'Ethereum',

              symbol: 'ETH',

              price: '£ 2,611.73/ETH',

              icon: 'assets/images/template.png',

            ),

            CryptoListItem(

              name: 'Litecoin',

              symbol: 'LTC',

              price: '£ 55.24/LTC',

              icon: 'assets/images/template.png',

            ),

            CryptoListItem(

              name: 'Bitcoin Cash',

              symbol: 'BCH',

              price: '£ 287.75/BCH',

              icon: 'assets/images/template.png',

            ),

            Padding(

              padding: EdgeInsets.all(16),

              child: Text(

                '这些条款仅提供一般信息，不构成财务、投资或税务方面的建议。',

                style: TextStyle(fontSize: 12, color: Colors.grey),

              ),

            ),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        currentIndex: 1,

        type: BottomNavigationBarType.fixed,

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Crypto'),

          BottomNavigationBarItem(icon: Icon(Icons.attach_money), label: 'Payments'),

          BottomNavigationBarItem(icon: Icon(Icons.account_balance_wallet), label: 'Wallet'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushReplacementNamed(context, 'Home');

          }

        },

      ),

    );

  }

}



class CryptoListItem extends StatelessWidget {

  final String name;

  final String symbol;

  final String price;

  final String icon;

  final VoidCallback? onTap;



  const CryptoListItem({

    required this.name,

    required this.symbol,

    required this.price,

    required this.icon,

    this.onTap,

  });



  @override

  Widget build(BuildContext context) {

    return ListTile(

      leading: Image.asset(icon, width: 40, height: 40),

      title: Text(name),

      subtitle: Text(symbol),

      trailing: Text(price),

      onTap: onTap,

    );

  }

}