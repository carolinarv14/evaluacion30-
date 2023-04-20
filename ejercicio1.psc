Algoritmo ejercicio1
	Definir n1, n2, n3 como real;
		Escribir "ingrese los numeros";
	Leer n1, n2, n3;
	Si n1 > n2 Entonces
		si n2>n3  Entonces
			Escribir "los numeros en orden son", n3,',',n2,',',n1;
		SiNo
			Si n1>n3 Entonces
				Escribir "los numeros en orden son", n2,',',n3,',',n1;
			SiNo
				Escribir "los numeros en orden son", n2,',',n1,',',n3;
				
				
				
			FinSi
		FinSi
	SiNo
		Si n1>n3 Entonces
			Escribir "los numeros ordenados son",n3,',',n1,',',n2;
		SiNo
			Si n2>n3 Entonces
				Escribir "los numeros ordenados son",n1,',',n3,',',n2;
			SiNo
				Escribir "los numeros ordenados son",n1,',',n2,',',n3;
			FinSi
		FinSi
	Fin Si
	
FinAlgoritmo
