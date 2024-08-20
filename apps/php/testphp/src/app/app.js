import './app.css';
import React, { Component } from 'react';
 // import logo from './logo.svg';
import axios from 'axios'; //Import Axios
import { Route, Routes, Link } from 'react-router-dom';

class App extends Component{
  state = {
    text : ""
  }
  handleAdd = async e =>{
   await this.setState({
     text : e.target.value
   })
  }
  handleSubmit = e =>{
   e.preventDefault();
   console.log(this.state.text);
   let formData = new FormData();
   formData.append("text", this.state.text);
   const url = "http://localhost:8080/react-backend/"
   axios.post(url,formData)
   .then(res=> console.log(res.data))
   .catch(err=> console.log(err))
  }
  render(){
    return(
      <div className="App-header">
       <input
         onChange={this.handleAdd}
         className="form-control"
         // value={this.state.text}
         type="text"
         id='text'
         placeholder='Enter Some Text!'/>
         <br/>
         <button
          onClick={this.handleSubmit}
          className="btn btn-success"
          id='submit'>  Save</button>
      </div>
    );
  }
}
export default App;
if (import.meta.vitest) {
    // add tests related to your file here
    // For more information please visit the Vitest docs site here: https://vitest.dev/guide/in-source.html
    const { it, expect, beforeEach } = import.meta.vitest;
    let render;
    beforeEach(async () => {
        render = (await import('@testing-library/react')).render;
    });
    it('should render successfully', () => {
        const { baseElement } = render(<BrowserRouter><App /></BrowserRouter>);
        expect(baseElement).toBeTruthy();
    });
    it('should have a greeting as the title', () => {
        const { getByText } = render(<BrowserRouter><App />
    {/* START: routes */}
    {/* These routes and navigation have been generated for you */}
    {/* Feel free to move and update them to fit your needs */}
    <br/>
    <hr/>
    <br/>
    <div role="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page-2">Page 2</Link></li>
      </ul>
    </div>
    <Routes>
      <Route
        path="/"
        element={
          <div>This is the generated root route. <Link to="/page-2">Click here for page 2.</Link></div>
        }
      />
      <Route
        path="/page-2"
        element={
          <div><Link to="/">Click here to go back to root page.</Link></div>
        }
      />
    </Routes>
    {/* END: routes */}
    </BrowserRouter>);
        expect(getByText(/Welcome testphp/gi)).toBeTruthy();
    });
}
