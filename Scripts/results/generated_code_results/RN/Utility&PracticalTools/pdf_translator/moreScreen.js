import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
const MoreScreen = () => {
const navigation = useNavigation();
const route = useRoute();
const { file } = route.params;
const handleOptionPress = (action) => {
// Perform the selected action
console.log(Performing ${action} on ${file.name});
// Navigate back to home screen after action
navigation.navigate('home');
};
return (
<View style={styles.container}>
<View style={styles.fileInfo}>
<Image
source={require('../assets/snack-icon.png')}
style={styles.pdfIcon}
/>
<View style={styles.fileDetails}>
<Text style={styles.fileName}>{file.name}</Text>
<Text style={styles.fileMetadata}>{${file.date}    ${file.size}}</Text>
</View>
</View>
<View style={styles.optionsContainer}>
<TouchableOpacity
style={styles.option}
onPress={() => handleOptionPress('Share')}
>
<Image
source={require('../assets/snack-icon.png')}
style={styles.optionIcon}
/>
<Text style={styles.optionText}>Share</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.option}
onPress={() => handleOptionPress('Rename')}
>
<Image
source={require('../assets/snack-icon.png')}
style={styles.optionIcon}
/>
<Text style={styles.optionText}>Rename</Text>
</TouchableOpacity>
<TouchableOpacity
style={styles.option}
onPress={() => handleOptionPress('Delete')}
>
<Image
source={require('../assets/snack-icon.png')}
style={styles.optionIcon}
/>
<Text style={styles.optionText}>Delete</Text>
</TouchableOpacity>
</View>
</View>
);
};
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#fff',
padding: 20,
},
fileInfo: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 30,
},
pdfIcon: {
width: 50,
height: 50,
marginRight: 15,
},
fileDetails: {
flex: 1,
},
fileName: {
fontSize: 18,
fontWeight: 'bold',
},
fileMetadata: {
fontSize: 14,
color: '#666',
},
optionsContainer: {
backgroundColor: '#f0f0f0',
borderRadius: 10,
padding: 10,
},
option: {
flexDirection: 'row',
alignItems: 'center',
paddingVertical: 15,
borderBottomWidth: 1,
borderBottomColor: '#ddd',
},
optionIcon: {
width: 24,
height: 24,
marginRight: 15,
},
optionText: {
fontSize: 16,
},
});
export default MoreScreen;