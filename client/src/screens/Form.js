import React, { useState } from 'react'
// import Comment from './Comment'

function Form(){
 const [name, setName] = useState();
 const [comment, setComment] = useState();
 const [answerData, setAnswerData] = useState();


 const submit = async () => {
  let newBody = {name, comment};
  console.log(newBody)
  const response = await fetch('http://localhost:3001/createComment', {
      method: 'POST',
      mode: 'cors', 
      headers: {'Content-Type':'application/json', 'Accept': 'application/json'},
      credentials: 'include',
      redirect: 'follow',
      body: JSON.stringify(newBody)
  })
  const answerData = await response.json()

  console.log(answerData)

  return answerData
}


  return (
   <div>
       {
           <div>
               <div className="Container">
                   <input onChange={(e)=>setName(e.target.value)} type="text" name="name" placeholder="Your Name"></input>
                   <input onChange={(e)=>setComment(e.target.value)} type="text" name="message" placeholder="Your Comment"></input>
                   <button onClick={submit} type="button">Ask Question</button>
               </div>
           </div>
       }
       {
         <div id="Comment">
          <p id="commentBody">{submit.answerData.message}</p>
          <p id="name">{submit.answerData.name}</p>
          <p id="timestamp">{submit.answerData.name}</p>
        </div>
       }
   </div>
 );
}

export default Form; 