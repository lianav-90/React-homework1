import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import {render} from 'react-dom';

class App extends React.Component {
  render() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="card text-center col-3">
          <div className="card-body">
            <h4 className="card-title">Maecenas luctus</h4>
            <p className="card-text">Nullam non wisi a sem semper eleifend. 
              Donec mattis libero eget urna. Duis pretium velit ac suscipit mauris. 
              Proin eu wisi suscipit nulla suscipit interdum.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
        <div className="card text-center col-3">
          <div className="card-body">
            <h4 className="card-title">Integer gravida</h4>
            <p className="card-text">Proin eu wisi suscipit nulla suscipit interdum. 
              Nullam non wisi a sem semper suscipit eleifend. Donec mattis libero eget 
              urna. Duis velit ac mauris.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
        <div className="card text-center col-3">
          <div className="card-body">
            <h4 className="card-title">Praesent mauris</h4>
            <p className="card-text">Donec mattis libero eget urna. 
              Duis pretium velit ac mauris. Proin eu wisi suscipit nulla suscipit interdum. 
              Nullam non wisi a sem suscipit eleifend.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="card text-center imgcard">
          <img src="./images/scr01.jpg" className="card-img-top" alt="image"/>
          <div className="card-body">
            <h6 className="card-title">Vestibulum venenatis</h6>
            <p className="card-text">Fermentum nibh augue praesent a lacus at urna congue rutrum.</p>
            <a href="#" className="btn btn-primary">Etiam posuere</a>
          </div>
        </div>
        <div className="card text-center imgcard">
          <img src="./images/scr02.jpg" className="card-img-top" alt="..."/>
          <div class="card-body">
            <h6 className="card-title">Praesent scelerisque</h6>
            <p className="card-text">Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
            <a href="#" className="btn btn-primary">Etiam posuere</a>
          </div>
        </div>
        <div className="card text-center imgcard">
          <img src="./images/scr03.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">Donec dictum metus</h6>
            <p className="card-text">Vivamus fermentum nibh in augue praesent urna congue rutrum.</p>
            <a href="#" className="btn btn-primary">Etiam posuere</a>
          </div>
        </div>
        <div className="card text-center imgcard">
          <img src="./images/scr04.jpg" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">Mauris vulputate dolor</h6>
            <p className="card-text">Rutrum fermentum nibh in augue praesent urna congue rutrum.</p>
            <a href="#" className="btn btn-primary">Etiam posuere</a>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
