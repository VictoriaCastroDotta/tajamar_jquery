var Empleado = function(idEmpleado,apellido,oficio,fechaalta,salario,departamento){
this.idempleado= idEmpleado;
this.apellido = apellido;
this.oficio = oficio;
this.fechaalta = fechaalta;
this.salario = salario;
this.departamento = departamento;
var objeto = this;
this.salarioAnual = function(){
	return this.salario * 12;
}

this.antiguedad = function(){
	var anioParse = this.fechaalta.substr(6);
	var actual = new Date(); 
	var anio = actual.getFullYear(); // --> 2020
	var dif = parseInt(anio) - parseInt(anioParse);
	return dif;
}

this.salarioTotal = function(){
	return this.antiguedad() * this.salarioAnual();
	
}
	
}