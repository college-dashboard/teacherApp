import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { PlainCard, Button } from '../components/common'
import Swiper from 'react-native-swiper'

const classHours = [
    "09:30 - 10:30",
    "10:30 - 11:30",
    "11:30 - 12:30",
    "12:30 - 01:30",
    "01:30 - 02:30",
    "02:30 - 03:30",
    "03:30 - 04:30",
]

class Attendance extends Component {

    state = { selectedDate:null, selectedSlot:null }

    renderStudentsList() {
        let students = this.props.navigation.state.params.students

        if(students && students.length > 0) {
            return students.map(student => {
                return (
                    <View key={student._id} style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ textAlign:'center', fontSize:18, color:'black' }}>{student.name}</Text>
                        <Text style={{ textAlign:'center', fontSize:18, color:'black' }}>{student.registerNumber}</Text>
                        <Button customButtonStyle={{ backgroundColor:'green' }}>PRESENT</Button>
                        <Button customButtonStyle={{ backgroundColor:'red' }}>ABSENT</Button>
                    </View>
                )
            }) 
        } else {
            console.log("Else")
            return <View>
                <Text style={{ justifyContent:'center' }}>No Students in the batch</Text>
            </View>
        }
    }

    render() {
        return(
            <View style={{ flex:1, justifyContent:'center' }}>
                {
                    !this.state.selectedDate ?
                        <View style={{ padding:20 }}>
                            <Text style={{ textAlign:'center' }}>Select Date</Text>
                            <Calendar
                                maxDate={ new Date() }
                                onDayPress={(day) => { this.setState({ selectedDate:day.dateString }) } }
                            />
                        </View>
                    :
                    !this.state.selectedSlot ?
                        <View style={{ padding:20 }}>
                            <Text style={{ textAlign:'center' }}>Select Hour</Text>
                            {
                                classHours.map((hour, index) => {
                                    return (
                                        <PlainCard key={hour} onPress={ () => this.setState({ selectedSlot:index }) } >
                                            <Text style={{ textAlign:'center' }}>{hour}</Text>
                                        </PlainCard>
                                    )
                                })
                            }
                        </View>
                    :
                        this.state.selectedDate && this.state.selectedSlot ?
                            <Swiper
                                loop={false}
                                showsButtons={true}
                                showsPagination={false}
                                style={styles.swiperStyle}
                                dotColor='#fff'
                                activeDotColor='#19d37c'
                                onIndexChanged={(index) => this.setState({ currentSliderIndex: index })}
                            >
                                { this.renderStudentsList() }
                            </Swiper>

                    :
                        <Text>Loadin...</Text>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    swiperStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        margin: 20
    },
})

export default Attendance