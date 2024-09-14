import 'package:flutter/material.dart';

class TicketServiceScreen extends StatefulWidget {
  @override
  _TicketServiceScreenState createState() => _TicketServiceScreenState();
}

class _TicketServiceScreenState extends State<TicketServiceScreen> with SingleTickerProviderStateMixin {
  late TabController _tabController;
  bool _isStudentTicket = false;
  bool _isHighSpeedTrain = false;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(length: 3, vsync: this);
    _tabController.index = 1;
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
          onPressed: () => Navigator.pushNamed(context, 'Home'),
        ),
        title: Text('高德·火车票'),
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildBanner(),
            _buildTabBar(),
            _buildSearchForm(),
            _buildRecentSearches(),
            _buildAdditionalServices(),
            _buildPromotedTicket(),
            _buildCalendar(),
            _buildLoginPrompt(),
          ],
        ),
      ),
    );
  }

  Widget _buildBanner() {
    return Container(
      height: 150,
      decoration: BoxDecoration(
        image: DecorationImage(
          image: AssetImage('assets/images/template.png'),
          fit: BoxFit.cover,
        ),
      ),
      child: Stack(
        children: [
          Positioned(
            left: 16,
            bottom: 16,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('夏日周末狂欢', style: TextStyle(color: Colors.white, fontSize: 24, fontWeight: FontWeight.bold)),
                Text('吃喝玩乐 全城低价', style: TextStyle(color: Colors.white, fontSize: 16)),
              ],
            ),
          ),
          Positioned(
            right: 16,
            bottom: 16,
            child: ElevatedButton(
              child: Text('查看'),
              onPressed: () {},
              style: ElevatedButton.styleFrom(backgroundColor: Colors.white, foregroundColor: Colors.blue),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildTabBar() {
    return TabBar(
      controller: _tabController,
      tabs: [
        Tab(text: '机票'),
        Tab(text: '火车票'),
        Tab(text: '汽车票'),
      ],
    );
  }

  Widget _buildSearchForm() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(child: _buildCityInput('威海市', Icons.train)),
              Icon(Icons.swap_horiz),
              Expanded(child: _buildCityInput('武汉市', Icons.train)),
            ],
          ),
          SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: InkWell(
                  onTap: () {},
                  child: Container(
                    padding: EdgeInsets.symmetric(vertical: 12),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.grey),
                      borderRadius: BorderRadius.circular(4),
                    ),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text('7月19日'),
                        SizedBox(width: 8),
                        Text('明天', style: TextStyle(color: Colors.grey)),
                      ],
                    ),
                  ),
                ),
              ),
            ],
          ),
          SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: CheckboxListTile(
                  title: Text('学生票'),
                  value: _isStudentTicket,
                  onChanged: (value) => setState(() => _isStudentTicket = value ?? false),
                ),
              ),
              Expanded(
                child: CheckboxListTile(
                  title: Text('高铁动车'),
                  value: _isHighSpeedTrain,
                  onChanged: (value) => setState(() => _isHighSpeedTrain = value ?? false),
                ),
              ),
            ],
          ),
          SizedBox(height: 16),
          ElevatedButton(
            child: Text('查询'),
            onPressed: () => Navigator.pushNamed(context, 'TicketSearchResult'),
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue,
              minimumSize: Size(double.infinity, 48),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildCityInput(String city, IconData icon) {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 12, horizontal: 16),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(4),
      ),
      child: Row(
        children: [
          Icon(icon, color: Colors.blue),
          SizedBox(width: 8),
          Text(city, style: TextStyle(fontSize: 16)),
        ],
      ),
    );
  }

  Widget _buildRecentSearches() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('武汉市-国家网络安全...', style: TextStyle(color: Colors.grey)),
          Text('东湖生态旅游...-金色港湾', style: TextStyle(color: Colors.grey)),
        ],
      ),
    );
  }

  Widget _buildAdditionalServices() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildServiceItem('订票保障', '安心出行', Icons.shield),
          _buildServiceItem('酒店预订', '便宜便捷', Icons.hotel),
          _buildServiceItem('领券中心', '抢5折券', Icons.confirmation_number),
        ],
      ),
    );
  }

  Widget _buildServiceItem(String title, String description, IconData icon) {
    return Column(
      children: [
        Icon(icon, color: Colors.blue),
        SizedBox(height: 4),
        Text(title),
        Text(description, style: TextStyle(fontSize: 12, color: Colors.grey)),
      ],
    );
  }

  Widget _buildPromotedTicket() {
    return Card(
      margin: EdgeInsets.all(16),
      child: Padding(
        padding: EdgeInsets.all(16),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('暑期火车票优惠订', style: TextStyle(fontWeight: FontWeight.bold)),
            SizedBox(height: 8),
            Row(
              children: [
                Image.asset('assets/images/template.png', width: 60, height: 60),
                SizedBox(width: 16),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('威海市 — 武汉市'),
                      Text('07.19出发，约7时11分到达'),
                    ],
                  ),
                ),
                Column(
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    Text('¥742起', style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
                    ElevatedButton(
                      child: Text('立即购票'),
                      onPressed: () {},
                      style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildCalendar() {
    return Container(
      padding: EdgeInsets.all(16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          _buildCalendarItem('7.15', '订当日'),
          _buildCalendarItem('7.19', '周五'),
          _buildCalendarItem('7.20', '周六'),
          _buildCalendarItem('7.21', '周日'),
          _buildCalendarItem('7.22', '周一'),
        ],
      ),
    );
  }

  Widget _buildCalendarItem(String date, String day) {
    return Column(
      children: [
        Text(date),
        Text(day, style: TextStyle(color: Colors.grey)),
      ],
    );
  }

  Widget _buildLoginPrompt() {
    return Container(
      padding: EdgeInsets.all(16),
      color: Colors.blue[50],
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('登录12306 官方出票无忧保障'),
                Text('极速出票 一键填写 出票成功率高', style: TextStyle(color: Colors.grey)),
              ],
            ),
          ),
          ElevatedButton(
            child: Text('登录'),
            onPressed: () {},
            style: ElevatedButton.styleFrom(backgroundColor: Colors.blue),
          ),
          IconButton(
            icon: Icon(Icons.close),
            onPressed: () {},
          ),
        ],
      ),
    );
  }
}