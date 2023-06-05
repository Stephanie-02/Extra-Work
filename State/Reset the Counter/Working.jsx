import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                const newValue = state.count + 1;
                const prepsValue = this.props.initialValue * 10;

                if (newValue > prepsValue) {
                    return {
                      count: this.props.initialValue,
                    };
                }

                return {
                    count: newValue,
                }
            })
        }, 1000);
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
            </div>
        )
    }
}