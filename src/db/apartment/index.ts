import { Schema, model, Document } from 'mongoose';

interface IApartment extends Document {
  id: string;
  title?: string;
  price?: number;
  houseType?: string;
  yearBuilt?: number;
  area?: number;
  bathroom?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

interface IPage extends Document {
    city?: string;
    page?: number;
  }

const apartmentSchema = new Schema<IApartment>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  title: String,
  price: Number,
  houseType: String,
  yearBuilt: Number,
  area: Number,
  bathroom: String,
}, { timestamps: true });

const pageSchema = new Schema<IPage>({
    city: String,
    page: Number,
  }, { timestamps: true });

const ApartmentModel = model<IApartment>('Apartment', apartmentSchema);
const PageModel = model<IPage>('Page', pageSchema);

export { ApartmentModel, PageModel };