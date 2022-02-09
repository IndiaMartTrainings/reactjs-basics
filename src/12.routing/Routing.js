import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom'
import SqlStudent from '../11.ajax-calls/SqlStudent'
import NameListFour from '../7.list-rendering/NameListFour'
import FormOne from '../9.form-handling/FormOne'

const Home = () => <div className="container"><h1>Welcome Home</h1></div>
const About = () => <div><h1>This is About Page</h1></div>
const Contact = () => {
    const params = useParams()
    console.log(params)
    return (
        <div className="container">
            <h1>Please Contact {params.name} for any enquiries</h1>
        </div>
    )
}
const Error = () => <div><h1>Page not found</h1></div>

function Routing() {
  return (
    <Router>
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link to="/home" className="navbar-brand">IndiaMart</Link>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse2">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse2">
                        <div className="navbar-nav">
                            <Link to="/" className="nav-item nav-link active">Home</Link>
                            <Link to="/about" className="nav-item nav-link">Student</Link>
                            <Link to="/form" className="nav-item nav-link">Form</Link>
                            <Link to={{pathname: "/contact/IndiaMart/indmart@im.com"}} className="nav-item nav-link">Contact</Link>
                        </div>
                    </div>
                </div>        
            </nav>
        </div>
        <Routes>
            <Route path='/' element={<NameListFour />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/about' element={<SqlStudent />}></Route>
            <Route path='/form' element={<FormOne />}></Route>
            <Route path='/contact/:name/:email' element={<Contact />}></Route>
            <Route path='*' element={<Error />}></Route>
        </Routes>
    </Router>

  )
}

export default Routing