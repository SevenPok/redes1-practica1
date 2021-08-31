### Universidad de San Carlos de Guatemala
### Facultad de Ingeniería
### Escuela de Ciencias y Sistemas
### Redes de computadores 1
# Practica 1

## Integrantes
| Carnet | Nombre |
| ------ | -------  |
| 201801229 |Osman Alejandro Perez Lopez|
| 201800586 |Gerber David Colindres Monterroso|
| 201503855 |Aldair Estrada Garcia|
| 201512786 | Jonatan Alejandro Azurdia Aju|

## Manual de Configuración

### Configuración de la Maquina Virtual de GNS3 para poder utilizar VirtualBox


### Configuración de las Topologías en GNS3

#### Topología 1A

![Topología 1A](Images/topologia1A.png)

#### Topología 1B

![Topología 1B](Images/Topologia_1B.JPG)

#### Topología 1C

![Topología 1C](Images/Topologia_1C.png)

#### Topología 2

![Topología 2](Images/Topologia_2.PNG)

## Configuración de las VPCs

El comando que se debe de escribir en la VPC para configurar su ip es
ip “NUMERO_IP” “NUMERO_MASCARA_SUBRED” “GATEWAY”
Ejemplo
ip 192.168.16.15 255.255.255.0 192.168.16.1

### Cliente Ventas 1

![Cliente Ventas 1](Images/configuracion_Cliente_Ventas1.png)

### Cliente Contabilidad 1

![Cliente Contabilidad 1](Images/configuracion_Cliente_Contabilidad1.jpg)

### Cliente Informatica 1

![Cliente Informatica 1](Images/configuracion_informatica1.png)

## Configuración de las máquinas virtuales

Para configurar en ubuntu la ip, entramos a configuracion de red, luego localizamos en adaptador de red que vamos a configurar, entramos a la configuracion del adaptador y nos vamos a la pestaña de ipv4, le damos en manual y configuramos su ip.

### Cliente Ventas 2

![Cliente Ventas 2](Images/configuracion_Cliente_Ventas2.JPG)

### Cliente Contabilidad 2

![Cliente Contabilidad 2](Images/configuracion_contabilidad2.png)

### Cliente Informatica 2

![Cliente Informatica 2](Images/configuracion_Cliente_Informatica2.png)

## Instalación y Configuración de los Servidores Web
Para los servidores web se utilizo nodeJS para crear un servidor y alojar una pagina web, para instalar esta herramienta, primero se deben de actualizar los paquetes disponibles, para ello utilizamos el comando:

> sudo apt-get update

Posteriormente se instala nodejs, utilizando el comando:

> sudo apt install nodejs

finalmente se debe de instalar el gesto de paquetes por defecto para Node.js y ejecutarlo con JavaScript, para ello se utiliza el comando:

> sudo apt install npm

Servidor web Informatica
![Configuración del servidor web informatica](Images/Servidor_informatica.PNG)

Servidor web Ventas
![Configuración del servidor web ventas](Images/Servidor_contabilidad.PNG)

Servidor web Contabilidad
![Configuración del servidor web contabilidad](Images/Servidor_ventas.PNG)

## Pings entre clientes y entre los servidores de los departamentos correspondientes

### Departamento Ventas

El departamento de ventas esta utilizando la VLAN 20.

#### Cliente 1 al Cliente 2

![Cliente Ventas 1 al 2](Images/ping_cliente_ventas2.png)

#### Cliente 1 al Servidor Web

![Cliente Ventas 1 al servidor](Images/ping_servidor_ventas.png)

#### Cliente 2 al Cliente 1

![Cliente Ventas 2 al 1](Images/Cliente_Ventas1_Ventas2.JPG)

#### Cliente 2 al Servidor Web

![Cliente Ventas 2 al servidor](Images/ClienteVentas2_ServidorVentas.JPG)

#### Servidor Web al Cliente 1
![Servidor web a cliente ventas 1](Images/ping_servidor_ventas1.PNG)

#### Servidor Web al Cliente 2
![Servidor web a cliente ventas 2](Images/ping_servidor_ventas2.PNG)

### Departamento Contabilidad

El departamento de contabilidad esta utilizando la VLAN 30.

#### Cliente 1 al Cliente 2

![Cliente Contabilidad 1 al 2](Images/Cliente_Contabilidad1_Contabilidad2.JPG)

#### Cliente 1 al Servidor Web

![Cliente Contabilidad 1 al servidor](Images/ClienteContabilidad1_ServidorContabilidad.JPG)

#### Cliente 2 al Cliente 1

![Cliente Contabilidad 2 al 1](Images/ping_cliente_contabilidad1.png)

#### Cliente 2 al Servidor Web

![Cliente Contabilidad 2 al servidor](Images/ping_cliente_servidor_contabilidad.png)

#### Servidor Web al Cliente 1
![Servidor web a cliente contabilidad](Images/ping_servidor_contabilidad1.PNG)

#### Servidor Web al Cliente 2
![Servidor web a cliente contabilidad](Images/ping_servidor_contabilidad2.PNG)

### Departamento Informatica

El departamento de informatica esta utilizando la VLAN 10.

#### Cliente 1 al Cliente 2

![Cliente Informatica 1 al 2](Images/ping_cliente_informatica2.png)

#### Cliente 1 al Servidor Web

![Cliente Informatica 1 al servidor](Images/ping_cliente_servidor_informatica.png)

#### Cliente 2 al Cliente 1

![Cliente Informatica 2 al 1](Images/ping_cliente_informatica_1.png)

#### Cliente 2 al Servidor Web

![Cliente Informatica 2 al servidor](Images/ping-servidor_informatica.png)

#### Servidor Web al Cliente 1
![Servidor web a cliente 1](Images/ping_servidor_cliente1.PNG)

#### Servidor Web al Cliente 2
![Servidor web a cliente 1](Images/ping_servidor_cliente2.PNG)

## Visualización de la página web desde el Host Virtual Cliente

### Pagina Ventas

![Pagina Ventas](Images/Pagina_Contabilidad.PNG)

### Pagina Contabilidad

![Pagina Contabilidad](Images/Pagina_web_Contabilidad.PNG)

### Pagina Informatica
![Pagina Informatica](Images/pagina_informatica.png)