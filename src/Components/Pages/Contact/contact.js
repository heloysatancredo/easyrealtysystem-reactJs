import React from 'react';
import Typography from '@material-ui/core/Typography';
import { FormLabel } from '@material-ui/core';
import { TextField } from '@material-ui/core';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            userName: "",
            email: "",
            company: "",
            userMsg: "",
        }
    }

    submitMessage = e => {
        e.preventDefault();
        this.setState(prevState => {
            return {
                ...prevState,
                message: "Thank You for your interest!! We will get in touch with you soon."
            }
        });
        setTimeout(() => {
            this.setState(prevState => {
                return {
                    ...prevState,
                    message: "",
                    userName: "",
                    email: "",
                    company: "",
                    userMsg: "",
                }
            });
        }, 4000);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    render() {
        return (

            <div className="wrapContact">
                <div className="contact_header">

                </div>

                <div className="contact">
                    <Typography variant="h4" className="contact_heading">
                        CONTACT US
                    </Typography>
                    <form className="contact_form" onSubmit={this.submitMessage} >
                        <FormLabel className="contact_label">
                            Name
                        </FormLabel>
                        <TextField variant="outlined" name="username" className="contact_input" required type="text" name="userName" value={this.state.userName} onChange={this.handleChange}></TextField>
                        <FormLabel className="contact_label">
                            Email
                        </FormLabel>
                        <TextField variant="outlined" type="email" className="contact_input" required name="email" value={this.state.email} onChange={this.handleChange}></TextField>
                        <FormLabel className="contact_label">
                            Company
                        </FormLabel>
                        <TextField variant="outlined" type="text" className="contact_input" required name="company" value={this.state.company} onChange={this.handleChange}></TextField>
                        <FormLabel className="contact_label">
                            Message
                        </FormLabel>
                        <TextField variant="outlined" className="contact_input" multiline rowsMax="5" type="text" onBlur="this.value=''" name="userMsg" value={this.state.userMsg} onChange={this.handleChange}></TextField>

                        <button type="submit" value="Send" className="contact_button" >Send</button>

                        <div className="thanks">

                            <h5>{this.state.message}</h5>

                        </div>
                    </form>
                </div>
                <div className="contact_circular_shape">
                </div>
            </div>


        );
    }
}


export default Contact;

//References: https://material-ui.com/