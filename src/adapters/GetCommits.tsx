import React from "react";


export default async function GET_ALL_COMMITS(user: string) {
    const URL = `https://api.github.com/users/${user}/repos`
    
    const response = await fetch(URL);
    const data = await response.json();
    if(response.ok) {
        console.log(data)
        return data
    }
    return
}