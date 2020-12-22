
public class aula24ProcessamentoDeDadosEmJava {

	public static void main(String[] args) {
		int x;
		double y;
		
		x = 5;
		y = 2 * x;
		
		System.out.println("Valor da variável x: " + x);
		System.out.println("Valor da variável y: " + y + "\n");
		
		// Cálculo de área
		double b, b2, h, area;
		// NOTA	DE BOA PRÁTICA: double, sempre colocar a casa decimal. Se float, seguido de f. Exemplo: 8f. 
		
		b = 6.0;
		b2 = 8.0;
		h = 5.0;
		
		area = (b + b2) / 2.0 * h;
		System.out.printf("A área vale: %.2f\n\n", area);
		
		// EXEMPLO DE CASTING
		int num1, num2;
		double res;
		
		num1 = 5;
		num2 = 2;
		
		//Se o tipo da variável não fosse explicitado, o resultado seria um número inteiro 
		res = (double) num1 / num2;
		
		System.out.printf("O resultado da divisão é: %.2f", res);

	}

}
