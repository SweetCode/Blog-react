import React, { Component } from 'react'

import connect from '../../util/connection'

import { DatePicker } from 'antd'

class Main extends Component {
    constructor(props){
        super(props)

        this.dispatch = props.dispatch
    }
    componentDidMount () {
        console.log(this.props)
    }
    render(){
        return (
            <div onClick= {()=>{this.props.actions.hello()}}> 
                {this.props.name}
                <DatePicker></DatePicker>
            </div>
        )
    }
}

export default connect({
    mapStateToProps: (state,ownState)=>{
        return {
            name : state.main.name
        }
    },
    LayoutComponent: Main
})
