import React from 'react'

class CounterControl extends React.Component{
  constructor(props){
    super(props)
    this.onClickIncrease=this.onClickIncrease.bind(this)
    this.onClickDecrease=this.onClickDecrease.bind(this)
    this.onClickReset=this.onClickReset.bind(this)
  }

  onClickIncrease(){
    this.props.onValueChange(this.props.currentValue + 1)
  }
  onClickDecrease(){
    this.props.onValueChange(this.props.currentValue - 1)
  }
  onClickReset(){
    this.props.onValueChange(0)
  }

  render(){
    return(
      <div>
        <button onClick={this.onClickIncrease}>+</button>
        <button onClick={this.onClickDecrease}>-</button>
        <button onClick={this.onClickReset}>reset</button>
      </div>
    )
  }
}
export default CounterControl