 let form = document.querySelector("form");
 let btnN = document.querySelector("#btnN");
 let btnA = document.querySelector("#btnA");
 let tbody = document.querySelector("table");

 btnN.addEventListener('click', ()=>{
    let idb = indexedDB.open('CRUD', 1)
    idb.onupgradeneeded= ()=>{
        let resultado = idb.result;
        resultado.createObjectStore('data', {autoIncrement:true}) 
    }

    idb.onsuccess = ()=>{
        let resultado = idb.result;
        let texto = resultado.transaction('data', 'readwrite')
        let store = texto.objectStore('data')
        store.put({
            lenguaje:form[0].value,
            version:form[1].value,
            creador:form[2].value
        })
    }

    location.reload();
 })


 function leer() {
    let idb =   indexedDB.open('CRUD', 1)
    idb.onsuccess = ()=>{
        let resultado = idb.result;
        let texto = resultado.transaction('data', 'readonly')
        let store = texto.objectStore('data')
        let cursor = store.openCursor()
        cursor.onsuccess= ()=>{
            let curResul = cursor.result;
            if(curResul){
                console.log(curResul.value.lenguaje);
                tbody.innerHTML += `
                <tr>
                <td>${curResul.value.lenguaje}</td>
                <td>${curResul.value.version}</td>
                <td>${curResul.value.creador}</td>
                <td onclick="editar(${curResul.key})">Actualizar</td>
                <td onclick="eliminar(${curResul.key})">Eliminar</td>
                </tr>
                `
                curResul.continue()
            }
        }
    }
 }

 function eliminar(e){
    let idb = indexedDB.open('CRUD',1)
    idb.onsuccess= ()=>{
        let resultado = idb.result;
        let texto = resultado.transaction('data', 'readwrite')
        let store = texto.objectStore('data')
        store.delete(e)
        location.reload()
    }
 }

 let actualizarKey;

function editar(e){
    btnN.style.display = "none";
   btnA.style.display = "block";
   actualizarKey = e;
}

btnA.addEventListener('click', ()=>{
    let idb =indexedDB.open('CRUD',1)
    idb.onsuccess = () =>{
        let resultado = idb.result;
        let texto = resultado.transaction('data', 'readwrite')
        let store = texto.objectStore('data')
        store.put({
            lenguaje:form[0].value,
            version:form[1].value,
            creador:form[2].value
        }, actualizarKey);

        location.reload();
    }
})

 leer()