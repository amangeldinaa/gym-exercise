import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ButtonStyled from './components/ButtonStyled';
import Carousel from 'react-native-snap-carousel';

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

  const onPress = () => {
    if(count < 3) {
      setCount(prevCount => prevCount + 1)
    }
  };


  const renderImage = ({ item, index }) => {
    const isActive = index === count;
    return (
      <View style={isActive && styles.activeItem}>
        <Image 
        source={item.img} 
        style={styles.image} 
        alt="slider img"/>
      </View>
      
    );
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.verticleLine}>
        <Text style={styles.scrollNum}>{item}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.trisestText}>ТРИСЕТ</Text>
      <Text style={styles.numText}>{count}/3</Text>
      <Text style={styles.secondaryText}>ПОДХОД</Text>
      <Text style={styles.mainText}>{exercises[count-1].name}</Text>

      <Carousel
        data={exercises}
        renderItem={renderImage}
        sliderWidth={500}
        itemWidth={100}
        inactiveSlideOpacity={0.5}
        inactiveSlideScale={0.8}
        activeSlideOffset={20}
        onSnapToItem={(index) => setCount(index+1)}
        firstItem={count-1}
      />
      
      <Text style={styles.mainText}>УКАЖИТЕ ВЕС С КОТОРЫМ ВЫ РАБОТАЛИ</Text>

      <Carousel
        data={[...Array(16).keys()]}
        renderItem={renderItem}
        sliderWidth={500}
        itemWidth={100}
        inactiveSlideOpacity={0.5}
        inactiveSlideScale={0.8}
      />

      <Text style={styles.mainText}>УКАЖИТЕ КОЛИЧЕСТВО ПОВТОРЕНИЙ</Text>

      <Carousel
        data={[...Array(16).keys()]}
        renderItem={renderItem}
        sliderWidth={500}
        itemWidth={100}
        inactiveSlideOpacity={0.5}
        inactiveSlideScale={0.8}
      />

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
  },
  secondaryText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 12,
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
    fontSize: 45,
    marginHorizontal: 30
  },
  verticleLine: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderLeftWidth: 1,
    borderColor: 'gray',
    borderStyle: 'solid'
  },
  scrollbar: {
    height: 50,
    marginBottom: 30
  },
  itemText: {
    fontSize: 22,
    color: 'blue'
  }
});
