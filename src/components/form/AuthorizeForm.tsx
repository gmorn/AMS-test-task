import { Button, Checkbox, Form, Input, Typography } from 'antd'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../services/auth/auth'

const { Paragraph } = Typography

type Props = {}

export default function AuthorizeForm({ }: Props) {

  const [error, setError] = useState<boolean>(false)

  const navigate = useNavigate()

  const onFinish = () => {
    const data = {
      username: userName,
      password: password
    }
    async function fetchData() {
      try {
        const status = await auth(data)
        if (status) {
          navigate('/')
        } else {
          setError(true)
        }
      } catch (error) {
        console.log('Ошибка при выполнении авторизации:', error)
      }
    }

    fetchData()

  }

  const [formState, setFormState] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [checkbox, setCheckbox] = useState<boolean>(false)

  const changeValue = (value: string | boolean, type: string) => {
    setError(false)
    switch (type) {
      case 'userName':
        setUserName(value as string)
        break
      case 'password':
        setPassword(value as string)
        break
      case 'checkbox':
        setCheckbox(value as boolean)
        break
    }
  }

  useEffect(() => {
    if (userName !== '' && password !== '' && checkbox) {
      setFormState(true)
    } else {
      setFormState(false)
    }
  }, [userName, password, checkbox])


  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            onChange={(e) => changeValue(e.target.value, 'userName')}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password
            onChange={(e) => changeValue(e.target.value, 'password')}
          />
        </Form.Item>
        {error &&
          <Paragraph type="danger" style={{ textAlign: 'center' }}>Invalid data</Paragraph>
        }

        <Form.Item name="remember" wrapperCol={{ offset: 8, span: 16 }}>
          <Checkbox
            onChange={(e) => changeValue(e.target.checked, 'checkbox')}
          >
            Remember me
          </Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={!formState}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}