import React from 'react';

function About(props) {
  return (
    <div>
      <h1 className="mt-3">Stock Performance Tracker</h1>
      <br/>

      <p className="text-left m-3">The stock performance tracker app allow you to create a portfolio of stocks.  Inside the portfolio the app will automatically sort the tracked stocks with the best performance to least performance based on 24 hours, week, and month change.</p>
      <p className="text-left m-3">Stock charts coming soon!</p>
    </div>
  );
}

export default About;