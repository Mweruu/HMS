const mockUserRepository = {
  create: jest.fn(),
  findOneUser: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  findOneBy: jest.fn(),
  save: jest.fn(),
  delete: jest.fn(),
};

  
  const newUser = {
    name:'Jane',
    email:'jane@gmail.com',
    role:'DOCTOR',
  };
  
  const createdUser = {
    id: 1,
    ...newUser,
  };
  
  const userId = 1;

  export {
    mockUserRepository,
    newUser,
    createdUser,
    userId,
  };