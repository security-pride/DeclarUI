import 'package:flutter/material.dart';



class SongsScreen extends StatelessWidget {

  const SongsScreen({Key? key}) : super(key: key);



  @override

  Widget build(BuildContext context) {

    return Scaffold(

      appBar: AppBar(

        leading: IconButton(

          icon: const Icon(Icons.menu),

          onPressed: () {},

        ),

        title: const Text('Songs'),

        actions: [

          IconButton(

            icon: const Icon(Icons.search),

            onPressed: () {},

          ),

        ],

      ),

      body: Column(

        children: [

          SizedBox(

            height: 50,

            child: ListView(

              scrollDirection: Axis.horizontal,

              children: [

                _buildTab('All Songs', isSelected: true),

                _buildTab('Playlists'),

                _buildTab('Albums', onTap: () => Navigator.pushNamed(context, 'Albums')),

                _buildTab('Artists'),

                _buildTab('Genre'),

              ],

            ),

          ),

          Expanded(

            child: ListView(

              children: [

                _buildSongItem(context, 'Billie Jean', 'Michael Jackson'),

                _buildSongItem(context, 'Be the girl', 'Bebe Rexa'),

                _buildSongItem(context, 'Countryman', 'Daughtry'),

                _buildSongItem(context, 'Do you feel lonelyness', 'Marc Anthony'),

                _buildSongItem(context, 'Earth song', 'Michael Jackson'),

                _buildSongItem(context, 'Smooth criminal', 'Michael Jackson'),

                _buildSongItem(context, 'The way you make me feel', 'Michael Jackson'),

                _buildSongItem(context, 'Somebody that I used to know', 'Gotye'),

                _buildSongItem(context, 'Wild Thoughts', 'DJ Khaled'),

              ],

            ),

          ),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        items: const [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),

          BottomNavigationBarItem(icon: Icon(Icons.music_note), label: 'Songs'),

          BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),

        ],

        currentIndex: 1,

        onTap: (index) {

          if (index == 0) {

            Navigator.pushNamed(context, 'Home');

          }

        },

      ),

    );

  }



  Widget _buildTab(String text, {bool isSelected = false, VoidCallback? onTap}) {

    return GestureDetector(

      onTap: onTap,

      child: Container(

        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),

        decoration: BoxDecoration(

          border: Border(

            bottom: BorderSide(

              color: isSelected ? Colors.pink : Colors.transparent,

              width: 2,

            ),

          ),

        ),

        child: Text(

          text,

          style: TextStyle(

            color: isSelected ? Colors.pink : Colors.white,

            fontWeight: isSelected ? FontWeight.bold : FontWeight.normal,

          ),

        ),

      ),

    );

  }



  Widget _buildSongItem(BuildContext context, String title, String artist) {

    return ListTile(

      leading: CircleAvatar(

        backgroundImage: AssetImage('assets/images/template.png'),

      ),

      title: Text(title),

      subtitle: Text(artist),

      trailing: IconButton(

        icon: const Icon(Icons.play_arrow, color: Colors.pink),

        onPressed: () => Navigator.pushNamed(context, 'PlaySong'),

      ),

      onTap: () => Navigator.pushNamed(context, 'PlaySong'),

    );

  }

}