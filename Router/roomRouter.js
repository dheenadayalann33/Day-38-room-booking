import express from 'express';
import { allBooking, customerDetiles, roomBooking, roomController, roomControllerID, roomCreate,  } from '../Controller/roomController.js';

const router = express.Router();

router.get('/room',roomController);
router.get('/room/:id',roomControllerID);
router.post('/create',roomCreate);
router.post('/booking',roomBooking);
router.get('/allbookings',allBooking);
router.get('/customer',customerDetiles);

export default router;