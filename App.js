
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';


export default class App extends Component<{}> {

  renderItem(){
    return (
      <View style={{ height: 100, backgroundColor: 'black', margin: 8, borderRadius: 16,justifyContent: 'center',alignItems: 'center'}} >
<Text style={{color: 'white', fontSize: 24}}>
  2 Kilo patlican al :)
</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS == 'ios' ? 21 : 0}}>
        <View style={{backgroundColor: 'yellow', height: 100, flexDirection: 'row',padding: 8}}>
          <View style={{backgroundColor: 'red', flex: 4, marginRight: 8,justifyContent: 'center'}}>
            <TextInput placeholder={'Yapılacak işi giriniz.'} style={{height: 32,backgroundColor: '#f4f4f4', borderRadius: 12, paddingLeft:10}}>
            </TextInput>
          </View>
          <View style={{backgroundColor: 'pink', flex: 1}}>
          </View>
        </View>
        <ScrollView>
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
          {this.renderItem()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
