import 'package:flutter/material.dart';



class NotificationsScreen extends StatelessWidget {

  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () => Navigator.pop(context),

        ),

        title: Text('Notification'),

        actions: [

          IconButton(

            icon: Icon(Icons.settings),

            onPressed: () {

              // TODO: Implement settings action

            },

          ),

        ],

      ),

      body: ListView(

        children: [

          Padding(

            padding: const EdgeInsets.all(16.0),

            child: Text(

              'Recent',

              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),

            ),

          ),

          _buildNotificationItem(

            icon: Icons.shopping_cart,

            title: 'Purchase Completed!',

            description: 'You already bought a class from Jerremy Mamika. Enjoy the class! 👋',

            time: '2 m ago',

          ),

          _buildNotificationItem(

            icon: Icons.person,

            title: 'Jerremy Send You a Message',

            description: "Hi Magdalena, I've seen your challenge...",

            time: '2 m ago',

            hasAction: true,

            actionText: 'Reply the message',

          ),

          _buildNotificationItem(

            icon: Icons.flash_on,

            title: 'Ramadhan Flash Sale!',

            description: 'Get 20% discount for first transaction in this month!😍😍',

            time: '2 m ago',

          ),

          _buildNotificationItem(

            icon: Icons.emoji_events,

            title: 'Challange Completed',

            description: 'Congratulation! you have completed course by Jerremy Mamika',

            time: '10 m ago',

          ),

        ],

      ),

    );

  }



  Widget _buildNotificationItem({

    required IconData icon,

    required String title,

    required String description,

    required String time,

    bool hasAction = false,

    String actionText = '',

  }) {

    return ListTile(

      leading: CircleAvatar(

        backgroundColor: Colors.grey[200],

        child: Icon(icon, color: Colors.black),

      ),

      title: Text(title, style: TextStyle(fontWeight: FontWeight.bold)),

      subtitle: Column(

        crossAxisAlignment: CrossAxisAlignment.start,

        children: [

          Text(description),

          if (hasAction)

            TextButton(

              onPressed: () {

                // TODO: Implement action

              },

              child: Text(actionText, style: TextStyle(color: Colors.purple)),

            ),

        ],

      ),

      trailing: Text(time, style: TextStyle(color: Colors.grey)),

      contentPadding: EdgeInsets.symmetric(horizontal: 16, vertical: 8),

    );

  }

}