import Map from './mapSchema.js';

export async function createHunt(hunt) {
  return Map.create({
    name: hunt.name,
    markers: [],
    ownerId: hunt.owner,
    hunters: [],
  });
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
