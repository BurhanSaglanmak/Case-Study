import React, { useEffect, useState } from 'react'
import UserMap from './UserMap'
import axios from 'axios'
import Pagination from './Pagination'
import { DataContext } from './context/Context';
import UserReview from './UserReview';
import CreateMember from './CreateMember';
import "./styles/Main.css"

function Main() {

    const { pageData, isTrue, setIsTrue ,reviewData} = DataContext();
    const [data, setData] = useState([])
    //   console.log(data);

    useEffect(() => {
        axios.get(`https://reqres.in/api/users${pageData}`)
            .then(function (response) {
                setData(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [pageData])

    function Create() {
        setIsTrue(!isTrue)
    window.scrollTo(300, 0);

    }

    return (
        <div className='mainContainer'>
            <div className='mainContainer__mainName'>
                <h1 >Case Study</h1>
            </div>

            {Array.isArray(data) ? isTrue === false && <div>
                <div className='mainContainer__nav'>
                    <h2>All Members</h2>
                    <button type="button" className="btn btn-outline-primary" onClick={Create}>Create New Member</button>
                </div>
                <div className='mainContainer__userMap'>
                    {data.length !== 0 ? data.map((item, index) =>
                        <UserMap item={item} key={index} />
                    ) : <h3>Data bulunamadı...</h3>}
                </div>
                <div>
                    <Pagination />
                </div>
            </div> :
                <div>
                    <UserReview data={data} />
                </div>}
            {isTrue === true && <div>
                <CreateMember />
            </div>}
            <div >
                {reviewData===false && <p className='mainContainer__copyright' style={isTrue || Array.isArray(data) === false ?  {position:"relative", bottom:"-390px" } : {position:"relative",bottom:"-16px"}}>
                    Copyright 2022
                </p>}
                {reviewData===true && <p className='mainContainer__copyright' style={{ position:"fixed",bottom:"-16px" }}>
                    Copyright 2022
                </p>}
            </div>
        </div>
    )
}

export default Main