import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ButtonStyled from './components/ButtonStyled';
import {  Divider, useTheme } from '@rneui/themed';


export default function App() {
  const [count, setCount] = useState(1);

  const exercises = [
    {
      img: require('./assets/1.jpeg'),
      name: 'НАКЛОНЫ НА ОДНОЙ НОГЕ'
    },
    {
      img: require('./assets/2.jpeg'),
      name: 'ВЫПАДЫ С ПЕРЕВОДОМ ГИРИ'
    },
    {
      img: require('./assets/3.jpeg'),
      name: 'ПОДЪЕМЫ НА СКАМЬЕ'
    }
  ]
  const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

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
      <Text style={styles.mainText}>{exercises[count-1].name}</Text>

      <Image 
        source={exercises[count-1].img} 
        style={styles.image} 
        alt="slider img"/>
      
      <Text style={styles.mainText}>УКАЖИТЕ ВЕС С КОТОРЫМ ВЫ РАБОТАЛИ</Text>

      <View style={styles.scrollbar}>
        <ScrollView horizontal={true} >
        {arr.map(item => {
          return (
            <>
              <Divider orientation="vertical" />
                <Text style={styles.scrollNum}>{item}</Text>
              <Divider orientation="vertical" /> 
            </>
          )
        })}
        </ScrollView>
      </View>
      

      <Text style={styles.mainText}>УКАЖИТЕ КОЛИЧЕСТВО ПОВТОРЕНИЙ</Text>

      <View style={styles.scrollbar}>
        <ScrollView horizontal={true}>
          {arr.map(item => {
              return (
                <>
                  <Divider orientation="vertical" />
                    <Text style={styles.scrollNum}>{item}</Text>
                  <Divider orientation="vertical" /> 
                </>
              )
            })}
          </ScrollView>
      </View>
      

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
    marginBottom: 15
  }, 
  numText: {
    color: 'white',
    fontSize: 50,
    fontWeight: '700',
    marginBottom: 5
  },
  image: {
    width: 110,
    height: 200,
    borderRadius: 10
  },
  scrollNum: {
    color: 'white',
    fontWeight: 700,
    fontSize: 40,
    marginHorizontal: 30
  },
  verticleLine: {
    height: '1%',
    width: 1,
    backgroundColor: 'whitesmoke',
  },
  scrollbar: {
    height: 50,
    marginBottom: 30
  }
});
