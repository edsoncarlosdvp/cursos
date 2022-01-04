package com.loiane.estruturadados.vetor.teste;

import java.util.ArrayList;

public class Aula12 {

	public static void main(String[] args) {
		
		ArrayList<String> arrayList = new ArrayList<String>();
		
		arrayList.add("E");
		arrayList.add("S");
		
		System.out.println(arrayList);
		
		arrayList.add(1, "D");
		arrayList.add("O");
		arrayList.add(4, "N");
		
		System.out.println(arrayList);
		
		boolean existe = arrayList.contains("N");
		
		if(existe) {
			System.out.println("O elemento existe no array!");
		}else {
			System.out.println("O elemento não existe no array!");
		}
		
		int pos = arrayList.indexOf("N");
		
		if(pos > -1) {
			System.out.println("O elemento existe no array na " + pos);
		}else {
			System.out.println("O elemento não existe no array na " + pos);
		}
		
		System.out.println(arrayList.get(0));
		
		arrayList.remove(2);
		arrayList.remove("S");
		
		System.out.println(arrayList);
		System.out.println(arrayList.size());
		
		arrayList.removeAll(arrayList);
		System.out.println(arrayList);
	}

}
