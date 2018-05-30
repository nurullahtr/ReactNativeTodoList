
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import MyButton from './MyButton'

const items = [];

export default class App extends Component<{}> {

  constructor(props){
    super(props)
    this.addItem = this.addItem.bind(this);
  }

  state = {
    toDo : '',

  }

  addItem(){
    
    items.push(this.state.toDo)
    this.setState({toDo: ''})

  }

  renderItem(item){
    return (
      <View key={item} style={{ height: 100, backgroundColor: '#f4f4f4', margin: 8, borderRadius: 16,justifyContent: 'center',alignItems: 'center'}} >
        <Text style={{color: 'black', fontSize: 24}}>
          {item}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View style={{flex: 1, marginTop: Platform.OS == 'ios' ? 21 : 0}}>
        <View style={{height: 100, flexDirection: 'row',padding: 8}}>
          <View style={{flex: 4, marginRight: 8,justifyContent: 'center'}}>
            <TextInput value={this.state.toDo} onChangeText={(x) => this.setState({ toDo : x })} placeholder={'Yapılacak işi giriniz.'} style={{height: 32,backgroundColor: '#f4f4f4', borderRadius: 12, paddingLeft:10, borderColor: 'black', borderWidth: 1}}>
            </TextInput>
          </View>
          <View style={{flex: 1}}>
            <MyButton onPress={this.addItem} text={'EKLE'}>
            </MyButton>
          </View>
        </View>
        <View style={{height: 0.8, backgroundColor: 'gray', marginHorizontal: 10}}>
            
        </View>
        <ScrollView>
          {
            items.map((item) => this.renderItem(item))
          }
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
