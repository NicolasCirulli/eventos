const mentores = [
    {
        nombre: 'Nicolás Catriel',
        edad : 28,
        apellido: 'Cirulli',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Lucrecia',
        edad : 27,
        apellido: 'Gillone',
        rol: 'Mentor/a',
        especialidad : ['JavaScript', 'React']
    },
    {
        nombre: 'Florencia',
        edad : 22,
        apellido: 'Puñales',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Vue']
    },
    {
        nombre: 'Camila',
        edad : 28,
        apellido: 'Domato',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'CSS', 'Bootstrap']
    },
    {
        nombre: 'Kevin',
        edad : 30,
        apellido: 'Darnet',
        rol: 'Mentor/a',
        especialidad : ['HTML', 'JavaScript']
    },
    {
        nombre: 'Guillermo',
        edad : 26,
        apellido: 'Bonutto',
        rol: 'Mentor/a',
        especialidad : ['Java', 'Vue', 'Bootstrap']
    },
]

const $busqueda = document.getElementById('busqueda-js')
const $select = document.getElementById('tecnologias-js')
const $lista = document.getElementById('lista-js')



const tecnologias = mentores.map( mentor => mentor.especialidad )
        .flat()
       /*  .filter( (tecnologia,index,array) => array.indexOf( tecnologia ) === index )  */

const sinRepetir = Array.from( new Set( tecnologias ) )


$select.innerHTML += generarOption( sinRepetir )

$busqueda.addEventListener( 'input', filtroCruzado )

$select.addEventListener( 'change', filtroCruzado)

function filtrarSelect(tecnologia, listaMentores){
    let mentoresFiltrados;
    if( $select.value !== 'todas' ){
        mentoresFiltrados = listaMentores.filter( mentor => mentor.especialidad.includes( tecnologia.value ))
    }else{
        mentoresFiltrados = listaMentores
    }
    return mentoresFiltrados
}

function busquedaTexto(inputBusqueda){
    let mentoresFiltrados = mentores.filter( mentor => {
       return mentor.nombre.toLowerCase().startsWith( inputBusqueda.value.toLowerCase() )
    } )
    return mentoresFiltrados
}

function generarOption( tecnologias ){
    let template = ''
    tecnologias.forEach( tecnologia => {
        template += `<option value="${tecnologia}"> ${tecnologia} </option>`
    });
    return template
}

function renderTemplate(template, donde){
    document.getElementById(donde).innerHTML = template
}

function generarLi(mentores){
    let template = ''
    mentores.forEach( mentor => {
        template += `<li> ${mentor.nombre} </li>`
    });
    return template
}

function filtroCruzado(evento){
    console.log(evento)
    const filtradosPorBusqueda = busquedaTexto($busqueda)
    const filtradosPorSelect = filtrarSelect( $select, filtradosPorBusqueda )
    renderTemplate( generarLi( filtradosPorSelect ), 'lista-js' )
}

