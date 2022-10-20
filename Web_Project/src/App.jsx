import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddUser from './pages/AddUser'
import ViewUsers from './pages/ViewUsers'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/adduser" element={<AddUser/>}/>
                    <Route path="/viewusers" element={<ViewUsers/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App