import React, { Component } from "react"
import { Alert, Picker, ScrollView, StyleSheet, Text, View, Image } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import ClassApp from "./app/views/class"
import FunctionApp from "./app/views/function"
import KaushikImage from "./app/kaushik.jpg"
import ModalExample from "./app/views/modal"

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#eee",
    height: "100%",
  },
  select: {
    width: "80%",
    marginTop: 20,
  },
  text: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 25,
  },
  button: {
    color: "green",
    width: "100%",
    alignItems: "center",
    borderRadius: 50,
  },
  input: {
    height: 40,
    borderColor: "black",
    width: "80%",
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  countryStyle: {
    margin: 5,
    marginTop: 25,
    backgroundColor: '#000',
    padding: 10,
    color: '#fff',
    width: '100%'
  },
  placeImage: {
    margin: 10,
    height: 100,
    width: 250,
  }
})

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      language: "",
      countries: [{
        id: 1,
        name: 'India'
      },
      {
        id: 2,
        name: 'Aus'
      },
      {
        id: 3,
        name: 'Pak'
      },
      {
        id: 4,
        name: 'Sri'
      },
      {
        id: 5,
        name: 'Afr'
      },
      {
        id: 6,
        name: 'Ame'
      },
      {
        id: 7,
        name: 'West'
      },
      {
        id: 4,
        name: 'Sri'
      },
      {
        id: 5,
        name: 'Afr'
      },
      {
        id: 6,
        name: 'Ame'
      },
      {
        id: 7,
        name: 'West'
      },
      {
        id: 4,
        name: 'Sri'
      },
      {
        id: 5,
        name: 'Afr'
      },
      {
        id: 6,
        name: 'Ame'
      },
      {
        id: 7,
        name: 'West'
      },
      {
        id: 4,
        name: 'Sri'
      },
      {
        id: 5,
        name: 'Afr'
      },
      {
        id: 6,
        name: 'Ame'
      },
      {
        id: 7,
        name: 'West'
      },
      {
        id: 8,
        name: 'Nigeria'
      },
      {
        id: 9,
        name: 'Pak'
      },
      {
        id: 10,
        name: 'Canada'
      },
      {
        id: 11,
        name: 'Hong Kong'
      },
      {
        id: 12,
        name: 'China'
      }]
    }
  }

  onSubmit = (name) => {
    console.log(`It's working ${name}...`);
    Alert.alert(`It's working bro...`);
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => { console.log('Testing.......') }}>
          <Text style={{ color: "red", marginTop: 20, fontWeight: "bold", fontSize: 28 }}>
            What is your name .....
        </Text>
        </TouchableOpacity>

        <ModalExample />

        <Image resizeMode="contain" style={styles.placeImage} source={KaushikImage} />

        <Picker
          style={styles.select}
          selectedValue={this.state.language}
          onValueChange={language => this.setState({ language })}
          mode="dialog"
        >
          <Picker.Item label="Select Component Type" value="" />
          <Picker.Item label="Class Based Component" value="Class" />
          <Picker.Item label="Function Based Component" value="Function" />
        </Picker>

        {this.state.language === "Function" ? <FunctionApp textStyle={styles.text} buttonStyle={styles.button} inputStyle={styles.input} onSubmit={this.onSubmit} buttonColor="#737373" /> : null}
        {this.state.language === "Class" ? <ClassApp textStyle={styles.text} buttonStyle={styles.button} inputStyle={styles.input} onSubmit={this.onSubmit} buttonColor="#737373" /> : null}

        <View>
          <ScrollView>
            {
              <View>
                {this.state.countries.map((item, index) => (
                  <Text key={index} style={styles.countryStyle}> {item.name} is beautiful country</Text>
                ))
                }
              </View>
            }
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default App