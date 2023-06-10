import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, MenuOutlined, SettingOutlined, HeartOutlined, EuroOutlined, CalculatorOutlined, BarsOutlined, LoginOutlined, } from '@ant-design/icons';
import { Divider, Drawer, MenuProps, Typography, Layout, theme, Breadcrumb, Card, Space, Tabs } from 'antd';
const { Header, Content, Footer } = Layout;
import { Menu } from 'antd';
import "./styles.css";


const App: React.FC = () => {
    const [current, setCurrent] = useState('mail');
    const [openMenu, setOpenMenu] = useState(false);

    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    const gridStyle: React.CSSProperties = {
        width: '25%',
        textAlign: 'center',
    };
    const { Title, Paragraph } = Typography
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<>

        <Drawer onClose={() => setOpenMenu(false)} bodyStyle={{ backgroundColor: 'white' }} open={openMenu} closable={false} >
            <AppMenu />
        </Drawer>


        <div>
            <Layout className="layout" style={{ backgroundColor: 'white' }}>
                <Header style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                    ,
                    alignItems: 'basline',
                    background: 'white'
                }} >
                    <div style={{
                        float: 'left',
                        width: '220px',
                        height: '31px',

                    }} >
                        <MenuOutlined style={{
                            color: 'black',
                            paddingLeft: '12px',

                            fontSize: 17
                        }}
                            onClick={() => setOpenMenu(true)}
                        />

                    </div>



                    <Menu
                        style={{
                            display: 'flex', justifyContent: "end", borderBottom: '0px'
                        }}
                        selectedKeys={[current]} mode="horizontal" overflowedIndicator={<MenuOutlined />} >

                        <Menu.Item key="santé" >
                            English
                        </Menu.Item>
                        <Menu.Item key="apmathsp" icon={<AppstoreOutlined />}>

                        </Menu.Item>
                        <Menu.Item key="autres" icon={<LoginOutlined />}>
                            Login
                        </Menu.Item>

                    </Menu>


                </Header>
                <Divider style={{ margin: '0px' }} />

                <Content style={{ padding: '0 50px', height: '40vh', backgroundColor: '#f5f4ef' }}>
                    <Card style={{ borderRadius: '0px', backgroundColor: 'inherit', borderColor: '#f5f4ef', border: '0px !important', marginTop: '20px' }}>
                        <Card.Grid hoverable={false} style={{ width: '100%', border: '0px !important', boxShadow: 'none', borderColor: 'white' }} >
                            <div>
                                <img src="https://eps.ae/wp-content/uploads/2018/12/logo-5-216-x-68.png" alt="" />
                            </div>
                            <Space direction='vertical' size={'small'} >
                                <Title style={{ margin: 0 }} level={2}>Elite private school self service portal</Title>
                                <Paragraph style={{ margin: 0 }} level={5}>A unified system helping students, parents and employees find elite private school services</Paragraph>
                            </Space>

                        </Card.Grid>

                        {/* </Card.Grid>
                        <Card.Grid hoverable={false} style={{ width: '40%' }}>
                            Content
                        </Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Content</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Content</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Content</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Content</Card.Grid>
                        <Card.Grid hoverable={false} style={gridStyle}>Content</Card.Grid> */}
                    </Card>


                </Content>
                <Card.Grid style={{ borderRadius: '0px', border: '0px', padding: '0px', marginTop: '40px', backgroundColor: 'red' }}>
                    <Space style={{ backgroundColor: 'yellow', width: '100% !important' }}>

                        <Tabs
                            style={{ width: '100%' }}
                            onChange={() => alert()}
                            type="card"
                            items={new Array(3).fill(null).map((_, i) => {
                                const id = String(i + 1);
                                return {
                                    label: `Tab ${id}`,
                                    key: id,
                                    children: <Card >
                                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                                        <Card.Grid hoverable={false} style={gridStyle}>
                                            Content
                                        </Card.Grid>
                                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                                        <Card.Grid style={gridStyle}>Content</Card.Grid>
                                    </Card>
                                };
                            })}
                        />
                    </Space>
                </Card.Grid>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </div >
    </>)
};


function AppMenu() {
    return <Menu style={{ backgroundColor: 'white', color: 'black', borderRight: 'white', fontSize: 16 }} mode="inline"  >

        <Menu.Item key="santé" >
            Elite Locker
        </Menu.Item>

        <Menu.Item key="autres" >
            Services
        </Menu.Item>
        <Menu.Item key="autres" >
            Feedback
        </Menu.Item>
        <Menu.Item key="autres" >
            Login
        </Menu.Item>
    </Menu>

}

export default App;


