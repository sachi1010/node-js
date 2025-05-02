import React from 'react'
import { useEffect,useState } from 'react'
const Credopertion = () => {

    const API = "http://localhost:5001/api/product";

    const[product,setProduct]=useState([]);
    const[form,setForm]=useState({productName:"",category:"",price:""});
    const[editId,setEditId]=useState(null);


    const fetchData = async()=>{
       const res = await fetch(API);
      //  console.log(res);
       const data = await res.json();
      //  console.log(data);
       setProduct(data);
    }

    const handleChange=(e)=>{
       setForm({...form,[e.target.name]: e.target.value})
    };

    const handlesubmit = async(e)=>{
      e.preventDefault();
      if(editId){
       await fetch(`${API}/${editId}`,{
              method:"PUT",
              Headers:{ "Content-Type": "application/json" },
              body: JSON.stringify(form),
       });
      }else{
        await fetch(API,{
          method:"POST",
          headers:{ "Content-Type": "application/json" },
          body: JSON.stringify(form),
        })
      }
      setForm({productName:"",category:"",price:""});
      setEditId(null);
      fetchData();
    }

    const handleEdit = (entry)=>{
      setForm({ productName: entry.productName, category: entry.category,price:entry.price });
      setEditId(entry._id);
    }

    const handleDelete = async(id)=>{
      await fetch(`${API}/${id}`, { method: "DELETE" });
      fetchData();
    }
   
     useEffect(() => {
        fetchData();
      }, []);

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <p>
            <label htmlFor="name">Product Name:</label>
            <input type="text" placeholder='Product Name' name='productName' value={form.productName} onChange={handleChange}/>
        </p>
        <p>
            <label htmlFor="category">Product Category :</label>
            <input type="text" placeholder='product category' name='category' value={form.category} onChange={handleChange} />
        </p>
        <p>
            <label htmlFor="price">Product Price :</label>
            <input type="text" placeholder='Enter Price' name='price' value={form.price} onChange={handleChange}/>
        </p>
        <button>
            {editId ? "update" : "Add product" }
        </button>
      </form>

      <hr />
      <div>
        <h1>Product list</h1>
        <ul>
          {product.map((entry)=>(
            <li key={entry._id}>
                {entry.productName} - {entry.category} -{entry.price} 
                <button onClick={()=>{handleEdit(entry)}}>Edit</button>
                <button onClick={()=>{handleDelete(entry)}}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Credopertion
