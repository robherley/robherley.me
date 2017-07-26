import React from 'react';
import {Row, Col} from 'antd';
import styled from 'styled-components';

const PageTitle = styled.p`
    font-family: 'Zilla Slab', serif;
    font-size: 32px;
    color: white;
`

const Projects = (props) => (
    <Row type="flex" justify="start" style={{padding: '24px'}}>
        <Col>
            <PageTitle>Howdy, this is the Projects View</PageTitle>
        </Col>
    </Row>
)

export default Projects;