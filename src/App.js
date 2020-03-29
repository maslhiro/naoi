import React from "react";
import { Typography, Card } from "antd";
import "./App.css";

const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

function App() {
  return (
    <div className="App">
      <div className="_header">
        <Title level={4}>Truyện ngân sắc ... ngắn :rainbow:</Title>
        <Text >Một ngày buồn nhó lại ngày xưa, biết rằng giấc mơ sẽ không bao giờ trở thành sự thật nhưng vẫn chờ cơ hội nắm chặt bàn tay ai.</Text>
     
        {/* <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card> */}
      </div>
    </div>
  );
}

export default App;
