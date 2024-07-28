// src/App.js
import React, { Component } from 'react';
import TransactionsList from './components/TransactionsList';
import AddTransaction from './components/AddTransaction';
import './App.css';

class App extends Component {
    state = {
        transactionsUpdated: false
    };

    handleAddTransaction = () => {
        this.setState({ transactionsUpdated: true }, () => {
            this.setState({ transactionsUpdated: false });
        });
    };

    render() {
        return (
            <div className="container">
                <h1>Office Transactions</h1>
                <AddTransaction onAddTransaction={this.handleAddTransaction} />
                <TransactionsList transactionsUpdated={this.state.transactionsUpdated} />
            </div>
        );
    }
}

export default App;
