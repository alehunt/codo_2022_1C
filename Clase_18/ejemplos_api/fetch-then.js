const getNombre = (idPost) => {
    // hacemos la solicitud a la API...
    fetch(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
        // la API responde en formato JSON
        .then(res => {
            return res.json()
        })
        // Pedimos el userID de ese posteo
        .then(post => {
            console.log(post.userId)
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(res => {
                    return res.json()
                })
                .then(user => {
                    console.log(user.name)
                })
        })
    console.log("test");
}
getNombre(99); // llamada a la función