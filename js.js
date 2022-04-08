const tipoProveedor = [
    { 
        code: "TP001",
        name: "Nacional"
    },
    { 
        code: "TP002",
        name: "Internacional"
    }, 
]

const situaciones = [
    {
        code: "ST001",
        name: "Apto para contratar con el estado",
    },
    {
        code: "ST002",
        name: "Registro Nacional del Proveedor",
    },
    {
        code: "ST003",
        name: "Sujeto a Retencion",
    }
]

const tipoDocumentos = [
    { 
        code: "TD001",
        name: "DNI",
        suplierCode: "TP001"
    },
    { 
        code: "TD002",
        name: "RUC",
        suplierCode: "TP001"
    }, 
    { 
        code: "TD003",
        name: "CARNET DE EXTRANJERÍA",
        suplierCode: "TP002"
    }, 
    { 
        code: "TD004",
        name: "OTROS",
        suplierCode: "TP001"
    },     
    { 
        code: "TD005",
        name: "OTROS",
        suplierCode: "TP002"
    }, 
]
const tipoDeRetencion = [
    {
        name: "1"
    },
    {
        name: "2"
    },
    {
        name: "3"
    }
]


const paises = [
    {
        code: "PS001",
        nombre: "Perú"
    },
    {
        code: "PS002",
        nombre: "Mexico"
    },
    {
        code: "PS003",
        nombre: "Italia"
    },
]

const regiones = [
    {
        code: "RG001",
        sub: "PS001",
        nombre:"Lima"
    },
    {
        code: "RG002",
        sub: "PS001",
        nombre:"Loreto"
    },
    {
        code: "RG003",
        sub: "PS002",
        nombre:"Mexico DM"
    },
    {
        code: "RG004",
        sub: "PS002",
        nombre:"Jalisco"
    },
    {
        code: "RG005",
        sub: "PS003",
        nombre:"Venecia"
    },
    {
        code: "RG006",
        sub: "PS003",
        nombre:"Milán"
    }

]

const provincias = [
    {
        code: "DT001",
        regionCodigo: "RG001",
        nombre: "Provincia Lima "
    },
    {
        code: "DT002",
        regionCodigo: "RG001",
        nombre: "Provincia Barranca"
    },
    {
        code: "DT003",
        regionCodigo: "RG001",
        nombre: "Provincia Callao"
    },
    {
        code: "DT004",
        regionCodigo: "RG002",
        nombre: "Alto Amazonas"
    },
    {
        code: "DT005",
        regionCodigo: "RG003",
        nombre: "Provincia Mexico DM"
    },
    {
        code: "DT006",
        regionCodigo: "RG004",
        nombre: "Provincia de Bolaños"
    },
    {
        code: "DT007",
        regionCodigo: "RG005",
        nombre: "Provincia de Véneto"
    },
    {
        code: "DT008",
        regionCodigo: "RG006",
        nombre: "Provincia de Lombardía"
    },

]

const distritos=[
    {
        code:"DIS001",
        codeProvincias:"DT001",
        nombre:"Lince"
    },
    {
        code:"DIS002",
        codeProvincias:"DT001",
        nombre:"Jesus María"
    },
    {
        code:"DIS003",
        codeProvincias:"DT002",
        nombre:"Supe"
    },
    {
        code:"DIS004",
        codeProvincias:"DT002",
        nombre:"Julio's House"
    },
    {
        code:"DIS005",
        codeProvincias:"DT003",
        nombre:"La Perla"
    },
    {
        code:"DIS006",
        codeProvincias:"DT004",
        nombre:"Lagunas"
    },
    {
        code:"DIS007",
        codeProvincias:"DT005",
        nombre:"Distrito de Morelos"
    },
    {
        code:"DIS008",
        codeProvincias:"DT006",
        nombre:"Distrito de Bolaños"
    },
    {
        code:"DIS009",
        codeProvincias:"DT007",
        nombre:"Venecia"
    },
    {
        code:"DIS010",
        codeProvincias:"DT008",
        nombre:"Brescia "
    }
]

function mostrarPaises(){
    const pais = document.getElementById("pais");
    let html = `<option value="" hidden>Seleccione</option>`;
    for (let index = 0; index < paises.length; index++) {
        html+=
       `<option value="${paises[index].code}" >${paises[index].nombre}</option>`
    }
    pais.innerHTML=html;
}

function mostrarRegion(){
    const region = document.getElementById("region");
    const pais = document.getElementById("pais");
    let html=`<option value="" hidden>Seleccione</option>`;
    for (let index = 0; index < regiones.length; index++) {
        if (pais.value == regiones[index].sub) {
            html+=
            `<option value="${regiones[index].code}">${regiones[index].nombre}</option>`       
        }
    }
    region.innerHTML=html;
}
function mostrarProvincias(){
    const region = document.getElementById("region");
    const ciudad = document.getElementById("ciudad");
    let html = `<option value="" hidden>Seleccione</option>`;
    for (let index = 0; index < provincias.length; index++) {
       if (region.value == provincias[index].regionCodigo) {
           html+=
           `<option value="${provincias[index].code}">${provincias[index].nombre}</option>`
       }
    }
    ciudad.innerHTML=html;
}
function mostrarDistritos(){
    const ciudad = document.getElementById("ciudad");
    const distritoss = document.getElementById("distrito");
    let html = `<option value="" hidden>Seleccione</option>`;
    for (let index = 0; index < distritos.length; index++) {
       if (ciudad.value == distritos[index].codeProvincias) {
           html+=
           `<option value="${distritos[index].code}">${distritos[index].nombre}</option>`
       }
    }
    distritoss.innerHTML=html;
}

function mostrarSituaciones(){
    const situacionesR = document.getElementById("situaciones");
    let html =`<label for="" class="form-label">Situación</label>`;
    for (let index = 0; index < situaciones.length; index++) {
        if (situaciones[index].code == "ST003") {
            html+=
            `<div class="form-check">
                <input class="form-check-input"  onchange="tieneRetencion()" type="checkbox" name="exampleRadios" id="${situaciones[index].code}" value="${situaciones[index].code}">
                <label class="form-check-label" for="exampleRadios1">${situaciones[index].name}</label>
            </div>`
        }else{

            html+=
            `<div class="form-check">
                <input class="form-check-input" type="checkbox" name="exampleRadios" id="${situaciones[index].code}" value="${situaciones[index].code}">
                <label class="form-check-label" for="exampleRadios1">${situaciones[index].name}</label>
            </div>`
        }
    }
    situacionesR.innerHTML = html;
    
}
function mostrarTipoProveedor(){
    const selectProveedor = document.getElementById("selectProveedor");
    let html = `<option value="" hidden>Seleccione</option>`;
    for (let index = 0; index < tipoProveedor.length; index++) {
        html+=
        `<option value="${tipoProveedor[index].code}">${tipoProveedor[index].name}</option>`
    }
    selectProveedor.innerHTML = html;
}

function  mostrarTipoDeDocumento(){
    const selectTipoDocumento = document.getElementById("selectTipoDocumento");
    const selectProveedor = document.getElementById("selectProveedor");
    let html =`<option value="" hidden>Seleccione</option>"`;
    for (let index = 0; index < tipoDocumentos.length; index++) {
       if (selectProveedor.value == tipoDocumentos[index].suplierCode) {
        html+=
        `<option value="${tipoDocumentos[index].code}">${tipoDocumentos[index].name}</option>`
       }
    }
    selectTipoDocumento.innerHTML = html;
}

function validarCelular(){
    const celular = document.getElementById("celular");
    const celularError =  document.getElementById("celularError");
    if (celular.value) {
        const numero = parseInt(celular.value);
        const firstLetter = celular.value.substring(0,1);
        if ( !isNaN(numero)) {
            // && ( && ())
            if (firstLetter=='9') {
                if (celular.value.length == 9) {
                    celular.classList.remove("border-rojo");
                    celularError.classList.add("display-none");
                }else{
                    celularError.classList.remove("display-none");
                    celular.classList.add("border-rojo");
                    celularError.innerHTML = "La longitud debe ser 9.";
                }
            }else{
                celularError.classList.remove("display-none");
                celular.classList.add("border-rojo");
                celularError.innerHTML = "El primer digito debe ser 9.";
            }
        }else{
            celularError.classList.remove("display-none");
            celular.classList.add("border-rojo");
            celularError.innerHTML = "El campo debe ser numerico.";
        }
    }else{
        celularError.classList.remove("display-none");
        celular.classList.add("border-rojo");
        celularError.innerHTML = "El campo es obligatorio.";
    }

}

function guardar(){
    const selectProveedor = document.getElementById("selectProveedor");
    const selectTipoDocumento = document.getElementById("selectTipoDocumento");
    const numeroDocumento = document.getElementById("numeroDocumento");
    const cardNiff = document.getElementById("cardNiff");
    const razonSocial = document.getElementById("razonSocial");
    const nombreComercial = document.getElementById("nombreComercial");
    const siglas = document.getElementById("siglas");
    const pais = document.getElementById("pais");
    const region = document.getElementById("region");
    const ciudad = document.getElementById("ciudad");
    const distrito = document.getElementById("distrito");
    const codigoPostal = document.getElementById("codigoPostal");
    const direccionFiscal = document.getElementById("direccionFiscal");
    const condicionSunat = document.getElementById("condicionSunat");
    const rubro = document.getElementById("rubro");
    const anexo1 = document.getElementById("anexo1");
    const telefono1 = document.getElementById("telefono1");
    const anexo2 = document.getElementById("anexo2");
    const telefono2 = document.getElementById("telefono2");
    const celular = document.getElementById("celular");
    const fax = document.getElementById("fax");
    const correoElectronico = document.getElementById("correoElectronico");
    const paginaWeb = document.getElementById("paginaWeb");
    
 
    if (selectProveedor.value && selectTipoDocumento.value && numeroDocumento.value && razonSocial.value
        && nombreComercial.value && pais.value && region.value && ciudad.value && distrito.value && direccionFiscal.value
        && rubro.value) {
            
            const objeto = {
                proveedor: selectProveedor.value,
                tipoDeDocumento: selectTipoDocumento.value,
                numeroDeDocumento: numeroDocumento.value,
                cardNiff: cardNiff.value,
                razonSocial: razonSocial.value,
                nombreComercial: nombreComercial.value,
                siglas: siglas.value,
                pais: pais.value,
                region: region.value,
                ciudad: ciudad.value,
                distrito: distrito.value,
                codigoPostal: codigoPostal.value,
                direccionFiscal: direccionFiscal.value,
                condicionSunat: condicionSunat.value,
                rubro: rubro.value,
                anexo1: anexo1.value,
                telefono1: telefono1.value,
                anexo2: anexo2.value,
                telefono2: telefono2.value,
                celular: celular.value,
                fax: fax.value,
                correoElectronico: correoElectronico.value,
                paginaWeb: paginaWeb.value,
                listaDeSituaciones: []

                  
            }

            const situacionChecked = document.querySelectorAll("[name='exampleRadios']");
            /*
            [
                {
                    accept: "",
                    accessKey: "" ,
                    checked: false
                },
                {
                    accept: "",
                    accessKey: "" ,
                    checked: false
                },
            ]
            
            */
            for (let index = 0; index < situacionChecked.length; index++) {
                if (situacionChecked[index].checked ) {
                    const buscar = encontrarSituacionPorCodigo(situacionChecked[index].value)

                   objeto.listaDeSituaciones.push(buscar)
                }
            }
        
            console.log(objeto)

            // enviarObjeto(objeto)

        
    }
    else{
        validarControl(selectProveedor)
        validarControl(selectTipoDocumento)
        validarControl(numeroDocumento)
        validarControl(razonSocial)
        validarControl(nombreComercial)
        validarControl(pais)
        validarControl(region)
        validarControl(ciudad)
        validarControl(distrito)
        validarControl(direccionFiscal)
        validarControl(rubro)
        
    }
}

function encontrarSituacionPorCodigo(codigo){
    for (let index = 0; index < situaciones.length; index++) {
       
        if (situaciones[index].code == codigo ) {
            return situaciones[index];
        }
    }
}

function validarControl(control){
    if (control.value) {
        control.classList.remove("border-rojo");
    }else{
        control.classList.add("border-rojo");  
    } 
}

function tieneRetencion(){
    const checkSujetoARetencion = document.getElementById("ST003");
    const divRetencion = document.getElementById("divRetencion");
    const selectTipoDeRetencion = document.getElementById("selectTipoDeRetencion");
    let html = `<option value="" hidden>Seleccione</option>`;
    
    if (checkSujetoARetencion.checked) {
        divRetencion.classList.remove("display-none")
        divRetencion.classList.add("display-block")
    }else{
        divRetencion.classList.remove("display-block")
        divRetencion.classList.add("display-none")
    }

    for (let index = 0; index < tipoDeRetencion.length; index++) {
        html+= 
        `<option value="${tipoDeRetencion[index].name}">${tipoDeRetencion[index].name}</option>`
    }
    selectTipoDeRetencion.innerHTML = html;
}

function enviarObjeto(objeto){
    const url= ""
    const header = ""

    fetch(url,{
        method: "POST",
        headers: "",
        body: JSON.stringify(objeto),
    })
    .then((res) => (res).json)
    .then((res) => console.log(res))
}

function funcionesIniciales(){
    mostrarTipoProveedor()
    mostrarSituaciones()
    mostrarPaises()
}
