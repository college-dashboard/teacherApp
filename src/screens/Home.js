import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import axios from 'axios'
import { PlainCard } from '../components/common'

class Home extends Component {

    state = { department: null }

    static navigationOptions = {
        header: null
    }

    componentDidMount() {
        this.fetchCourses()
    }

    fetchCourses() {
        axios.get(`/department/${"5ca04efdc753b32d1bf90d18"}`)
            .then(res => {
                this.setState({ departments: res.data })
            })
            .catch(err => console.log(err))
    }

    openBatchDetails(batchId) {
        this.props.navigation.navigate('Batch', { batchId })
    }

    // fetchBatchDetailsAndStudents(batchId) {
    //     axios.get(`/batch/${batchId}`)
    //     .then(res =>  {
    //         this.setState({ batchData:res.data.batchData[0], students:res.data.students })
    //     })
    //     .catch(err => console.log(err))
    // }

    renderCourses() {
        if (this.state.departments && this.state.departments.length > 0) {
            return this.state.departments.map((dept, index) => {
                return (
                    <View key={index}>
                        {
                            dept.courses.batches.length > 0 ?
                                dept.courses.batches.map(batch => {
                                    return (
                                        <PlainCard onPress={() => this.openBatchDetails(batch._id)} key={batch._id}>
                                            <Text style={{ textAlign: 'center', fontSize: 14, fontWeight: '500', color: 'black' }}>{batch.name}</Text>
                                            <Text style={{ textAlign: 'center' }}>{dept.courses.name}, {dept.name}</Text>
                                        </PlainCard>
                                    )
                                }) : null
                        }
                    </View>
                )
            })
        } else {
            return <Text>Loading..</Text>
        }
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>Welcome {this.props.auth.name}</Text>
                </View>

                <View style={{ flex: 5 }}>
                    {this.renderCourses()}
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
export default connect(mapStateToProps)(Home)