/*eslint-disable*/
import { baseUrl } from '../../../config';
import axios from 'axios';
import { useRef, useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { Link, useParams } from "react-router-dom";
import './UpdateAddress.css';

//jquery 추가
import $ from "jquery";

const UpdateAddressAdmin = () => {
    

    const user_id = sessionStorage.getItem("user_id");

    const {params} = useParams();

    /* 휴대전화 */
    const [ codeNo , setCodeNo] = useState('');
    const [ secondPhone , setSecondphone] = useState('');
    const [ thirdPhone , setThirdphone] = useState('');
    

    /* 서버로 넘겨줄 값. */

    const [ phone , setPhone] = useState('');

    const addr_title = useRef();
    const addr_Revisedreceiver = useRef();
    
    //주소찾기 모달창
    $(function() {
        //주소찾기 버튼 클릭 시 , 모달 창 띄움.
        $("#addressCodeBtn").on("click" , function () {
            $(".j_modal").attr("style" , "display:block");
            $(".modal_content").css({
            "top": (($(window).height()-$(".modal_content").outerHeight())/2+$(window).scrollTop())+"px",
            "left": (($(window).width()-$(".modal_content").outerWidth())/2+$(window).scrollLeft())+"px"
            });
        });

        $("#btn_close_modal").on("click", function(){
            $(".j_modal").attr("style","display:none"); //모달숨기기
            onChangeOpenPost(); // 주소api닫기
        })
    });

    

    const handleAddress = () => {
        // id 가 zipcode 인 input을 가져와서 value를 addr_1로  바꿔주기.
        zoneRef.current.value = isZoneCode;
        addRef.current.value= isAddress;
    }


    /* 주소 검색 api */

    const addRef = useRef(); //주소
    const zoneRef = useRef(); //우편번호
    const addDeRef = useRef(); //상세주소

    const [isAddress, setIsAddress] = useState("");
    const [isZoneCode, setIsZoneCode] = useState();

    const [isOpenPost, setIsOpenPost] = useState(false);

    const onChangeOpenPost = () => {
        setIsOpenPost(!isOpenPost);
      };

      const handleComplete = (data) => {
        let fullAddress = data.address;
        let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    setIsZoneCode(data.zonecode); // 우편번호 삽입.
    setIsAddress(fullAddress); // 전체 주소.
    setUserAddress(true); // 주소 입력 완료.
    setIsOpenPost(false); // 주소 클릭 시팝업 창 자동 닫힘. 
    $(".j_modal").attr("style","display:none"); //모달창 닫힘.
  };

  const postCodeStyle = {
    display: "block",
    margin: "auto",
    width: "400px",
    height: "500px",
    padding: "7px",
  };

    //유효성 검사 ( 각 칸을 모두 적었는지 )
    const [isUserAddress ,setUserAddress] = useState(false);


    // 전화번호
    
    const handleCodeNo = (e) => {
        setCodeNo(e.target.value); // 지역번호 저장.
    }

    const handleSecondPhone = (e) => {
        setSecondphone(e.target.value);
    }

    const handleThirdPhone = (e) => {
        setThirdphone(e.target.value);
    }
    
    /* 관리자가 회원 배송지 정보 수정 */
    // function addAddressAdmin(e) {

    //     // MemberList 에서 user_id 인자값을 props로 넘겨주면 그걸 받아다가 쓰기.
        
    //     // console.log({user_id_admin});
    //     // console.log({addr_receiver_admin});
    //     console.log("관리자 진입");
        
    //     // 인자 값 추출 하기.  : Link 로 인자 2개 보냈는데, useParams로는 1개밖에 받아오지 않아서 방법을 못 찾고 강제로 for문 돌려 찢어냄.220317
    //     let user_id_admin = "";
    //     let addr_receiver_admin="";
        
    //     var i;
    //     for( i = 0  ; i<params.length ; i++){
    //         if( params.substring(i,i+1) === "_"){
    //             user_id_admin  = params.substring(0,i);
    //             addr_receiver_admin = params.substring(i+1,params.length);
    //             console.log(user_id_admin);
    //             console.log(addr_receiver_admin);
    //             return;
    //         }
    //     }

    //     const addr_phone = codeNo + secondPhone + thirdPhone ; 

    //     const addAddressAdmin = async() => {
    //         await axios
    //             .post(baseUrl + '/member/updateAddress' , 
    //                 {
    //                     user_id:user_id_admin, addr_title: addr_title.current.value,
    //                     addr_receiver : addr_receiver_admin, // 원래 receiver , 이걸로 구별해준다.
    //                     addr_Revisedreceiver :addr_Revisedreceiver.current.value,  // 바뀔 수령인
    //                     addr_phone : addr_phone,
    //                     addr_1 : zoneRef.current.value,
    //                     addr_2 : addRef.current.value , addr_3: addDeRef.current.value
    //                 }
    //             )
    //             .then( (response) => {
    //                 alert(response.data.message);
    //                 document.location.href='/admin';    
    //             }
    //             )
    //             .catch((error) => {
    //                 console.log(error);
    //             })
    //     }
    //     addAddressAdmin();
    // }

    function addAddress(e) {
        
        let user_id_admin = "";
        let addr_receiver_admin="";
        var i;
        for( i = 0  ; i<params.length ; i++){
            if( params.substring(i,i+1) === "_"){
                addr_receiver_admin  = params.substring(0,i);
                user_id_admin = params.substring(i+1,params.length);
                console.log(user_id_admin);
                console.log(addr_receiver_admin);
                //여기에 return 을 쓰니까 당연 함수가 종료되서 밑에가 안 나아가서 서버로 요청이 안 가지..바보야
            }
        }
        const addr_phone = codeNo + secondPhone + thirdPhone ; 
        
        const addAddress = async() => {
            
            await axios
                .post(baseUrl + '/member/updateAddress', 
                    {   
                        user_id:user_id_admin, addr_title: addr_title.current.value,
                        addr_receiver : addr_receiver_admin, // 원래 receiver , 이걸로 구별해준다.
                        addr_Revisedreceiver :addr_Revisedreceiver.current.value,  // 바뀔 수령인
                        addr_phone : addr_phone,
                        addr_1 : zoneRef.current.value,
                        addr_2 : addRef.current.value , addr_3: addDeRef.current.value
                    })
                .then( (response) => {
                    alert(response.data.message);
                    document.location.href='/admin';
                    }
                )
                .catch((error) => {
                    console.log(error);
                })
        }
        
        // if(check.innerHTML ==="✅" && pwdCorrect.innerHTML === "✅ 비밀번호가 일치 합니다."){
        //     handleJoin(); // 회원 가입 승인.
        // }else{
        //     alert('필수 정보를 입력 해주세요.');
        // }

        addAddress(); // 함수 실행.
    } 

    return (
        <>
            <div className='box container Address' >
                <div className="setting_popup_title">
                    <h2 className="h_title">배송지 정보 상세</h2>
                </div>

                <table className="tbl_delivery_info">
                    <caption>
                        <span className="blind">배송지 정보 입력 폼</span>
                    </caption>
                    <colgroup>
                        <col className="cell_title"></col>
                        <col></col>
                    </colgroup>
                        <tbody>
                            <tr>
                                <th className="cell_title">배송지명</th>
                                <td>
                                    <span className="_editable_input _input basic_input focus" style={{width: "133px"}}>
                                        <label for="addressName" className="lb_text blind">배송지명 입력</label>
                                        <input type="text" id="addressName" className="ip_text" ref={addr_title} maxlength="150"></input>
                                        <input type="hidden" id="hash" className="ip_text" value></input>
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="cell_title" >수령인
                                    <em className="mark_necessity" >
                                        <span className="blind">필수입력</span>
                                    </em>
                                </th>
                                <td>
                                    <span className="_editable_input _input basic_input" style={{width: "133px"}}>
                                        
                                        <input type="text" id="receiver" className="ip_text" ref={addr_Revisedreceiver} maxlength="150" ></input>
                                    </span>
                                </td>
                            </tr>

                            <tr>
                                <th className="cell_title">주소 
                                    <em className="mark_necessity">
                                        <span className="blind">필수입력</span>
                                    </em>
                                </th>
                                <td>
                                    <span className="_input basic_input" style={{width:"64px"}}>
                                        <label for="zipCode" className="lb_text blind" >우편번호 입력</label>
                                        <input type="text" id="zipCode" className="ip_text" disabled="disabled" value={isZoneCode}
                                            ref={zoneRef} readOnly></input>
                                    </span>

                                    <button className="_search setting_btn green" id="addressCodeBtn" onClick={onChangeOpenPost} >주소검색</button>

                                    <p className="address_detail">
                                        <span className="_input basic_input" style={{width: "338px"}}>
                                            <label for="baseAddress" className="lb_text blind" >배송지 새주소</label>
                                            <input 
                                                type="text" id="baseAddress" className="ip_text" disabled="disabled"
                                                value={isAddress}
                                                ref={addRef}>
                                            </input> 
                                            <input type="hidden" id="roadNameAddressYn"></input>
                                        </span>
                                    </p>
                                    <p className="address_detail" >
                                        <span className="_editable_input _input basic_input" style={{width: "338px"}}>
                                            <label for="detailAddress"  className="lb_text">
                                            
                                            </label>
                                            <input type="text" id="detailAddress"  className="ip_text"  maxlength="100" ref={addDeRef} placeholder="상세 주소를 입력해주세요."></input>
                                        </span>
                                    </p>
                                </td>
                            </tr>

                            <tr>
                                <th className="cell_title">연락처
                                    <em className="mark_necessity">
                                        <span className="blind" >필수입력</span>
                                    </em>
                                </th>

                                <td>
                                    <span className="_tel1box setting_selectbox" style={{width:"68px"}}>
                                            <select className="select" onChange={handleCodeNo}>
                                                <option defaultValue >선택</option>
                                                <option value="010" >010</option>
                                                <option value="011">011</option>
                                                <option value="012" >012</option>
                                                <option value="013">013</option>
                                                <option value="02" >02</option>
                                                <option value="031">031</option>
                                                <option value="032">032</option>
                                                <option value="041" >041</option>
                                                <option value="042">042</option>
                                            </select>
                                    </span>
                                    <span className="hyphen">-</span>
                                    <span className="_editable_input" style={{width: "48px"}}>
                                        <label for="telNo1Second" className="lb_text blind">연락처 두번째자리 입력</label>
                                        <input type="text" id="telNo1Second" className="ip_text" maxlength="4" onChange={handleSecondPhone}></input>
                                    </span>
                                    <span className="hyphen">-</span>
                                    <span className="_editable_input" style={{width: "48px"}}>
                                        <label for="telNo1Third" className="lb_text blind" >연락처 세번째자리 입력</label>
                                        <input type="text" id="telNo1Third"  className="ip_text" maxlength="4"  onChange={handleThirdPhone} ></input>
                                    </span>
                                </td>
                            </tr>
                        
                        </tbody>
                </table>
                <div className="delivery_notice">
                    <p className="desc" >· 입력/수정하신 배송지는 배송지 목록에 저장됩니다.</p>
                </div>

                <div id="pop_footer">
                    <Link className="btn_model" to='/admin'>닫기</Link>
                    <button className="btn_model" onClick={addAddress}>저장</button>
            </div>
            </div>

            

            <div class ="j_modal">
            <div class="modal_content">
                <div class="modal_title">
                    <h3 style={{color:"black",fontSize:25,margin:20}}>주소 검색</h3>
                    <img className="closeBtnImg" src='/img/close.png' id="btn_close_modal" style={{width:30,height:30,marginLeft:230}}/>
                </div>
            {isOpenPost ? (
                <DaumPostcode style={postCodeStyle} autoClose onComplete={handleComplete } />
            ) : null}
            </div>
            <div class="modal_layer"></div>
        </div>
        </>
    )
}

export default UpdateAddressAdmin;