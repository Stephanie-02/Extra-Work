import React from 'react';
import { HelloWorld } from './HelloWorld';
import LoginComponent  from './LoginComponent';
import ClickCounter from './ClickCounter';
import Colors from './Colors';

const colorsItems = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Blue' },
    { id: 3, name: 'Green' },
]

export default class App extends React.Component {
    render() {
        return (
            <div>
                <HelloWorld />
                <LoginComponent />
                <ClickCounter/>
                <Colors items={colorsItems} />
            </div>
        )
    }
}