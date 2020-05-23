import React, { } from 'react'
import { Typography } from 'antd';

import { ListPost } from '../components'

export const Home = () => {

    return (
        <div className="_content_home">
            <Typography.Title level={1} style={{ fontWeight: '300', padding: 5, paddingLeft: 10 }}>LifeStyle.</Typography.Title>
            <Typography.Text strong style={{ fontSize: 15, whiteSpace: 'pre', padding: 5, paddingLeft: 10 }}>{`The latest and best lifestyle articles\nselected by our editorial office.`}</Typography.Text>

            <ListPost/>
        </div>
    )
}