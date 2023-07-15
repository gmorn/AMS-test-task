import { Button, Col, Row } from 'antd'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

type Props = {}

export default function PrivatePage({ }: Props) {
  const navigate = useNavigate()

  const outFucn = () => {
    document.cookie = `token=; max-age=0; path=/`
  }

  function getTokenFromCookies() {
    const cookies = document.cookie.split(";")

    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith("token=")) {
        return cookie.substring("token=".length, cookie.length)
      }
    }
    navigate('/authorization')
  }
  useEffect(() => {
    getTokenFromCookies()
  }, [])


  return (
    <div>
      <Row align="middle" justify="center" style={{ minHeight: '100vh' }}>
        <Col >
          <Link to='/authorization'>
            <Button type="primary" onClick={outFucn}>Out</Button>
          </Link>
        </Col>
      </Row>
    </div >
  )
}