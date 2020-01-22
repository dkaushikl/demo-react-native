import React from "react"
import { Text, View, TextInput, Button } from "react-native"

class ClassApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
    }
  }

  onChangeText = name => {
    this.setState({ name })
  }

  render() {
    const states = this.state
    return (
      <View>
        <View>{states.name ? <Text style={this.props.textStyle}> {states.name} </Text> : null}</View>
        <TextInput placeholder="Enter name.." placeholderTextColor="red" style={this.props.inputStyle} onChangeText={name => this.onChangeText(name)} value={states.name} />
        <Button title="Submit" style={this.props.buttonStyle} color={this.props.buttonColor} onPress={() => this.props.onSubmit(this.state.name)} />
      </View>
    )
  }
}

export default ClassApp
