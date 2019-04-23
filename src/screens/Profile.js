import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { PlainCard, Button, XText } from '../components/common'
import { connect } from 'react-redux'
import { logout } from '../redux/actions'

class Profile extends Component {

    logout() {
        this.props.logout()
        this.props.navigation.navigate('Login')
    }

    render() {
        const { name, email } = this.props.auth

        let textStyle = {
            color: 'black',
            textAlign: 'center',
            fontSize: 20
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 3, justifyContent: 'center' }}>
                    <Text style={textStyle}>{name}</Text>
                    <Text style={textStyle}>{email}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Button onPress={() => this.logout()}>LOGOUT</Button>
                </View>
            </View>
        )
    }
}


const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(Profile)  