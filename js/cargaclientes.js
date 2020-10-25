 $(document).ready(function () {
            //Cargo la página con el select inicializado
            $.get("xml/ClientesXML.xml", function (data) {
                var select = $("#selectempleados");
                var clientes = $(data).find("CLIENTE");
                var html = "";
                clientes.each(function () {
                    var nombre = $(this).find("NOMBRE").text();
                    var id = $(this).attr("IDCLIENTE");
                    var opt = $("<option>");
                    opt.attr("value", id);
                    opt.text(nombre);
                    select.append(opt);

                });


                select.change(function () {
                    var html = "";
                    $("option").each(function () {

                        if ($(this).is(":selected")) {

                            var id = $(this).attr("value");
                            //alert(id);
                            //AGARRO TODO EL ELEMENTO CLIENTE
                            var cliente = $(data).find("CLIENTE[IDCLIENTE=" + id + "]");
                            var nombre = cliente.find("NOMBRE").text();
                            var direccion = cliente.find("DIRECCION").text();
                            var email = cliente.find("EMAIL").text();
                            var cp = cliente.find("CODIGOPOSTAL").text();
                            var paginaweb = cliente.find("PAGINAWEB").text();
                            var img = cliente.find("IMAGENCLIENTE").text();

                            html += "<h5> Nombre: " + nombre + "</h5><h5> Dirección: " + direccion + "</h5><h5> Email: " + email + "</h5><h5> Código postal: " + cp + "</h5><h5> Página Web: " + paginaweb + "</h5><br><img class='tamaño' class='img-thumbnail' src=" + img + " ></img>";
                        }


                        $("#datooficio").html(html);

                    }); //fin each option
                });

            })//fin get

        });//fin ready