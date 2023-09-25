import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './Redux/Action'

function App() {
  let dataStore = useSelector((store) => store)
  let dispetch = useDispatch();
  const handleFetch = () => {
    dispetch(fetchData);
  }
  return (
    <div>
      <h4 className="alert alert-info" >Redux Thunk</h4>
      <div className='col-md-10 mx-auto'>

        {
          dataStore.isError ? (<div className="alert alert-danger" role="alert">T
            No data found
          </div>
          )
            : null
        }

        <button className='btn btn-outline-danger' onClick={handleFetch}>Get Data</button>
        <br></br>
        <br></br>
        {dataStore.isLoading && !dataStore.isError
          ? (<div className="text-center spin">
            <div className="spinner-border text-danger" role="status">
              <span className="sr-only"></span></div></div>)
          : null
        }

        {
          dataStore.data.length > 0 && (<div className='col-md-7 mx-auto'><ul className="list-group">
            <li class="list-group-item active">Products</li>{
              dataStore.data.map((ele, i) => {
                return (
                  <li className="list-group-item"> {ele.title}</li>
                )
              })
            }
          </ul></div>)
        }
      </div>
    </div>
  )
}

export default App
