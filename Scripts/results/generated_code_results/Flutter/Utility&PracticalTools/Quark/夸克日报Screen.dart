import 'package:flutter/material.dart';



class NewsScreen extends StatefulWidget {

  @override

  _NewsScreenState createState() => _NewsScreenState();

}



class _NewsScreenState extends State<NewsScreen> with SingleTickerProviderStateMixin {

  late TabController _tabController;



  @override

  void initState() {

    super.initState();

    _tabController = TabController(length: 3, vsync: this);

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

        title: Text('夸克日报'),

        actions: [

          IconButton(icon: Icon(Icons.search), onPressed: () {}),

          IconButton(icon: Icon(Icons.share), onPressed: () {}),

          IconButton(

            icon: Icon(Icons.close),

            onPressed: () => Navigator.pushNamed(context, 'Home'),

          ),

        ],

      ),

      body: ListView(

        children: [

          _buildDateWeatherCard(),

          _buildNewsCard(),

          _buildHotSearches(),

          _buildPromoCards(),

          _buildFeaturedNews(),

        ],

      ),

    );

  }



  Widget _buildDateWeatherCard() {

    return Container(

      color: Colors.blue,

      padding: EdgeInsets.all(16),

      child: Row(

        children: [

          Column(

            crossAxisAlignment: CrossAxisAlignment.start,

            children: [

              Text('07', style: TextStyle(fontSize: 32, color: Colors.white)),

              Text('16', style: TextStyle(fontSize: 32, color: Colors.white)),

              Icon(Icons.cloud, color: Colors.white),

              Text('武汉市 30°C', style: TextStyle(color: Colors.white)),

            ],

          ),

          Expanded(

            child: Column(

              crossAxisAlignment: CrossAxisAlignment.start,

              children: [

                Text('早报', style: TextStyle(fontSize: 24, color: Colors.white)),

                Text('余承东回应常按住王非批：有误解', style: TextStyle(color: Colors.white)),

                Text('如何扭转地方财政收缩态势？专家建议', style: TextStyle(color: Colors.white)),

                Text('美特勤局局长：调整特朗普贴身警卫', style: TextStyle(color: Colors.white)),

              ],

            ),

          ),

        ],

      ),

    );

  }



  Widget _buildNewsCard() {

    return Card(

      margin: EdgeInsets.all(8),

      child: Column(

        crossAxisAlignment: CrossAxisAlignment.start,

        children: [

          Padding(

            padding: EdgeInsets.all(8),

            child: Text('热搜榜', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          ),

          TabBar(

            controller: _tabController,

            tabs: [

              Tab(text: '热搜'),

              Tab(text: '微博'),

              Tab(text: '知乎'),

            ],

          ),

          SizedBox(

            height: 200,

            child: TabBarView(

              controller: _tabController,

              children: [

                _buildHotSearchList(),

                _buildHotSearchList(),

                _buildHotSearchList(),

              ],

            ),

          ),

        ],

      ),

    );

  }



  Widget _buildHotSearchList() {

    return ListView(

      children: [

        _buildHotSearchItem('1.', '400多件裤子退货店家损失近80...', '170w'),

        _buildHotSearchItem('2.', '几千块手机为何离不开几块钱的...', '109w'),

        _buildHotSearchItem('3.', '全面深化改革的实践续篇', '89w'),

        _buildHotSearchItem('4.', '抓娃娃票房', '87w'),

        _buildHotSearchItem('5.', '小天愿意跟相柳走不是因为誓言', '45w'),

      ],

    );

  }



  Widget _buildHotSearchItem(String rank, String title, String views) {

    return ListTile(

      leading: Text(rank, style: TextStyle(color: Colors.blue)),

      title: Text(title),

      trailing: Text(views, style: TextStyle(color: Colors.grey)),

    );

  }



  Widget _buildPromoCards() {

    return Row(

      children: [

        Expanded(

          child: Card(

            child: Padding(

              padding: EdgeInsets.all(8),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Row(

                    children: [

                      Icon(Icons.eco, color: Colors.green),

                      Text('芭芭农场'),

                    ],

                  ),

                  Text('新鲜水果包邮到家'),

                  Text('去施肥 >', style: TextStyle(color: Colors.green)),

                ],

              ),

            ),

          ),

        ),

        Expanded(

          child: Card(

            child: Padding(

              padding: EdgeInsets.all(8),

              child: Column(

                crossAxisAlignment: CrossAxisAlignment.start,

                children: [

                  Row(

                    children: [

                      Icon(Icons.card_giftcard, color: Colors.red),

                      Text('福利中心'),

                    ],

                  ),

                  Text('现金红包天天领取'),

                  Text('去领钱 >', style: TextStyle(color: Colors.red)),

                ],

              ),

            ),

          ),

        ),

      ],

    );

  }



  Widget _buildFeaturedNews() {

    return Card(

      child: Column(

        children: [

          Stack(

            children: [

              Image.asset('assets/images/template.png'),

              Positioned(

                left: 8,

                bottom: 8,

                child: Container(

                  padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),

                  color: Colors.blue,

                  child: Text('专题', style: TextStyle(color: Colors.white)),

                ),

              ),

            ],

          ),

          Padding(

            padding: EdgeInsets.all(8),

            child: Text('特朗普遇刺右耳受伤', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),

          ),

        ],

      ),

    );

  }

}