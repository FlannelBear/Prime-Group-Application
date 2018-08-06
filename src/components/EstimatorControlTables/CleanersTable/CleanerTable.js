import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { CLEANER_ACTIONS } from '../../../redux/actions/cleanerActions';

// Material UI Imports
import{ Typography,
        Table,
        TableHead,
        TableBody,
        TableRow,
        TableCell,
        Card,
        CardContent, 
        TextField   } from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {EstimatorControlStyles} from '../styles';

// Component Imports 
import AddCleanerForm from './AddCleanerForm';
import EditableTableRow from '../../EditableTableRow/EditableTableRow';

const mapStateToProps = store => ({
    cleaners: store.cleaners
});

class CleanerControlTable extends React.Component{
    constructor(){
        super();
        this.state = {
            cleanerInfo: {
                first_name: '',
                last_name: '',
                properly_account_id: ''
            },
            search: '',
            cleaners: []
        }
    }

    componentDidMount(){
        this.props.dispatch({type: CLEANER_ACTIONS.FETCH});
    }

    componentWillReceiveProps(nextProps){
        this.setState({cleaners: [...nextProps.cleaners]});
    }

    submitCleaner = () => {
        this.props.dispatch({type: CLEANER_ACTIONS.POST, payload: this.state.cleanerInfo});
        console.log('SEND IT: ', this.state.cleanerInfo);
        this.clearInputs();
    }

    removeCleaner = (id) => {
        this.props.dispatch({type: CLEANER_ACTIONS.REMOVE, payload: id});
    }

    clearInputs = () => {
        this.setState({cleanerInfo: {first_name: '', last_name: '', properly_account_id: 0}});
    }

    handleChangeFor = event => {
        return new Promise((resolve, reject)=>{
            try{
                this.setState({cleanerInfo: {...this.state.cleanerInfo, [event.target.id]: event.target.value}});
                resolve();
            }catch(error){
                reject();
            }
        });
    }

    searchForCleanerByProperlyAccountId = (event) => {
        this.setState({search: event.target.value});
    }

    render(){
        const {classes} = this.props;

        let cleaners = this.props.cleaners.filter(cleaner => String(cleaner.properly_account_id).includes(String(this.state.search)));

        let table = null;
        if(this.props.cleaners){
            table = (
                <Table className={classes.table}>
                    <TableHead className={classes.tableHeader}>
                        <TableRow>
                            <TableCell colSpan="6">
                                <h3 style={{display: 'inline', fontWeight: 1, marginRight: 10}}>Search by Properly ID</h3>
                                <TextField 
                                    value={this.state.search}
                                    type="number"
                                    onChange={this.searchForCleanerByProperlyAccountId}
                                    style={{fontWeight: 1}}
                                />
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Properly Account ID</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Remove</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cleaners.map(cleaner => {
                            return(
                                <EditableTableRow rowData={cleaner} remove={this.removeCleaner} actions={CLEANER_ACTIONS}/>
                            );
                        })}
                    </TableBody>
                </Table>
            );
        }
        return(
            <div className={classes.estimatorControlComponent}>
                <Typography variant="title">Add Cleaners</Typography>
                <AddCleanerForm handleChangeFor={this.handleChangeFor} submitCleaner={this.submitCleaner} first_name={this.state.cleanerInfo.first_name} last_name={this.state.cleanerInfo.last_name} properly_account_id={this.state.cleanerInfo.properly_account_id} />
                <Card className={classes.tableCard}>
                    <CardContent>
                        {table}
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default compose(
    connect(mapStateToProps),
    withStyles(EstimatorControlStyles)
)(CleanerControlTable);