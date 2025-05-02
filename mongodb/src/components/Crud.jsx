import React from 'react'
import { useEffect, useState } from "react";


const Crud = () => {

    const API = "http://localhost:5000/api/entries";

   

    const [entries, setEntries] = useState([]);
    const [form, setForm] = useState({ name: "", email: "" });
    const [editId, setEditId] = useState(null);
  
    const fetchData = async () => {
      const res = await fetch(API);
      //console.log(res);
      const data = await res.json();
    //   console.log(data)
      setEntries(data);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };

    const handleSubmit = async (e) => {
    e.preventDefault();
        if (editId) {
          await fetch(`${API}/${editId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
    } else {
          await fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
          });
    }
    setForm({ name: "", email: "" });
    setEditId(null);
    fetchData();
  };

  const handleEdit = (entry) => {
    setForm({ name: entry.name, email: entry.email });
    setEditId(entry._id);
  };

  const handleDelete = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div >
      <h2>simple crud form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='name' value={form.name} onChange={handleChange}/>
        <br/>
        <br/>
        <input type="text" name="email" placeholder='Email' value={form.email} onChange={handleChange}/>
         <br/>
         <br/>
        <button type='submit'>{editId ? "update" :"Add"}</button>

      </form>

      <hr />
      <h3>Entries</h3>
      {entries?"this have something":"nothing"}
      <ul>
        {entries.map((entry)=>(
            <li key={entry._id}>
                {entry.name}-{entry.email} &nbsb;
                <button onClick={()=>handleEdit(entry)}>Edit</button>
                <button onClick={()=>handleDelete(entry._id)}>Delete</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default Crud
