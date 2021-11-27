package com.curso.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.curso.crud.model.Carrinho;

public interface CarrinhoRepository extends JpaRepository<Carrinho, Long> {

}
