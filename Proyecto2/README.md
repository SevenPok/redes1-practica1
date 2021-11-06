### Universidad de San Carlos de Guatemala
### Facultad de Ingeniería
### Escuela de Ciencias y Sistemas
### Redes de computadores 1
# Proyecto 2

## Integrantes
| Carnet | Nombre |
| ------ | -------  |
| 201801229 |Osman Alejandro Perez Lopez|
| 201800586 |Gerber David Colindres Monterroso|
| 201503855 |Aldair Estrada Garcia|
| 201512786 | Jonatan Alejandro Azurdia Aju|

## Manual de Configuración
## Requerimientos para ejecutar el archivo GNS3

Algunos requerimientos para ejecutar los archivos de GNS3 son:
- Imagen de Ethernet Switch
- OpenVPN
- Archivo .ovp 
- Proveedor de Nube

# Topología 1

![Topologia 1](./images/Topologia1.jpeg)

## Subnetting

![Subnetting 1](./images/Subnetting1.jpeg)

## Configuracion rutas estaticas



## Configuracion de enrutamiento dinamico



## Configuracion de procolo GLBP



## Configuracion de procolo HSRP



# Topología 2

![Topologia 2](./images/Topologia2.jpeg)

## Subnetting

![Subnetting 2](./images/Subnetting2.jpeg)

## Pings
---
### Ping Conta 1 a Servidor Conta

![Ping conta 1 a server](./images/tp2_contabilidad_a_servidor.jpeg)

### Ping Recursos Humanos 1 a Servidor Recursos Humanos

![Ping recursos humanos 1 a server](./images/tp2_rrhh_a_servidor.jpeg)

### Ping Ventas 1 a Servidor web

![Ping ventas 1 a servidor](./images/tp2_ventas_a_servidor.jpeg)

### Ping Informatica a Servidor DB

![Ping ventas 2 a servidor](./images/tp2_informatica_a_servidor.jpeg)

# Topología 3

![Topologia 3](./images/Topologia3.jpeg)

## Configuracion de VLAN

![vlan-topo2](./images/vlan-topo2.jpg)

## Subnetting

![Subnetting 3](./images/Subnetting3.jpeg)

## Pings
---
### Ping Servidor Recursos Humanos

![Ping Servidor RH a RH](./images/Ping_BD_Informatica.jpg)

### Ping Servidor DB a Infomatica

![Ping Server DB a informatica](./images/Ping_server_rh_rh.jpg)


# Comandos Utilizados
## Ver configuracion de interfacez
```
sh ip int br
```
## Ver tabla de ruteo
```
sh ip ro
```