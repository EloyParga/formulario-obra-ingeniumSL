

// Asegúrate de que esta parte se ejecute después de inicializar signaturePad y signaturePad2
let signaturePad = null;
let signaturePad2 = null;

function loadImage(url){
    return new Promise(resolve =>{
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', url, true );
        xhr.responseType = "blob";
        xhr.onload = function (e){
            const reader = new FileReader();
            reader.onload=function(event){
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }

        xhr.send();
        
    })
}

function agregarTextoAjustado(pdf, texto, x, y, anchoMaximo, alturaLinea) {
    // Divide el texto por saltos de línea para respetar los párrafos
    const parrafos = texto.split('\n');
    parrafos.forEach(parrafo => {
        let lines = pdf.splitTextToSize(parrafo, anchoMaximo);
        lines.forEach((line) => {
            pdf.text(line, x, y);
            y += alturaLinea;
        });
        // Añade un espacio extra entre párrafos si es necesario
        y += alturaLinea;
    });
}




window.addEventListener('load', async () => {


    // Inicialización de los SignaturePad (asegúrate de que esto se haga antes del siguiente código)
    const canvas = document.querySelector("#firmaCanvas1"); // Asumiendo que también tienes un canvas con id "firmaCanvas1"
    if (canvas) {
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
        signaturePad = new SignaturePad(canvas, {});
    }

    const canvas2 = document.getElementById("firmaCanvas2");
    if (canvas2) {
        canvas2.height = canvas2.offsetHeight;
        canvas2.width = canvas2.offsetWidth;
        signaturePad2 = new SignaturePad(canvas2, {});
    }

    // Botón para limpiar la firma en el canvas firmaCanvas2
    const btnLimpiar2 = document.getElementById("btn-limpiar2");
    if (btnLimpiar2) {
        btnLimpiar2.addEventListener('click', function() {
            if (signaturePad2) {
                signaturePad2.clear();
            }
        });
    }

    const btnLimpiar1 = document.getElementById("btn-limpiar1");
    if (btnLimpiar1) {
        btnLimpiar1.addEventListener('click', function() {
            if (signaturePad) {
                signaturePad.clear();
            }
        });
    }

    
  
    
    const btnDescargar = document.getElementById("btn-descargar");

    if (btnDescargar) {
        btnDescargar.addEventListener('click', (e) => {
            e.preventDefault();
            let promo =document.getElementById('promo').value;
            let direccion =document.getElementById('direccion').value;
            let vivienda = document.getElementById('vivienda').value;
            
            let tipoViviendaElement = document.querySelector('input[name="housingType"]:checked');
            let tipoVivienda = tipoViviendaElement ? tipoViviendaElement.value : ''
            
            let quest1 = document.querySelector('input[name="quest1"]:checked').value;
            let quest2 = document.querySelector('input[name="quest2"]:checked').value
            let quest3 = document.querySelector('input[name="quest3"]:checked').value
            let quest4 = document.querySelector('input[name="quest4"]:checked').value
            let quest5 = document.querySelector('input[name="quest5"]:checked').value
            let quest6 = document.querySelector('input[name="quest6"]:checked').value
            let quest7 = document.querySelector('input[name="quest7"]:checked').value
            let quest8 = document.querySelector('input[name="quest8"]:checked').value
            let quest9 = document.querySelector('input[name="quest9"]:checked').value
            let quest10 = document.querySelector('input[name="quest10"]:checked').value
            let quest11 = document.querySelector('input[name="quest11"]:checked').value
            let quest12 = document.querySelector('input[name="quest12"]:checked').value
            let quest13 = document.querySelector('input[name="quest13"]:checked').value
            let quest14 = document.querySelector('input[name="quest14"]:checked').value
            let quest15 = document.querySelector('input[name="quest15"]:checked').value
            let quest16 = document.querySelector('input[name="quest16"]:checked').value
            let quest17 = document.querySelector('input[name="quest17"]:checked').value
            let quest18 = document.querySelector('input[name="quest18"]:checked').value
            let quest19 = document.querySelector('input[name="quest19"]:checked').value
            let quest20 = document.querySelector('input[name="quest20"]:checked').value
            let quest21 = document.querySelector('input[name="quest21"]:checked').value
            let quest22 = document.querySelector('input[name="quest22"]:checked').value
            let quest23 = document.querySelector('input[name="quest23"]:checked').value
            let quest24 = document.querySelector('input[name="quest24"]:checked').value
            let quest25 = document.querySelector('input[name="quest25"]:checked').value
            let quest26 = document.querySelector('input[name="quest26"]:checked').value
            let quest27 = document.querySelector('input[name="quest27"]:checked').value
            let quest28 = document.querySelector('input[name="quest28"]:checked').value
            let quest29 = document.querySelector('input[name="quest29"]:checked').value
            let quest30 = document.querySelector('input[name="quest30"]:checked').value
            let quest31 = document.querySelector('input[name="quest31"]:checked').value;
            let quest32 = document.querySelector('input[name="quest32"]:checked').value;
            
            let other1 =  document.getElementById('others1').value;
            let other2 =  document.getElementById('others2').value;
            let other3 =  document.getElementById('others3').value;
        
            let quest33 = document.querySelector('input[name="quest33"]:checked').value;
            let quest34 = document.querySelector('input[name="quest34"]:checked').value;
            let quest35 = document.querySelector('input[name="quest35"]:checked').value;
        
            let details1 =  document.getElementById('visitDetails1').value;
            let details2 =  document.getElementById('visitDetails2').value;
            let details3 =  document.getElementById('visitDetails3').value;
            let details4 =  document.getElementById('visitDetails4').value;
            let details5 =  document.getElementById('visitDetails5').value;

            //Variables de la Tabla

            //fila 1
            let referencia1 = document.getElementById('referencia1').value || '';
            let numeroEquipo1 = document.getElementById('numeroEquipo1').value || '';
            let serieEquipoNuevo1 = document.getElementById('serieEquipoNuevo1').value || '';
            let lugar1 = document.getElementById('lugar1').value || '';
            //Fila2
            let referencia2 = document.getElementById('referencia2').value || '';
            let numeroEquipo2 = document.getElementById('numeroEquipo2').value || '';
            let serieEquipoNuevo2 = document.getElementById('serieEquipoNuevo2').value || '';
            let lugar2 = document.getElementById('lugar2').value || '';
            //Fila3
            let referencia3 = document.getElementById('referencia3').value || '';
            let numeroEquipo3 = document.getElementById('numeroEquipo3').value || '';
            let serieEquipoNuevo3 = document.getElementById('serieEquipoNuevo3').value || '';
            let lugar3 = document.getElementById('lugar3').value || '';
            //Fila4
            let referencia4 = document.getElementById('referencia4').value || '';
            let numeroEquipo4 = document.getElementById('numeroEquipo4').value || '';
            let serieEquipoNuevo4 = document.getElementById('serieEquipoNuevo4').value || '';
            let lugar4 = document.getElementById('lugar4').value || '';
            //Fila5
            let referencia5 = document.getElementById('referencia5').value || '';
            let numeroEquipo5 = document.getElementById('numeroEquipo5').value || '';
            let serieEquipoNuevo5 = document.getElementById('serieEquipoNuevo5').value || '';
            let lugar5 = document.getElementById('lugar5').value || '';
            //Fila6
            let referencia6 = document.getElementById('referencia6').value || '';
            let numeroEquipo6 = document.getElementById('numeroEquipo6').value || '';
            let serieEquipoNuevo6 = document.getElementById('serieEquipoNuevo6').value || '';
            let lugar6 = document.getElementById('lugar6').value || '';
            //Fila7
            let referencia7 = document.getElementById('referencia7').value || '';
            let numeroEquipo7 = document.getElementById('numeroEquipo7').value || '';
            let serieEquipoNuevo7 = document.getElementById('serieEquipoNuevo7').value || '';
            let lugar7 = document.getElementById('lugar7').value || '';
            //Fila8
            let referencia8 = document.getElementById('referencia8').value || '';
            let numeroEquipo8 = document.getElementById('numeroEquipo8').value || '';
            let serieEquipoNuevo8 = document.getElementById('serieEquipoNuevo8').value || '';
            let lugar8 = document.getElementById('lugar8').value || '';
            //Fila9
            let referencia9 = document.getElementById('referencia9').value || '';
            let numeroEquipo9 = document.getElementById('numeroEquipo9').value || '';
            let serieEquipoNuevo9 = document.getElementById('serieEquipoNuevo9').value || '';
            let lugar9 = document.getElementById('lugar9').value || '';
            
            let quest36 = document.querySelector('input[name="quest36"]:checked').value;
            let details6 =  document.getElementById('visitDetails6').value;

            
            let conformidadElement = document.querySelector('input[name="declaration"]:checked');
            let conformidad = conformidadElement ? conformidadElement.value : '';
            

        
            let empresa1 =  document.getElementById('empresa1').value;
            let dni1 =  document.getElementById('dni1').value;
            let fdo1 =  document.getElementById('fdo1').value;
            
            let empresa2 =  document.getElementById('empresa2').value;
            let dni2 =  document.getElementById('dni2').value;
            let fdo2 =  document.getElementById('fdo2').value;

            let validacionExitosa = true;


            if (direccion === '' ) {
                document.getElementById('mensajeError').innerText = '*Por favor, rellena el campo de "DIRECCIÓN"*';
                document.getElementById('direccion').style.borderColor = 'red';
                alert('Por favor, rellena el campo de "DIRECCIÓN".'); // Corregido el error tipográfico aquí también
    
                validacionExitosa = false
            } else {
                document.getElementById('mensajeError').innerText = '';
                document.getElementById('direccion').style.borderColor = '';
                // Proceder con el envío del formulario o lo que necesites hacer
            }

            if (validacionExitosa) {
                generatePDF(promo,direccion,vivienda, tipoVivienda,
                    quest1, quest2, quest3, quest4, quest5,quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15, quest16, quest17, quest18, quest19, quest20, quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29, quest30, quest31, quest32, quest33,quest34 ,quest35 ,quest36, 
                    other1, other2, other3, 
                    details1, details2, details3, details4, details5, details6, 
                    referencia1, numeroEquipo1, serieEquipoNuevo1,lugar1, 
                    referencia2,numeroEquipo2, serieEquipoNuevo2,lugar2, 
                    referencia3, numeroEquipo3, serieEquipoNuevo3,lugar3,
                    referencia4, numeroEquipo4, serieEquipoNuevo4,lugar4,
                    referencia5, numeroEquipo5, serieEquipoNuevo5,lugar5,
                    referencia6, numeroEquipo6, serieEquipoNuevo6,lugar6,
                    referencia7, numeroEquipo7, serieEquipoNuevo7,lugar7,
                    referencia8, numeroEquipo8, serieEquipoNuevo8,lugar8,
                    referencia9, numeroEquipo9, serieEquipoNuevo9,lugar9,
                    conformidad, empresa1, empresa2, dni1, dni2, fdo1, fdo2).then(() => {
                    console.log("PDF generado con éxito");
                }).catch((error) => {
                    console.error("Error al generar el PDF", error);
                });
            }
        });
    }

});

async function generatePDF(promo,direccion,vivienda, tipoVivienda,
    quest1, quest2, quest3, quest4, quest5,quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15, quest16, quest17, quest18, quest19, quest20, quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29, quest30, quest31, quest32, quest33,quest34 ,quest35 ,quest36, 
    other1, other2, other3, 
    details1, details2, details3, details4, details5, details6, 
    referencia1, numeroEquipo1, serieEquipoNuevo1,lugar1, 
    referencia2,numeroEquipo2, serieEquipoNuevo2,lugar2, 
    referencia3, numeroEquipo3, serieEquipoNuevo3,lugar3,
    referencia4, numeroEquipo4, serieEquipoNuevo4,lugar4,
    referencia5, numeroEquipo5, serieEquipoNuevo5,lugar5,
    referencia6, numeroEquipo6, serieEquipoNuevo6,lugar6,
    referencia7, numeroEquipo7, serieEquipoNuevo7,lugar7,
    referencia8, numeroEquipo8, serieEquipoNuevo8,lugar8,
    referencia9, numeroEquipo9, serieEquipoNuevo9,lugar9,
    conformidad, empresa1, empresa2, dni1, dni2, fdo1, fdo2){

    
    // Asegúrate de que esta función sea llamada después de que signaturePad ha sido inicializada
    if (signaturePad) {
        const signatureImg1=signaturePad.toDataURL('image/jpg');
        const signatureImg2=signaturePad2.toDataURL('image/jpg'); // Usa signaturePad aquí sin problema
        
        
        
        const img1 = await loadImage("/img/canvaOrkli/1.jpg");
        const img2 = await loadImage("/img/canvaOrkli/2.jpg");
        const img3 = await loadImage("/img/canvaOrkli/3.jpg");
        const img4 = await loadImage("/img/canvaOrkli/4.jpg");
        const img5 = await loadImage("/img/canvaOrkli/5.jpg");
        const img6 = await loadImage("/img/canvaOrkli/6.jpg");
        const img7 = await loadImage("/img/canvaOrkli/7.jpg");
        const img8 = await loadImage("/img/canvaOrkli/8.jpg");

        const pdf = new jsPDF('p', 'pt', 'a4');

        pdf.addImage(img1, 'JPG', 0, 0, 595, 842);
       
        
        // Añadir nuevas páginas para las imágenes adicionales
        const images = [img2, img3, img4, img5, img6, img7, img8];
        images.forEach(image => {
            pdf.addPage();
            pdf.addImage(image, 'JPG', 0, 0, 595, 842);
        });
        //Setear la pagina 5 
        pdf.setPage(8);
        pdf.addImage(signatureImg1, 'JPG', 70, 458, 200, 85)
        pdf.addImage(signatureImg2, 'JPG', 323, 458, 200, 85)

        pdf.setPage(1);
        pdf.setFontSize(12)

        
        const date = new Date().toLocaleDateString('es-ES')
        pdf.setTextColor(255, 255, 255);
        pdf.text(date, 425, 25)

        pdf.setTextColor(0, 0, 0);
        pdf.text(promo, 227, 71)
        pdf.text(direccion, 130,105)
        pdf.text(vivienda, 383,105)

        //Setear Color del circulo
        pdf.setFillColor(0,0,0)

        //Tipo Vivienda -> CheckValue
        if(tipoVivienda === "Formación"){ pdf.circle(190 , 154.5, 4, 'FD')

        }else if(tipoVivienda === "PILOTO"){ pdf.circle(313 , 154.5, 4, 'FD')

        }else if(tipoVivienda === "PeM") { pdf.circle(405, 154.5, 4, 'FD')

        }else{ pdf.circle(460.7, 154.5, 4, 'FD')}


        // COMPROBACIÓN DEL CABLEADO
        //Quest 1 -> CheckValue 
        if(quest1 === "Si"){ pdf.circle(339, 248.5, 4, 'FD')

        }else if(quest1 === "No"){ pdf.circle(386 , 248.5, 4, 'FD')

        }else if(quest1 === "Corregido"){ pdf.circle(438 , 248.5, 4, 'FD')

        }else{ pdf.circle(528.4 , 248.5, 4, 'FD')}

        //Quest 2 -> CheckValue
        if(quest2 === "Si"){ pdf.circle(339 , 278, 4, 'FD')

        }else if(quest2 === "No"){ pdf.circle(386 , 278, 4, 'FD')

        }else if(quest2 === "Corregido"){ pdf.circle(438 , 278, 4, 'FD')

        }else{ pdf.circle(528.4 , 278, 4, 'FD')}

        //Quest 3 -> CheckValue 
        if(quest3 === "Si"){ pdf.circle(339 , 308, 4, 'FD')

        }else if(quest3 === "No"){ pdf.circle(386 , 308, 4, 'FD')

        }else if(quest3 === "Corregido"){ pdf.circle(438 , 308, 4, 'FD')

        }else{ pdf.circle(528.4 , 308, 4, 'FD')}

        //Quest 4 -> CheckValue 
        if(quest4 === "Si"){ pdf.circle(339 , 337, 4, 'FD')

        }else if(quest4 === "No"){ pdf.circle(386 , 337, 4, 'FD')

        }else if(quest4 === "Corregido"){ pdf.circle(438 , 337, 4, 4, 'FD')

        }else{ pdf.circle(528.4  , 337, 4, 'FD')}

        //Quest 5 -> CheckValue 
        if(quest5 === "Si"){ pdf.circle(339 , 367.2, 4, 'FD')

        }else if(quest5 === "No"){ pdf.circle(386 , 367.2, 4, 'FD')

        }else if(quest5 === "Corregido"){ pdf.circle(438 , 367.2, 4, 'FD')

        }else{ pdf.circle(528.4 , 367.2, 4, 'FD')}
        
        //Quest 6 -> CheckValue 
        if(quest6 === "Si"){ pdf.circle(339 , 397, 4, 'FD')

        }else if(quest6 === "No"){ pdf.circle(386 , 397, 4, 'FD')

        }else if(quest6 === "Corregido"){ pdf.circle(438 , 397, 4, 'FD')

        }else{ pdf.circle(528.4, 397, 4, 'FD')}
        
        //Quest 7 -> CheckValue 
        if(quest7 === "Si"){ pdf.circle(339 , 430.2, 4, 'FD')

        }else if(quest7 === "No"){ pdf.circle(386 , 430.2, 4, 'FD')

        }else if(quest7 === "Corregido"){ pdf.circle(438 , 430.2, 4, 'FD')

        }else{ pdf.circle(528.4 , 430.2, 4, 'FD')}

        // COMPROBACION DE DISPOSITIVOS

        //Quest 8 -> CheckValue 
        if(quest8 === "Si"){ pdf.circle(339 , 540, 4, 'FD')

        }else if(quest8 === "No"){ pdf.circle(386 , 540, 4, 'FD')

        }else if(quest8 === "Corregido"){ pdf.circle(438 , 540, 4, 'FD')

        }else{ pdf.circle(528.4 , 540, 4, 'FD')}

        //Quest 9 -> CheckValue 
        if(quest9 === "Si"){ pdf.circle(339 , 569.7, 4, 'FD')

        }else if(quest9 === "No"){ pdf.circle(386 , 569.7, 4, 'FD')

        }else if(quest9 === "Corregido"){ pdf.circle(438 , 569.7, 4, 'FD')

        }else{ pdf.circle(528.4 , 569.7, 4, 'FD')}

        //Quest 10 -> CheckValue 
        if(quest10 === "Si"){ pdf.circle(339 , 609, 4, 'FD')

        }else if(quest10 === "No"){ pdf.circle(386 , 609, 4, 'FD')

        }else if(quest10 === "Corregido"){ pdf.circle(438 , 609, 4, 'FD')

        }else{ pdf.circle(528.4 , 609, 4, 'FD')}

        //Quest 11 -> CheckValue 
        if(quest11 === "Si"){ pdf.circle(339 , 652, 4, 'FD')

        }else if(quest11 === "No"){ pdf.circle(386 , 652, 4, 'FD')

        }else if(quest11 === "Corregido"){ pdf.circle(438 , 652, 4, 'FD')

        }else{ pdf.circle(528.4 , 652, 4, 'FD')}

        //Quest 12 -> CheckValue
        if(quest12 === "Si"){ pdf.circle(339 , 690, 4, 'FD')

        }else if(quest12 === "No"){ pdf.circle(386 , 690, 4, 'FD')

        }else if(quest12 === "Corregido"){ pdf.circle(438 , 690, 4, 'FD')

        }else{ pdf.circle(528.4 , 690, 4, 'FD')}

        // PAGINA 2
        // COMPROBACIONES DE FUNCIONAMIENTO DE DISPOSITIVOS
        //------GENERALES----
        pdf.setPage(2)

        ///Quest 13 -> CheckValue 
        if(quest13 === "Si"){ pdf.circle(357 , 138, 4, 'FD')

        }else if(quest13 === "No"){ pdf.circle(397 , 138, 4, 'FD')

        }else if(quest13 === "Corregido"){ pdf.circle(442 , 138, 4, 'FD')

        }else{ pdf.circle(526 , 138, 4, 'FD')}

        //Quest 14 -> CheckValue 
        if(quest14 === "Si"){ pdf.circle(357 , 168, 4, 'FD')

        }else if(quest14 === "No"){ pdf.circle(397 , 168, 4, 'FD')

        }else if(quest14 === "Corregido"){ pdf.circle(442 , 168, 4, 'FD')

        }else{ pdf.circle(526 , 168, 4, 'FD')}

        //Quest 15 -> CheckValue 
        if(quest15 === "Si"){ pdf.circle(357 , 205, 4, 'FD')

        }else if(quest15 === "No"){ pdf.circle(397 , 205, 4, 'FD')

        }else if(quest15 === "Corregido"){ pdf.circle(442 , 205, 4, 'FD')

        }else{ pdf.circle(526 , 205, 4, 'FD')}

        //------CLIMA-----
        //Quest 16-> CheckValue 
        if(quest16 === "Si"){ pdf.circle(357 , 318, 4, 'FD')

        }else if(quest16 === "No"){ pdf.circle(397 , 318, 4, 'FD')

        }else if(quest16 === "Corregido"){ pdf.circle(442 , 318, 4, 'FD')

        }else{ pdf.circle(526 , 318, 4, 'FD')}

        //Quest 17 -> CheckValue 
        if(quest17 === "Si"){ pdf.circle(357 , 348, 4, 'FD')

        }else if(quest17 === "No"){ pdf.circle(397 , 348, 4, 'FD')

        }else if(quest17 === "Corregido"){ pdf.circle(442 , 348, 4, 'FD')

        }else{ pdf.circle(526, 348, 4, 'FD')}

        //Quest 18 -> CheckValue 
        if(quest18 === "Si"){ pdf.circle(357 , 374, 4, 'FD')

        }else if(quest18 === "No"){ pdf.circle(397 , 374, 4, 'FD')

        }else if(quest18 === "Corregido"){ pdf.circle(442 , 374, 4, 'FD')

        }else{ pdf.circle(526, 374, 4, 'FD')}

        //Quest 19 -> CheckValue 
        if(quest19 === "Si"){ pdf.circle(357 , 415, 4, 'FD')

        }else if(quest19 === "No"){ pdf.circle(397 , 415, 4, 'FD')

        }else if(quest19 === "Corregido"){ pdf.circle(442 ,415, 4, 'FD')

        }else{ pdf.circle(526 ,415, 4, 'FD')}

        //Quest 20 -> CheckValue 
        if(quest20 === "Si"){ pdf.circle(357 , 451, 4, 'FD')

        }else if(quest20 === "No"){ pdf.circle(397 , 451, 4, 'FD')

        }else if(quest20 === "Corregido"){ pdf.circle(442 , 451, 4, 'FD')

        }else{ pdf.circle(526, 451, 4, 'FD')}

       
        //Quest 21 -> CheckValue 
        if(quest21 === "Si"){ pdf.circle(357 , 490, 4 , 'FD')

        }else if(quest21 === "No"){ pdf.circle(397, 490, 4, 'FD')

        }else if(quest21 === "Corregido"){ pdf.circle(442, 490, 4, 'FD')

        }else{ pdf.circle(526, 490, 4, 'FD')}

         //-----PERSIANAS-----

        //Quest 22 -> CheckValue 
        if(quest22 === "Si"){ pdf.circle(357 , 603, 4, 'FD')

        }else if(quest22 === "No"){ pdf.circle(397 , 603, 4, 'FD')

        }else if(quest22 === "Corregido"){ pdf.circle(442 , 603, 4, 'FD')

        }else{ pdf.circle(526 , 603, 4, 'FD')}

        //Quest 23 -> CheckValue 
        if(quest23 === "Si"){ pdf.circle(357 , 640, 4, 'FD')

        }else if(quest23 === "No"){ pdf.circle(397 , 640, 4, 'FD')

        }else if(quest23 === "Corregido"){ pdf.circle(442 , 640, 4, 'FD')

        }else{ pdf.circle(526 , 640, 4, 'FD')}

        //Quest 24 -> CheckValue 
        if(quest24 === "Si"){ pdf.circle(357 , 668, 4, 'FD')

        }else if(quest24 === "No"){ pdf.circle(397 , 668, 4, 'FD')

        }else if(quest24 === "Corregido"){ pdf.circle(442 , 668, 4, 'FD')

        }else{ pdf.circle(526 , 668, 4, 'FD')}

        //Quest 25 -> CheckValue 
        if(quest25 === "Si"){ pdf.circle(357 , 691, 4, 'FD')

        }else if(quest25 === "No"){ pdf.circle(397 , 691, 4, 'FD')

        }else if(quest25 === "Corregido"){ pdf.circle(442 , 691, 4, 'FD')

        }else{ pdf.circle(526 , 691, 4, 'FD')}


        //PAGINA 3
        
        //-----ILUMINACION-----
        pdf.setPage(3)

        //Quest 26 -> CheckValue 
        if(quest26 === "Si"){ pdf.circle(351 , 101, 4, 'FD')

        }else if(quest26 === "No"){ pdf.circle(391 , 101, 4, 'FD')

        }else if(quest26 === "Corregido"){ pdf.circle(437 , 101, 4, 'FD')

        }else{ pdf.circle(520 , 101, 4, 'FD')}

        //Quest 27 -> CheckValue 
        if(quest27 === "Si"){ pdf.circle(351 , 148, 4, 'FD')

        }else if(quest27 === "No"){ pdf.circle(391 , 148, 4, 'FD')

        }else if(quest27 === "Corregido"){ pdf.circle(437 , 148, 4, 'FD')

        }else{ pdf.circle(520, 148, 4, 'FD')}


        //-----ALARMAS TÉCNICAS-----
        //Quest 28 -> CheckValue 
        if(quest28 === "Si"){ pdf.circle(351 , 231, 4, 'FD')

        }else if(quest28 === "No"){ pdf.circle(391 , 231, 4, 'FD')

        }else if(quest28 === "Corregido"){ pdf.circle(437 , 231, 4, 'FD')

        }else{ pdf.circle(520 , 231, 4, 'FD')}

        //Quest 29 -> CheckValue 
        if(quest29 === "Si"){ pdf.circle(351 , 281, 4, 'FD')

        }else if(quest29 === "No"){ pdf.circle(391 , 281, 4, 'FD')

        }else if(quest29 === "Corregido"){ pdf.circle(437 , 281, 4, 'FD')

        }else{ pdf.circle(520 , 281, 4, 'FD')}

        //------- VIDEOPORTERO ------
        //Quest 30 -> CheckValue 
        if(quest30 === "Si"){ pdf.circle(351 , 362, 4, 'FD')

        }else if(quest30 === "No"){ pdf.circle(391 , 362, 4, 'FD')

        }else if(quest30 === "Corregido"){ pdf.circle(437 , 362, 4, 'FD')

        }else{ pdf.circle(520 , 362, 4, 'FD')}

        //-------- PROYECTO -------
        //Quest 31 -> CheckValue 
        if(quest31 === "Si"){ pdf.circle(351 , 454, 4, 'FD')

        }else if(quest31 === "No"){ pdf.circle(391 , 454, 4, 'FD')

        }else if(quest31 === "Corregido"){ pdf.circle(437, 454, 4, 'FD')

        }else{ pdf.circle(520 , 454, 4, 'FD')}


        //-------- EFICIENCIA ENERGÉTICA -------
        //Quest 32  -> CheckValue 
        if(quest32 === "Si"){ pdf.circle(351 , 539, 4, 'FD')

        }else if(quest32 === "No"){ pdf.circle(391 , 539, 4, 'FD')

        }else if(quest32 === "Corregido"){ pdf.circle(437 , 539, 4, 'FD')

        }else{ pdf.circle(520, 539, 4, 'FD')}
        
        //-------- OTROS -------
        //Quest 33 -> CheckValue 
        if(quest33 === "Si"){ pdf.circle(351 , 624, 4, 'FD')

        }else if(quest33 === "No"){ pdf.circle(391 , 624, 4, 'FD')

        }else if(quest33 === "Corregido"){ pdf.circle(437, 624, 4, 'FD')

        }else{ pdf.circle(520, 624, 4, 'FD')}

        //Quest 34 -> CheckValue 
        if(quest34 === "Si"){ pdf.circle(351 , 663, 4, 'FD')

        }else if(quest34 === "No"){ pdf.circle(391 , 663, 4, 'FD')

        }else if(quest34 === "Corregido"){ pdf.circle(437 , 663, 4, 'FD')

        }else{ pdf.circle(520 , 663, 4, 'FD')}

        //Quest 35 -> CheckValue 
        if(quest35 === "Si"){ pdf.circle(351 , 704, 4, 'FD')

        }else if(quest35 === "No"){ pdf.circle(391 , 704, 4, 'FD')

        }else if(quest35 === "Corregido"){ pdf.circle(437, 704, 4, 'FD')

        }else{ pdf.circle(520 , 704, 4, 'FD')}

        //-------- OTROS -------
        //Others 1 
        pdf.text(other1, 66,619)

        //Others 2 
        pdf.text(other2, 66,660)

        //Others 3 
        pdf.text(other3, 66,699)

        
        //PAGINA 4
        pdf.setPage(4)
        
        //TextArea1
        agregarTextoAjustado(pdf, details1, 67, 112, 450, 15)

        //TextArea2
        agregarTextoAjustado(pdf, details2, 67, 468, 450, 15)


        pdf.setPage(5)
        //TextArea3
        agregarTextoAjustado(pdf, details3, 67, 112, 450, 15)
        //TextArea4
        agregarTextoAjustado(pdf, details4, 67, 374, 450, 15)
        //TextArea5
        agregarTextoAjustado(pdf, details5, 67, 597, 450, 15)

        pdf.setPage(6)
        //---EQUIPOS SUSTITUIDOS---
        //FILA 1
        pdf.text(referencia1, 71,216)
        pdf.text(numeroEquipo1, 191,216)
        pdf.text(serieEquipoNuevo1, 309,216)
        pdf.text(lugar1, 425,216)

        //FILA 2
        pdf.text(referencia2, 71,268)
        pdf.text(numeroEquipo2, 191,268)
        pdf.text(serieEquipoNuevo2, 309,268)
        pdf.text(lugar2, 425,268)

        //FILA 3
        pdf.text(referencia3, 71,316)
        pdf.text(numeroEquipo3, 191,316)
        pdf.text(serieEquipoNuevo3, 309,316)
        pdf.text(lugar3, 425,316)

        //FILA 4
        pdf.text(referencia4, 71,367)
        pdf.text(numeroEquipo4, 191,367)
        pdf.text(serieEquipoNuevo4, 309,367)
        pdf.text(lugar4, 425,367)

        //FILA 5
        pdf.text(referencia5, 71,418)
        pdf.text(numeroEquipo5, 191,418)
        pdf.text(serieEquipoNuevo5, 309,418)
        pdf.text(lugar5, 425,418)

        //FILA 6
        pdf.text(referencia6, 71,468)
        pdf.text(numeroEquipo6, 191,468)
        pdf.text(serieEquipoNuevo6, 309,468)
        pdf.text(lugar6, 425,468)

        //FILA 7
        pdf.text(referencia7, 71,517)
        pdf.text(numeroEquipo7, 191,517)
        pdf.text(serieEquipoNuevo7, 309,517)
        pdf.text(lugar7, 425,517)

        //FILA 8
        pdf.text(referencia8, 71,567)
        pdf.text(numeroEquipo8, 191,567)
        pdf.text(serieEquipoNuevo8, 309,567)
        pdf.text(lugar8, 425,567)

        //FILA 9
        pdf.text(referencia9, 71,618)
        pdf.text(numeroEquipo9, 191,618)
        pdf.text(serieEquipoNuevo9, 309,618)
        pdf.text(lugar9, 425,618)

        pdf.setPage(7)
        //---Funcionamiento Incorrecto---
        if(quest36 === "Si"){ pdf.circle(367 , 175, 4, 'FD')

        }else { pdf.circle(506 , 175, 4, 'FD')}


        //TextArea6
        agregarTextoAjustado(pdf, details6, 67, 255, 450, 15)

        pdf.setPage(8)


        //Conformidad
        if(conformidad === "conform"){ pdf.circle(64.5 , 117.7, 4, 'FD')
        }else{ pdf.circle(64.5 , 253, 4, 'FD')}

        //Empresa
        pdf.text( empresa1, 130.5, 357.9)
        pdf.text( empresa2, 383.2, 357.9)

        //DNI
        pdf.text( dni1, 130.5, 404.2)
        pdf.text( dni2, 383.2, 404.2)

        //FDO
        pdf.text( fdo1, 130.5, 593.7)
        pdf.text( fdo2, 383.2, 593.7)
    
        pdf.save(`PV_Ork_${vivienda}_${date}.pdf`);
    } else {
        throw new Error("signaturePad no está inicializado");
    }
}
