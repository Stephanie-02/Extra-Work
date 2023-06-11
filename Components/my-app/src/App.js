import React from 'react';
import { HelloWorld } from './HelloWorld';
import LoginComponent  from './LoginComponent';
import ClickCounter from './ClickCounter';
import Colors from './Colors';

const colorsItems = ['Red','Blue','Green']

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