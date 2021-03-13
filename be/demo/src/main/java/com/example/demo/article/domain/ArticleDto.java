package com.example.demo.article.domain;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data
public class ArticleDto implements Serializable{
	private static final long serialVersionUID = 1L;
	private long articNo;
	private String title;
	private String writer;
	private long regDate;
	private long viewCount;
}
