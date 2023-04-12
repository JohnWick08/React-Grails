import React,{useState} from 'react';
import Axios from 'axios';
import './PostForm.css';


function PostForm() {

    // default url for api
    const url = "http://localhost:8080/user/save"

    //create an object for storing name and phone
    const[data,setData]=useState({
        name:"",
        phone:""
    })

    function submit(e){
        e.preventDefault();

        //using Axios to send a post request, containing name and phone number
        Axios.post(url,data)
            .then (response =>{
                console.log(response)
            })
            .catch(error=>{
                console.log(error)
            })

        // alert and reset
        alert("Successfully inserted to "+url)
        window.location.reload();
    }

    function handle(e){
        const newdata={...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
        
    }
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
                <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type = "text"></input>
                <input onChange={(e)=>handle(e)} id="phone" value={data.phone} placeholder="phone" type = "number"></input>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default PostForm;