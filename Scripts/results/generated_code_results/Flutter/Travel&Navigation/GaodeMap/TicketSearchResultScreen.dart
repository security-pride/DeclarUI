import 'package:flutter/material.dart';

class TicketSearchResultScreen extends StatefulWidget {
  @override
  _TicketSearchResultScreenState createState() => _TicketSearchResultScreenState();
}

class _TicketSearchResultScreenState extends State<TicketSearchResultScreen> {
  String selectedDate = '明天';
  String selectedDateValue = '7.19';
  String selectedTransportMode = '火车';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.pushNamed(context, 'TicketService'),
        ),
        title: Text('威海市 — 武汉市'),
        actions: [
          IconButton(
            icon: Icon(Icons.calendar_today),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildDateSelection(),
            _buildTransportModes(),
            _buildFilterOptions(),
            _buildPromoOffer(),
            _buildLoginPrompt(),
            _buildAlternativeTransport(),
            _buildTicketAvailabilityInfo(),
            _buildTicketOptions(),
            _buildSortOptions(),
          ],
        ),
      ),
    );
  }

  Widget _buildDateSelection() {
    return Container(
      height: 60,
      child: ListView(
        scrollDirection: Axis.horizontal,
        children: [
          _buildDateOption('今天', '18'),
          _buildDateOption('明天', '7.19', isSelected: true),
          _buildDateOption('后天', '20'),
          _buildDateOption('周日', '21'),
          _buildDateOption('周一', '22'),
          _buildDateOption('周二', '23'),
          _buildDateOption('周三', '24'),
        ],
      ),
    );
  }

  Widget _buildDateOption(String day, String date, {bool isSelected = false}) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(day, style: TextStyle(color: isSelected ? Colors.blue : Colors.black)),
          Text(date, style: TextStyle(color: isSelected ? Colors.blue : Colors.black, fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  Widget _buildTransportModes() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        _buildTransportModeOption('火车', isSelected: true),
        _buildTransportModeOption('客车', price: '¥350起'),
        _buildTransportModeOption('飞机', price: '¥620起'),
      ],
    );
  }

  Widget _buildTransportModeOption(String mode, {bool isSelected = false, String? price}) {
    return Column(
      children: [
        Text(mode, style: TextStyle(color: isSelected ? Colors.blue : Colors.black, fontWeight: FontWeight.bold)),
        if (price != null) Text(price, style: TextStyle(color: Colors.grey)),
      ],
    );
  }

  Widget _buildFilterOptions() {
    return Wrap(
      spacing: 8,
      children: [
        _buildFilterChip('只看有票'),
        _buildFilterChip('只看高铁动车'),
        _buildFilterChip('威海站'),
        _buildFilterChip('武汉站'),
        _buildFilterChip('上午出发'),
      ],
    );
  }

  Widget _buildFilterChip(String label) {
    return Chip(
      label: Text(label),
      backgroundColor: Colors.grey[200],
    );
  }

  Widget _buildPromoOffer() {
    return Container(
      padding: EdgeInsets.all(8),
      color: Colors.red[50],
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text('高德红包 满50减1', style: TextStyle(color: Colors.red)),
          Text('已领取 >', style: TextStyle(color: Colors.red)),
        ],
      ),
    );
  }

  Widget _buildLoginPrompt() {
    return Container(
      padding: EdgeInsets.all(8),
      color: Colors.blue[50],
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text('登录12306 官方出票无忧保障'),
          ElevatedButton(
            child: Text('登录'),
            onPressed: () {},
            style: ElevatedButton.styleFrom(backgroundColor: Colors.orange),
          ),
        ],
      ),
    );
  }

  Widget _buildAlternativeTransport() {
    return Container(
      padding: EdgeInsets.all(16),
      child: Row(
        children: [
          Image.asset('assets/images/template.png', width: 60, height: 60),
          SizedBox(width: 16),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('飞机直达推荐', style: TextStyle(fontWeight: FontWeight.bold)),
                Text('4时15分 比火车省69元'),
              ],
            ),
          ),
          Text('¥620起', style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
        ],
      ),
    );
  }

  Widget _buildTicketAvailabilityInfo() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Text('15:34前无直达班次，推荐2个有票方案', style: TextStyle(color: Colors.green)),
    );
  }

  Widget _buildTicketOptions() {
    return Column(
      children: [
        _buildTicketOption('09:31', '18:00', '共8时29分', '威海站', '郑州东', '武汉站', '同站换乘21分', ['G2148', 'G339'], ['二等', '二等'], [2, 6], '¥745起', '仅剩3张'),
        _buildTicketOption('12:38', '22:38', '共10时', '威海站', '合肥南', '汉口站', '同站换乘19分', ['D2150', 'G3247'], ['二等', '二等'], [1, '有票'], '¥531起', '仅剩1张'),
        _buildTicketOption('15:34', '23:11', '7时37分', '威海站', '武汉站', '武汉站', '', ['G2084'], ['二等'], [], '¥688起', '高德红包 | 共减1', originalPrice: '¥689'),
      ],
    );
  }

  Widget _buildTicketOption(String departureTime, String arrivalTime, String duration, String departureStation, String transferStation, String arrivalStation, String transferInfo, List<String> trainNumbers, List<String> ticketTypes, List<dynamic> availableTickets, String price, String remainingTickets, {String? originalPrice}) {
    return Card(
        margin: EdgeInsets.symmetric(horizontal: 16, vertical: 8),
        child: Padding(
        padding: EdgeInsets.all(16),
    child: Column(
    children: [
    Row(
    mainAxisAlignment: MainAxisAlignment.spaceBetween,
    children: [
    Text(departureTime, style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
    Text(duration, style: TextStyle(color: Colors.grey)),
    Text(arrivalTime, style: TextStyle(fontSize:18, fontWeight: FontWeight.bold)),
    ],
    ),
      SizedBox(height: 8),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Text(departureStation),
          if (transferStation != departureStation && transferStation != arrivalStation)
            Text(transferStation, style: TextStyle(color: Colors.grey)),
          Text(arrivalStation),
        ],
      ),
      if (transferInfo.isNotEmpty) Text(transferInfo, style: TextStyle(color: Colors.grey)),
      SizedBox(height: 8),
      Row(
        children: trainNumbers.map((trainNumber) => Container(
          margin: EdgeInsets.only(right: 8),
          padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
          decoration: BoxDecoration(
            border: Border.all(color: Colors.blue),
            borderRadius: BorderRadius.circular(4),
          ),
          child: Text(trainNumber, style: TextStyle(color: Colors.blue)),
        )).toList(),
      ),
      SizedBox(height: 8),
      Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Row(
            children: List.generate(ticketTypes.length, (index) => Container(
              margin: EdgeInsets.only(right: 8),
              child: Text('${ticketTypes[index]} ${availableTickets.isNotEmpty ? availableTickets[index].toString() : ''}张'),
            )),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text(price, style: TextStyle(color: Colors.red, fontWeight: FontWeight.bold)),
              if (originalPrice != null) Text(originalPrice, style: TextStyle(decoration: TextDecoration.lineThrough, color: Colors.grey)),
              Text(remainingTickets, style: TextStyle(color: Colors.orange)),
            ],
          ),
        ],
      ),
    ],
    ),
        ),
    );
  }

  Widget _buildSortOptions() {
    return Row(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        TextButton(child: Text('推荐排序'), onPressed: () {}),
        TextButton(child: Text('价格'), onPressed: () {}),
        TextButton(child: Text('耗时'), onPressed: () {}),
        TextButton(
          child: Row(
            children: [
              Icon(Icons.filter_list),
              Text('筛选'),
            ],
          ),
          onPressed: () {},
        ),
      ],
    );
  }
}
