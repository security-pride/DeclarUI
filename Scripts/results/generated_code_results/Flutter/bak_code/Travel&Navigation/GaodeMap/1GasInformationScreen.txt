import 'package:flutter/material.dart';

class GasInformationScreen extends StatefulWidget {
  @override
  _GasInformationScreenState createState() => _GasInformationScreenState();
}

class _GasInformationScreenState extends State<GasInformationScreen> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('高德车服·加油'),
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.pushNamed(context, 'Home'),
        ),
        actions: [
          IconButton(
            icon: Icon(Icons.search),
            onPressed: () {},
          ),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          children: [
            _buildQuickAccessButtons(),
            _buildPromoSection(),
            _buildMainContent(),
          ],
        ),
      ),
    );
  }

  Widget _buildQuickAccessButtons() {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          _buildQuickAccessButton('新人专享', Icons.card_giftcard),
          _buildQuickAccessButton('调价补贴', Icons.local_offer, badge: '热'),
          _buildQuickAccessButton('领券中心', Icons.confirmation_number),
          _buildQuickAccessButton('分享油礼', Icons.share),
          _buildQuickAccessButton('油惠卡', Icons.credit_card, badge: '省'),
        ],
      ),
    );
  }

  Widget _buildQuickAccessButton(String name, IconData icon, {String? badge}) {
    return Column(
      children: [
        Stack(
          children: [
            Icon(icon),
            if (badge != null)
              Positioned(
                right: 0,
                top: 0,
                child: Container(
                  padding: EdgeInsets.all(2),
                  decoration: BoxDecoration(
                    color: Colors.red,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  constraints: BoxConstraints(
                    minWidth: 16,
                    minHeight: 16,
                  ),
                  child: Text(
                    badge,
                    style: TextStyle(
                      color: Colors.white,
                      fontSize: 10,
                    ),
                    textAlign: TextAlign.center,
                  ),
                ),
              ),
          ],
        ),
        SizedBox(height: 4),
        Text(name, style: TextStyle(fontSize: 12)),
      ],
    );
  }

  Widget _buildPromoSection() {
    return Container(
      padding: EdgeInsets.all(16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text("天天'油'惠", style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              Text('单回本，单单省！', style: TextStyle(fontSize: 14, color: Colors.grey)),
            ],
          ),
          ElevatedButton(
            child: Text('立即查看'),
            onPressed: () {},
            style: ElevatedButton.styleFrom(
              backgroundColor: Colors.blue,
              shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20),
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildMainContent() {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Padding(
          padding: EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('高德车服·加油', style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold)),
              Text('站超多 巨划算', style: TextStyle(fontSize: 16, color: Colors.grey)),
              Container(
                padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
                decoration: BoxDecoration(
                  color: Colors.red[100],
                  borderRadius: BorderRadius.circular(4),
                ),
                child: Text('高德红包 满200减8', style: TextStyle(color: Colors.red)),
              ),
            ],
          ),
        ),
        _buildFilterOptions(),
        _buildGasStationList(),
      ],
    );
  }

  Widget _buildFilterOptions() {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          _buildFilterChip('推荐排序'),
          _buildFilterChip('92#'),
          _buildFilterChip('全部品牌'),
        ],
      ),
    );
  }

  Widget _buildFilterChip(String label) {
    return Chip(
      label: Text(label),
      backgroundColor: Colors.grey[200],
    );
  }

  Widget _buildGasStationList() {
    return Column(
      children: [
        _buildGasStationItem(
          '供销石油加油站',
          '3km',
          '¥7.56/L',
          '¥7.87/L',
          '加200省8',
        ),
        _buildGasStationItem(
          '烟台交运石油二马路金沟寨加油站',
          '1.4公里',
          '¥7.56/L',
          '¥8.07/L',
          '加200省13',
        ),
        _buildGasStationItem(
          '中化石油安顺加油站(安顺站)',
          '7.1公里',
          '¥6.86/L',
          '¥7.97/L',
          '加200省28',
        ),
      ],
    );
  }

  Widget _buildGasStationItem(String name, String distance, String price, String originalPrice, String discount) {
    return GestureDetector(
      onTap: () => Navigator.pushNamed(context, 'GasStationDetails'),
      child: Container(
        padding: EdgeInsets.all(16),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(name, style: TextStyle(fontSize: 16, fontWeight: FontWeight.bold)),
                  SizedBox(height: 4),
                  Text(distance, style: TextStyle(color: Colors.grey)),
                  SizedBox(height: 4),
                  Row(
                    children: [
                      Text(price, style: TextStyle(fontSize: 18, color: Colors.red, fontWeight: FontWeight.bold)),
                      SizedBox(width: 8),
                      Text(originalPrice, style: TextStyle(decoration: TextDecoration.lineThrough, color: Colors.grey)),
                    ],
                  ),
                  SizedBox(height: 4),
                  Container(
                    padding: EdgeInsets.symmetric(horizontal: 4, vertical: 2),
                    decoration: BoxDecoration(
                      border: Border.all(color: Colors.red),
                      borderRadius: BorderRadius.circular(2),
                    ),
                    child: Text(discount, style: TextStyle(color: Colors.red, fontSize: 12)),
                  ),
                ],
              ),
            ),
            ElevatedButton(
              child: Text('立即加油'),
              onPressed: () {},
              style: ElevatedButton.styleFrom(
                backgroundColor: Colors.blue,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(20),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}