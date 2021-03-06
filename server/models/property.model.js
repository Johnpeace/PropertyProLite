// import Model from './model';
// import Data from '../db/property';
// import Response from '../utils/helpers/response';

// class Property extends Model {
//   async create() {
//     try {
//       const property = this.payload;
//       await this.save(Data, property);
//     } catch (error) {
//       return Response.handleError(500, error.toString());
//     }
//   }

//   static async findAll() {
//     try {
//       if (Data.length === 0) {
//         return false;
//       }
//       this.result = Data;
//       return this.result;
//     } catch (error) {
//       return Response.handleError(500, error.toString());
//     }
//   }

//   async findOne() {
//     try {
//       const propertyId = this.payload;
//       const obj = Data.find((property) => {
//         if (property.id !== propertyId) {
//           return false;
//         }
//         this.result = property;
//         return true;
//       });
//       return obj;
//     } catch (error) {
//       return Response.handleError(500, error.toString());
//     }
//   }

//   async findByType() {
//     try {
//       const propertyType = this.payload;
//       const obj = Data.filter(data => data.type === propertyType);
//       if (obj.length === 0) return false;
//       this.result = obj;
//       return obj;
//     } catch (error) {
//       return Response.handleError(500, error.toString());
//     }
//   }

//   async updateProperty() {
//     try {
//       const property = this.payload;
//       await this.update(Data, property);
//       return true;
//     } catch (error) {
//       return Response.handleError(500, error.toString());
//     }
//   }

//   async deleteProperty() {
//     try {
//       const propertyId = this.payload;
//       const obj = Data.some(data => data.id === propertyId);
//       if (!obj) {
//         return false;
//       }
//       await this.deletePro(Data, propertyId);
//       return true;
//     } catch (error) {
//       return Response.handleError(500, error.toString());
//     }
//   }
// }

// export default Property;
