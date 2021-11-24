package com.curso.crud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.curso.crud.model.Produtos;


@Repository
public interface ProdutosRepository extends JpaRepository<Produtos, Long>{

}
