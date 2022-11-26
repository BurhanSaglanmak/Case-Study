import React, { useEffect, useState } from 'react'
import { DataContext } from './context/Context';
import axios from 'axios';
import "./styles/CreateMember.css"

function CreateMember() {
  
  const { isTrue, setIsTrue } = DataContext();
  const [send, setSend] = useState(false)
  const [name, setName] = useState("")
  const [job, setJob] = useState("")

  useEffect(() => {
    if (send === true) {
      axios.post('https://reqres.in/api/users', {
        firstName: name,
        job: job
      })
        .then(function (response) {
          console.log(response);
          alert("Başarılı...")
          setSend(!send)
          setName("")
          setJob("")
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  }, [send, job, name])

  function back() {
    setIsTrue(!isTrue)
    window.scrollTo(300, 0);

  }
  function Create() {
    if (name !== "" && job !== "") {
      setSend(!send)
    }
    else alert("Alanları boş bırakmayınız...")
  }
  function sendName(e) {
    setName(e.target.value)
  }
  function sendJob(e) {
    setJob(e.target.value)
  }
  return (
    <div className='CreateContainer'>
      <h3>Create Member</h3>
      <input className='CreateContainer__input ' placeholder='name' value={name} onChange={sendName} />
      <input className='CreateContainer__input' placeholder='job' value={job} onChange={sendJob} />
      <button  className="btn btn-outline-primary  CreateContainer__button" onClick={Create}>Create</button>
      <button  className="btn btn-outline-primary   CreateContainer__button" onClick={back}>Back</button>
    </div>
  )
}

export default CreateMember