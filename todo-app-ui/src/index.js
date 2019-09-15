import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// initial state of the application
let initial_data = {
    "todos" : [
      {
        "todoListName": "To Learn",
        "showCompleted": true,
        "todoItems": [
          {
            "todoItemDesc": "Learn React JS",
            "completed": false,
            "due": "2019-09-09"
          },
          {
            "todoItemDesc": "Learn Node JS",
            "completed": false,
            "due": "2019-10-09"
          },
          {
            "todoItemDesc": "Learn Docker",
            "completed": false,
            "due": "2019-11-09"
          }
        ]
      },
      {
        "todoListName": "Weekend Tasks",
        "showCompleted": true,
        "todoItems": [
          {
            "todoItemDesc": "Laundry",
            "completed": false,
            "due": "2019-09-09"
          },
          {
            "todoItemDesc": "House cleaning",
            "completed": false,
            "due": "2019-09-09"
          },
          {
            "todoItemDesc": "Water the plants",
            "completed": false,
            "due": "2019-09-09"
          }
        ]
      }
    ]
  };

ReactDOM.render(<App data={initial_data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
