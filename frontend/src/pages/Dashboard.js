import React from 'react';
import Transaction from './Transaction'
import Account from './Account'

export default class Dashboard extends React.Component {
    componentDidMount() {

    }

    state = {

    }

    render() {
        return (
            <div>
                <Account/>
                <Transaction/>
            </div>
        )
    }
}

