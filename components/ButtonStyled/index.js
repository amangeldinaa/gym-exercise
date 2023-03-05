import {StyleSheet, Text, TouchableOpacity} from 'react-native';

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
    marginBottom: 35,
    marginTop: 25
  },
  text: {
    fontWeight: 700,
    fontSize: 20
  }
});

export default ButtonStyled;