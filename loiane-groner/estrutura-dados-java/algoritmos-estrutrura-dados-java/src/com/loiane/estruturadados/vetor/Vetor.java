package com.loiane.estruturadados.vetor;

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
	
	public void adiciona(String elementos) throws Exception{
		if(this.tamanho < this.elementos.length) {
			this.elementos[this.tamanho] = elementos;
			this.tamanho++;
		}else {
			throw new Exception("O vetor já está cheio! Não é possível adicionar elementos nele!");
		}
	}
	
	/*public boolean adiciona(String elementos){
		if(this.tamanho < this.elementos.length) {
			this.elementos[this.tamanho] = elementos;
			this.tamanho++;
			return true;
		}
		return false;
	}*/
}
