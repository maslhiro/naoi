import React, { } from 'react'
import { Typography, Button } from 'antd'

export const PostCard = (props) => {

    const { title, tag , type = 'column'} = props

    let onClick = () => {
        alert("OK")
    }

    return (
        <div className={"_post_card_"+type}>
            <img
                alt="#"
                src="https://i.pinimg.com/564x/78/74/77/7874774a89616a437ed197c82d7dd82f.jpg"
                className="_cover_post_card" />

            <div className="_content_post_card">

                <div>
                    <Typography.Text style={{ color: 'white' }}>{tag}</Typography.Text>
                    <Typography.Title style={{ color: 'white' }} level={3}>{title}</Typography.Title>
                </div>

                <div>
                    <Button size="middle" onClick={onClick}>Read</Button>
                </div>

            </div>

        </div>
    )
}