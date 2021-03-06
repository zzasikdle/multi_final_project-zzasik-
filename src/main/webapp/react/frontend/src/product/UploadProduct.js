/*eslint-disable*/


import './UploadProduct.css';
import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { baseUrl } from "../config";
import FilePreview from "./FilePreview";
import InputFile from "./InputFile";

const UploadProduct = ( ) => {
    const history = useHistory();

    const [pro_name, setName] = useState();
    const [pro_class, setClass] = useState();
    const [pro_available, setAvail] = useState();
    const [pro_price, setPrice] = useState();
    const [pro_detail, setDetail] = useState();
    const [pro_img, setImg] = useState();

    const [image, setImage] = useState('');
    
    const onLoadFile = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    }

    const onDeleteFile = () => {
        URL.revokeObjectURL(image);
        setImage('');
        setImg('');
    };

    const uploadFile = (file) => {
        console.log("file.url : " + file.url);
        setImg(file.url);
    }

    const handleWrite = async( ) => {
        const formData = new FormData();
        formData.append("pro_name", pro_name);
        formData.append("pro_class", pro_class);
        formData.append("pro_available", pro_available);
        formData.append("pro_price", pro_price);
        formData.append("pro_detail", pro_detail);
        formData.append("pro_img", pro_img);
    
        await axios
        .post(baseUrl+'/product/addProduct', formData,
            {headers : {"Content-Type":"multipart/form-data; boundary=${formData._boundary"}})
        .then((response) => {
            alert(response.data.message);
            history.push(response.data.path);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <div id="con">
            <h1>상품 등록</h1>
            <hr />
            <table>
                <tbody>
                    <tr>
                        <td>상품 이미지</td>
                    </tr>
                    <tr id="imagetr">
                        <td style={{width:"450px", height:"450px", border:"3px solid gray"}}><FilePreview image={image} /></td>
                        <td style={{width:"400px"}}><InputFile name="pro_img" onLoadFile={onLoadFile} onFileChange={uploadFile} /></td>
                        <td><input type="button" value="삭제하기" onClick={onDeleteFile} /></td>
                    </tr>
                    <tr>
                        <td className='title'>상품명</td>
                        <td><input type="text" name="pro_name" onChange={(e) => {setName(e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='title'>카테고리</td>
                        <td>
                            <select onChange={(e) => setClass(e.target.value)} style={{width:"139px", height:"46px"}}>
                                <option value="" selected>선택해주세요</option>
                                <option value="다이어트식단">다이어트식단</option>
                                <option value="저염식">저염식</option>
                                <option value="고단백">고단백</option>
                                <option value="저탄고지">저탄고지</option>
                                <option value="40~50대 맞춤식단">40~50대 맞춤식단</option>
                                <option value="60대 맞춤식단">60대 맞춤식단</option>
                                <option value="저지방">저지방</option>
                                <option value="당뇨식">당뇨식</option>
                                <option value="고혈압식단">고혈압식단</option>
                                <option value="저혈압식단">저혈압식단</option>
                                <option value="빈혈맞춤식단">빈혈맞춤식단</option>
                                <option value="신장질환식단">신장질환식단</option>
                                <option value="고칼로리식단">고칼로리식단</option>
                                <option value="저칼로리식단">저칼로리식단</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td className='title'>가격</td>
                        <td><input type="text" name="pro_price" onChange={(e) => {setPrice(e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='title'>수량</td>
                        <td><input type="text" name="pro_available" onChange={(e) => {setAvail(e.target.value)}} /></td>
                    </tr>
                    <tr>
                        <td className='title' style={{height:"400px", lineHeight:"400px"}}>설명</td>
                        <td><textarea rows="10" cols="65" name="pro_detail" onChange={(e) => {setDetail(e.target.value)}}></textarea></td>
                    </tr>
                    <tr>
                        <td>
                            <Link to="/product" onClick={handleWrite}><button type='button' style={{width:"70px", marginRight:"20px", border:"1px solid darkgray"}}>글쓰기</button></Link>
                            <Link to="/product"><button type="button" style={{width:"70px", marginRight:"20px", border:"1px solid darkgray"}}>취소</button></Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UploadProduct;