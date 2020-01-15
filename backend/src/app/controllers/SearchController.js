import Dev from '../models/Dev';

import parseStringAsArray from '../../utils/parseStringAsArray';

class SearchController {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs);

    console.log(techsArray);

    return res.json({ ok: true });
  }
}

export default new SearchController();
