import React, { useState } from 'react';

import {

  View,

  Text,

  Image,

  TouchableOpacity,

  StyleSheet,

  ImageBackground,

  Dimensions,

} from 'react-native';

import { useNavigation } from '@react-navigation/native';



const { width, height } = Dimensions.get('window');



const LoginScreen = () => {

  const navigation = useNavigation();

  const [currentPage, setCurrentPage] = useState(0);



  const handleSignIn = () => {

    navigation.navigate('Home');

  };



  const handlePageChange = (index) => {

    setCurrentPage(index);

  };



  return (

    <ImageBackground

      source={require('../assets/snack-icon.png')}

      style={styles.backgroundImage}

    >

      <View style={styles.container}>

        <View style={styles.logoContainer}>

          <Image

            source={require('../assets/snack-icon.png')}

            style={styles.logo}

          />

          <Text style={styles.appName}>CutG</Text>

        </View>



        <View style={styles.contentContainer}>

          <Text style={styles.welcomeText}>Welcome!</Text>

          <Text style={styles.descriptionText}>

            Discover interesting short videos. Share your moments with the CutG

            community

          </Text>



          <View style={styles.paginationContainer}>

            {[0, 1, 2].map((index) => (

              <TouchableOpacity

                key={index}

                style={[

                  styles.paginationDot,

                  currentPage === index && styles.activeDot,

                ]}

                onPress={() => handlePageChange(index)}

              />

            ))}

          </View>

        </View>



        <View style={styles.buttonContainer}>

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>

            <Text style={styles.signInButtonText}>Sign in</Text>

          </TouchableOpacity>



          <View style={styles.socialButtonsContainer}>

            <TouchableOpacity style={styles.socialButton}>

              <Image

                source={require('../assets/snack-icon.png')}

                style={styles.socialIcon}

              />

            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>

              <Image

                source={require('../assets/snack-icon.png')}

                style={styles.socialIcon}

              />

            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>

              <Image

                source={require('../assets/snack-icon.png')}

                style={styles.socialIcon}

              />

            </TouchableOpacity>

          </View>

        </View>

      </View>

    </ImageBackground>

  );

};



const styles = StyleSheet.create({

  backgroundImage: {

    flex: 1,

    width: width,

    height: height,

  },

  container: {

    flex: 1,

    justifyContent: 'space-between',

    padding: 20,

    backgroundColor: 'rgba(0, 0, 0, 0.5)',

  },

  logoContainer: {

    flexDirection: 'row',

    alignItems: 'center',

    marginTop: 40,

  },

  logo: {

    width: 40,

    height: 40,

    marginRight: 10,

  },

  appName: {

    fontSize: 24,

    fontWeight: 'bold',

    color: 'white',

  },

  contentContainer: {

    alignItems: 'center',

  },

  welcomeText: {

    fontSize: 32,

    fontWeight: 'bold',

    color: 'white',

    marginBottom: 20,

  },

  descriptionText: {

    fontSize: 16,

    color: 'white',

    textAlign: 'center',

    marginBottom: 20,

  },

  paginationContainer: {

    flexDirection: 'row',

    justifyContent: 'center',

  },

  paginationDot: {

    width: 8,

    height: 8,

    borderRadius: 4,

    backgroundColor: 'rgba(255, 255, 255, 0.5)',

    marginHorizontal: 5,

  },

  activeDot: {

    backgroundColor: 'white',

  },

  buttonContainer: {

    marginBottom: 40,

  },

  signInButton: {

    backgroundColor: '#5DD5FB',

    paddingVertical: 15,

    borderRadius: 25,

    alignItems: 'center',

    marginBottom: 20,

  },

  signInButtonText: {

    color: 'white',

    fontSize: 18,

    fontWeight: 'bold',

  },

  socialButtonsContainer: {

    flexDirection: 'row',

    justifyContent: 'center',

  },

  socialButton: {

    width: 50,

    height: 50,

    borderRadius: 25,

    backgroundColor: 'white',

    justifyContent: 'center',

    alignItems: 'center',

    marginHorizontal: 10,

  },

  socialIcon: {

    width: 30,

    height: 30,

  },

});



export default LoginScreen;