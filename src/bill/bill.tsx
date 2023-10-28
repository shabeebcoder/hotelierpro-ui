import React from 'react';

import { Grid, Table, Input, TextInput } from '@mantine/core';
import { Select, Button } from './../elements';
import './styles.css';

export default function Bill() {
    const rows = [
        {
            name: 'shabeeb',
            position: 'Developer',
            symbol: 'something',
            mass: 'hey',
        },
    ].map((element) => (
        <tr key={element.name}>
            <td>{element.position}</td>
            <td>{element.name}</td>
            <td>{element.symbol}</td>
            <td>{element.mass}</td>
        </tr>
    ));

    return (
        <Grid style={{ maxWidth: 956 }} className="billing">
            <Grid.Col span={4}>
                <Select
                    label="Payment by"
                    placeholder="Select"
                    data={[
                        { value: 'react', label: 'Person' },
                        { value: 'ng', label: 'Company' },
                    ]}
                />
            </Grid.Col>
            <Grid.Col span={4}>
                <Select
                    label="Payer"
                    placeholder="Select"
                    data={[
                        { value: 'react', label: 'Person' },
                        { value: 'ng', label: 'Company' },
                    ]}
                />
            </Grid.Col>
            <Grid.Col span={4} className="persons">
                <Button type="primary">Add Person</Button>
            </Grid.Col>
            <Grid.Col span={12}>
                <Table>
                    <thead className="t_header">
                        <tr>
                            <th>Items</th>
                            <th>Const</th>
                            <th>QTY</th>
                            <th>price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key="1">
                            <td>
                                <Input placeholder="" />
                            </td>
                            <td>
                                <Input style={{ width: 100 }} placeholder="" />
                            </td>
                            <td>
                                <Input style={{ width: 100 }} placeholder="" />
                            </td>
                            <td>
                                <Input style={{ width: 100 }} placeholder="" />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <Button>Add New Room</Button>
                            </td>
                        </tr>
                        <tr className="summery">
                            <td></td>
                            <td>Total</td>
                            <td></td>
                            <td>$ 200</td>
                        </tr>
                        <tr className="summery">
                            <td style={{ borderTop: 'none !important' }}></td>
                            <td>Paid</td>
                            <td></td>
                            <td>$ 00.00</td>
                        </tr>
                        <tr className="summery">
                            <td style={{ borderTop: 'none' }}></td>
                            <td>Amount Due</td>
                            <td></td>
                            <td>$ 265.00</td>
                        </tr>
                    </tbody>
                </Table>
            </Grid.Col>
        </Grid>
    );
}
