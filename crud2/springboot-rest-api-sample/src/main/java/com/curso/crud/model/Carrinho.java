package com.curso.crud.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Carrinho implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	private int idImagem;
	private int qntProduto;
	private String nomeProduto;
	private double precoProduto;
	private double descontoProduto;
	
	
	
	public int getQntProduto() {
		return qntProduto;
	}
	public void setQntProduto(int qntProduto) {
		this.qntProduto = qntProduto;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public int getIdImagem() {
		return idImagem;
	}
	public void setIdImagem(int idImagem) {
		this.idImagem = idImagem;
	}
	public String getNomeProduto() {
		return nomeProduto;
	}
	public void setNomeProduto(String nomeProduto) {
		this.nomeProduto = nomeProduto;
	}
	public double getPrecoProduto() {
		return precoProduto;
	}
	public void setPrecoProduto(double precoProduto) {
		this.precoProduto = precoProduto;
	}
	public double getDescontoProduto() {
		return descontoProduto;
	}
	public void setDescontoProduto(double descontoProduto) {
		this.descontoProduto = descontoProduto;
	}

}