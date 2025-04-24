/*

3. Filtrado de Usuarios por Especialidad:
  - Crea una función para filtrar usuarios por su especialidad.

4. Generación de Páginas HTML:
  - Utiliza literal string para construir páginas HTML directamente en el código..
  - Crea una página para cada especialidad que muestre el título de la página, el número de personas y los detalles de cada usuario.
*/

const usersData = [
  { id: 1, name: 'Alice', age: 28, specialty: 'marketing' },
  { id: 2, name: 'Bob', age: 35, specialty: 'developers' },
  { id: 3, name: 'Charlie', age: 30, specialty: 'developers' },
  { id: 4, name: 'David', age: 25, specialty: 'QAs' },
  { id: 5, name: 'Emma', age: 32, specialty: 'ventas' },
  { id: 6, name: 'Frank', age: 28, specialty: 'marketing' },
  { id: 7, name: 'Grace', age: 34, specialty: 'developers' },
  { id: 8, name: 'Hank', age: 27, specialty: 'QAs' },
  { id: 9, name: 'Ivy', age: 31, specialty: 'ventas' },
  { id: 10, name: 'Jack', age: 29, specialty: 'marketing' },
  { id: 11, name: 'Karen', age: 36, specialty: 'developers' },
  { id: 12, name: 'Leo', age: 26, specialty: 'QAs' },
  { id: 13, name: 'Mia', age: 33, specialty: 'ventas' },
  { id: 14, name: 'Nathan', age: 30, specialty: 'marketing' },
  { id: 15, name: 'Olivia', age: 37, specialty: 'developers' },
  { id: 16, name: 'Paul', age: 24, specialty: 'QAs' },
  { id: 17, name: 'Quinn', age: 32, specialty: 'ventas' },
  { id: 18, name: 'Ryan', age: 28, specialty: 'marketing' },
  { id: 19, name: 'Sara', age: 35, specialty: 'developers' },
  { id: 20, name: 'Tom', age: 29, specialty: 'QAs' },
  { id: 21, name: 'Uma', age: 30, specialty: 'ventas' },
  { id: 22, name: 'Victor', age: 27, specialty: 'marketing' },
  { id: 23, name: 'Wendy', age: 34, specialty: 'developers' },
  { id: 24, name: 'Xander', age: 31, specialty: 'QAs' },
  { id: 25, name: 'Yara', age: 33, specialty: 'ventas' },
  { id: 26, name: 'Zack', age: 28, specialty: 'marketing' },
  { id: 27, name: 'Ava', age: 36, specialty: 'developers' },
  { id: 28, name: 'Bryan', age: 26, specialty: 'QAs' },
  { id: 29, name: 'Cynthia', age: 32, specialty: 'ventas' },
  { id: 30, name: 'Derek', age: 30, specialty: 'marketing' },
];

function specialtyFilter (specialty) {
  return usersData.filter(user => user.specialty === specialty)
}


const express = require('express')
const app = express ()

app.get('/', (req, res) => {
    res.send(`
        <h1>WEB DE USUARIOS</h1>
        <p>Selecciona la especialidad:</p>
        <p><a href="/marketing">MARKETING</a></p>
        <p><a href="/developers">DEVELOPERS</a></p>
        <p><a href="/QAs">QAs</a></p>
        <p><a href="/ventas">DEVELOPERS</a></p>
        `)
})

app.get('/marketing', (req, res) => {
  const users = specialtyFilter('marketing')
  const userList = users.map(user => `<li>${user.name}</li>`).join('')
  res.send(`
    <h1>MARKETING</h1>
    <p>Nº de usuarios: ${users.length}</p>
    <p>Los usuarios de marketing son:</p>
    <ul>${userList}</ul>
    <p><a href="/">HOME</a></p>
    `)
})

app.get('/developers', (req, res) => {
  const users = specialtyFilter('developers')
  const userList = users.map(user => `<li>${user.name}</li>`).join('')
  res.send(`
    <h1>DEVELOPERS</h1>
    <p>Nº de usuarios: ${users.length}</p>
    <p>Los usuarios developers son:</p>
    <ul>${userList}</ul>
    <p><a href="/">HOME</a></p>
    `)
})

app.get('/QAs', (req, res) => {
  const users = specialtyFilter('QAs')
  const userList = users.map(user => `<li>${user.name}</li>`).join('')
  res.send(`
    <h1>QAs</h1>
    <p>Nº de usuarios: ${users.length}</p>
    <p>Los usuarios de QAs son:</p>
    <ul>${userList}</ul>
    <p><a href="/">HOME</a></p>
    `)
})

app.get('/ventas', (req, res) => {
  const users = specialtyFilter('ventas')
  const userList = users.map(user => `<li>${user.name}</li>`).join('')
  res.send(`
    <h1>VENTAS</h1>
    <p>Nº de usuarios: ${users.length}</p>
    <p>Los usuarios de ventas son:</p>
    <ul>${userList}</ul>
    <p><a href="/">HOME</a></p>
    `)
})

app.use((req, res) => {
  res.status(404).end('<h1>Página no encontrada</h1><a href="/">HOME</a>')
})

app.listen(3000, () => {
  console.log('Node.js está escuchando en el puerto http://localhost:3000')
})