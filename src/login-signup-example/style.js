import { StyleSheet, Dimensions } from 'react-native';
export default styles = StyleSheet.create({
  root: {
    backgroundColor: '#13232f',
    flex: 1,
    width: Dimensions.get('window').width,
  },

  header: {
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    backgroundColor: 'transparent',
    padding: 20,
    alignSelf: 'flex-start',
  },

  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },

  buttonText: {
    fontSize: 20,
  },

  selectedButton: {
    backgroundColor: '#1AB188',
  },

  regularButton: {
    backgroundColor: '#435359',
  },

  regularButtonText: {
    color: '#8A9D9C',
  },

  selectedButtonText: {
    color: 'white',
  },

  formContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width * 2,
  },
});
