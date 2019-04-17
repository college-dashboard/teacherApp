import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Input, Button } from '../components/common'

class Home extends Component {

    static navigationOptions = {
        header:null
    }

    submitLogit() {
        this.props.navigation.navigate('AppStack')
    }

    render() {
        return(
            <View style={{ flex:1, justifyContent:'center' }}>
                <Input placeholder="Enter Email" />
                <Input placeholder="Enter Password" />
                <Button onPress={ () => this.submitLogit() }>Login</Button>
            </View>
        )
    }
}

export default Home