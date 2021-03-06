package com.zzasik.member.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.zzasik.member.dao.MemberDAO;
import com.zzasik.member.vo.AddressVO;
import com.zzasik.member.vo.MemberVO;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberDAO memberDAO;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public MemberServiceImpl() {
		
	}
	/* 로그인 */
	@Override
	public MemberVO login(MemberVO memberVO) throws Exception {
		
		return memberDAO.login(memberVO);
	}
	
	/* 회원 가입 */
	
	@Override
	public int insertMember(MemberVO memberVO) throws Exception {
		
		
		// 비밀번호 해싱
		String user_pwd = memberVO.getUser_pwd();
		String encodePassword = passwordEncoder.encode(user_pwd);
		
		memberVO.setUser_pwd(encodePassword);
		
		return memberDAO.insertMember(memberVO);
	}
	
	/* 배송지 리스트 저장 ( 회원 가입 시 기본 저장 되는 로직 ) */
	
	@Override
	public int insertAddress(MemberVO memberVO) throws Exception {
		
		return memberDAO.insertAddress(memberVO);
	}
	
	/* 배송지 리스트 저장 ( 정보 수정에서 배송지 추가 시 저장 되는 로직 ) */
	
	@Override
	public int addAddress(AddressVO addressVO) throws Exception {
		
		return memberDAO.addAddress(addressVO);
	}
	
	/* 배송지 리스트 저장 ( 정보 수정에서 배송지 추가 시 저장 되는 로직 ) */
	
	@Override
	public int updateAddress(AddressVO addressVO) throws Exception {
		
		return memberDAO.updateAddress(addressVO);
	}
	
	/* 배송지 삭제 */
	
	@Override
	public int deleteAddress(AddressVO addressVO) throws Exception {
		return memberDAO.deleteAddress(addressVO);
	}
	
	
	/* 아이디 중복 체크 */
	@Override
	public int findMemberById(String user_id) throws Exception {
		
		return memberDAO.findMemberById(user_id);
	}
	
	/* 해시 비밀번호 가져오기*/
	@Override
	public MemberVO findPasswordById(MemberVO memberVO) throws Exception {
		
		return memberDAO.findPasswordById(memberVO);
	}
	
	/* 회원 정보 수정 ( 이름 ) */

	@Override
	public int modMemberName(MemberVO memberVO) throws Exception {
	
		return memberDAO.modMemberName(memberVO);
	}
	
	/* 회원 정보 수정 ( 휴대전화 ) */

	@Override
	public int modMemberPhone(MemberVO memberVO) throws Exception {
	
		return memberDAO.modMemberPhone(memberVO);
	}
	
	/* 회원 탈퇴 */
	
	@Override
	public int deleteId(MemberVO memberVO) throws Exception {
		return memberDAO.deleteId(memberVO);
	}
	
	
	/* 배송지 리스트 가져오기 */
	@Override
	public List<AddressVO> listAddress(MemberVO memberVO) throws Exception {
		List<AddressVO> addressList = memberDAO.listAddress(memberVO);
		return addressList;
	}
	
	/* 배송지 리스트 가져오기 ( 배송지 수정 할 때 가져오기 ) */
	@Override
	public AddressVO getAddress(MemberVO memberVO) throws Exception {
		AddressVO addressVO = memberDAO.getAddress(memberVO);
		return addressVO;
	}
	@Override
	public void modSurveyCode(MemberVO memberVO) throws Exception {
		
		memberDAO.modSurveyCode(memberVO);
		
	}
}
