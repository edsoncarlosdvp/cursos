package com.loiane.estruturadados.vetor;

import java.lang.reflect.Array;

public class Lista<T> {

	public static void main(String[] args) {
		
		private T[] elementos;
		private int tamanho;
		
		public Lista(int capacidade){
			this.elementos = (T[]) new Object[capacidade]; // TODO Solução do livro Effective Java
			this.tamanho = 0;
		}
		
		public Lista(int capacidade, Class<T> tipoClasse){
			this.elementos = (T[]) Array.newInstance(tipoClasse, capacidade);
			this.tamanho = 0;
		}
		
		public boolean adiciona(T elementos){
			this.aumentaCapacidade();
			if(this.tamanho < this.elementos.length) {
				this.elementos[this.tamanho] = elementos;
				this.tamanho++;
				return true;
			}
			return false;
		}
		
		public void adiciona(int posicao, T elemento) {
			if(!(posicao >= 0 && posicao < this.tamanho)) {
				throw new IllegalArgumentException("Posicao inválida!");
			}
			
			this.aumentaCapacidade();
			
			// 	MOVER TODOS OS ELEMENTOS
			for(int i = this.tamanho-1; i >= posicao; i--) {
				this.elementos[i+1] = this.elementos[i];
			}
			
			this.elementos[posicao] = elemento;
			this.tamanho++;
			
			return;
		}
		
		private void aumentaCapacidade() {
			if (this.tamanho == this.elementos.length) {
				T[] elementosNovos = (T[]) new Object[this.elementos.length * 2];
				for (int i=0; i<this.elementos.length; i++) {
					elementosNovos[i] = this.elementos[i];
				}
				this.elementos = elementosNovos;
			}
		}
		
		public int busca(T elemento) {
			for(int i=0; i<this.tamanho; i++) {
				if(this.elementos[i].equals(elemento)) {
					return i;
				}
			}
			return -1;
		}
		
		public void remove(int posicao) {
			if(!(posicao >= 0 && posicao < tamanho)) {
				throw new IllegalArgumentException("Posicao inválida!");
			}
			for(int i = posicao; i<this.tamanho-1; i++) {
				this.elementos[i] = this.elementos[i+1];
			}
			this.tamanho--;
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