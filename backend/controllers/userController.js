// Example controller functions

// Get all users
const getUsers = (req, res) => {
    // Logic to retrieve users from database
    res.send('Get all users');
  };
  
  // Create a new user
  const createUser = (req, res) => {
    // Logic to create a new user in the database
    res.send('Create a new user');
  };
  
  module.exports = {
    getUsers,
    createUser
  };