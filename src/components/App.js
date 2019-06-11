import React from 'react';
import SetAppointment from './SetAppointment';
import Profile from './Profile';
import Header from './Header';
import MessageBar from './MessageBar';
import NotificationsBar from './NotificationsBar';
import {Route} from 'react-router-dom';
import '../styles/app.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: []
        }

        this.setAppointment = this.setAppointment.bind(this);
    }

    setAppointment(date, time) {
        let appointments = [...this.state.appointments, {date, time}];
        // sort appointment times to go in order
        appointments = appointments.sort((a,b) => a.time.getTime() - b.time.getTime());
        this.setState({
            appointments
        });
    }

    render() {
        return (
            <div className="App">
                <Route path='/' component={Header} /> 
                <main className="app-body">
                    <Route path='/' component={MessageBar} />
                    <Route exact 
                        path='/'
                        // must "render" instead of using "component" attribute to send down props
                        render={(props) => <Profile {...props} 
                        appointments={this.state.appointments} />} 
                    />
                    <Route exact 
                        path='/appointments'
                        // must "render" instead of using "component" attribute to send down props
                        render={(props) => <SetAppointment {...props} 
                        setAppointment={this.setAppointment} 
                        appointments={this.state.appointments} />}
                    />
                    <Route path='/' component={NotificationsBar} />
                </main>
                
            </div>
        );
    }
}

