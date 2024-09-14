const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <View style={styles.header}>
        <Button title="Menu" onPress={() => navigation.openDrawer()} />
        <TextInput 
          style={styles.searchBar} 
          placeholder="Search album song" 
          placeholderTextColor="#999" 
        />
      </View>
      
      <ScrollView style={styles.scrollContainer}>
        {/* Hot Recommended Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hot Recommended</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PlaySong', { song: 'Sound of Sky' })}>
              <Image source={require('../assets/snack-icon.png')} style={styles.image} />
              <Text style={styles.songTitle}>Sound of Sky</Text>
              <Text style={styles.artistName}>Dilon Bruce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PlaySong', { song: 'Girl on Fire' })}>
              <Image source={require('../assets/snack-icon.png')} style={styles.image} />
              <Text style={styles.songTitle}>Girl on Fire</Text>
              <Text style={styles.artistName}>Alecia Keys</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Playlist Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Playlist</Text>
          <TouchableOpacity onPress={() => navigation.navigate('PlaySong', { song: 'Classic Playlist' })}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
          <View style={styles.row}>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PlaySong', { song: 'Classic Playlist' })}>
              <Image source={require('../assets/snack-icon.png')} style={styles.image} />
              <Text style={styles.songTitle}>Classic Playlist</Text>
              <Text style={styles.artistName}>Piano Guys</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PlaySong', { song: 'Summer Playlist' })}>
              <Image source={require('../assets/snack-icon.png')} style={styles.image} />
              <Text style={styles.songTitle}>Summer Playlist</Text>
              <Text style={styles.artistName}>Dilon Bruce</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('PlaySong', { song: 'Pop Music' })}>
              <Image source={require('../assets/snack-icon.png')} style={styles.image} />
              <Text style={styles.songTitle}>Pop Music</Text>
              <Text style={styles.artistName}>Michael Jackson</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Recently Played Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recently Played</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Songs')}>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
          <View style={styles.recentlyPlayedList}>
            <TouchableOpacity style={styles.recentlyPlayedItem} onPress={() => navigation.navigate('PlaySong', { song: 'Billie Jean' })}>
              <TouchableOpacity style={styles.playIcon}>
                <Text>▶</Text>
              </TouchableOpacity>
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>Billie Jean</Text>
                <Text style={styles.artistName}>Michael Jackson</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.recentlyPlayedItem} onPress={() => navigation.navigate('PlaySong', { song: 'Earth Song' })}>
              <TouchableOpacity style={styles.playIcon}>
                <Text>▶</Text>
              </TouchableOpacity>
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>Earth Song</Text>
                <Text style={styles.artistName}>Michael Jackson</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.recentlyPlayedItem} onPress={() => navigation.navigate('PlaySong', { song: 'Mirror' })}>
              <TouchableOpacity style={styles.playIcon}>
                <Text>▶</Text>
              </TouchableOpacity>
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>Mirror</Text>
                <Text style={styles.artistName}>Justin Timberlake</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.recentlyPlayedItem} onPress={() => navigation.navigate('PlaySong', { song: 'Remember the Time' })}>
              <TouchableOpacity style={styles.playIcon}>
                <Text>▶</Text>
              </TouchableOpacity>
              <View style={styles.songInfo}>
                <Text style={styles.songTitle}>Remember the Time</Text>
                <Text style={styles.artistName}>Michael Jackson</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Home')}>
          <Text>Home</Text>
          <Text style={styles.navHighlight}>⬤</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Songs')}>
          <Text>Songs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('Settings')}>
          <Text>Settings</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212' },
  header: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 15, paddingVertical: 10 },
  searchBar: { flex: 1, backgroundColor: '#333', borderRadius: 20, paddingLeft: 15, color: '#fff'},
  scrollContainer: { flex: 1, paddingHorizontal: 15 },
  section: { marginVertical: 15 },
  sectionTitle: { fontSize: 18, color: '#fff', marginBottom: 10 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  item: { width: '48%', alignItems: 'center' },
  image: { width: '100%', height: 100, borderRadius: 10, marginBottom: 5 },
  songTitle: { color: '#fff', textAlign: 'center' },
  artistName: { color: '#aaa', textAlign: 'center' },
  recentlyPlayedList: { },
  recentlyPlayedItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10 },
  playIcon: { backgroundColor: '#333', borderRadius: 20, width: 40, height: 40, justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  songInfo: { flex: 1 },
  viewAll: { color: '#bbb', textAlign: 'right' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#333', paddingVertical: 10 },
  navItem: { alignItems: 'center' },
  navHighlight: { color: '#ff0' }
});

export default HomeScreen;