import React from "react"
import { Text, View, TextInput, Button } from "react-native"

const FunctionApp = (props) => {
  const [name, onChangeText] = React.useState("")

  return (
    <View>
      <View>{name ? <Text style={props.textStyle}>{name}</Text> : null}</View>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder="Name"
        placeholderTextColor="#9a73ef"
        autoCapitalize="none"
        style={props.inputStyle}
        onChangeText={e => onChangeText(e)}
        value={name}
      />
      <Button title="Submit" color={props.buttonColor} style={props.buttonStyle} onPress={() => props.onSubmit(name)} />
    </View>
  )
}

export default FunctionApp
