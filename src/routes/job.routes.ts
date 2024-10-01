import { Router } from 'express';
import { getJobsByContractId, createJob, getAllJobs, unpaidJobsSum } from '../controllers/job.controller'; 

const router = Router();

router.post('/', createJob);

router.get('/', getAllJobs);

router.get('/contract/:contractId', getJobsByContractId);

router.get('/unpaid/sum', unpaidJobsSum);


export default router;