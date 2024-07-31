// Exemplo de modelo de usuário
const users = [];

const userModel = {
  createUser: (email, password) => {
    const user = { email, password };
    users.push(user);
    return user;
  },
  findUser: (email) => {
    return users.find(user => user.email === email);
  }
};

module.exports = userModel;
