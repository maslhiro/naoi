import React, { useState } from 'react'
import { Menu, Avatar } from 'antd';
import { SlackOutlined } from '@ant-design/icons'

const mockTitle = ['World', 'Sports', 'Opinion', 'Lifestyle', 'Business', 'Culture', 'Fashion', 'Tech']

export const MenuNav = () => {

    let renderMenuItem = () => {
        return mockTitle.map((i) => <Menu.Item key={i}>{i}</Menu.Item>)
    }

    return (
        <div className="_menu">
            <div className="_sideMenu">
                <SlackOutlined style={{fontSize : 25}}/>
            </div>
            <Menu mode="horizontal">
                {renderMenuItem()}
            </Menu>
            <div className="_sideMenu">
                <Avatar style={{ backgroundColor: '#87d068' }} src="https://f3.photo.talk.zdn.vn/6655498646126767586/8b29ebbd323fc861912e.jpg" />
            </div>

        </div>
    )
}