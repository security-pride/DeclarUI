<View style={styles.quickAccessRow}>
  <TouchableOpacity style={styles.quickAccessIcon} onPress={() => navigation.navigate('UtilityBills')}>
    <Image source={require('../assets/snack-icon.png')} />
    <Text>水电煤</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.quickAccessIcon} onPress={() => navigation.navigate('Profile')}>
    <Image source={require('../assets/snack-icon.png')} />
    <Text>饿了么</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.quickAccessIcon}>
    <Image source={require('../assets/snack-icon.png')} />
    <Text>口碑团购</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.quickAccessIcon} onPress={() => navigation.navigate('Tickets')}>
    <Image source={require('../assets/snack-icon.png')} />
    <Text>淘票票</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.quickAccessIcon} onPress={() => navigation.navigate('Trade')}>
    <Image source={require('../assets/snack-icon.png')} />
    <Text>转账</Text>
  </TouchableOpacity>
</View>