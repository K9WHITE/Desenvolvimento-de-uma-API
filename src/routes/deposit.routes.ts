
import { Router } from 'express';
import { createDeposit, findAllDeposits, findDepositById, updateDeposit } from '../controllers/deposit.controller';

const router = Router();

router.post('/', createDeposit);


router.get('/', findAllDeposits);

router.get('/:id', findDepositById);

router.put('/:id', updateDeposit);

export default router;