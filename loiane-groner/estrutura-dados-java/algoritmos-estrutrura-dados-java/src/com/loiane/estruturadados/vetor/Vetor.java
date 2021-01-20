package com.loiane.estruturadados.vetor;

import java.util.Arrays;

public class Vetor {
	
	private String[] elementos;
	private int tamanho;
	
	public Vetor(int capacidade){
		this.elementos = new String[capacidade];
	}
	
	/*public void adiciona(String elementos) {
		for (int i = 0; i < this.elementos.length; i++) {
			if(this.elementos[i] == null) {
				this.elementos[i] = elementos;
				break;
			}
		}
	}*/
	
	/*public void adiciona(String elementos) throws Exception{
		if(this.tamanho < this.elementos.length) {
			this.elementos[this.tamanho] = elementos;
			this.tamanho++;
		}else {
			throw new Exception("O vetor já está cheio! Não é possível adicionar elementos nele!");
		}
	}*/
	
	public boolean adiciona(String elementos){
		if(this.tamanho < this.elementos.length) {
			this.elementos[this.tamanho] = elementos;
			this.tamanho++;
			return true;
		}
		return false;
	}
	
	public String busca(int posicao) {
		if(!(posicao >= 0 && posicao < this.tamanho)) {
			throw new IllegalArgumentException("Posicao inválida!");
		}
		return this.elementos[posicao];
	}
	
	public int tamanho() {
		return this.tamanho;
	}

	@Override
	public String toString() {
		
		StringBuilder s = new StringBuilder();
		s.append("[");
		
		for(int i = 0; i < this.tamanho-1; i++) {
			s.append(this.elementos[i]);
			s.append(", ");
		}
		
		if(this.tamanho>0) {
			s.append(this.elementos[this.tamanho-1]);
			
		}
		
		s.append("]");
		return s.toString();
	}
}
