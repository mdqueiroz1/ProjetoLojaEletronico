package com.curso.crud.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.curso.crud.model.Produtos;
import com.curso.crud.model.Usuario;
import com.curso.crud.repository.ProdutosRepository;
import com.curso.crud.repository.UsuarioRepository;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class GreetingsController {
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	
	@Autowired
	private ProdutosRepository produtosRepository;
	
 
    //Cadastro de usuario
    @RequestMapping(value = "usuario/cadastro/{nome}/{email}/{cpf}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public Boolean salvarUsuario(@PathVariable String nome, 
    							 @PathVariable String cpf,
    							 @PathVariable String email){
    	
    	Usuario usuario = new Usuario();
    	
    	usuario.setNome(nome);
    	usuario.setCpf(cpf);
    	usuario.setEmail(email);
    	usuarioRepository.save(usuario);
    	
    	return  true;
    }
    
    //Listagem de usuários
    @RequestMapping(value = "usuario/listar", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<Usuario> listarTodosUsuarios(){
    	List<Usuario> usuarios = new ArrayList<>();
    	
    	usuarioRepository.findAll().forEach(usuarios::add);
    	
    	return usuarios;
    }
    
    //Deletar Usuários
    @RequestMapping(value = "usuario/deletar/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String deletarUsuario(@PathVariable Long id) {
    	usuarioRepository.deleteById(id);
    	
    	return "<h3>Usuario deletado. </h3>";
    }
    
    //Cadastro de produtos
    @RequestMapping(value = "produto/nome/{nome}/descricao/{descricao}/preco/{preco}/desconto/{desconto}")
    @ResponseStatus(HttpStatus.OK)
    public String cadastrarProdutos(@PathVariable String nome, 
    								@PathVariable String descricao, 
    								@PathVariable double preco,
    								@PathVariable double desconto) {
    	
    	Produtos produto = new Produtos();
    	
    	produto.setNomeProduto(nome);
    	produto.setDescricaoProduto(descricao);
    	produto.setPrecoProduto(preco);
    	produto.setDescontoProduto(desconto);
    	
    	produtosRepository.save(produto);
    	
    	return "Produto "+nome+" cadastrado.";
    }
    
    //Listagem de produtos
    @RequestMapping(value = "produtos/listar", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public List<Produtos> listarTodosProdutos(){
    	List<Produtos> produto = new ArrayList<>();
    	
    	produtosRepository.findAll().forEach(produto::add);
    	
    	return produto;
    }
    
    //Deletar produto
    @RequestMapping(value = "produto/deletar/{id}", method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    public String deletarProduto(@PathVariable Long id) {
    	produtosRepository.deleteById(id);
    	
    	return "<h3>Produto deletado. </h3>";
    }
    
    
    @RequestMapping(value = "produto/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Produtos encontrarProduto(@PathVariable Long id) {
    	Produtos p = new Produtos();
    	
    	produtosRepository.existsById(id);
    	
    	return p;
    }
    
    
}
