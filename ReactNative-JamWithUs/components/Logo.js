import React, { Component } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Image
} from 'react-native';

  export default class Logo extends Component <{}> {
  render() {
     return (
     	<View style ={styles.container}>
     		<Image style = {{width:250, height:200}}
     			source={require('../images/jamwithus.jpeg')}/>
     	</View> 
    	)
  	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow : 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  }
});