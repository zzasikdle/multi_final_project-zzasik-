package com.zzasik.board.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Repository;


import com.zzasik.board.vo.BoardVO;

@Repository
@Mapper
public interface BoardDAO { 
	
	public BoardVO writeBoard(BoardVO boardDTO) throws DataAccessException;
	public List selectAllBoardsList() throws DataAccessException;
	public BoardVO addNewBoard(Map boardMap) throws DataAccessException;
	public void joinBoard(Map joinMap) throws DataAccessException;
	public int selectNewBoardCode() throws DataAccessException;
	public BoardVO selectBoard(int board_code) throws DataAccessException;
	public List selectTeacherBoard(String user_id) throws DataAccessException;
	public void delBoard (Map delMap) throws DataAccessException;
	public void modifyBoard(Map boardMap) throws DataAccessException;
	public List SignuserList(int board_code) throws DataAccessException;
	public void suganginsert(Map joinMap) throws DataAccessException;
	public int countJoinUser(Map checkmap) throws DataAccessException;
	public List coachingList(int board_code) throws DataAccessException;
	public List userlist(Map map) throws DataAccessException;
	public void addCoachingAnswer(Map CoachingMap)throws DataAccessException;
	public void addSecondCoachingAnswer(Map CoachingMap)throws DataAccessException;
	public List<BoardVO> selectUserBoardList(String user_id) throws DataAccessException;
	public List<BoardVO> selectCoachings(Map map) throws DataAccessException;
	public List<BoardVO> getUserMessage(Map map)throws DataAccessException;
	public BoardVO getStartDate(Map map) throws DataAccessException;
	public void updateUserAnswer(Map map) throws DataAccessException;

	
	
	
	
}
