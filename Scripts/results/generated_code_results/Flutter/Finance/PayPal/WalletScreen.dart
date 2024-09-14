import 'package:flutter/material.dart';

class WalletScreen extends StatefulWidget {
  @override
  _WalletScreenState createState() => _WalletScreenState();
}

class _WalletScreenState extends State<WalletScreen> with SingleTickerProviderStateMixin {
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
        title: Text('Wallet'),
        bottom: TabBar(
          controller: _tabController,
          tabs: [
            Tab(text: 'Wallet'),
            Tab(text: 'Rewards'),
            Tab(text: 'Activity'),
          ],
        ),
      ),
      body: TabBarView(
        controller: _tabController,
        children: [
          _buildWalletTab(),
          Center(child: Text('Rewards')),
          Center(child: Text('Activity')),
        ],
      ),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: 3,
        items: [
          BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
          BottomNavigationBarItem(icon: Icon(Icons.bar_chart), label: 'Crypto'),
          BottomNavigationBarItem(icon: Icon(Icons.attach_money), label: 'Payments'),
          BottomNavigationBarItem(icon: Icon(Icons.account_balance_wallet), label: 'Wallet'),
        ],
        onTap: (index) {
          if (index == 0) {
            Navigator.pushNamed(context, 'Home');
          }
        },
      ),
    );
  }

  Widget _buildWalletTab() {
    return SingleChildScrollView(
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Image.asset('assets/images/template.png', width: 24, height: 24),
                        SizedBox(width: 8),
                        Text('PayPal balance'),
                        Spacer(),
                        Text('£0.00'),
                      ],
                    ),
                    SizedBox(height: 16),
                    Text(
                      '£0.00',
                      style: Theme.of(context).textTheme.headlineMedium,
                    ),
                  ],
                ),
              ),
            ),
            SizedBox(height: 24),
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Bank accounts and cards',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                TextButton.icon(
                  onPressed: () {},
                  icon: Text('Add new'),
                  label: Icon(Icons.arrow_forward_ios, size: 16),
                ),
              ],
            ),
            SizedBox(height: 16),
            Card(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Image.asset('assets/images/template.png', width: 40, height: 24),
                        SizedBox(width: 8),
                        Text('BARCLAYS'),
                      ],
                    ),
                    SizedBox(height: 8),
                    Row(
                      children: [
                        Text('VISA'),
                        SizedBox(width: 8),
                        Text('信用卡', style: TextStyle(fontSize: 12)),
                        Spacer(),
                        Text('••5871'),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}