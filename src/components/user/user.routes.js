import express from 'express';
import { getUsers, createUsers, updateUsers, deleteUsers } from './user.controller';

const router = express.Router();

router.get('/', getUsers);

router.post('/', createUsers);

router.put('/:id', updateUsers);

router.delete('/:id', deleteUsers);

export default router;
