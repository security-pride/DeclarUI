import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
class HomeScreen extends StatelessWidget {
const HomeScreen({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
final now = DateTime.now();
final formattedDate = DateFormat('EEE MMM d, yyyy').format(now);
return Scaffold(
  appBar: AppBar(
    title: const Text('Weather App'),
    actions: [
      IconButton(
        icon: const Icon(Icons.settings),
        onPressed: () {
          Navigator.pushNamed(context, 'Setting');
        },
      ),
    ],
  ),
  body: Column(
    children: [
      Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Mountain View, CA 94043, USA',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            Text(
              formattedDate,
              style: Theme.of(context).textTheme.titleMedium,
            ),
          ],
        ),
      ),
      Expanded(
        child: ListView(
          children: [
            ListTile(
              title: const Text('Weather Forecast (24 hours)'),
              trailing: const Icon(Icons.chevron_right),
              onTap: () {
                Navigator.pushNamed(context, 'Details');
              },
            ),
            ListTile(
              title: const Text('Lock screen'),
              trailing: Switch(
                value: false,
                onChanged: (bool value) {
                  // TODO: Implement lock screen functionality
                },
              ),
            ),
            ListTile(
              title: const Text('Max/Min temperature'),
              subtitle: const Text('25°C / 18°C'),
            ),
            ListTile(
              title: const Text('Wind direction and speed'),
              subtitle: const Text('NW 10 km/h'),
            ),
            ListTile(
              title: const Text('Hourly forecast'),
              trailing: const Icon(Icons.chevron_right),
              onTap: () {
                // TODO: Implement hourly forecast functionality
              },
            ),
          ],
        ),
      ),
    ],
  ),
  floatingActionButton: FloatingActionButton(
    child: const Icon(Icons.add_location),
    onPressed: () {
      Navigator.pushNamed(context, 'AddLocations');
    },
  ),
);
}
}