// Asincrónico
const getNombre = async (idPost) => {
    try {
        const resPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        const post = await resPost.json()
        console.log(post.userId);

        const resUser = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        const user = await resUser.json()
        console.log(user.name);
    } catch (error) {
        console.log('Ocurrió un error grave', error);
    }
}

getNombre(99); // llamada a la función
console.log("prueba");