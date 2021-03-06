/* 
  화면     : 메인 > 로그인 팝업
*/


import React from 'react';
import { useState,useEffect } from 'react';
import { useCookies } from 'react-cookie';
import $ from 'jquery';

import './login.css';


export default function Login({ open, close }) {
  /* 아이디 저장 */
  const [userIdSave, setUserIdSave] = useState(false);
  const [cookies, setCookie] = useCookies(['userIdCookie']);
  const userIdCookie = cookies.userIdCookie;
  
  /* 로그인 Btn */
  const [errorMsg, setErroMsg] = useState("");
  const [userId, setUserId] = useState("");
  const loginFn = () => {
      // 유효성 검사
      if(userId === ''){
        setErroMsg("아이디를 입력해주세요.");
        return;
      }else if($('.pw-box input').val() === ''){
        setErroMsg("비밀번호를 입력해주세요");
        return;
      }else{
        setErroMsg("");
      }
      
      //아이디 저장 체크시 쿠키생성
      if(userIdSave){
        setCookie('userIdCookie', userId , { 
          path: '/' ,
        });
      }

      // 로그인 세션 생성
      sessionStorage.setItem('user_id', 'test');
      document.location.href = '/';
  }


  
   


   return (
    <div className={open ? 'modal openModal' : 'modal'}>
      {open? (
      <div class="layerpopup-wrap">   
        <div className="layerpopup-align">
          <div className="layerpopup-cont">
            <div className="layerpopup-body">
              <h1 className="pop-title"><strong>로그인</strong></h1>
              <div className="login-box">
                  <div className="id-box">
                    <input type="text" className="inp-box" placeholder="아이디" value={userIdCookie !== null ?  userIdCookie : ""} onChange={(e) =>setUserId(e.target.value)}/>
                  </div>
                  <div className="pw-box">
                    <input type="password" id="pwLblGd" className="inp-box" placeholder="비밀번호" />
                  </div>
                  <p className="error-msg">{errorMsg}</p>
              </div>
              <div className="login-chk-box">
                <div className="inp-chk-box">
                  <input type="checkbox" id="chkChrGd" className="inp-chk" onChange={(e) =>setUserIdSave(e.target.checked)}/>
                  <label htmlFor="chkChrGd">아이디 저장</label>
                </div>
                <button className="btn-login" onClick={loginFn}>로그인</button>
              </div>
              <ul className="underline-text-box">
                <li><a href="#none">아이디찾기</a></li>
                <li><a href="#none">비밀번호찾기</a></li>
                <li><a href="/join">회원가입</a></li>
              </ul>
            </div>
            <button className="btn-popup-close login-close" onClick={close}>닫기</button>
          </div>
        </div>
      </div>
      ) : null}
    </div>
   )
}
