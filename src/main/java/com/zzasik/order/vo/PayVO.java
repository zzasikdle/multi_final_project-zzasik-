package com.zzasik.order.vo;

import java.sql.Date;

import org.springframework.stereotype.Component;

@Component("payVO")
public class PayVO {
	private Date pay_time;
	private String user_id;
	private int order_code;
	
	public Date getPay_time() {
		return pay_time;
	}
	public void setPay_time(Date pay_time) {
		this.pay_time = pay_time;
	}
	public String getUser_id() {
		return user_id;
	}
	public void setUser_id(String user_id) {
		this.user_id = user_id;
	}
	public int getOrder_code() {
		return order_code;
	}
	public void setOrder_code(int order_code) {
		this.order_code = order_code;
	}
	
}
