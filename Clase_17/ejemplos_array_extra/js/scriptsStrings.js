let palabra1 = "frase";
let palabra2 = "concatenada";
let texto = `Una ${palabra1} bien ${palabra2}`;


function userTemplate({ address, id, name, username }) {
    return (
        '<li class="user" id="user' + id + '">' +
        '<p class="user"><b>' + name + '</b><span> -- ' + username + '</p>' +
        '<address>' + address.street + " " + address.suite + ", " + address.city + '</address>' +
        '</li>'
    );
}

function userTemplate2({ address, id, name, username }) {
    return `
      <li class="user" id="user${id}">
        <p class="user"><b>${name}</b><span> -- ${username}</p>
        <address>${address.street} ${address.suite}, ${address.city}</address>
      </li>
    `;
}