import { Col, Row } from 'antd'
import AuthorizeForm from '../../components/form/AuthorizeForm'

type Props = {}

export default function AuthorizePage({ }: Props) {
  return (
    <div>
      <Row align="middle" style={{ minHeight: '100vh' }}>
        <Col span={10} offset={6}>
          <AuthorizeForm />
        </Col>
      </Row>
    </div >
  )
}