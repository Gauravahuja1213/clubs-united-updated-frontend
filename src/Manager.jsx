import React,{useState,useEffect} from "react"
import axios from "axios"
import Navbar from "./Navbar"
import "./pageManager.css"
function Manager(){
    const [posts,setPosts] =useState([])

    useEffect(()=> {
        axios.get("https://gahuja-clubs-united-updated.herokuapp.com/admin")
        .then(res=>{
            console.log(res)
            setPosts(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])
    return(
        <div>
            <Navbar/>
            <div className="bc-img">
                {posts.map(post=>(
                    
                    <table className="tbl">
                    <p key={post._id}>Name: {post.name}</p>
                    <p key={post._id}>Email: {post.email}</p>
                    <p key={post._id}>Query: {post.query}</p>
                    <a href = "mailto: EMAIL ADRESS">Solve query</a>
                    <link type="image/png" sizes="32x32" rel="icon" href=".../icons8-gmail-logo-32.png"></link>
                    </table>
                    
                ))}
            </div>
        </div>
    )
}

export default Manager;