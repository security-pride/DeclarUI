import 'package:flutter/material.dart';

class GasStationDetailsScreen extends StatefulWidget {
  @override
  _GasStationDetailsScreenState createState() => _GasStationDetailsScreenState();
}

class _GasStationDetailsScreenState extends State<GasStationDetailsScreen> {
  String selectedFuel = '92#';
  double enteredAmount = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        leading: IconButton(
          icon: Icon(Icons.arrow_back),
          onPressed: () => Navigator.pushNamed(context, 'GasInformation'),
        ),
        title: Text('加油站'),
        actions: [
          IconButton(icon: Icon(Icons.search), onPressed: () {}),
          IconButton(icon: Icon(Icons.more_vert), onPressed: () {}),
        ],
      ),
      body: SingleChildScrollView(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            _buildImageGallery(),
            _buildStationInfo(),
            _buildLocationInfo(),
            _buildPriceInfo(),
            _buildFuelSelection(),
            _buildPaymentSection(),
            _buildTermsAndConditions(),
            _buildFeedbackSection(),
          ],
        ),
      ),
      bottomNavigationBar: _buildBottomNavigation(),
    );
  }

  Widget _buildImageGallery() {
    return Stack(
      children: [
        Image.asset('assets/images/template.png', fit: BoxFit.cover),
        Positioned(
          bottom: 10,
          right: 10,
          child: Container(
            padding: EdgeInsets.symmetric(horizontal: 8, vertical: 4),
            decoration: BoxDecoration(
              color: Colors.black54,
              borderRadius: BorderRadius.circular(15),
            ),
            child: Text(
              '1/51',
              style: TextStyle(color: Colors.white),
            ),
          ),
        ),
      ],
    );
  }

  Widget _buildStationInfo() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('供销石油加油站', style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold)),
          Text('加油站', style: TextStyle(fontSize: 16, color: Colors.grey)),
          Text('营业时间 周一至周日 00:00-24:00', style: TextStyle(fontSize: 14)),
        ],
      ),
    );
  }

  Widget _buildLocationInfo() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('距你2.5公里 驾车6分钟 芝罘区', style: TextStyle(fontSize: 16)),
          Text('芝罘区二马路3号2单元内四号东山名郡路南', style: TextStyle(fontSize: 14, color: Colors.grey)),
          Row(
            children: [
              ElevatedButton.icon(
                icon: Icon(Icons.map),
                label: Text('地图'),
                onPressed: () {},
              ),
              SizedBox(width: 10),
              ElevatedButton.icon(
                icon: Icon(Icons.phone),
                label: Text('电话'),
                onPressed: () {},
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildPriceInfo() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text('优惠加油', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
              RichText(
                text: TextSpan(
                  style: TextStyle(fontSize: 24, color: Colors.red),
                  children: [
                    TextSpan(text: '¥7.56'),
                    TextSpan(text: '/L', style: TextStyle(fontSize: 16)),
                  ],
                ),
              ),
            ],
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.end,
            children: [
              Text('油站价 ¥7.87/L', style: TextStyle(decoration: TextDecoration.lineThrough)),
              Text('国标价 ¥8.07/L', style: TextStyle(color: Colors.grey)),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildFuelSelection() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: Row(
        children: [
          Expanded(
            child: DropdownButtonFormField<String>(
              decoration: InputDecoration(
                labelText: '请选择油枪',
                border: OutlineInputBorder(),
              ),
              value: selectedFuel,
              onChanged: (String? newValue) {
                if (newValue != null) {
                  setState(() {
                    selectedFuel = newValue;
                  });
                }
              },
              items: <String>['92#', '95#', '98#']
                  .map<DropdownMenuItem<String>>((String value) {
                return DropdownMenuItem<String>(
                  value: value,
                  child: Text(value),
                );
              }).toList(),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildPaymentSection() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('¥ 先加油后付款 输入金额计算优惠', style: TextStyle(fontSize: 16)),
          SizedBox(height: 10),
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              _buildAmountButton('¥100', '立减约 ¥ 3.93'),
              _buildAmountButton('¥200', '立减约 ¥ 7.87'),
              _buildAmountButton('¥300', '立减约 ¥ 11.81'),
            ],
          ),
          SizedBox(height: 10),
          TextField(
            decoration: InputDecoration(
              labelText: '输入金额',
              border: OutlineInputBorder(),
            ),
            keyboardType: TextInputType.number,
            onChanged: (value) {
              setState(() {
                enteredAmount = double.tryParse(value) ?? 0;
              });
            },
          ),
          SizedBox(height: 10),
          Row(
            children: [
              Expanded(
                child: ElevatedButton(
                  child: Text('立减优惠'),
                  onPressed: () {},
                ),
              ),
              SizedBox(width: 10),
              Expanded(
                child: ElevatedButton(
                  child: Text('优惠券'),
                  onPressed: () {},
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }

  Widget _buildAmountButton(String amount, String savings) {
    return ElevatedButton(
      child: Column(
        children: [
          Text(amount),
          Text(savings, style: TextStyle(fontSize: 12)),
        ],
      ),
      onPressed: () {
        setState(() {
          enteredAmount = double.parse(amount.substring(1));
        });
      },
    );
  }

  Widget _buildTermsAndConditions() {
    return Padding(
      padding: EdgeInsets.symmetric(horizontal: 16),
      child: RichText(
        text: TextSpan(
          style: TextStyle(color: Colors.blue, fontSize: 12),
          children: [
            TextSpan(text: '阅读并同意'),
            TextSpan(
              text: '《信息服务用户服务条款》',
              style: TextStyle(decoration: TextDecoration.underline),
            ),
            TextSpan(text: '《汽车服务个人信息处理规则》'),
          ],
        ),
      ),
    );
  }

  Widget _buildFeedbackSection() {
    return Padding(
      padding: EdgeInsets.all(16),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('油站印象', style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold)),
          Text('加完油后，可以在订单详情页内留下你的感受哦~', style: TextStyle(fontSize: 14, color: Colors.grey)),
        ],
      ),
    );
  }

  Widget _buildBottomNavigation() {
    return BottomAppBar(
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          IconButton(icon: Icon(Icons.location_on), onPressed: () {}),
          IconButton(icon: Icon(Icons.star_border), onPressed: () {}),
          IconButton(icon: Icon(Icons.share), onPressed: () {}),
          ElevatedButton(
            child: Text('导航'),
            onPressed: () {},
          ),
          ElevatedButton(
            child: Text('路线'),
            onPressed: () {},
          ),
        ],
      ),
    );
  }
}