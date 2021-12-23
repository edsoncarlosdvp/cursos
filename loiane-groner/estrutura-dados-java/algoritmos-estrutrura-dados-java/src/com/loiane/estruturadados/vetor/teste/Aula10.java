package com.loiane.estruturadados.vetor.teste;

import com.loiane.estruturadados.vetor.VetorObjetos;

public class Aula10 {

	public static void main(String[] args) {
		
		VetorObjetos vetor = new VetorObjetos(3);
		
		Contato c1 = new Contato("José Fernandez", "jose@email.com" ,"99819-8989");
		Contato c2 = new Contato("Heloisa Gonzales", "helo@email.com" ,"96148-7775");
		Contato c3 = new Contato("Fernanda Souza", "fesouza@email.com" ,"997891-4215");
		Contato c4 = new Contato("Miranda Rocha", "mirocha@email.com" ,"97451-4581");
		
		vetor.adiciona(c1);
		vetor.adiciona(c2);
		vetor.adiciona(c3);
		
		System.out.println("Tamanho = " + vetor.tamanho());
		
		int pos = vetor.busca(c4);
		if(pos > -1) {
			System.out.println("Elemento existe no vetor!");
		}else {
			System.out.println("Não existe elemento no vetor!");
		}
		
		System.out.println(vetor);

	}

}
