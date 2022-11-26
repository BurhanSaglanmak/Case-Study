import React from 'react'
import { DataContext } from './context/Context';
import "./styles/UserMap.css"

function UserMap({ item }) {
  const { setPageData ,setReviewData} = DataContext();

  //  console.log(item.item.id);

  function review() {
    setPageData(`/${item.id}`)
    setReviewData(true)
    window.scrollTo(300, 0);

  }

  return (
    <div className='userContainer'  >
      <img className='userContainer__img' src={item.avatar} alt='...' />
      <div className='userContainer__nameSurname'>
        <h3 className='userContainer__name'>{item.first_name}</h3>
        <h3>{item.last_name}</h3>
      </div>
      <p>{item.email}</p>
      <button type="button" className="btn btn-outline-primary userContainer__button" onClick={review}>Review</button>
    </div>
  )
}

export default UserMap