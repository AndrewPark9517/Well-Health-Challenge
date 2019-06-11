import React from 'react';
import DatePicker from 'react-datepicker';
import '../styles/setAppointment.css';

//import css for calender
import 'react-datepicker/dist/react-datepicker.css';

export default class SetAppointment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
            startTime: new Date(),
            errorMessage: ''
        }
        this.handleDate = this.handleDate.bind(this);
        this.handleTime = this.handleTime.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleDate(date) {
        this.setState({
            startDate: date
        });
    }

    handleTime(time) {
        this.setState({
            startTime: time
        });
    }

    clearError() {
        this.setState({
            errorMessage: ''
        });
    }

    setError(errorMessage) {
        this.setState({
            errorMessage
        });
    }

    onSubmit(event) {
        event.preventDefault();
        this.clearError(); // clear error statement each time form is submitted
        if(this.state.startTime.getMinutes() % 30 !== 0) { //validate submission
            this.setError("Please select a time from the dropdown menu");
        }
        else if (this.props.appointments.find(appt => appt.time.getTime() === this.state.startTime.getTime())) {
            this.setError("You already have an appointment at that time")
        }
        else if(this.state.startTime.getTime() < Date.now()) {
            this.setError("This time has already past");
        }
        else {
            this.props.setAppointment(this.state.startDate, this.state.startTime);
        }
    }

    formatAMPM(date) {
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
                                this.formatAMPM(new Date(apt.time.getTime() + 30*60000))
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
            <div className="SetAppointment">
                <h2>Schedule an Appointment</h2>
                <form onSubmit={this.onSubmit} className="setAppointmentForm">
                    <div className="formLeft">
                        <DatePicker 
                            selected={this.state.startDate}
                            onChange={this.handleDate}
                            minDate={new Date()}
                            inline
                            placeholderText="Select a date"
                            todayButton={"Today"} 
                        />
                    </div>
                    <div className="formRight">
                    <p>Please select a time below (30 minutes per session):</p>
                    
                    <DatePicker
                        selected={this.state.startTime}
                        onChange={this.handleTime}
                        showTimeSelect
                        showTimeSelectOnly                        
                        placeholderText="Pick a time"
                        dateFormat="h:mm aa"
                        timeCaption="Time"
                    />
                    <div className="submitButtonContainer">
                        <button type="submit" className="submitButton">
                            Set Appointment
                        </button>
                    </div> 
                    <p className="errorMessage">
                        {this.state.errorMessage}
                    </p>
                    </div>
                </form>
                
                <div className="appointments-list">
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
                
            </div>
        )
    }
}