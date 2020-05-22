import React, { } from 'react'
import { Typography } from 'antd';

import { PostCard } from '../components'

export const Home = () => {

    return (
        <div className="_content_home">
            <Typography.Title level={1} style={{ fontWeight: '300', padding: 5 }}>LifeStyle.</Typography.Title>
            <Typography.Text strong style={{ fontSize: 15, whiteSpace: 'pre', padding: 5, }}>{`The latest and best lifestyle articles\nselected by our editorial office.`}</Typography.Text>

            <div className="_list_post_card">
                <div className="_column_list_post_card">
                    <PostCard tag="FOOD" title="MLEM MLEM"/>
                </div>
                <div className="_column_list_post_card">
                    <PostCard />
                </div>
                <div className="_column_list_post_card">
                    <PostCard tag="FOOD" title="MLEM MLEM"/>
                </div>
                <div className="_column_list_post_card">
                    <PostCard />
                </div>               
            </div>
        </div>
    )
}