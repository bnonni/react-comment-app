import React, { useState } from 'react'

function Comment(props){
 const { commentary } = props;
 const [answerData, setAnswerData] = useState(commentary.state.answerData)
 return (<div></div>)
}

export default Comment;