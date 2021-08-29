import React from 'react';
import Nav from './nav';

export default function Home(props) {
  return (
    <>
      <div className="container d-grid gap-5">
      <Nav />
      <div className="row">
        <div className="col">
          <a className="text-decoration-none" href="#" role="button">
            <div>
              <i className="fab fa-bitcoin fs-5 d-inline"></i>
              <p className="d-inline p-3">Trade with zero risk</p>
              <i className="fas fa-long-arrow-alt-right fs-5 d-inline"></i>
            </div>
          </a>
          <h2 className="text-white py-3">Trading Simulator for the top 5 cryptocurrencies
        to test out your investment strategies</h2>
          <div className="d-grid col-4">
          <a className="btn btn-primary" href="#" role="button">Sign Up</a>
          </div>
        </div>
      </div>
      <div className="row">
          <div className="col text-center">
          <h2 className="text-white">Get started in a few seconds</h2>
            <p className="text-white fs-6">Crypto Simulator supports a variety of the
            most popular cryptocurrencies</p>
        </div>
      </div>
      <div className="row justify-content-center">
       <div className="col-5 text-center">
          <i className="fas fa-user text-primary fs-1"></i>
          <p className="text-white"> Create an account</p>
        </div>
        <div className="w-100 d-block d-sm-none"></div>
        <div className="col-5 text-center">
          <i className="fas fa-chart-line text-primary fs-1"></i>
          <p className="text-white">Start buying &amp; selling</p>
        </div>
      </div>
    </div>
    </>
  );
}
