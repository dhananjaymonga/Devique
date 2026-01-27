const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact');

router.post('/contact', contactController.submitContact);
router.get('/contacts', contactController.getAllContacts);
router.patch('/contact/:id/status', contactController.updateContactStatus);
router.delete('/contact/:id', contactController.deleteContact);
router.get('/contacts/stats', contactController.getContactStats);
router.get('/contacts/download', contactController.downloadExcel);
router.get('/contacts/export', contactController.exportToExcel);

module.exports = router;

