import mongoose from 'mongoose';
const { Schema } = mongoose;

const huntSchema = new Schema({
  name: {type: String, required: true},
  center: {
    lat: {type: Number, default: 34.0549},
    lng: {type: Number, default: -118.2426}
  },
  markers: [Schema.Types.Mixed],
  ownerId: Schema.Types.ObjectId,
  hunters: [Schema.Types.ObjectId]
});

const Hunt = mongoose.model('Hunt', huntSchema);

export default Hunt;