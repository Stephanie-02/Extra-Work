import React from 'react';

export default class Colors extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.colors.map((color, index) => (
                        <li key = {index}>{color}</li>
                    ))}
                </ul>
            </div>
        )
    }
}