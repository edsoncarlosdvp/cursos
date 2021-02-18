import java.util.Locale;
import java.util.Scanner;

public class aula27EntradaDeDados {

	public static void main(String[] args) {
		
		Locale.setDefault(Locale.US);
		Scanner sc = new Scanner(System.in);
		
		//int x;
		String s1, s2, s3;
		
		System.out.println("Por favor, digite dados para popular as três variáveis do tipo String desta aplicação: ");
		//x = sc.nextInt();
		//sc.nextLine(); // ESTA LINHA CONSOME O ESPAÇO ANTERIOR DEIXADO PELO ENTER
		s1 = sc.nextLine();
		s2 = sc.nextLine();
		s3 = sc.nextLine();
		
		System.out.println("Dados inseridos: ");
		//System.out.println(x);
		System.out.println(s1);
		System.out.println(s2);
		System.out.println(s3);
		
		sc.close(); // LIMPA O BUFFER DO TECLADO
	}

}
