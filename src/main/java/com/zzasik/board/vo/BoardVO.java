package com.zzasik.board.vo;

import java.sql.Date;
import java.sql.Timestamp;

import org.springframework.stereotype.Component;

@Component("BoardVO")
public class BoardVO {
	private String user_id;
	private int board_code;
	private String board_title;
	private String board_content;
	private String meal_type;
	private int board_price;
	private String teacher_name;
	private String imageFilename;
	private String teacher_id;
	private Timestamp writedate;
	
	
	
	public Timestamp getWritedate() {
		return writedate;
	}
	public void setWritedate(Timestamp writedate) {
		this.writedate = writedate;
	}
	public String getTeacher_id() {
		return teacher_id;
	}
	public void setTeacher_id(String teacher_id) {
		this.teacher_id = teacher_id;
	}
	public String getImageFilename() {
		return imageFilename;
	}
	public void setImageFilename(String imageFilename) {
		this.imageFilename = imageFilename;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public int getBoard_code() {
		return board_code;
	}
	public void setBoard_code(int board_code) {
		this.board_code = board_code;
	}
	public String getBoard_title() {
		return board_title;
	}
	public void setBoard_title(String board_title) {
		this.board_title = board_title;
	}
	public String getBoard_content() {
		return board_content;
	}
	public void setBoard_content(String board_content) {
		this.board_content = board_content;
	}
	public String getMeal_type() {
		return meal_type;
	}
	public void setMeal_type(String meal_type) {
		this.meal_type = meal_type;
	}
	public int getBoard_price() {
		return board_price;
	}
	public void setBoard_price(int board_price) {
		this.board_price = board_price;
	}
	public String getTeacher_name() {
		return teacher_name;
	}
	public void setTeacher_name(String teacher_name) {
		this.teacher_name = teacher_name;
	}
	
	
	public BoardVO() {
		// TODO Auto-generated constructor stub
	}
	public BoardVO(String user_id, int board_code, String board_title, String board_content, String meal_type,
			int board_price, String teacher_name) {
		super();
		this.user_id = user_id;
		this.board_code = board_code;
		this.board_title = board_title;
		this.board_content = board_content;
		this.meal_type = meal_type;
		this.board_price = board_price;
		this.teacher_name = teacher_name;
	}
	
	
	
	

	
	
}
