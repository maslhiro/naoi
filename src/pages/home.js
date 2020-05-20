import React, { useState } from 'react'
import { Typography , Card} from 'antd';

export const Home = () => {

    return (
        <div className="_content_home">
            <Typography.Title level={1} style={{ fontWeight: '300' }}>LifeStyle.</Typography.Title>
            <Typography.Text strong style={{ fontSize: 15, whiteSpace: 'pre' }}>{`The latest and best lifestyle articles\nselected by our editorial office.`}</Typography.Text>
        </div>
    )
}