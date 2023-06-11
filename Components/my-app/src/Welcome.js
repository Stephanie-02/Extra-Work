import React from 'react';
import { HelloWorld } from './HelloWorld';

export default class Welcome extends React.Component {
    render() {
        return (
            <div className='welcome'>
                <HelloWorld />
            </div>
        )
    }
}