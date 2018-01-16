import { StyleSheet, Dimensions } from 'react-native';
export default styles = StyleSheet.create( {

container: {
  width: Dimensions.get('window').width,
},

ScrollView: {
  flex: 1,
},

  root: {
    flex: 1,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    padding: 20,
  },

  headerText: {
    color: 'white',
    fontSize: 30,
    marginBottom: 20,
  },

  textInput: {
    width: Dimensions.get('window').width - 40,
    marginHorizontal: 20,
    marginVertical: 20,
    fontSize: 15,
    textAlign: 'left',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 1,
    borderColor: '#889195',
  },

  buttonContainer: {
    paddingBottom: 20,
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 40,
    marginTop: 40,
  },

  button: {
    width: Dimensions.get('window').width - 40,
    padding: 15,
    backgroundColor: '#1AB188',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
  },
} );
