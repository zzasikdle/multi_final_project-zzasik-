package com.zzasik.member.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;

import com.zzasik.member.vo.AddressVO;
import com.zzasik.member.vo.MemberVO;

@Repository
@Mapper
public interface MemberDAO {
	
	public MemberVO login(MemberVO memberVO) throws DataAccessException;
	
	public int insertMember(MemberVO memberVO) throws Exception;
	
	public int insertAddress(MemberVO memberVO) throws Exception;
	
	public int updateAddress(AddressVO addressVO) throws Exception;
	
	public int addAddress(AddressVO addressVO) throws Exception;
	
	public int deleteAddress(AddressVO addressVO) throws Exception;
	
	public int findMemberById(String user_id) throws DataAccessException;
	
	public MemberVO findPasswordById(MemberVO memberVO) throws DataAccessException;
	
	public int deleteId(MemberVO memberVO) throws Exception;
	
	public int modMemberName(MemberVO memberVO) throws Exception;

	public int modMemberPhone(MemberVO memberVO) throws Exception;
	
	public List listAddress(MemberVO memberVO) throws DataAccessException;
	
	public AddressVO getAddress(MemberVO memberVO) throws DataAccessException;
	
	public void modSurveyCode(MemberVO memberVO) throws Exception;
	
}
