const authController = {
    login: (req, res) => {
      const { email, password } = req.body;
      // Lógica de login
      res.send('Login endpoint');
    },
    register: (req, res) => {
      const { email, password } = req.body;
      // Lógica de registro
      res.send('Register endpoint');
    }
  };
  
  module.exports = authController;
  