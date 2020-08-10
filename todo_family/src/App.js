import React from 'react';
import './App.css';

const App = (props) => {
  const { todoList } = props
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">

        {todoList.map(todo => {
          const { id, title, description, github, live, img } = todo
          return (
              <div className="col mb-4 cardDiv" key={id}>
                <div className="card">
                  <a href={live} target="_blank"><img src={img} className="card-img-top" alt="..." /></a>
                  <div className="card-body">
                    <h5 className="card-title">{title} 
                      <a href={github} target="_blank" className="icon">
                        <i className="fab fa-github-square fa-lg">
                        </i>
                      </a>  
                      <a href={live} target="_blank" className="icon">
                        <i class="fas fa-desktop fa-lg"></i>
                      </a>  
                    </h5>
                    <p className="card-text">{description}</p>
                  </div>
                </div>
              </div>
          )
        })}

      </div>
    </div>
  )
}

export default App;
