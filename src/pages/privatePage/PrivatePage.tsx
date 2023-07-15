import { Button, Col, Row } from 'antd'
import { Link } from 'react-router-dom'

type Props = {}

export default function PrivatePage({ }: Props) {
  return (
    <div>
      <Row align="middle" justify="center" style={{ minHeight: '100vh' }}>
        <Col >
          <Link to='/authorization'>
            <Button type="primary">Out</Button>
          </Link>
        </Col>
      </Row>
    </div >
  )
}