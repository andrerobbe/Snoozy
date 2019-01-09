import React from 'react';
import { db } from '../../firebase/firebase';
import { BarLoader } from 'react-spinners';
import { formatTime } from '../../global_functions/GlobalFunctions';

class Appointment extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            calendarData: [],
        };
    }
    
    componentWillMount = () => {
        db.collection('api-data').doc('calendar-data').get()
            .then(res => {
                this.setState({ calendarData: res.data() })
            });
    }

    renderTime = (calendarData) => {
        let start_date      = new Date(0);
        let end_date        = new Date(0);

        start_date.setSeconds(calendarData.start_date.seconds);
        end_date.setSeconds(calendarData.end_date.seconds);

        let start_hours     = formatTime(start_date.getHours());
        let start_minutes   = formatTime(start_date.getMinutes());

        let end_hours       = formatTime(end_date.getHours());
        let end_minutes     = formatTime(end_date.getMinutes());

        let start_time  = start_hours + ':' + start_minutes;
        let end_time    = end_hours + ':' + end_minutes;

        return <p>{ start_time } - { end_time }</p>
    }
    
    render = () => {
        const { calendarData }  = this.state;

        return (
            <div className='Appointment'>
                <header></header>
                <div className="content">
                    <div className="top">
                        <h2>Eerst volgende afspraak</h2>
                        { 
                            this.state.calendarData < 1 
                            ? 
                            <BarLoader width={ 70 } color={ '#72BFA5' }/> 
                            :  
                            this.renderTime(calendarData)
                        }
                    </div>

                    <div className="info">
                        { 
                            this.state.calendarData < 1 
                            ? 
                            <BarLoader color={ '#72BFA5' }/> 
                            :
                            <div>
                                <div>
                                    <p>{ calendarData.title }</p>
                                </div>
                                <div>
                                    <p>{ calendarData.location }</p>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Appointment;