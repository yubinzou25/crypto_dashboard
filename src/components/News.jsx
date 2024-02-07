import React from 'react'
import {Row, Col, Select} from 'antd'


function News({simplified}) {

  return (
    <Row>
      {!simplified && (
        <Col>
        <Select>

        </Select>
        </Col>
      )
      }
      {
        <Col>
        </Col>

      }
    </Row>
  )
}

export default News