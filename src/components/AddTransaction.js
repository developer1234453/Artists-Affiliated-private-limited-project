// src/components/AddTransaction.js
import React, { Component } from 'react';
import axios from 'axios';

class AddTransaction extends Component {
    state = {
        type: '',
        amount: '',
        description: '',
        date: ''
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { type, amount, description, date } = this.state;

        axios.post('https://new-artist-company.onrender.com/api/transactions', { type, amount, description, date })
            .then(response => {
                console.log('Transaction added:', response.data);
                this.props.onAddTransaction();
            })
            .catch(error => {
                console.error('There was an error adding the transaction!', error);
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="mb-3">
                <h2 className="mb-4">New Transaction</h2>
                <div className="form-group">
                    <label>Type</label>
                    <select name="type" value={this.state.type} onChange={this.handleChange} required className="form-control">
                        <option value="">Select Type</option>
                        <option value="Credit">Credit</option>
                        <option value="Debit">Debit</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input type="number" name="amount" value={this.state.amount} onChange={this.handleChange} required className="form-control" />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} required className="form-control" />
                </div>
                <div className="form-group">
                    <label>Date</label>
                    <input type="date" name="date" value={this.state.date} onChange={this.handleChange} required className="form-control" />
                </div>
                <div class="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary w-30 ml-5">SAVE</button>
                <button type="submit" className="btn btn-success w-30">CANCEL</button>
                </div>
            </form>
        );
    }
}

export default AddTransaction;
