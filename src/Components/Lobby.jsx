import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Skeleton, Card, Button, Col, Row  } from 'antd';
import { EditOutlined, HeartOutlined, DeleteTwoTone } from '@ant-design/icons';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
const { Meta } = Card;

const Lobby = () => {
  
  const [state, setState] = useState({loading: false})

  const [data, setData] = useState([]);

  const getNotes = async ()=>{
    const notes = await axios.get('http://localhost:8002/notes');
    setData(notes.data)
  }
  console.log('Notas: ', data);
  console.log(data.typeof);

  useEffect(()=>{
    getNotes()
  }, [])
  
  return (
    
    <div className='site-card-wrapper' style={{padding: '1em'}}>
      <h1 style={{color: 'white'}}> Notas</h1>
      {
        data.map((nota, i)=>{
          let date = nota.updatedAt;
          return(
            <Row gutter={16}>
              <Col span={8}>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Button type='link' icon={<DeleteTwoTone key='delete'/>}/>,
                    <Button  shape="link" href="http://localhost:3000/edicion" icon={<EditOutlined key="edit"  />} />,
                    <Button type='link' icon={<HeartOutlined />} />,
                  ]}
                >
                    <Skeleton loading={state.loading} avatar active>
                      <Meta
                        title={nota.title}
                        description={nota.description}
                      />
                    </Skeleton>
              </Card>
              </Col>
            </Row>
          )
        })
      }
    </div>
  );
}

export default Lobby;