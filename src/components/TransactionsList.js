// src/components/TransactionsList.js
import React, { Component } from 'react';
import axios from 'axios';


class TransactionsList extends Component {
    state = {
        transactions: []
    };

    componentDidMount() {
        this.fetchTransactions();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.transactionsUpdated !== this.props.transactionsUpdated) {
            this.fetchTransactions();
        }
    }

    fetchTransactions = () => {
        axios.get('https://new-artist-company.onrender.com/api/transactions')
            .then(response => {
                console.log('Fetched transactions:', response.data);
                this.setState({ transactions: response.data });
            })
            .catch(error => {
                console.error('There was an error fetching the transactions!', error);
            });
    };

    render() {
        return (
            <div>
                <h2>Transactions</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.date}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.running_balance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TransactionsList;
