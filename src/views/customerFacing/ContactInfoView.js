import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Stepper from '../../components/Stepper/Stepper';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { CUSTOMER_ACTIONS } from '../../redux/actions/customerActions';


import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 230,
      },
      button: {
          backgroundColor: '#EF8902',
      },
      formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
      },

});

const mapStateToProps = state => ({
  user: state.user,

});
class ContactInfoView extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            contact: {
                first_name: '',
                last_name: '',
                email: '',
                location_address: '',
                phone_number: '',
                cleaning_type_id: '',
            },
        }
      }

    componentDidMount() {
        this.props.dispatch({type: USER_ACTIONS.FETCH_USER});
    }// end componentDidMount

    componentDidUpdate() {
        if (!this.props.user.isLoading && this.props.user.userName === null) {
        this.props.history.push('home');
        }
    } // end componentDidUpdate

    handleChange = (contactInfo) => (event) => {
        console.log(`in handleChange`)
        this.setState({
            contact: {
                ...this.state.contact,
                [contactInfo]: event.target.value,
            }
        })
        console.log(this.state.contact)
    }// end handle change

    submitContactInfo = (event) => {
        console.log(`in submitContactInfo`)
        event.preventDefault();
        this.props.dispatch({ type: CUSTOMER_ACTIONS.CONTACT,  payload: this.state.contact});
    }// end submitContactInfo

  render() {
    let content = null;
    const { classes } = this.props;

      content = (
        <div>
            <Paper>
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="first_name"
                    placeholder="First Name"
                    value={this.state.first_name}
                    className={classes.textField}
                    onChange={this.handleChange('first_name')}
                    margin="normal"
                />
                <TextField
                    id="last_name"
                    placeholder="Last Name"
                    value={this.state.last_name}
                    className={classes.textField}
                    onChange={this.handleChange('last_name')}
                    margin="normal"
                />
                <TextField
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    className={classes.textField}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />
                <TextField
                    id="location_address"
                    placeholder="Street Address City, State Zip"
                    value={this.state.location_address}
                    className={classes.textField}
                    onChange={this.handleChange('location_address')}
                    margin="normal"
                />
                <TextField
                    id="phone_number"
                    placeholder="Phone Number"
                    value={this.state.phone_number}
                    className={classes.textField}
                    onChange={this.handleChange('phone_number')}
                    margin="normal"
                />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="cleaning_type_id">Cleaning Type</InputLabel>
                    <Select
                        value={this.state.cleaning_type_id}
                        onChange={this.handleChange('cleaning_type_id')}
                        input={<Input name="cleaning_type_id" id="cleaning_type_id" />}
                    >
                        <MenuItem value=""><em>None</em></MenuItem>
                        <MenuItem value={3}>House</MenuItem>
                        <MenuItem value={2}>Airbnb</MenuItem>
                        <MenuItem value={1}>Move Out</MenuItem>
                    </Select>
                    {/* <FormHelperText>Some important helper text</FormHelperText> */}
                </FormControl>
            </form>
            <Button variant="contained" onClick={this.submitContactInfo} className={classes.button}>
                Submit
            </Button>
            </Paper>
        </div>
      );

    return (
      <div>
        <Stepper />
        { content }
      </div>
    );
  }
}

ContactInfoView.propTypes = {
    classes: PropTypes.object,
  };

// this allows us to use <App /> in index.js
export default compose(withStyles(styles), connect(mapStateToProps))(ContactInfoView);