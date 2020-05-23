import React, { } from 'react'
import { Typography } from 'antd';

import { PostCard } from '../components'

export const Home = () => {

    return (
        <div className="_content_home">
            <Typography.Title level={1} style={{ fontWeight: '300', padding: 5 }}>LifeStyle.</Typography.Title>
            <Typography.Text strong style={{ fontSize: 15, whiteSpace: 'pre', padding: 5, }}>{`The latest and best lifestyle articles\nselected by our editorial office.`}</Typography.Text>

            <div className="_list_post_card">
                <div className="_column_list_post_card" style={{ backgroundColor: 'white' }}>
                    <PostCard tag="FOOD" title="MLEM MLEM" type="row" />
                    <div className="_column_list_post_card" style={{ backgroundColor: 'white', flexDirection: 'row', margin : 0, padding:0, marginTop: '10px' }}>
                        <div style={{ flex: 1, display: 'flex', marginRight: '5px' }}>
                            <PostCard />
                        </div>
                        <div style={{ flex: 1, display: 'flex', marginLeft: '5px' }}>
                            <PostCard />
                            <div />
                        </div>

                    </div>
                </div>
                <div className="_column_list_post_card" style={{ backgroundColor: 'white' }}>
                    <div className="_column_list_post_card" style={{ backgroundColor: 'white', flexDirection: 'row', margin : 0, padding:0, marginBottom: '10px' }}>
                        <div style={{ flex: 1, display: 'flex', marginRight: '5px' }}>
                            <PostCard />
                        </div>
                        <div style={{ flex: 1, display: 'flex', marginLeft: '5px' }}>
                            <PostCard />
                            <div />
                        </div>
                    </div>
                    <PostCard tag="FOOD" title="MLEM MLEM" type="row" />
                </div>

            </div>
        </div>
    )
}