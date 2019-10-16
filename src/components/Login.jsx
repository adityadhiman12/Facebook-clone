
import "../App.css";
import axios from "axios";
import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';



class login extends Component {
  state = { 
    email: '',
    password: '',
    loading:  false,
    errors: {}
   }
   handleSubmit= (e) => {
     e.preventDefault();
      this.setState({
        loading: true
      });
      const userData = {
        email: this.state.email,
        password: this.state.password
      };
      
      axios.post('/login', userData).then(res => {
        localStorage.setItem('FBIdToken', `Bearer ${res.data.token}`);
        console.log(res.data);
        this.setState({
          loading:false
        })
        this.props.history.push('/');
      }).catch(err => {
        this.setState({
          errors: err.response.data,
          loading: false
        })
      })

   }

   handleChange = (e) => {
     this.setState({[e.target.name] : e.target.value})
   }
  render() { 
    const {errors, loading} = this.state;
    return (
      <header>
        <div className="login-header">
          <div className="facebook-logo"></div>
  
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <div className="user-input-login">
              <label>
                Email or phone
                <input name="email" helperText={errors.email} error = {errors.email ? true : false} type="email" className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
              </label>
              <label>
                Password
                <input name="password" type="password" className="form-control" helperText={errors.password} error = {errors.password ? true : false} placeholder="Password" value={this.state.password}onChange={this.handleChange} />
              </label>
              {errors.general && (
                <p>{errors.general}</p>
              )}
              <button type="submit" className="login-button" disabled={loading}>Log in
              {loading && (
                <CircularProgress />
              )}
              </button>
            </div>
          </form>
        </div>
      </header>
   
        
    );
  }
}
 
export default login;


 


