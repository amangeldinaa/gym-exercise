import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ButtonStyled = ({count, onPress}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>ПОДТВЕРДИТЬ ({count} из 3)</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    width: 350,
    height: 70,
    marginTop: 20
  },
  text: {
    fontWeight: 700,
    fontSize: 20
  }
});

export default ButtonStyled;