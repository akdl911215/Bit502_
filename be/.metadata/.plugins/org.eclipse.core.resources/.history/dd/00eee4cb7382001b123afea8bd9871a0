package com.example.demo.bbs.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "boards")
public class Board {
	
	@Id
	@GeneratedValue
	
	@Column(name = "board_name")
	private long boardName;
	
	@Column(name = "title")
	private String title;
	
	@Column(name = "writer")
	private String writer;
	
	@Column(name = "reg_data")
	private long regDate;
	
	@Column(name = "view_count")
	private long viewCount;
}
