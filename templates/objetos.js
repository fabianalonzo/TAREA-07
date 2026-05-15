const amigos = [
    {nombre: "Luis", apellidos: "Cárdenas Perez", edad: 20},
    {nombre: "Hugo", apellidos: "Mendoza Prieto", edad: 21},
    {nombre: "Sofía", apellidos: "Gonzáles Átuncar", edad: 22},
    {nombre: "Teresa", apellidos: "Quintana Martinez", edad: 23},
    {nombre: "Ana", apellidos: "Sotelo Mejía", edad: 24},
]

// const listaAmigos = amigos.join(", ") // [object Object]... NO FUNCIONA

// Para este caso utilizaremos map()

const listaAmigos = amigos.map(amigo => `${amigo.nombre} ${amigo.apellidos}`).join(", ")

console.log(listaAmigos)

