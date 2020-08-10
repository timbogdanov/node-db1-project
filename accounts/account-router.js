const express = require('express');

const db = require('../data/dbConfig');

const router = express.Router();

// create an account
router.post('/', (req, res) => {
  db('accounts')
    .insert(req.body)
    .then((account) => {
      res.status(201).json({ message: 'created account' });
    });
});

// get all accounts
router.get('/', (req, res) => {
  db('accounts')
    .then((accounts) => {
      res.status(200).json(accounts);
    })
    .catch((error) => {
      console.log(error);
    });
});

// get one account
router.get('/:id', (req, res) => {
  db('accounts')
    .where({ id: req.params.id })
    .then((account) => {
      res.status(200).json(account);
    })
    .catch((error) => {
      console.log(error);
    });
});

// update an account
router.put('/:id', (req, res) => {
  db('accounts')
    .where({ id: req.params.id })
    .update(req.body)
    .then((account) => {
      res.status(200).json({ message: 'account updated' });
    })
    .catch((error) => {
      console.log(error);
    });
});

// delete an account
router.delete('/:id', (req, res) => {
  db('accounts')
    .where({ id: req.params.id })
    .del()
    .then((account) => {
      res.status(200).json({ message: 'account deleted' });
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
