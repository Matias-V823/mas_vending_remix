export async function getMaquinas(){
    const respuesta = await fetch(`${process.env.API_URL}/maquinas?populate=imagen`);
    return await respuesta.json()

}