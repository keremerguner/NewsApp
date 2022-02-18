import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  title: {
    color: 'orangered',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    color: 'black',
    marginLeft: 3,
  },
  inner_container: {
    padding: 8,
  },
  author: {
    color: 'gray',
    textAlign: 'right',
    fontStyle: 'italic',
  },
});
