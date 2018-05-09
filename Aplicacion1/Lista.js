import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Image,Button, Body } from 'react-native';
import { List, ListItem, colors } from 'react-native-elements'
import { Container } from 'native-base';

export default class Lista extends Component {
  render() {
    return (
      
      <List containerStyle={{marginBottom: 70}}>
      {
        
        list.map((l, i) => (
          <ListItem
            avatar={l.avatar_url}
            key={i}
            title={l.name}
          />
        ))
      }
    </List>
    
    )
  }
}


const 



list = [
  {
    name: 'comedia',
    avatar_url: require('./src/comedy.png'),
    
  },
  {
    name: 'Art & Experimental',
    avatar_url: require('./src/art.png'),
  
  },
  {
    name: 'Mascotas',
    avatar_url: require('./src/mas.png'),
  
  },
  {
    name: 'Musica',
    avatar_url: require('./src/mus.png'),
  
  },
]



styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 2
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30, 
        height: 30, 
        padding: 30,
       
      },
      text: {
        marginLeft: 12,
        fontSize: 16,
      },
      photo: {
        height: 40,
        width: 40,
        borderRadius: 20,
      },
  })