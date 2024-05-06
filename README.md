# trabalho-do-front

^\d{2}9?\d{8,9}$
Esse regex vai validar numeros de telefone que comecem com um codigo de area com dois digitos
seguindo na frente de um numero de 8 ou 9 digitos 
(DD)DDDDDDDD ou (DD)DDDDDDDDD no caso sem os parenteses para não dificultar a vida do usuario.

 /^[^\s@]+@[^\s@]+\.[^\s@]+$/
Esse regex vai validar o email, verificando se é um caractere valido antes do @, validando se é um caracter em branco ou
outro @, verifica se há espaços em branco depois do @ até o ., e se há um caractere após o .

/^[^\d]{1,100}$/
Este regex valida se o nome tem mais de 100 caracteres e se não contém numeros, 
