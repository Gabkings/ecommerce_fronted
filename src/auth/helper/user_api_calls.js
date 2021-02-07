
import {removeCart} from '../../core/helper/cart_helper'

const URL = "http://127.0.0.1:8000/api/user/"


export const singup = async user => {
    try {
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        })
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}

export const signin = async user => {
    const formData = new FormData();
    for (const name in user) {
        console.log(user[name]);
        formData.append(name, user[name]);
      }
      try {
        const response = await fetch(`${URL}login/`, {
            method: "POST",

            body: formData,
        })
        console.log("SUCCESS", response)
        return await response.json()
    } catch (err) {
        return console.log(err)
    }
}


export const authenticate = (data, next) => {
    if(typeof window !== undefined){
        localStorage.setItem("jwt", JSON.stringify(data))
        next()
    }
}

export const isAuthenticated = () =>{
    if(typeof window == undefined){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }
    return false
}

export const signout = (next) => {
    const userId = isAuthenticated() && isAuthenticated().user.id;
  
    console.log("USERID: ", userId);
  
    if (typeof window !== undefined) {
      localStorage.removeItem("jwt");
      removeCart(() => {});
      //next();
  
      return fetch(`${URL}user/logout/${userId}/`, {
        method: "GET",
      })
        .then((response) => {
          console.log("Signout success");
          next();
        })
        .catch((err) => console.log(err));
    }
  };