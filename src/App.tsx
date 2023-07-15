import { Route, Routes } from 'react-router-dom'
import PrivatePage from './pages/privatePage/PrivatePage'
import AuthorizePage from './pages/authorisePage/AuthorizePage'

function App() {

  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <>
      <Routes>
        <Route path='/' element={<PrivatePage/>}/>
        <Route path='/authorization' element={<AuthorizePage/>}/>
      </Routes>
    </>
  )
}

export default App
