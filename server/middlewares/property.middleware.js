import Response from '../utils/helpers/response';
import InputCheck from '../utils/helpers/input.check';
import Data from '../db/property';

class PropertyValidation {
  static async property(req, res, next) {
    try {
      const {
        price, state, city, address,
      } = req.body;
      if (!price || !state || !city || !address) {
        return Response.handleError(400, 'Please fill all the required fields', res);
      }
      if (await InputCheck.floatCheck(price)) return Response.handleError(400, 'Enter valid price in numeric', res);
      if (await InputCheck.nameCheck(state)) return Response.handleError(400, 'Enter valid state', res);
      if (await InputCheck.nameCheck(city)) return Response.handleError(400, 'Enter valid city', res);
      if (await InputCheck.addressCheck(address)) return Response.handleError(400, 'Enter valid address', res);
      next();
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  static async findByType(req, res, next) {
    try {
      const { type } = req.query;
      if (!type) return Response.handleError(400, 'No valid query detected e.g properties?type=duplex', res);
      next();
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  static async update(req, res, next) {
    try {
      const propertyId = parseInt(req.params.id, 10);
      const {
        price, state, city, address,
      } = req.body;
      const id = Data.some(data => data.id === propertyId);
      if (!id) {
        return Response.handleError(404, 'Property id not found', res);
      }
      if (await InputCheck.floatCheck(price)) return Response.handleError(400, 'Enter valid price in numeric', res);
      if (await InputCheck.nameCheck(state)) return Response.handleError(400, 'Enter valid state', res);
      if (await InputCheck.nameCheck(city)) return Response.handleError(400, 'Enter valid city', res);
      if (await InputCheck.addressCheck(address)) return Response.handleError(400, 'Enter valid address', res);
      next();
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }

  static async markSold(req, res, next) {
    try {
      const propertyId = parseInt(req.params.id, 10);
      const id = Data.some(data => data.id === propertyId);
      if (!id) {
        return Response.handleError(404, 'Property id not found', res);
      }
      next();
    } catch (error) {
      return Response.handleError(500, error.toString(), res);
    }
  }
}

export default PropertyValidation;
