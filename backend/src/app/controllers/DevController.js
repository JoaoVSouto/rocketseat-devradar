import axios from 'axios';

import Dev from '../models/Dev';

import parseStringAsArray from '../../utils/parseStringAsArray';

class DevController {
  async index(req, res) {
    const devs = await Dev.find();

    return res.json(devs);
  }

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    const devExists = await Dev.findOne({ github_username });

    if (devExists) {
      return res
        .status(400)
        .json({ error: 'Github username is already been used.' });
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { avatar_url, bio, login } = response.data;
    let { name } = response.data;

    name = name || login;

    const techsArray = parseStringAsArray(techs);

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location,
    });

    return res.json(dev);
  }
}

export default new DevController();
