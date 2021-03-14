package com.example.demo.bbs.domain;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class ArticleDto implements Serializable {
	private static final long serialVersion = 1L;
	
	private long articleNo;
	private String articleName;
	private long clickNo;
	private String regDate; 

}
