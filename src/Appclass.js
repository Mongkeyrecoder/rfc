import React, { Component } from 'react'
import Boxclass from './Boxclass'
let item = ['가위', '바위', '보']
export default class Appclass extends Component {
    state = {
        useChoice: null,
        result:'draw',
        computerChoice:null,
        
        
    }
    play = (user) => {
        this.setState({useChoice:item[user]})
        let  randomNum=Math.floor(Math.random()*3);
        this.setState({computerChoice:item[randomNum]})
        console.log('user',user,randomNum)
        if(user===randomNum) {
            this.setState({result:'draw'})
        }
        else {
            if(user==0){
                if(randomNum==1){
                    this.setState({result:'lose'})
                }
                else if(randomNum==2){
                    this.setState({result:'win'})
                }
            }
            else if(user==1){
                if(randomNum==0){
                    this.setState({result:'win'})
                }
                else if(randomNum==2){
                    this.setState({result:'lose'})
                }
            }
            else if(user==2){
                if(randomNum==0){
                    this.setState({result:'lose'})
                }
                else if(randomNum==1){
                    this.setState({result:'win'})
                }
            }
        }
    }
    render() {
        return (
            <div className='main'>

                <Boxclass useChoice={this.state.useChoice} title="You" result={this.state.result}/>
                <Boxclass title="Com" result={this.state.result} useChoice={this.state.computerChoice}/>
                <button onClick={() => this.play(0)}>
                    가위
                </button>
                <button onClick={() => this.play(1)}>
                    바위
                </button>
                <button onClick={() => this.play(2)}>
                    보
                </button>
            </div>
        )
    }
}
