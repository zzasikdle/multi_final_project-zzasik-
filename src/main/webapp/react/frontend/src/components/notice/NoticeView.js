import axios from "axios";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NoticeView = () => {
    const [notice,setNotice] = useState({});
    const {notice_code} = useParams();
    
    //글 서버에서 가져오기
    useEffect(()=>{
        axios 
        .get('/notice/view',{
            params:{
              notice_code: notice_code
            }
        })
        .then((response)=>{
            setNotice(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[]);

    //목록 클릭 시 작동
    const onClickList = () => {
        window.location.href="/notice";
    };

    //삭제 클릭시 작동(관리자)
    const onClickDel = () => {
        if(window.confirm( "공지사항을 삭제하시겠습니까?" )){
            axios 
            .get('/notice/del',{
                params:{
                notice_code: notice_code
                }
            })
            .then(()=>{
                alert("공지사항이 삭제되었습니다.");
                window.location.href="/notice";

            })
            .catch((error) => {
                console.log(error);
                
            })
        }else return false;
    }

    //수정 클릭 시 작동
    const onClickEdit = () => {
        window.location.href=`/notice/edit/{notice_code}`;
    };

    return<div className="notice-container">
            <div className='title-box'>짜식 공지사항</div>
            <div className='content'>  
            <hr style={{border:"1px solid #000000"}}/>
                <div className="view-header">
                    {notice.notice_title}
                    <div className="view-info">
                        작성자 관리자 | 작성일 {notice.notice_regdate}
                    </div>
                </div>
                <hr/>
                <div className="view-content" dangerouslySetInnerHTML={{__html: notice.notice_content}}/>
                <hr/>
                <button onClick={onClickList}>목록</button>
                <button><Link to={`/notice/edit/${notice.notice_code}`} style={{textDecorationLine:"none",color:"black"}}>수정</Link></button>
                <button onClick={onClickDel}>삭제</button>
                
            </div>
        </div>
}

export default NoticeView;