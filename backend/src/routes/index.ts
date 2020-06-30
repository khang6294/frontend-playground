import express from 'express';
import * as testController from 'controllers';

const router = express.Router();

router.get('/message', testController.getMessage);

export default router;