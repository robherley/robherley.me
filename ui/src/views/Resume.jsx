import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';

const PageTitle = styled.p`
    font-family: 'Zilla Slab', serif;
    font-size: 32px;
    color: white;
`

const Resume = (props) => (
    <Row type="flex" justify="start" style={{padding: '24px'}}>
        <Col>
            <PageTitle>Howdy, this is the Resume View</PageTitle>
        </Col>
    </Row>
)

export default Resume;