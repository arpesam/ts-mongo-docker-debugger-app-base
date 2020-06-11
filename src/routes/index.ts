import { Router, Request, Response } from 'express';
import UsersModel from '../models/users';


const router = Router();

router.get('/', (req: Request, res: Response) => {
  debugger
  // console.log('-----------------AAAAA------------------')
  res.json({
    msg: 'Server running'
  })
})

// list
router.get('/users', async (req: Request, res: Response) => {
  const users = await UsersModel.find();
  console.log('users ', users);
  res.json(users);
});

// delete
router.delete('/users/:id/', async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedUser = await UsersModel.findByIdAndDelete(id);
  console.log('user deleter ', deletedUser);
  res.json({
    msg: 'user deleted'
  });
});

// edit
router.put('/users/:id/', async (req: Request, res: Response) => {
  const id = req.params.id;
  const userData = req.body;
  const edited = await UsersModel.findByIdAndUpdate(id, userData);
  console.log('user edited ', edited);
  res.json({
    msg: 'user edited',
    user: edited,
  });
});

// create
router.post('/users/', async (req: Request, res: Response) => {
  console.log('req ', req.body);

  const newUser = new UsersModel({
    name: req.body.name,
    email: req.body.email,
  })
  try {
    await newUser.save();
    console.log('new User', newUser)
  } catch (error) {
    console.log('save user error', error)
  }
  res.send('Creado')
})

export default router;