import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Button, PlainCard } from '../components/common'
import axios from 'axios'
import Swiper from 'react-native-swiper';

class Batch extends Component {

    state = { batchData: null, students: null }
    componentDidMount() {
        this.fetchBatchDetailsAndStudents("5ca8639035399f1e4cd9e881")
        // this.fetchBatchDetailsAndStudents(this.props.navigation.state.params.batchId)
    }

    fetchBatchDetailsAndStudents(batchId) {
        axios.get(`/batch/${batchId}`)
            .then(res => {
                this.setState({ batchData: res.data.batchData[0], students: res.data.students })
            })
            .catch(err => console.log(err))
    }

    takeAttendance() {
        this.props.navigation.navigate("Attendance", { students: this.state.students })
    }

    render() {
        if (this.state.batchData && this.state.students) {
            return (
                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ textAlign: 'center' }}>Batch Details</Text>
                        <Text style={{ textAlign: 'center' }}>Batch Name: {this.state.batchData.name}</Text>
                        <Text style={{ textAlign: 'center' }}>{this.state.batchData.course[0].name}, {this.state.batchData.department[0].name}</Text>
                    </View>
                    <View style={{ flex: 5 }}>

                        <Button onPress={() => this.takeAttendance()}>Take Attendance</Button>

                        <ScrollView>
                            {this.state.students.length > 0 && <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 10 }}>Students</Text>}
                            {
                                this.state.students.length > 0 ?
                                    this.state.students.map(student => {
                                        return (
                                            <PlainCard key={student._id}>
                                                <Text>{student.name}</Text>
                                                <Text>{student.registerNumber}</Text>
                                            </PlainCard>
                                        )
                                    })
                                    :
                                    <Text style={{ textAlign: 'center' }}>No Student's Yet</Text>
                            }

                        </ScrollView>
                    </View>
                </View>
            )
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <Text style={{ textAlign: 'center' }}>Loading....</Text>
                </View>
            )
        }
    }
}

export default Batch