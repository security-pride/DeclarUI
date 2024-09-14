const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../assets/snack-icon.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.settingsLabel}>设置</Text>
        <Image source={require('../assets/snack-icon.png')} style={styles.networkIcon} />
      </View>

      <View style={styles.profileSection}>
        <Image source={require('../assets/snack-icon.png')} style={styles.profileImage} />
        <Button title="注册" color="#FF3B30" onPress={() => navigation.navigate('LogIn')} />
        <Text style={styles.loginText}>登录并加入该社群</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>内容</Text>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>改变国家</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>话题</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>来源管理</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>消息</Text>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>通知声音</Text>
          <Switch value={true} onValueChange={() => {}} />
        </View>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>震动提醒</Text>
          <Switch value={true} onValueChange={() => {}} />
        </View>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>消息带图</Text>
          <Switch value={true} onValueChange={() => {}} />
        </View>
        <View style={styles.option}>
          <Image source={require('../assets/snack-icon.png')} style={styles.icon} />
          <Text style={styles.optionText}>通知管理</Text>
          <TouchableOpacity onPress={() => navigation.navigate('MoreDetails')}>
            <Image source={require('../assets/snack-icon.png')} style={styles.arrowIcon} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNav}>
        <Text style={styles.bottomNavText}>Bottom Navigation - Placeholder</Text>
      </View>
    </View>
  );
};