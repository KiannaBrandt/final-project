import React from 'react';
import Nav from './nav';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      username: event.target.username,
      lastName: event.target.lastName,
      email: event.target.email,
      password: event.target.password
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="container d-grid gap-5">
        <Nav />
        <div className="row mb-3 justify-content-center">
          <div className="col-auto">
            <h2 className="text-white p-3">Create an account</h2>
            <form onSubmit={this.handleSubmit}>
              <div className="form-floating mb-3">
                <input type="text" value={this.state.firstName} onChange={this.handleChange}
                className="form-control" id="floatingInput" placeholder="First Name"/>
                <label htmlFor="floatingInput">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="text" value={this.state.lastName} onChange={this.handleChange}
                  className="form-control" id="floatingInput" placeholder="Last Name" />
                <label htmlFor="floatingInput">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" value={this.state.email} onChange={this.handleChange}
                  className="form-control" id="floatingInput" placeholder="Email Address" />
                <label htmlFor="floatingInput">Email Address</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" value={this.state.password} onChange={this.handleChange}
                  className="form-control" id="floatingInput" placeholder="Password" />
                <label htmlFor="floatingInput">Password</label>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary btn-lg" disabled>Create Account</button>
              </div>
            </form>
          </div>
        </div>
        <div className="row mb-3 justify-content-center">
          <div className="col-auto">
            <h2 className="text-white p-3">Already have an account?</h2>
            <div className="d-grid gap-2 col-9 mx-auto">
              <a className="btn btn-primary btn-lg" href="#" role="button">Sign In</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateAccount;
