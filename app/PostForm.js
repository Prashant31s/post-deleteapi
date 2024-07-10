"use client";
import React, { useState } from "react";

const PostForm = () => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [cpu_model, setCPU_model] = useState("");
  const [hdd, setHDD] = useState("");
  const [id,setId]=useState("")
  

  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://api.restful-api.dev/objects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          data: {
            year: year,
            price: price,
            "CPU model": cpu_model,
            "Hard disk size": hdd,
          },
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create post");
      }

      // Optionally handle response data or success message
      const data = await response.json();
      setId(data.id);
      console.log("Post created:",id,data);
      


      // Reset form fields after successful submission
      setName("");
      setYear("");
      setPrice("");
      setCPU_model("");
      setHDD("");
    } catch (error) {
      console.error("Error creating post:", error);
      // Handle error state or display error message to user
    }
  };
  const deletepost =async ()=>{
    
      try{
        console.log("idddd", id);
        const response =await fetch(`https://api.restful-api.dev/objects/${id}`,{
          method:"DELETE",
        });
        if(!response.ok){
          throw new Error("failed to delete post")
  
        }
        console.log("post deleted succefully");
        setId("");
  
      }
      catch(error){
        console.error("error deleting post:", error);
      }
        
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col    ">
        <div className="flex flex-row">
          <h1>Name:</h1>
          <input
            className="ml-2"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex mt-2">
          <h1>Year: </h1>
          <input
            className="ml-5"
            type="date"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="price">Price: </label>
          <input
            className="ml-3"
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="cpu_model">CPU:</label>
          <input
            className="ml-5"
            id="cpu_model"
            value={cpu_model}
            onChange={(e) => setCPU_model(e.target.value)}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="hdd">HDD:</label>
          <input
            className="ml-5"
            id="hdd"
            value={hdd}
            onChange={(e) => setHDD(e.target.value)}
          />
        </div>

        <button className="bg-blue-500 mx-auto mt-4 w-28 h-10 rounded-full border-b-4 border-blue-800 hover:border-blue-900 " type="submit">
          Create Post
        </button>
       
      </div>
      
    </form>
    <button className="bg-red-500 mx-auto mt-4 w-28 h-10 rounded-full border-b-4 border-red-800 hover:bg-red-900 " onClick={deletepost}>
          Delete
    </button>
    
    
    </>
    
    
  );
};

export default PostForm;
