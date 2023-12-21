import clientPromise from '../../lib/db.js';
import Hunt from '../../lib/huntSchema.js';

export default async function POST(req, res) {

  if (req.method === 'POST') {
    const { name, ownerId } = req.body
    console.log(req.body);
    try {
      const client = await clientPromise;
      const db = client.db('maps');

      const newHunt = new Hunt({
        name: name,
        markers: [],
        ownerId: ownerId,
        hunters: [],
      });
      const savedHunt = await newHunt.save();
      res.status(201).json({success: true, message: `Hunt created: ${savedHunt}`});
    } catch (err) {
      res.status(404).json({success: false, message: `Error creating hunt ${err}`});
    }
  }
}