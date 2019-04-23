import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Input, Button } from '../components/common'
import axios from 'axios'
import { login } from '../redux/actions'
import { connect } from 'react-redux'

class Login extends Component {

    state = { email: 'nethra@gmail.com', password: 'Nethra123' }

    static navigationOptions = {
        header: null
    }

    handleLogin() {
        const { email, password } = this.state
        if (email && password) {
            axios.post('/teacher/login', { email, password })
                .then(res => {
                    this.props.login(res.data)
                    this.props.navigation.navigate('AppStack')
                })
                .catch(err => console.log(err))
        } else {
            Alert.alert('', 'Enter all the fields', [{ text: 'Okay' }])
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Input
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text })}
                />
                <Input
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text })}
                />
                <Button onPress={() => this.handleLogin()}>Login</Button>
            </View>
        )
    }
}


export default connect(null, { login })(Login)