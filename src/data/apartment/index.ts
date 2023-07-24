import { Document, UpdateQuery } from 'mongoose'; 
import { ApartmentModel } from '../../db/apartment';
import { PageModel } from '../../db/apartment';

class ApartmentData {
  constructor() {}

  static async saveApartment<T extends Document>(
    apartmentData: ApartmentData
  ): Promise<T> {
    const apartment = new ApartmentModel(apartmentData);
    return apartment.save() as Promise<T>;
  }

  static async savePage<T extends Document>(
    pageData: any
  ): Promise<T> {
    const page = new PageModel(pageData);
    return page.save() as Promise<T>;
  }

  static async updateApartment<T extends Document>(
    apartmentId: string,
    updateData: UpdateQuery<ApartmentData>
  ): Promise<T | null> {
    return await ApartmentModel.findOneAndUpdate(
      { id: apartmentId },
      updateData,
      { new: true }
    );
  }

}

export { ApartmentData };
