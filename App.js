import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import ButtonStyled from './components/ButtonStyled';
// import img1 from './assets/img1';

export default function App() {
  const [count, setCount] = useState(1);

  const onPress = () => {
    if(count < 3) {
      setCount(prevCount => prevCount + 1)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.trisestText}>ТРИСЕТ</Text>

        <Text style={styles.numText}>{count}/3</Text>
        <Text style={styles.secondaryText}>ПОДХОД</Text>
        <Text style={styles.mainText}>НАКЛОНЫ НА ОДНОЙ НОГЕ</Text>
        {/* <Image src={require('./assets/img1.jpeg')}/> */}
        <Image source={require('./assets/img.jpeg')} style={styles.image}/>
       
        <Text style={styles.mainText}>УКАЖИТЕ ВЕС С КОТОРЫМ ВЫ РАБОТАЛИ</Text>
        <Text style={styles.mainText}>УКАЖИТЕ КОЛИЧЕСТВО ПОВТОРЕНИЙ</Text>

        <ButtonStyled count={count} onPress={onPress}/>
    

        <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  // setContainer: {
  //   height: 40,
  //   flex: 1,
  //   alignItems: 'center',
  // },
  secondaryText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
    // marginTop: 70,
    // marginBottom: 30
  },
  mainText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginVertical: 20
  }, 
  trisestText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
    marginTop: 70,
    marginBottom: 30
  }, 
  numText: {
    color: 'white',
    fontSize: 50,
    fontWeight: '700',
    marginBottom: 10
  },
  image: {
    width: 110,
    height: 200,
    borderRadius: 10
  },
});
