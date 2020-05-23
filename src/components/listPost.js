import React, { } from 'react'
import { PostCard } from './index'

export const ListPost = (props) => {

    const { list } = props

    return (
        <div className="_list_post_card">
            <div className="_column_list_post_card" style={{ backgroundColor: 'white' }}>
                <PostCard tag="FOOD" title="MLEM MLEM" type="row" />
                <div className="_column_list_post_card" style={{ backgroundColor: 'white', flexDirection: 'row', margin: 0, padding: 0, marginTop: '10px' }}>
                    <div style={{ flex: 1, display: 'flex', marginRight: '8px' }}>
                        <PostCard />
                    </div>
                    <div style={{ flex: 1, display: 'flex', marginLeft: '8px' }}>
                        <PostCard />
                        <div />
                    </div>
                </div>
            </div>
            <div className="_column_list_post_card" style={{ backgroundColor: 'white' }}>
                <div className="_column_list_post_card" style={{ backgroundColor: 'white', flexDirection: 'row', margin: 0, padding: 0, marginBottom: '10px' }}>
                    <div style={{ flex: 1, display: 'flex', marginRight: '8px' }}>
                        <PostCard />
                    </div>
                    <div style={{ flex: 1, display: 'flex', marginLeft: '8px' }}>
                        <PostCard />
                        <div />
                    </div>
                </div>
                <PostCard tag="FOOD" title="MLEM MLEM" type="row" />
            </div>

        </div>
    )
}