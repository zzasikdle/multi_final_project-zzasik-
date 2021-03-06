package com.zzasik.board.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.zzasik.board.dao.BoardDAO;
import com.zzasik.board.vo.BoardVO;


@Service
public class BoardServiceimpl implements BoardService {
 
	@Autowired
	private BoardDAO boardDAO;
	

	public BoardServiceimpl() {
		
	}

	@Override
	public List<BoardVO> listBoards() throws Exception {
		List<BoardVO> BoardList = boardDAO.selectAllBoardsList();
		return BoardList;
	}
	
	
	
	@Override 
	public int addNewBoard(Map boardMap) throws Exception {
		int board_code = boardDAO.selectNewBoardCode();
		boardMap.put("board_code", board_code);
		 boardDAO.addNewBoard(boardMap);
		 return board_code;
		
	}
	
	@Override
	public BoardVO viewBoard(int board_code) throws Exception {
			BoardVO boardvo =boardDAO.selectBoard(board_code);
		return boardvo;
	}
	
	@Override
	public void joinBoard(Map joinMap) throws Exception {
		boardDAO.joinBoard(joinMap);
		
	}
	
	@Override
	public List<BoardVO> viewTeacherBoard(String user_id) throws Exception {
		List<BoardVO> TeacherList =boardDAO.selectTeacherBoard(user_id);
		return TeacherList;
	}
	
	
	public void delBoard(Map delMap) throws Exception {	
		boardDAO.delBoard(delMap);
	}
	
	
	@Override
	public void modifyBoard(Map boardMap) throws Exception {
		boardDAO.modifyBoard(boardMap);
		
	}
	
	
	@Override
	public List<BoardVO> TeacheruserList(int board_code) throws Exception {
		List<BoardVO> userList = boardDAO.SignuserList(board_code);
		return userList;
	}
	
	@Override
	public void suganginsert(Map joinMap) throws Exception {
		System.out.println("----------------Service ���� -------------");
		boardDAO.suganginsert(joinMap);
		
	}
	
	
	@Override
	public int joincheck(Map checkmap) throws Exception {
		int joinchk =boardDAO.countJoinUser(checkmap);
		
		return joinchk;
		
	}
	
	@Override
	public List<BoardVO> CoachingList(int board_code) throws Exception {
		List<BoardVO> coachingUserList = boardDAO.coachingList(board_code);
		return coachingUserList;
	}
	
	
	
	
	@Override
	public List<BoardVO> userdetailList(Map map) throws Exception {
		List<BoardVO> userdetailList = boardDAO.userlist(map);
		return userdetailList; 
	}
	
	
	@Override
	public void addcoachingAnswer(Map CoachingMap) throws Exception {
		boardDAO.addCoachingAnswer(CoachingMap);
		
	}

	@Override
	public List<BoardVO> getUserBoardList(String user_id) throws Exception {
		
		return boardDAO.selectUserBoardList(user_id);
		
	}

	@Override
	public List<BoardVO> getCoachingContents(Map map) throws Exception {
		return boardDAO.selectCoachings(map);
	}

	@Override
	public BoardVO getStartDate(Map map) throws Exception {
		return boardDAO.getStartDate(map);
	}
	
	@Override
	public void addSeocndcoachingAnswer(Map CoachingMap) throws Exception {
		boardDAO.addSecondCoachingAnswer(CoachingMap);
		
	}

	@Override
	public void sendMessageToCoach(Map map) throws Exception {
		boardDAO.updateUserAnswer(map);
	}
	
	
	@Override
	public List<BoardVO> getuserMessage(Map map) throws Exception {
		
		return boardDAO.getUserMessage(map);
	}
	
}// end class() 