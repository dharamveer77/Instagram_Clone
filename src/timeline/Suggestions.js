import React from 'react'
import "./Suggestions.css"
import { Avatar } from '@mui/material';
function Suggestions() {
  return <div className='suggestions'>
       <div className="suggestions__title">Suggestions for You</div>
       <div className="suggestions__usernames">

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{("Tushar").charAt(0)}</Avatar>
            </span>
            <div className="username__info">
               <span className="username">_.Tushar._</span>
               <span className="relation">New to Instagram</span>
            </div>
          </div>
            <button className="follow__button">Follow</button>
          </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{("Rajveer").charAt(0)}</Avatar>
            </span>
            <div className="username__info">
               <span className="username">Rajveer_Singh</span>
               <span className="relation">New to Instagram</span>
            </div>
          </div>
            <button className="follow__button">Follow</button>
          </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{("Coding").charAt(0)}</Avatar>
            </span>
            <div className="username__info">
               <span className="username">Coding_Ninja</span>
               <span className="relation">New to Instagram</span>
            </div>
          </div>
            <button className="follow__button">Follow</button>
          </div>

        <div className="suggestion__username">
          <div className="username__left">
            <span className="avatar">
              <Avatar>{("Learn").charAt(0)}</Avatar>
            </span>
            <div className="username__info">
               <span className="username">Learn_Coding77</span>
               <span className="relation">New to Instagram</span>
            </div>
          </div>
            <button className="follow__button">Follow</button>
          </div>
        </div>
    </div>;
}

export default Suggestions