import React, { } from 'react'
import { Menu, Avatar, Affix } from 'antd';
import { useHistory } from 'react-router-dom'
import { SlackOutlined } from '@ant-design/icons'

const mockTitle = ['World', 'Sports', 'Opinion', 'Home', 'About', 'Culture', 'Fashion', 'Tech']

export const MenuNav = () => {

    let history = useHistory();

    let renderMenuItem = () => {
        return mockTitle.map((i) => (
            <Menu.Item
                onClick={() => history.push(i)}
                key={i}>{i}</Menu.Item>))
    }

    return (
        <Affix offsetTop={0}>
            <div className="_menu">
                <div className="_sideMenu">
                    <SlackOutlined style={{ fontSize: 25 }} />
                </div>
                <Menu mode="horizontal">
                    {renderMenuItem()}
                </Menu>
                <div className="_sideMenu">
                    <Avatar style={{ backgroundColor: '#87d068' }} src="https://f3.photo.talk.zdn.vn/6655498646126767586/8b29ebbd323fc861912e.jpg" />
                </div>
            </div>
        </Affix>
    )
}