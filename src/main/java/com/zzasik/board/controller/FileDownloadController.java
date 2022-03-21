package com.zzasik.board.controller;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@Controller
public class FileDownloadController {
	private static final String ARTICLE_IMAGE_REPO = "/usr/local/tomcat/apache-tomcat-8.5.76/webapps/zzasic/board_image";
	//@RequestMapping("/download")
	@GetMapping("/download")
	protected void download(@RequestParam("board_code") String board_code,@RequestParam("imageFilename") String imageFilename,
							
			                 HttpServletResponse response)throws Exception {
		//System.out.println("dddd:" + imageFileName + "  " + articleNO);
		OutputStream out = response.getOutputStream();
		String downFile = ARTICLE_IMAGE_REPO + "/" +board_code+"/"+ imageFilename;
		System.out.println("downFile: " + downFile);
		File file = new File(downFile);
 
		response.setHeader("Cache-Control", "no-cache");
		response.addHeader("Content-disposition", "attachment; fileName=" + imageFilename);
		FileInputStream in = new FileInputStream(file);
		byte[] buffer = new byte[1024 * 8];
		while (true) {
			int count = in.read(buffer); 
			if (count == -1) 
				break;
			out.write(buffer, 0, count);
		}
		in.close();
		out.close();
	}

}