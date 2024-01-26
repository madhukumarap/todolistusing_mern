import axios from "axios";
import Create from "./Create";
import { useEffect, useState } from "react";
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs';
const Home = () => {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodo(result.data))
      .catch(err => console.log(err));
  }, []);
  const handleEdit = (id) => {
    axios.put(`http://localhost:3001/update/${id}`, { /* provide data to update */ })
      .then(response => {
        // handle the response, if needed
        console.log(response.data);
        // Update the state with the updated todo list
        setTodo(response.data);
      })
      .catch(err => console.log(err));
  };
  
  return (
    <div>
      <h2>Todo List</h2>
      <Create />

      {todo.length === 0 ? 
        <div>
          <h2>No Record found</h2>
        </div>
       : 
        todo.map((todoItem, index) => (
            <>
          <div onClick={() =>handleEdit(todoItem.id)} style={{display:'flex',alignItems:'center',width:'345px',justifyContent:'space-between',backgroundColor:'black',color:'white',padding:'2px 5px 2px 5px', marginTop:'2px'}} key={index}>
           <BsCircleFill className="icon" />
           <p> {todoItem.task}</p>
          </div>
          <div>
            <span>
                <BsFillTrashFill className="icon" />
            </span>
          </div>
          </>
        ))
      }
    </div>
  );
}

export default Home;
