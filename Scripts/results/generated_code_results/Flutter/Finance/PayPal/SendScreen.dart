import 'package:flutter/material.dart';



class SendScreen extends StatefulWidget {

  @override

  _SendScreenState createState() => _SendScreenState();

}



class _SendScreenState extends State<SendScreen> {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () {

            Navigator.pushNamed(context, 'Home');

          },

        ),

        title: TextField(

          decoration: InputDecoration(

            hintText: '姓名、用户名、邮箱地址、手机号码',

            border: InputBorder.none,

          ),

        ),

        actions: [

          IconButton(

            icon: Icon(Icons.qr_code_scanner),

            onPressed: () {

              // TODO: Implement QR code scanning

            },

          ),

        ],

      ),

      body: Column(

        crossAxisAlignment: CrossAxisAlignment.start,

        children: [

          ListTile(

            leading: Icon(Icons.send),

            title: Text('跨境汇款至银行账户、现金领取点等'),

            onTap: () {

              // TODO: Implement cross-border transfer

            },

          ),

          Divider(),

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Text(

              '建议联系人',

              style: TextStyle(fontWeight: FontWeight.bold),

            ),

          ),

          ListTile(

            leading: CircleAvatar(

              backgroundColor: Colors.purple,

              child: Text('ZF'),

            ),

            title: Text('Fang Zhou'),

            trailing: Icon(Icons.info_outline),

          ),

          ListTile(

            leading: CircleAvatar(

              backgroundColor: Colors.black,

              child: Image.asset('assets/images/template.png'),

            ),

            title: Text('CURVE UK LIMITED'),

            trailing: Icon(Icons.info_outline),

          ),

          Divider(),

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Text(

              '您的联系人',

              style: TextStyle(fontWeight: FontWeight.bold),

            ),

          ),

          ListTile(

            leading: CircleAvatar(

              backgroundColor: Colors.purple,

              child: Text('ZF'),

            ),

            title: Text('Fang Zhou'),

            trailing: Icon(Icons.info_outline),

          ),

        ],

      ),

      bottomNavigationBar: BottomAppBar(

        child: Padding(

          padding: const EdgeInsets.all(8.0),

          child: ElevatedButton.icon(

            icon: Icon(Icons.contacts),

            label: Text('启用您的联系人'),

            onPressed: () {

              // TODO: Implement contact activation

            },

            style: ElevatedButton.styleFrom(

              backgroundColor: Colors.blue,

              minimumSize: Size(double.infinity, 50),

            ),

          ),

        ),

      ),

    );

  }

}