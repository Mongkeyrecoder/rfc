import React, { Component } from 'react'

export default class Boxclass extends Component {
    render() {
        let myresult = ''
        let className = ''
        if (this.props.result == 'draw') {
            myresult = 'draw'
            className = 'draw'
        }
        else {
            if (this.props.title == 'You') {
                myresult = this.props.result
                className = this.props.result
            } else if (this.props.title == 'Com') {
                if (this.props.result == 'win') {
                    myresult = 'lose'
                    className = 'lose'
                }
                else {
                    myresult = 'win'
                    className = 'win'
                }
            }
        }

        return (
            <div className={`box ${className}`}>
                <h1>{this.props.title}</h1>
                <h1>{this.props.useChoice}</h1>
                <h1>{myresult}</h1>
            </div>
        )
    }
}
