package com.curso.crud.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.curso.crud.exception.ResourceNotFoundException;
import com.curso.crud.model.Carrinho;
import com.curso.crud.model.Produtos;
import com.curso.crud.model.Usuario;
import com.curso.crud.repository.CarrinhoRepository;
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

	@Autowired
	private CarrinhoRepository carrinhoRepository;
	
	// get all produtos
	@GetMapping("/produtos")
	public List<Produtos> getAllProdutos() {
		return produtosRepository.findAll();
	}

	// create produto rest api
	@PostMapping("/produtos")
	public Produtos createProduto(@RequestBody Produtos produto) {
		return produtosRepository.save(produto);
	}

	// get produto by id rest api
	@GetMapping("/produtos/{id}")
	public ResponseEntity<Produtos> getProdutoById(@PathVariable Long id) {
		Produtos produto = produtosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto não existe id :" + id));
		return ResponseEntity.ok(produto);
	}

	// update produto rest api
	@PutMapping("/produtos/{id}")
	public ResponseEntity<Produtos> updateProduto(@PathVariable Long id, @RequestBody Produtos produtoDetails) {
		Produtos produto = produtosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto não existe id :" + id));

		produto.setNomeProduto(produtoDetails.getNomeProduto());
		produto.setDescricaoProduto(produtoDetails.getDescricaoProduto());
		produto.setPrecoProduto(produtoDetails.getPrecoProduto());
		produto.setDescontoProduto(produtoDetails.getDescontoProduto());
		produto.setIdImagem(produtoDetails.getIdImagem());

		Produtos updatedProduto = produtosRepository.save(produto);
		return ResponseEntity.ok(updatedProduto);
	}

	// delete produto rest api
	@DeleteMapping("/produtos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteProduto(@PathVariable Long id) {
		Produtos produto = produtosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto não existe id :" + id));

		produtosRepository.delete(produto);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// get all usuarios
	@GetMapping("/usuarios")
	public List<Usuario> getAllUsuarios() {
		return usuarioRepository.findAll();
	}

	// create usuario rest api
	@PostMapping("/usuarios")
	public Usuario createUsuario(@RequestBody Usuario usuario) {
		return usuarioRepository.save(usuario);
	}

	// get usuario by id rest api
	@GetMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> getUsuarioById(@PathVariable Long id) {
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Usuario não existe id :" + id));
		return ResponseEntity.ok(usuario);
	}

	// update usuario rest api
	@PutMapping("/usuarios/{id}")
	public ResponseEntity<Usuario> updateUsuario(@PathVariable Long id, @RequestBody Usuario usuarioDetails) {
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Usuario não existe id :" + id));

		usuario.setNome(usuarioDetails.getNome());
		usuario.setCpf(usuarioDetails.getCpf());
		usuario.setEmail(usuarioDetails.getEmail());

		Usuario updatedUsuario = usuarioRepository.save(usuario);
		return ResponseEntity.ok(updatedUsuario);
	}

	// delete usuario rest api
	@DeleteMapping("/usuarios/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUsuario(@PathVariable Long id) {
		Usuario usuario = usuarioRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Usuario não existe id :" + id));

		usuarioRepository.delete(usuario);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
	// create usuario rest api
	@PostMapping("/carrinho")
	public Carrinho createCarrinho(@RequestBody Carrinho carrinho) {
		return carrinhoRepository.save(carrinho);
	}
	
	// get all carrinho
	@GetMapping("/carrinho")
	public List<Carrinho> getAllCarrinho() {
		return carrinhoRepository.findAll();
	}

	// Adicionar carrinho
	@GetMapping("/carrinho/{id}")
	public void adicionarAoCarrinho(@PathVariable Long id) {
		Carrinho carrinho = new Carrinho();
		
		Produtos produto = produtosRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Produto não existe id :" + id));
		
		carrinho.setNomeProduto(produto.getNomeProduto());
		carrinho.setIdImagem(produto.getIdImagem());
		carrinho.setPrecoProduto(produto.getPrecoProduto());
		carrinho.setDescontoProduto(produto.getDescontoProduto());
		carrinho.setQntProduto(1);
		
		carrinhoRepository.save(carrinho);
		
	}
	
	
	@DeleteMapping("/carrinho/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteCarrinho(@PathVariable Long id) {
		Carrinho carrinho = carrinhoRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Carrinho não existe id :" + id));

		carrinhoRepository.delete(carrinho);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	

}
