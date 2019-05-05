import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Input, Button } from '../components/common'
import axios from 'axios'
import { login } from '../redux/actions'
import { connect } from 'react-redux'

class Login extends Component {

    state = { email: 'nirmala@gmail.com', password: 'Nirmala12' }

    static navigationOptions = {
        header: null
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleLogin() {
        const { email, password } = this.state
        
        if(!this.validateEmail(email)) {
            return Alert.alert('Invalid Email', 'Please enter a valid mail', [{ text:'Okay' }])
        }

        if (email && password) {
            axios.post('/teacher/login', { email, password })
                .then(res => {
                    this.props.login(res.data)
                    this.props.navigation.navigate('AppStack')
                })
                .catch(err => {
                    if(err && err.response) {
                        if(err.response.status === 400) {
                            Alert.alert('Invalid Credentials', 'Please check your credentials and try again', [{ text:'Okay' }])
                        }
                    }
                })
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