import React, { Component } from 'react'

import connect from '../../util/connection'

import { Layout, Menu, Anchor, Row} from 'antd'

import '../../style/main.scss'

const { Footer, Content } = Layout

const { Link } = Anchor

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
            <div className="main"> 
                <Menu className="head" mode="horizontal">
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                <Content className="content">
                    <Row>
                        <Anchor getContainer={()=>document.getElementById('article')} affix={false} showInkInFixed={true}>
                            <Link href="#item_1" title="Basic demo" />
                            <Link href="#item_2" title="Static demo" />
                            <Link href="#item_3" title="API">
                                <Link href="#item_3_1" title="Anchor Props" />
                                <Link href="#item_3_2" title="Link Props" />
                            </Link>
                        </Anchor>
                        <div id="article" style={{height: '400px', overflow: 'auto'}}>
                            <div id="item_1" style={{height: '400px'}}>
                                1
                            </div>
                            <div id="item_2" style={{height: '400px'}}>
                                2
                            </div>
                            <div id="item_3" style={{height: '400px'}}>
                                3
                            </div>
                            <div id="item_3_1" style={{height: '400px'}}>
                                4
                            </div>
                            <div id="item_3_2" style={{height: '400px'}}>
                                5
                            </div>
                        </div>
                    </Row>
                </Content>
                <Footer className="footer">blog ©2019 Created by DemonShen</Footer>
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
