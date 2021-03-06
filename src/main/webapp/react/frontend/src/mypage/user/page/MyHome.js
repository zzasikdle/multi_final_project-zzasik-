/*eslint-disable*/


import './MyHome.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from "../../../config";

//jquery 추가
import $ from "jquery";

/* 마이페이지 */
export default function MyHome(){
    
    const user_id = sessionStorage.getItem("user_id");
    const user_name = sessionStorage.getItem("user_name");
    const phone = sessionStorage.getItem("phone");

    var userType;
    if(sessionStorage.getItem('classification')==1) userType = "회원";
    else userType = "코치";


    const [modalOn , setModalOn] = useState(false);
    const onOpenModal = ()=>{
        setModalOn(!modalOn);
    }

    const deleteId = async() => {
        
        await axios
         .post(baseUrl + '/member/deleteId',  {user_id:user_id})
         .then( (response) => {
             sessionStorage.removeItem('user_name');
             sessionStorage.removeItem('success');
             sessionStorage.removeItem('user_id');
             sessionStorage.removeItem('phone');
             sessionStorage.removeItem('classification');
             sessionStorage.removeItem('survey_code');
             alert('탈퇴가 완료 되었습니다. 그 동안 감사했습니다.');
            document.location.href='/member/login';
         })
         .catch((error)=> {
            console.log(error);
        })

    }

    const Modal  = () => {
        

        return (
            
            <div className="modal"> 
                        <div className="bg"></div>
                         <div className="modalBox"> 
                            <p> 회원 탈퇴 하시겠습니까? </p> 
                            <button className="closeBtn" onClick={deleteId}>예</button> 
                            <button className="closeBtn" onClick={onOpenModal}>아니오</button> 
                        </div> 
            </div>
          )
    }

//주소찾기 모달창
$(function(){ 
    //주소찾기 버튼 클릭시, 모달창 띄움
    $("#delAccoutBtn").on("click",function(){
        $(".j_modal").attr("style","display:block");
        $(".modal_content").css({
            "top": (($(window).height()-$(".modal_content").outerHeight())/2+$(window).scrollTop())+"px",
            "left": (($(window).width()-$(".modal_content").outerWidth())/2+$(window).scrollLeft())+"px"
            //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정     
        }); 
    });
    
    $("#btn_close_modal").on("click",function(){
        $(".j_modal").attr("style","display:none");
        
    });
});
    
    return (
        <div>
            <h1 className="myhome-title">마이페이지</h1>
            <div className='content'>
            <div style={{display:"flex",flexDirection:"row"}}>
                <div className='box profile'>
                    <div className='box_header'>
                        <h2>내 정보</h2>
                        <Link to='/myhome/edit' className='manage'>내 정보 수정<img className="arrow" src='/img/arrow.png'/></Link>
                    </div>
                    <div className="profile_content">
                        <img src='/img/profile.png'/>
                        <p style={{fontSize:17,fontWeight: 600,margin:20}}>{user_name}</p>
                        <span>{userType}님 반갑습니다!</span>
                    </div>
                </div>
                <div>
                    <div className='box' style={{width:300,height:170,display:"inline-block",padding:30}}>
                        <div className='shortinfo'>
                            <div className='shortinfo-p'><p>회원 아이디</p><p>회원 이름  &ensp;</p><p>휴대전화&emsp;</p></div>
                            <div><p>{user_id}</p><p>{user_name}</p><p>{phone}</p></div>
                        </div>
                    </div>
                    <div className='box' style={{width:300,height:150,display:"inline-block",marginTop:30}}>
                        <div className='box_header'>
                                <h2>회원 탈퇴</h2>
                        </div>
                    <button className='delAccount' id="delAccoutBtn"  >회원 탈퇴</button>
                    </div>
                </div>
                {/* {modalOn ? <Modal ></Modal> : ''} */}
                
                <div class = "j_modal">
                    <div class= "delAccountContent">
                        <div class= "delAccountTitle">
                            <h3 style={{color:"black",fontSize:18,margin:20}}>탈퇴 하시겠습니까?</h3>
                        </div>
                        <button className="btn_model" onClick={deleteId} >탈퇴</button>
                        <button className="btn_model" id="btn_close_modal">취소</button>
                    </div>	
                    <div class="modal_layer"></div>
                </div>
                </div>
            </div>
        </div>
    );

}