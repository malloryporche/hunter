import dbConnection from './db.js';
import Map from './mapSchema.js';

await dbConnection();

export async function createHunt(hunt) {
  try {
    const newHunt = new Map({
      name: hunt.name,
      markers: [],
      ownerId: hunt.owner,
      hunters: [],
    });
    const savedHunt = await newHunt.save();
    console.log('Hunt created:', savedHunt);
  } catch (err) {
    console.log('error creating user', err);
  }
};

const addMarker = (marker, mapId) => {
  return Map.findById({ _id: id})
    .then((map) => {
      map.markers.push(marker);
      map.save();
    });
}

const removeMarker = (marker, mapId) => {
  return Map.findById({_id: id})
    .then((map) => {
      const item = map.markers.indexOf(marker);
      map.markers.splice(item, 1);
    });
}

const updateMap = (info, mapId) => {
  return Map.findById({_id: id})
    .then((map) => {

    });
}
