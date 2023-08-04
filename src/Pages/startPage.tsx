import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, MenuOutlined, SettingOutlined, HeartOutlined, EuroOutlined, CalculatorOutlined, BarsOutlined, LoginOutlined, } from '@ant-design/icons';
import { Divider, Drawer, MenuProps, Typography, Layout, theme, Breadcrumb, Card, Space, Tabs, Input } from 'antd';
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
        width: '30%',
        textAlign: 'center',
    };
    const gridStyle2: React.CSSProperties = {
        width: '20%',
        textAlign: 'center',
    };
    const { Title, Paragraph } = Typography;
    const { Search } = Input;

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
                                <Search
                                    style={{ marginTop: 10 }}
                                    placeholder="input search text"
                                    allowClear
                                    enterButton="Search"
                                    size="large"
                                    onSearch={() => console.log("on search")}
                                />
                                <Paragraph>Popular : <a href=''>HR Onnoarding</a>  </Paragraph>

                            </Space>

                            <Space>
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
                <Card.Grid style={{ borderRadius: '0px', border: '0px', padding: '0px', marginTop: '40px', }}>
                    <Card style={{ boxShadow: '0px', borderRadius: '0px', border: '0px', padding: 0 }}>
                        <Tabs
                            onChange={(e) => console.log(e)}
                            type="card"
                            items={['Student Services', 'Employee services', 'Parent Services'].map((_, i) => {
                                const id = String(i + 1);
                                return {
                                    label: _,
                                    key: id,
                                    children: <Card style={{ boxShadow: 'none', border: '0px' }} >

                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>
                                        <Card.Grid style={{ ...gridStyle2, textAlign: 'left', marginRight: 10, marginBottom: 10 }}>
                                            <img style={{ width: 50 }} src='https://static.tamm.abudhabi/static-prod/Project/TAMM/AOL%20Mobile%20Icons/Individual/Identity%20Citizenship%20Labour.png' />
                                            <Title style={{ marginTop: 0 }} level={5}>Indentity, Citizenship, and Human Resource</Title>
                                            <Paragraph>Residency, Identity , Entry permit, and work</Paragraph>
                                        </Card.Grid>


                                    </Card>

                                };
                            })}
                        />

                    </Card>
                </Card.Grid>
                <Card.Grid style={{ borderRadius: '0px', border: '0px', padding: '0px', }}>

                    <Card style={{ boxShadow: '0px', borderRadius: '0px', border: '0px', padding: 0 }}>
                        <Title level={4}>Most Popular</Title>
                        <Divider style={{ margin: '15px 0px' }} />
                        <Card style={{ boxShadow: 'none', borderRadius: '0px', border: '0px', borderColor: 'white' }} >
                            <Card.Grid style={{ ...gridStyle, padding: 0, display: 'block', textAlign: 'left', boxShadow: 'none', border: 'none', borderColor: 'white' }} >
                                <Title level={5}>Passport renew</Title>
                                <Paragraph style={{ lineHeight: 'normal' }}> this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.</Paragraph>
                            </Card.Grid>
                            <Card.Grid style={{ ...gridStyle, padding: 0, display: 'block', textAlign: 'left', boxShadow: 'none', border: 'none', borderColor: 'white' }} >
                                <Title level={5}>Renew Residency</Title>
                                <Paragraph style={{ lineHeight: 'normal' }}> this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.</Paragraph>
                            </Card.Grid>   <Card.Grid style={{ ...gridStyle, padding: 0, display: 'block', textAlign: 'left', boxShadow: 'none', border: 'none', borderColor: 'white' }} >
                                <Title level={5}>Maintance Request</Title>
                                <Paragraph style={{ lineHeight: 'normal' }}> this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.</Paragraph>
                            </Card.Grid>   <Card.Grid style={{ ...gridStyle, padding: 0, display: 'block', textAlign: 'left', boxShadow: 'none', border: 'none', borderColor: 'white' }} >
                                <Title level={5}>Request to ownership deed</Title>
                                <Paragraph style={{ lineHeight: 'normal' }}> this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.</Paragraph>
                            </Card.Grid>   <Card.Grid style={{ ...gridStyle, padding: 0, display: 'block', textAlign: 'left', boxShadow: 'none', border: 'none', borderColor: 'white' }} >
                                <Title level={5}>Annual report request</Title>
                                <Paragraph style={{ lineHeight: 'normal' }}> this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.</Paragraph>
                            </Card.Grid>   <Card.Grid style={{ ...gridStyle, padding: 0, display: 'block', textAlign: 'left', boxShadow: 'none', border: 'none', borderColor: 'white' }} >
                                <Title level={5}>Request to ownership deed</Title>
                                <Paragraph style={{ lineHeight: 'normal' }}> this service, you can request the issuance of an ownership deed of land and real estate to prove ownership.</Paragraph>
                            </Card.Grid>
                        </Card>

                    </Card>
                </Card.Grid>
                <Card hoverable={false} style={{ borderRadius: '0px', border: '0px', padding: 20, boxShadow: 'none' }}>
                    <Card.Grid hoverable={false} style={{ boxShadow: 'none', borderRadius: '0px', border: '0px', padding: 0, width: '50%' }}>


                        <Title level={3}>Best school Award</Title>
                        <Paragraph style={{ lineHeight: 'normal' }}> Thrive in Abu Dhabi promotes long-term Golden Visas and a pathway to citizenship for individuals working, creating and studying in key sectors and specialties in Abu Dhabi. The UAE’s Golden Visa is available in Abu Dhabi for international talent and investors and top talent, providing them and their families with visas for 5 to 10 years. The programme targets professionals, researchers and students in the knowledge fields such as doctors, scientists and inventors. It is also open to talented creative and sporting individuals, and business, start-up and real estate investors. Long-term visas empower talented expats to set down roots in the emirate, contributing to growth in Abu Dhabi’s priority sectors such as culture, healthcare, research and development (R&D) and real estate</Paragraph>


                    </Card.Grid>
                    <Card.Grid style={{ boxShadow: 'none', borderRadius: '0px', border: '0px', padding: 0, width: '50%' }}>
                        <img style={{ width: '100%' }} src='https://eps.ae/wp-content/uploads/2023/05/stop-bullying-school-895x430.jpg' />
                    </Card.Grid>

                </Card>
                <Card hoverable={false} style={{ borderRadius: '0px', border: '0px', padding: 20, boxShadow: 'none' }}>
                    <Card.Grid style={{ boxShadow: 'none', borderRadius: '0px', border: '0px', padding: 0, width: '50%' }}>
                        <img style={{ width: '100%' }} src='https://eps.ae/wp-content/uploads/2023/05/stop-bullying-school-895x430.jpg' />
                    </Card.Grid>
                    <Card.Grid hoverable={false} style={{ boxShadow: 'none', borderRadius: '0px', border: '0px', padding: 0, width: '50%' }}>


                        <Title level={3} style={{ padding: 30 }}>Best school Award</Title>
                        <Paragraph style={{ lineHeight: 'normal' }}> Thrive in Abu Dhabi promotes long-term Golden Visas and a pathway to citizenship for individuals working, creating and studying in key sectors and specialties in Abu Dhabi. The UAE’s Golden Visa is available in Abu Dhabi for international talent and investors and top talent, providing them and their families with visas for 5 to 10 years. The programme targets professionals, researchers and students in the knowledge fields such as doctors, scientists and inventors. It is also open to talented creative and sporting individuals, and business, start-up and real estate investors. Long-term visas empower talented expats to set down roots in the emirate, contributing to growth in Abu Dhabi’s priority sectors such as culture, healthcare, research and development (R&D) and real estate</Paragraph>


                    </Card.Grid>


                </Card>

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


