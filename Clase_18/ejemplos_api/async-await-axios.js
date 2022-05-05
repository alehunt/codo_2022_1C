// Asincrónico con Axios
const getNombre = async (idPost) => {
    try {
        const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        console.log(resPost); //traemos el objeto completo
        console.log(resPost.data.userId); //traemos solo el userID, guardado dentro de data

        const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
        console.log(resUser); //traemos el objeto completo
        console.log(resUser.data.name); //traemos solo el nombre, guardado dentro de data
    } catch (error) {
        console.log('Ocurrió un error grave', error);
    }
}
getNombre(99); // llamada a la función