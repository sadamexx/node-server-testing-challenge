| Feature                | Method | URL                       |
| :--------------------- | :----- | :------------------------ |
| Creates a user         | POST   | /api/register             |
| Auth user,create token | POST   | /api/login                |
| LogOut                 | GET    | /api/users                |
| List of users, (priv)  | GET    | /api/users                |


User {
    id: required,
    username: required,
    password: required,
    department: optional
}