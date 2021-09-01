import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import {Audio} from 'expo-av';

export default class App extends Component {
  ddu = async() => {
    await Audio.Sound.createAsync(
       {uri: "https://mp3.filmisongs.com/           DDU%20DU%20DDU%20DU%20-%20BLACKPINK.mp3"},
       {shouldPlay: true}
     )
  }
  sol = async() => {
    await Audio.Sound.createAsync(
       {uri: "https://mp3.filmisongs.com/Solo%20-%20Jennie.mp3"},
       {shouldPlay: true}
     )
  }
  lov = async() => {
    await Audio.Sound.createAsync(
       {uri: "https://mp3.filmisongs.com/Lovesick%20Girls%20-%20BLACKPINK.mp3"},
       {shouldPlay: true}
     )
  }
  ont = async() => {
    await Audio.Sound.createAsync(
       {uri: "https://mp3.filmisongs.com/ROSE%20-%20On%20The%20Ground.mp3"},
       {shouldPlay: true}
     )
  }
  kis = async() => {
    await Audio.Sound.createAsync(
       {uri: "https://mp3.filmisongs.com/Kiss%20and%20Make%20Up%20-%20Dua%20Lipa.mp3"},
       {shouldPlay: true}
     )
  }
  las = async() => {
    await Audio.Sound.createAsync(
       {uri: "https://mp3.filmisongs.com/BLACKPINK%20-%20LAST%20CHRISTMAS.mp3"},
       {shouldPlay: true}
     )
  }
  render(){
    return(
        <View style={{backgroundColor: "yellow",}}>

        <Text style={{color: "turquoise", margin: "auto", marginTop: "10px", marginBottom: "50px", fontSize: "42px", fontWeight: "bold", border: "dashed black", padding: "5px"}}>BLACKPINK</Text>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "indigo" title="DDU-DU DDU-DU" onPress = {this.ddu}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "brown" title="solo" onPress = {this.sol}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "red" title="lovesick girls" onPress = {this.lov}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "green" title="on the ground" onPress = {this.ont}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "10px", width: "200px"}}>
        <Button color= "black" title="kiss and make up" onPress = {this.kis}/>
        </View>

        <View style={{color: "black", margin: "auto", marginTop: "10px", borderRadius: "0px", marginBottom: "28px", width: "200px"}}>
        <Button color= "blue" title="last christmas" onPress = {this.las}/>
        </View>

        </View>
    );
  }
}