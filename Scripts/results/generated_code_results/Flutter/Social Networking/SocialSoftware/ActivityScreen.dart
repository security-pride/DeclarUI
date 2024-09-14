import 'package:flutter/material.dart';



class ActivityScreen extends StatefulWidget {

  @override

  _ActivityScreenState createState() => _ActivityScreenState();

}



class _ActivityScreenState extends State<ActivityScreen> with SingleTickerProviderStateMixin {

  late TabController _tabController;



  @override

  void initState() {

    super.initState();

    _tabController = TabController(length: 4, vsync: this);

  }



  @override

  void dispose() {

    _tabController.dispose();

    super.dispose();

  }



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        title: Text('Activity'),

        actions: [

          Icon(Icons.wifi),

        ],

        bottom: TabBar(

          controller: _tabController,

          tabs: [

            Tab(text: 'All'),

            Tab(text: 'Answers'),

            Tab(text: 'Mentions'),

            Tab(text: 'Verified'),

          ],

        ),

      ),

      body: TabBarView(

        controller: _tabController,

        children: [

          _buildActivityList(),

          Center(child: Text('Answers')),

          Center(child: Text('Mentions')),

          Center(child: Text('Verified')),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.search), label: 'Search'),

          BottomNavigationBarItem(icon: Icon(Icons.add), label: 'Create'),

          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: 'Likes'),

          BottomNavigationBarItem(icon: Icon(Icons.person), label: 'Profile'),

        ],

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Feed');

          } else if (index == 1) {

            Navigator.pushNamed(context, 'Search');

          }

        },

      ),

    );

  }



  Widget _buildActivityList() {

    List<Map<String, String>> activities = [

      {'name': 'thomas', 'action': 'Started following you'},

      {'name': 'mike', 'action': 'Started following you'},

      {'name': 'michael', 'action': 'Started following you'},

      {'name': 'willie', 'action': 'Started following you'},

      {'name': 'peter', 'action': 'Started following you'},

      {'name': 'angela', 'action': 'Started following you'},

      {'name': 'devon', 'action': 'Started following you'},

      {'name': 'col', 'action': 'Started following you'},

      {'name': 'templeton', 'action': 'Started following you'},

      {'name': 'willie', 'action': 'Started following you'},

      {'name': 'dori', 'action': 'Started following you'},

    ];



    return ListView.builder(

      itemCount: activities.length,

      itemBuilder: (context, index) {

        return ListTile(

          leading: CircleAvatar(

            backgroundImage: AssetImage('assets/images/template.png'),

          ),

          title: Text(activities[index]['name']!),

          subtitle: Text(activities[index]['action']!),

          trailing: ElevatedButton(

            onPressed: () {},

            child: Text('Follow'),

            style: ElevatedButton.styleFrom(

              backgroundColor: Colors.white,

              foregroundColor: Colors.black,

              side: BorderSide(color: Colors.grey),

            ),

          ),

          onTap: () {

            Navigator.pushNamed(context, 'UserProfile');

          },

        );

      },

    );

  }

}