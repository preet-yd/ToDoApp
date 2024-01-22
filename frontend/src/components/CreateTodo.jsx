import React from 'react'

function CreateTodo() {

  let title = "";
  let description = "";

  function addTodo() {
    fetch("http://localhost:3000/todo", {
      method: "POST",

      body: JSON.stringify({
        title: title,
        description: description
      }),

      headers : {
        "Content-Type" : "application/json"
      }
    }

    )
      .then(async (response) => {
        const output = await response.json()
        alert("todo updated");
      })
  }
  return (
    <>
      <input onChange={(e)=>{title = e.target.value}} type="text" placeholder='title' />
      <input onChange={(e)=>{description = e.target.value}} type="text" placeholder='description' />
      <button onClick={addTodo}>add to do</button>
    </>
  )
}

export default CreateTodo