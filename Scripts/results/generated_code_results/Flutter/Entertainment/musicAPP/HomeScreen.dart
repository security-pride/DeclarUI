import 'package:flutter/material.dart';



class HomeScreen extends StatelessWidget {

  const HomeScreen({Key? key}) : super(key: key);



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: const Icon(Icons.menu),

          onPressed: () {},

        ),

        title: TextField(

          decoration: InputDecoration(

            hintText: 'Search album song',

            prefixIcon: const Icon(Icons.search),

            filled: true,

            fillColor: Colors.grey[200],

            border: OutlineInputBorder(

              borderRadius: BorderRadius.circular(30),

              borderSide: BorderSide.none,

            ),

          ),

        ),

      ),

      body: SingleChildScrollView(

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            _buildSection('Hot Recommended', [

              _buildRecommendedItem(context, 'Sound of Sky', 'Dilon Bruce'),

              _buildRecommendedItem(context, 'Girl on Fire', 'Alecia Keys'),

            ]),

            _buildSection('Playlist', [

              _buildPlaylistItem(context, 'Classic Playlist', 'Piano Guys'),

              _buildPlaylistItem(context, 'Summer Playlist', 'Dilon Bruce'),

              _buildPlaylistItem(context, 'Pop Music', 'Michael Jackson'),

            ], showViewAll: true),

            _buildSection('Recently Played', [

              _buildRecentlyPlayedItem(context, 'Billie Jean', 'Michael Jackson'),

              _buildRecentlyPlayedItem(context, 'Earth Song', 'Michael Jackson'),

              _buildRecentlyPlayedItem(context, 'Mirror', 'Justin Timberlake'),

              _buildRecentlyPlayedItem(context, 'Remember the Time', 'Michael Jackson'),

            ], showViewAll: true),

          ],

        ),

      ),

      bottomNavigationBar: BottomNavigationBar(

        items: const [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.music_note), label: 'Songs'),

          BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),

        ],

        currentIndex: 0,

        onTap: (index) {

          if (index == 1) {

            Navigator.pushNamed(context, 'Songs');

          }

        },

      ),

    );

  }



  Widget _buildSection(String title, List<Widget> items, {bool showViewAll = false}) {

    return Column(

      crossAxisAlignment: CrossAxisAlignment.start,

      children: [

        Padding(

          padding: const EdgeInsets.all(16),

          child: Row(

            mainAxisAlignment: MainAxisAlignment.spaceBetween,

            children: [

              Text(

                title,

                style: const TextStyle(fontSize: 20, fontWeight: FontWeight.bold),

              ),

              if (showViewAll)

                TextButton(

                  onPressed: () {},

                  child: const Text('View All'),

                ),

            ],

          ),

        ),

        SizedBox(

          height: 200,

          child: ListView(

            scrollDirection: Axis.horizontal,

            children: items,

          ),

        ),

      ],

    );

  }



  Widget _buildRecommendedItem(BuildContext context, String title, String artist) {

    return GestureDetector(

      onTap: () => Navigator.pushNamed(context, 'PlaySong'),

      child: Container(

        width: 150,

        margin: const EdgeInsets.symmetric(horizontal: 8),

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            ClipRRect(

              borderRadius: BorderRadius.circular(8),

              child: Image.asset(

                'assets/images/template.png',

                height: 150,

                width: 150,

                fit: BoxFit.cover,

              ),

            ),

            const SizedBox(height: 8),

            Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),

            Text(artist, style: TextStyle(color: Colors.grey[600])),

          ],

        ),

      ),

    );

  }



  Widget _buildPlaylistItem(BuildContext context, String title, String subtitle) {

    return GestureDetector(

      onTap: () => Navigator.pushNamed(context, 'PlaySong'),

      child: Container(

        width: 120,

        margin: const EdgeInsets.symmetric(horizontal: 8),

        child: Column(

          crossAxisAlignment: CrossAxisAlignment.start,

          children: [

            ClipRRect(

              borderRadius: BorderRadius.circular(8),

              child: Image.asset(

                'assets/images/template.png',

                height: 120,

                width: 120,

                fit: BoxFit.cover,

              ),

            ),

            const SizedBox(height: 8),

            Text(title, style: const TextStyle(fontWeight: FontWeight.bold)),

            Text(subtitle, style: TextStyle(color: Colors.grey[600])),

          ],

        ),

      ),

    );

  }



  Widget _buildRecentlyPlayedItem(BuildContext context, String title, String artist) {

    return ListTile(

      leading: IconButton(

        icon: const Icon(Icons.play_circle_outline),

        onPressed: () => Navigator.pushNamed(context, 'PlaySong'),

      ),

      title: Text(title),

      subtitle: Text(artist),

      trailing: Row(

        mainAxisSize: MainAxisSize.min,

        children: [

          IconButton(

            icon: const Icon(Icons.favorite_border),

            onPressed: () {},

          ),

          const Text('★★★★☆'),

        ],

      ),

      onTap: () => Navigator.pushNamed(context, 'PlaySong'),

    );

  }

}