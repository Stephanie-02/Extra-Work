import React from 'react';

export default class Colors extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.colors.map((color) => (
                        <li key = {color.id}>{color.name}</li>
                    ))}
                </ul>
            </div>
        )
    }
}