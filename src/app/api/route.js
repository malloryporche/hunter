'use server'

import { createHunt } from '../lib/mapModels.js';
import { dbConnection, getDB } from '../lib/db.js';

export default async function handler(req, res) {

  if (req.methd === 'POST') {
    const {name, owner } = req.body;
    const newHunt = await createHunt({
      name: name,
      owner: owner,
    });

    console.log(req.body);
    await dbConnection();

    const collection = getDB().collection('maps');

    try {
      const result = await collection.insertOne({
        name: 'Sample Doc',
        ownerId: 123,
      });
      res.status(201).json({success: true, message: 'Document created'})
      createHunt(req.body);
    } catch (err) {
      res.status(500).json({ message: 'Error creating document', error: err.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed'});
  }
}