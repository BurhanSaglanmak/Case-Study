import React from 'react'
import { DataContext } from './context/Context';
import "./styles/Pagination.css"

function Pagination() {
  const { setPageData, setPaginal } = DataContext();



  function onePage() {
    setPageData("?page=1")
    setPaginal("?page=1")
    window.scrollTo(300, 0);
  }
  function twoPage() {
    setPageData("?page=2")
    setPaginal("?page=2")
    window.scrollTo(300, 0);
  }
  function threePage() {
    setPageData("?page=3")
    setPaginal("?page=3")
    window.scrollTo(300, 0);
  }


  return (
    <div><nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">

        <li className="page-item"><button onClick={onePage} type="button" className="btn btn-outline-primary page">1</button></li>
        <li className="page-item"><button onClick={twoPage} type="button" className="btn btn-outline-primary page">2</button></li>
        <li className="page-item"><button onClick={threePage} type="button" className="btn btn-outline-primary page">3</button></li>

      </ul>
    </nav></div>
  )
}

export default Pagination