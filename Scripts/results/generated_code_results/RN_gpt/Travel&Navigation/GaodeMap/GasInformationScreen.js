const GasInformationScreen = ({ navigation }) => {
  const handleStationPress = (stationName) => {
    navigation.navigate('GasStationDetails', { name: stationName });
  };

  const handleNavPress = (route) => {
    navigation.navigate(route);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>高德车服·加油</Text>
        <TouchableOpacity>
          <Text style={styles.searchButton}>🔍</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView contentContainerStyle={styles.bodyContent}>
        <View style={styles.quickAccessButtonsContainer}>
          {QuickAccessButtons.map((button, index) => (
            <View style={styles.quickAccessButton} key={index}>
              <Text style={styles.icon}>{button.icon}</Text>
              <Text style={styles.buttonLabel}>{button.name}</Text>
            </View>
          ))}
        </View>
        
        <View style={styles.promoSection}>
          <Text style={styles.promoMainTitle}>天天"油"惠</Text>
          <Text style={styles.promoSubtitle}>单回本，单单省！</Text>
          <TouchableOpacity style={styles.promoButton}><Text style={styles.promoButtonText}>立即查看</Text></TouchableOpacity>
        </View>
        
        <View style={styles.mainContent}>
          <Text style={styles.mainTitle}>高德车服·加油</Text>
          <Text style={styles.mainSubtitle}>站超多 巨划算</Text>
          <Text style={styles.promoTag}>高德红包 满200减8</Text>
          
          <View style={styles.filterOptions}>
            {FilterOptions.map((option, index) => (
              <TouchableOpacity style={styles.filterOption} key={index}>
                <Text style={styles.filterOptionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {GasStations.map((station, index) => (
            <TouchableOpacity 
              style={styles.stationCard}
              key={index}
              onPress={() => handleStationPress(station.name)}
            >
              <Image source={require('../assets/snack-icon.png')} style={styles.stationImage} />
              <View style={styles.stationInfo}>
                <View style={styles.discountTagContainer}>
                  <Text style={styles.discountTag}>优惠加油</Text>
                </View>
                <Text style={styles.stationTitle}>{station.name}</Text>
                <Text style={styles.detailText}>{station.distance} {station.price} 加200省 {station.discount}</Text>
                <TouchableOpacity style={styles.actionButton}><Text style={styles.actionButtonText}>立即加油</Text></TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      
      <View style={styles.bottomNavigation}>
        {BottomNavButtons.map((button, index) => (
          <TouchableOpacity key={index} style={styles.navButton} onPress={() => handleNavPress(button.name === '首页' ? 'Home' : 'GasInformation')}>
            <Text style={styles.navIcon}>{button.icon}</Text>
            <Text style={styles.navLabel}>{button.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};