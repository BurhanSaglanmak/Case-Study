import React from 'react'
import { DataContext } from './context/Context';
import "./styles/UserReview.css"

function UserReview({ data }) {
  const { setPageData, paginal,setReviewData } = DataContext();

  // console.log(data);
  function back() {
    setPageData(paginal)
    setReviewData(false)
    window.scrollTo(300, 0);

  }

  return (
    <div className='reviewContainer'>
      <img className='reviewContainer__img' src={data.avatar} alt='...' />
      <div className='reviewContainer__nameSurname'>
        <h3 className='reviewContainer__name'>{data.first_name}</h3>
        <h3>{data.last_name}</h3>
      </div>
      <p>{data.email}</p>
      <button type="button" className="btn btn-outline-primary  reviewContainer__button" onClick={back} >Back</button>
    </div>
  )
}

export default UserReview