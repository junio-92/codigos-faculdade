#include <stdio.h>

int main()
{
	
	float salario, percent,aditivo, total,aumento;
	
	printf("Informe o salario: ");
	scanf("%f", &salario);
	
	printf("Informe o percentual de aumento do salario: ");
	scanf("%f", &percent);
	aumento = salario * percent /100;
	printf("O aumento em porcentagem foi de %.2f\n", aumento);
	
	total = salario +aumento;
	printf("O salario final foi de %.2f", total);
	
	
	
	
}
