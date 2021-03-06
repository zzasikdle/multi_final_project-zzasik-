package com.zzasik.member.service;

import java.util.List;

import com.zzasik.member.vo.AddressVO;
import com.zzasik.member.vo.MemberVO;

public interface MemberService {

	public MemberVO login(MemberVO memberVO) throws Exception;
	
	public int insertMember(MemberVO memberVO) throws Exception;

	public int insertAddress(MemberVO memberVO) throws Exception;
	
	public int updateAddress(AddressVO addressVO) throws Exception;
	
	public int addAddress(AddressVO addressVO) throws Exception;
	
	public int deleteAddress(AddressVO addressVO) throws Exception;
	
	public int deleteId(MemberVO memberVO) throws Exception;
	
	public int findMemberById(String user_id) throws Exception;
	
	public MemberVO findPasswordById(MemberVO memberVO) throws Exception;
	
	public int modMemberName(MemberVO memberVO) throws Exception;
	
	public int modMemberPhone(MemberVO memberVO) throws Exception;
	
	public List<AddressVO> listAddress(MemberVO memberVO) throws Exception;
	
	public AddressVO getAddress(MemberVO memberVO) throws Exception;
	
	public void modSurveyCode(MemberVO memberVO) throws Exception;
	
}
