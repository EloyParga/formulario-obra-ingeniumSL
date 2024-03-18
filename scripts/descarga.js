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

// Función auxiliar para obtener el valor de los campos de texto
function getTextValue(id) {
    const element = document.getElementById(id);
    return element ? element.value : 'NULL';
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

            let direccion =document.getElementById('direccion').value;
            let vivienda = document.getElementById('vivienda').value;
        
            let tipoVivienda = document.querySelector('input[name="housingType"]:checked').value;
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
            
            let other1 =  document.getElementById('others1').value;
            let other2 =  document.getElementById('others2').value;
            let other3 =  document.getElementById('others3').value;
        
            let quest31 = document.querySelector('input[name="quest31"]:checked').value;
            let quest32 = document.querySelector('input[name="quest32"]:checked').value;
            let quest33 = document.querySelector('input[name="quest33"]:checked').value;
        
            let details1 =  document.getElementById('visitDetails1').value;
            let details2 =  document.getElementById('visitDetails2').value;
            let details3 =  document.getElementById('visitDetails3').value;
            
            let conformidad = document.querySelector('input[name="declaration"]:checked').value;
            let confName1 = document.getElementById('conformidadName').value
            let confName2 = document.getElementById('disconformidadName').value

        
            let empresa1 =  document.getElementById('empresa1').value;
            let dni1 =  document.getElementById('dni1').value;
            let fdo1 =  document.getElementById('fdo1').value;
            
            let empresa2 =  document.getElementById('empresa2').value;
            let dni2 =  document.getElementById('dni2').value;
            let fdo2 =  document.getElementById('fdo2').value;

            console.log(fdo1 + " --- " + fdo2)
            generatePDF(direccion,vivienda, tipoVivienda,quest1, quest2, quest3, quest4, quest5,quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13,
                quest14, quest15, quest16, quest17, quest18, quest19, quest20, quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29,quest30,
                quest31, quest32, quest33, other1, other2, other3, details1, details2, details3, conformidad, confName1, confName2, empresa1, empresa2, dni1, dni2, fdo1, fdo2).then(() => {
                console.log("PDF generado con éxito");
            }).catch((error) => {
                console.error("Error al generar el PDF", error);
            });
        });
    }

});

async function generatePDF(direccion,vivienda, tipoVivienda,quest1, quest2, quest3, quest4, quest5,quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13,
    quest14, quest15, quest16, quest17, quest18, quest19, quest20, quest21, quest22, quest23, quest24, quest25, quest26, quest27, quest28, quest29,quest30,
    quest31, quest32, quest33, other1, other2, other3, details1, details2, details3, conformidad, confName1, confName2 , empresa1, empresa2, dni1, dni2, fdo1, fdo2){

        console.log(fdo1 + " " + fdo2)
    // Asegúrate de que esta función sea llamada después de que signaturePad ha sido inicializada
    if (signaturePad) {
        const signatureImg1=signaturePad.toDataURL();
        const signatureImg2=signaturePad2.toDataURL(); // Usa signaturePad aquí sin problema
        
        
        
        const img1 = await loadImage("/PDF/1.jpg");
        const img2 = await loadImage("/PDF/2.jpg");
        const img3 = await loadImage("/PDF/3.jpg");
        const img4 = await loadImage("/PDF/4.jpg");
        const img5 = await loadImage("/PDF/5.jpg");

        const pdf = new jsPDF('p', 'pt', 'a4');

        pdf.addImage(img1, 'JPEG', 0, 0, 595, 842);
       
        
        // Añadir nuevas páginas para las imágenes adicionales
        const images = [img2, img3, img4, img5];
        images.forEach(image => {
            pdf.addPage();
            pdf.addImage(image, 'JPEG', 0, 0, 595, 842);
        });
        //Setear la pagina 5 
        pdf.setPage(5);
        pdf.addImage(signatureImg1, 'PNG', 70, 458, 200, 85)
        pdf.addImage(signatureImg2, 'PNG', 323, 458, 200, 85)

        pdf.setPage(1);
        pdf.setFontSize(12)

        
        const date = new Date().toLocaleDateString('es-ES')
        pdf.text(date, 425, 25)
        pdf.text(direccion, 130,105)
        pdf.text(vivienda, 383,105)

        //Setear Color del circulo
        pdf.setFillColor(0,0,0)

        //Tipo Vivienda -> CheckValue
        if(tipoVivienda === "Formación"){ pdf.circle(210.5 , 154.5, 4, 'FD')

        }else if(tipoVivienda === "PILOTO"){ pdf.circle(368.5, 154.5, 4, 'FD')

        }else{ pdf.circle(501, 154.5, 4, 'FD')}

        //Quest 1 -> CheckValue 
        if(quest1 === "Si"){ pdf.circle(370 , 248.5, 4, 'FD')

        }else if(quest1 === "No"){ pdf.circle(420 , 248.5, 4, 'FD')

        }else{ pdf.circle(475.8 , 248.5, 4, 'FD')}

        console.log()
        //Quest 2 -> CheckValue 
        if(quest2 === "Si"){ pdf.circle(370 , 278, 4, 'FD')

        }else if(quest2 === "No"){ pdf.circle(420 , 278, 4, 'FD')

        }else{ pdf.circle(475.8 , 278, 4, 'FD')}

        //Quest 3 -> CheckValue 
        if(quest3 === "Si"){ pdf.circle(370 , 308, 4, 'FD')

        }else if(quest3 === "No"){ pdf.circle(420 , 308, 4, 'FD')

        }else{ pdf.circle(476 , 308, 4, 'FD')}

        //Quest 4 -> CheckValue 
        if(quest4 === "Si"){ pdf.circle(370 , 337, 4, 'FD')

        }else if(quest4 === "No"){ pdf.circle(420 , 337, 4, 'FD')

        }else{ pdf.circle(475.8 , 337, 4, 'FD')}

        //Quest 5 -> CheckValue 
        if(quest5 === "Si"){ pdf.circle(370 , 367.2, 4, 'FD')

        }else if(quest5 === "No"){ pdf.circle(420 , 367.2, 4, 'FD')

        }else{ pdf.circle(475.8 , 367.2, 4, 'FD')}
        
        //Quest 6 -> CheckValue 
        if(quest6 === "Si"){ pdf.circle(370 , 397, 4, 'FD')

        }else if(quest6 === "No"){ pdf.circle(420 , 397, 4, 'FD')

        }else{ pdf.circle(475.8 , 397, 4, 'FD')}
        
        //Quest 7 -> CheckValue 
        if(quest7 === "Si"){ pdf.circle(370 , 430.2, 4, 'FD')

        }else if(quest7 === "No"){ pdf.circle(420 , 430.2, 4, 'FD')

        }else{ pdf.circle(475.8 , 430.2, 4, 'FD')}

        //---------
        //Quest 8 -> CheckValue 
        if(quest8 === "Si"){ pdf.circle(370 , 540, 4, 'FD')

        }else if(quest8 === "No"){ pdf.circle(420 , 540, 4, 'FD')

        }else{ pdf.circle(475.8 , 540, 4, 'FD')}

        //Quest 9 -> CheckValue 
        if(quest9 === "Si"){ pdf.circle(370 , 569.7, 4, 'FD')

        }else if(quest9 === "No"){ pdf.circle(420 , 569.7, 4, 'FD')

        }else{ pdf.circle(475.8 , 569.7, 4, 'FD')}

        //Quest 10 -> CheckValue 
        if(quest10 === "Si"){ pdf.circle(370 , 599.6, 4, 'FD')

        }else if(quest10 === "No"){ pdf.circle(420 , 599.6, 4, 'FD')

        }else{ pdf.circle(475.8 , 599.6, 4, 'FD')}

        //Quest 11 -> CheckValue 
        if(quest11 === "Si"){ pdf.circle(370 , 638, 4, 'FD')

        }else if(quest11 === "No"){ pdf.circle(420 , 638, 4, 'FD')

        }else{ pdf.circle(475.8 , 638, 4, 'FD')}

        //Quest 12 -> CheckValue 
        if(quest12 === "Si"){ pdf.circle(370 , 676.6, 4, 'FD')

        }else if(quest12 === "No"){ pdf.circle(420 , 676.6, 4, 'FD')

        }else{ pdf.circle(475.8 , 676.6, 4, 'FD')}

        //------
        pdf.setPage(2)

        ///Quest 13 -> CheckValue 
        if(quest13 === "Si"){ pdf.circle(370 , 154.9, 4, 'FD')

        }else if(quest13 === "No"){ pdf.circle(420 , 154.9, 4, 'FD')

        }else{ pdf.circle(475.8 , 154.9, 4, 'FD')}

        //Quest 14 -> CheckValue 
        if(quest14 === "Si"){ pdf.circle(370 , 184.4, 4, 'FD')

        }else if(quest14 === "No"){ pdf.circle(420 , 184.4, 4, 'FD')

        }else{ pdf.circle(475.8 , 184.4, 4, 'FD')}

        //Quest 15 -> CheckValue 
        if(quest15 === "Si"){ pdf.circle(370 , 223.2, 'FD')

        }else if(quest15 === "No"){ pdf.circle(420 , 223.2, 4, 'FD')

        }else{ pdf.circle(475.8 , 223.2, 4, 'FD')}

        //------
        //Quest 16-> CheckValue 
        if(quest16 === "Si"){ pdf.circle(370 , 341, 4, 'FD')

        }else if(quest16 === "No"){ pdf.circle(420 , 341, 4, 'FD')

        }else{ pdf.circle(475.8 , 341, 4, 'FD')}

        //Quest 17 -> CheckValue 
        if(quest17 === "Si"){ pdf.circle(370 , 371, 4, 'FD')

        }else if(quest17 === "No"){ pdf.circle(420 , 371, 4, 'FD')

        }else{ pdf.circle(475.8 , 371, 4, 'FD')}

        //Quest 18 -> CheckValue 
        if(quest18 === "Si"){ pdf.circle(370 , 402, 4, 'FD')

        }else if(quest18 === "No"){ pdf.circle(420 , 402, 4, 'FD')

        }else{ pdf.circle(475.8 , 402, 4, 'FD')}

        //Quest 19 -> CheckValue 
        if(quest19 === "Si"){ pdf.circle(370 , 439.2, 'FD')

        }else if(quest19 === "No"){ pdf.circle(420 , 439.2, 4, 'FD')

        }else{ pdf.circle(475.8 , 439.2, 4, 'FD')}

        //Quest 20 -> CheckValue 
        if(quest20 === "Si"){ pdf.circle(370 , 487.2, 4, 'FD')

        }else if(quest20 === "No"){ pdf.circle(420 , 487.2, 4, 'FD')

        }else{ pdf.circle(475.8 , 487.2, 4, 'FD')}

        //-----
        //Quest 21 -> CheckValue 
        if(quest21 === "Si"){ pdf.circle(367.2 , 616, 'FD')

        }else if(quest21 === "No"){ pdf.circle(417.5 , 616, 4, 'FD')

        }else{ pdf.circle(473 , 616, 4, 'FD')}

        //Quest 22 -> CheckValue 
        if(quest22 === "Si"){ pdf.circle(368.5 , 649, 'FD')

        }else if(quest22 === "No"){ pdf.circle(418.6 , 649, 4, 'FD')

        }else{ pdf.circle(474.5 , 649, 4, 'FD')}

        //Quest 23 -> CheckValue 
        if(quest23 === "Si"){ pdf.circle(367.2 , 674.2, 4, 'FD')

        }else if(quest23 === "No"){ pdf.circle(417.5 , 674.2, 4, 'FD')

        }else{ pdf.circle(473 , 674.2, 4, 'FD')}

        //Quest 24 -> CheckValue 
        if(quest24 === "Si"){ pdf.circle(368.5 , 697.3, 4, 'FD')

        }else if(quest24 === "No"){ pdf.circle(418.6 , 697.3, 4, 'FD')

        }else{ pdf.circle(474.5 , 697.3, 4, 'FD')}

        //-----
        pdf.setPage(3)

        //Quest 25 -> CheckValue 
        if(quest25 === "Si"){ pdf.circle(370 , 118, 4, 'FD')

        }else if(quest25 === "No"){ pdf.circle(420 , 118, 4, 'FD')

        }else{ pdf.circle(475.5 , 118, 4, 'FD')}

        //Quest 26 -> CheckValue 
        if(quest26 === "Si"){ pdf.circle(370 , 165.5, 4, 'FD')

        }else if(quest26 === "No"){ pdf.circle(420 , 165.5, 4, 'FD')

        }else{ pdf.circle(475.5 , 165.5, 4, 'FD')}

        //-------
        //Quest 27 -> CheckValue 
        if(quest27 === "Si"){ pdf.circle(370 , 262, 4, 'FD')

        }else if(quest27 === "No"){ pdf.circle(420 , 262, 4, 'FD')

        }else{ pdf.circle(475.5, 262, 4, 'FD')}

        //Quest 28 -> CheckValue 
        if(quest28 === "Si"){ pdf.circle(370 , 309.5, 4, 'FD')

        }else if(quest28 === "No"){ pdf.circle(420 , 309.5, 4, 'FD')

        }else{ pdf.circle(475.5 , 309.5, 4, 'FD')}

        //-----
        //Quest 29 -> CheckValue 
        if(quest29 === "Si"){ pdf.circle(370.2 , 405, 4, 'FD')

        }else if(quest29 === "No"){ pdf.circle(421 , 405, 4, 'FD')

        }else{ pdf.circle(477 , 405, 4, 'FD')}

        //-------
        //Quest 30 -> CheckValue 
        if(quest30 === "Si"){ pdf.circle(372.2 , 510, 4, 'FD')

        }else if(quest30 === "No"){ pdf.circle(422.3 , 510, 4, 'FD')

        }else{ pdf.circle(477.9 , 510, 4, 'FD')}

        //--------
        //Quest 31 -> CheckValue 
        if(quest31 === "Si"){ pdf.circle(373 , 614.7, 4, 'FD')

        }else if(quest31 === "No"){ pdf.circle(423.5 , 614.7, 4, 'FD')

        }else{ pdf.circle(479.2 , 614.7, 4, 'FD')}

        //Quest 32  -> CheckValue 
        if(quest32 === "Si"){ pdf.circle(373 , 654, 4, 'FD')

        }else if(quest32 === "No"){ pdf.circle(423.5 , 654, 4, 'FD')

        }else{ pdf.circle(479.2 , 654, 4, 'FD')}

        //Quest 33 -> CheckValue 
        if(quest33 === "Si"){ pdf.circle(373 , 694.7, 4, 'FD')

        }else if(quest33 === "No"){ pdf.circle(423.5 , 694.7, 4, 'FD')

        }else{ pdf.circle(479.2 , 694.7, 4, 'FD')}

        //Others 1 
        pdf.text(other1, 66,619)

        //Others 2 
        pdf.text(other2, 66,660)

        //Others 3 
        pdf.text(other3, 66,699)

        //-------
        pdf.setPage(4)

        //TextArea1
        pdf.text(details1, 67,133)

        //TextArea2
        pdf.text(details2, 67,353.5)

        //TextArea3
        pdf.text(details3, 67,574.5)

        //--- 
        pdf.setPage(5)
        
        //Conformidad
        if(conformidad === "conform"){ pdf.circle(64.5 , 117.7, 4, 'FD')
        }else{ pdf.circle(64.5 , 215, 4, 'FD')}

        //D./DÑA 
        pdf.text( confName1, 114, 151)
        pdf.text( confName2, 114, 248)

        //Empresa
        pdf.text( empresa1, 130.5, 357.9)
        pdf.text( empresa2, 383.2, 357.9)

        //DNI
        pdf.text( dni1, 130.5, 404.2)
        pdf.text( dni2, 383.2, 404.2)

        //FDO
        console.log(fdo1)
        pdf.text( fdo1, 130.5, 593.7)
        pdf.text( fdo2, 383.2, 593.7)
    




        pdf.save(`parte_visita_${date}.pdf`);
    } else {
        throw new Error("signaturePad no está inicializado");
    }
}
