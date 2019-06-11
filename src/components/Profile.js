import React from 'react';
import '../styles/profile.css';

export default class Profile extends React.Component {

    formatAMPM(date) { // format time to appear in AM/PM format
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
      }
    
    render() {
        let appointments = this.props.appointments.map((apt) => {
            return (
                <li key={apt.time.getTime().toString()} className="appointment">
                    <div className="appointmentContainer">
                        <div className="aptDate">
                            {(apt.date.getMonth() + 1) + '/' + 
                            apt.date.getDate() + '/' +
                            apt.date.getFullYear()}
                        </div>  
                        <div className="aptSTime">
                            {
                                this.formatAMPM(apt.time)
                            }
                        </div>
                        <div className="aptETime">
                            {
                                this.formatAMPM(new Date(apt.time.getTime() + 30*60000)) // calculate end time from start time
                            }
                        </div>
                        <div className="aptNotes">
                            {
                                "Some Notes"
                            }
                        </div>
                    </div>
                </li>
            );
        });
      
        return (
            <div className="Profile">
               <h2>Your Current Appointments</h2>
               <ul className="appointmentsList">
                   <li className="appointmentHeader">
                        <div className="appointmentContainer">
                            <div className="aptDate">
                                <span>Date</span>
                            </div>
                            <div className="aptSTime">
                                <span>Start Time</span>
                            </div>
                            <div className="aptETime">
                                <span>End Time</span>
                            </div>
                            <div className="aptNotes">
                                <span>Notes</span>
                            </div>
                        </div>
                   </li>
                    {appointments}
               </ul>
            </div>
        );
    }
}