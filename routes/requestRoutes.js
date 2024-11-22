const express = require('express');
   const { createRequest, getAllRequests, updateRequest, deleteRequest } = require('../controllers/requestController');
   const upload = require('../middleware/uploadMiddleware');

   const router = express.Router();

   router.post('/requests', upload.single('image'), createRequest);
   router.get('/requests', getAllRequests);
   router.put('/requests/:id', updateRequest);
   router.delete('/requests/:id', deleteRequest);

   module.exports = router;
