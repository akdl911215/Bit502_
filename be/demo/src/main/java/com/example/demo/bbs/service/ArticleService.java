package com.example.demo.bbs.service;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.bbs.domain.Article;

interface UserCustomService{
	
}

public interface ArticleService extends JpaRepository<Article, Long>,
										UserCustomService{

}
