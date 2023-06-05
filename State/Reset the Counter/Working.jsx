import React from "react";

export class Counter extends React.Component {
    state = {
        count: 0,
    }

    constructor(props) {
        super(props)

        this._interval = setInterval(() => {
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

    componentWillUnmount() {
        if(this._interval) {
            clearInterval(this._interval)
        }
    }

    componentDidUpdate(newValue, prepsValue) {
        if (newValue > prepsValue) {
            return {
              count: this.props.initialValue,
            };
        }

        return {
            count: newValue,
        }
    }

    render() {
        return (
            <div>
                <h3>Count: {this.state.count}</h3>
            </div>
        )
    }
}