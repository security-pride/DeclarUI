import 'package:flutter/material.dart';



class TravelScreen extends StatefulWidget {

  @override

  _TravelScreenState createState() => _TravelScreenState();

}



class _TravelScreenState extends State<TravelScreen> with SingleTickerProviderStateMixin {

  late TabController _tabController;

  final List<String> _tabs = ['精选', '国内游', '出境游'];



  @override

  void initState() {

    super.initState();

    _tabController = TabController(length: _tabs.length, vsync: this);

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

        leading: IconButton(

          icon: Icon(Icons.arrow_back),

          onPressed: () {

            Navigator.pushNamed(context, 'Home');

          },

        ),

        title: Text('旅游'),

        bottom: TabBar(

          controller: _tabController,

          tabs: _tabs.map((String tab) => Tab(text: tab)).toList(),

        ),

      ),

      body: TabBarView(

        controller: _tabController,

        children: [

          _buildMainContent(),

          _buildDomesticTravelContent(),

          _buildInternationalTravelContent(),

        ],

      ),

      bottomNavigationBar: BottomNavigationBar(

        items: [

          BottomNavigationBarItem(icon: Icon(Icons.home), label: '旅游首页'),

          BottomNavigationBarItem(icon: Icon(Icons.location_on), label: '目的地'),

          BottomNavigationBarItem(icon: Icon(Icons.history), label: '浏览历史'),

          BottomNavigationBarItem(icon: Icon(Icons.favorite), label: '我的收藏'),

          BottomNavigationBarItem(icon: Icon(Icons.shopping_cart), label: '我的订单'),

        ],

        type: BottomNavigationBarType.fixed,

        currentIndex: 0,

        onTap: (index) {

          // Handle bottom navigation taps

        },

      ),

    );

  }



  Widget _buildMainContent() {

    return SingleChildScrollView(

      child: Column(

        children: [

          _buildSearchBar(),

          _buildVisaFreeSection(),

          _buildTravelOptions(),

          _buildBanner(),

          _buildNearbyStores(),

          _buildDomesticInternationalSection(),

        ],

      ),

    );

  }



  Widget _buildSearchBar() {

    return Padding(

      padding: const EdgeInsets.all(8.0),

      child: Row(

        children: [

          Expanded(

            child: TextField(

              decoration: InputDecoration(

                hintText: '目的地/关键词',

                prefixIcon: Row(

                  mainAxisSize: MainAxisSize.min,

                  children: [

                    Icon(Icons.location_on),

                    Text('烟台出发'),

                  ],

                ),

                suffixIcon: Icon(Icons.search),

                border: OutlineInputBorder(

                  borderRadius: BorderRadius.circular(25.0),

                ),

              ),

            ),

          ),

          IconButton(

            icon: Icon(Icons.person),

            onPressed: () {

              // Handle profile button press

            },

          ),

        ],

      ),

    );

  }



  Widget _buildVisaFreeSection() {

    return Column(

      crossAxisAlignment: CrossAxisAlignment.start,

      children: [

        Padding(

          padding: const EdgeInsets.all(8.0),

          child: Text('免签落地签:', style: TextStyle(fontWeight: FontWeight.bold)),

        ),

        SingleChildScrollView(

          scrollDirection: Axis.horizontal,

          child: Row(

            children: ['泰国', '新加坡', '马尔代夫', '马来西亚', '巴厘'].map((country) {

              return Padding(

                padding: const EdgeInsets.symmetric(horizontal: 4.0),

                child: Chip(label: Text(country)),

              );

            }).toList(),

          ),

        ),

      ],

    );

  }



  Widget _buildTravelOptions() {

    return GridView.count(

      shrinkWrap: true,

      physics: NeverScrollableScrollPhysics(),

      crossAxisCount: 4,

      children: [

        _buildTravelOption(Icons.flag, '跟团游', () {

          Navigator.pushNamed(context, 'GroupTravel');

        }),

        _buildTravelOption(Icons.group, '私家团', () {}),

        _buildTravelOption(Icons.tour, '当地参团', () {}),

        _buildTravelOption(Icons.directions_boat, '邮轮', () {}),

        _buildTravelOption(Icons.card_travel, '自由行', () {}),

        _buildTravelOption(Icons.edit, '定制旅行', () {}),

        _buildTravelOption(Icons.directions_car, '包车游', () {}),

        _buildTravelOption(Icons.more_horiz, '更多玩法', () {}),

      ],

    );

  }



  Widget _buildTravelOption(IconData icon, String label, VoidCallback onTap) {

    return InkWell(

      onTap: onTap,

      child: Column(

        mainAxisAlignment: MainAxisAlignment.center,

        children: [

          Icon(icon),

          SizedBox(height: 4),

          Text(label, textAlign: TextAlign.center),

        ],

      ),

    );

  }



  Widget _buildBanner() {

    return Container(

      margin: EdgeInsets.all(8.0),

      height: 100,

      decoration: BoxDecoration(

        borderRadius: BorderRadius.circular(8.0),

        image: DecorationImage(

          image: AssetImage('assets/images/template.png'),

          fit: BoxFit.cover,

        ),

      ),

      child: Center(

        child: Text(

          '游万里山河 赏一帆风月',

          style: TextStyle(color: Colors.white, fontSize: 18, fontWeight: FontWeight.bold),

        ),

      ),

    );

  }



  Widget _buildNearbyStores() {

    return Padding(

      padding: const EdgeInsets.all(8.0),

      child: Row(

        children: [

          Icon(Icons.store),

          SizedBox(width: 8),

          Text('附近有3家携程门店'),

          Spacer(),

          Text('最近距您3.5km'),

          Icon(Icons.chevron_right),

        ],

      ),

    );

  }



  Widget _buildDomesticInternationalSection() {

    return Column(

      children: [

        _buildSectionHeader('国内游', true),

        _buildDestinationGrid([

          '烟台', '新疆', '威海', '山东'

        ]),

        _buildSectionHeader('出境游', false),

        _buildDestinationGrid([

          '日本', '韩国', '仙本那', '泰国'

        ]),

      ],

    );

  }



  Widget _buildSectionHeader(String title, bool isDomestic) {

    return Padding(

      padding: const EdgeInsets.all(8.0),

      child: Row(

        mainAxisAlignment: MainAxisAlignment.spaceBetween,

        children: [

          Text(title, style: TextStyle(fontWeight: FontWeight.bold)),

          TextButton(

            onPressed: () {

              if (isDomestic) {

                _tabController.animateTo(1);

              } else {

                _tabController.animateTo(2);

              }

            },

            child: Text('更多'),

          ),

        ],

      ),

    );

  }



  Widget _buildDestinationGrid(List<String> destinations) {

    return GridView.count(

      shrinkWrap: true,

      physics: NeverScrollableScrollPhysics(),

      crossAxisCount: 2,

      childAspectRatio: 1.5,

      children: destinations.map((destination) {

        return Card(

          child: Stack(

            fit: StackFit.expand,

            children: [

              Image.asset('assets/images/template.png', fit: BoxFit.cover),

              Positioned(

                bottom: 8,

                left: 8,

                child: Text(

                  destination,

                  style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold),

                ),

              ),

            ],

          ),

        );

      }).toList(),

    );

  }



  Widget _buildDomesticTravelContent() {

    return Center(child: Text('国内游内容'));

  }



  Widget _buildInternationalTravelContent() {

    return Center(child: Text('出境游内容'));

  }

}