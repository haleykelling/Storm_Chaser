import React from 'react';
import '../App.css';


export default function Welcome({ home }){
    if (home){
        return <h1>Welcome to Storm Chaser</h1>
    } else {
        return <h1 className="show-page-title">Storm Chaser</h1>
    }
}