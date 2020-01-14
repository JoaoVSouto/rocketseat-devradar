import axios from 'axios';

import Dev from '../models/Dev';

class DevController {
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

    // eslint-disable-next-line no-undef
    const { name = login, avatar_url, bio } = response.data;

    const techsArray = techs.split(',').map(tech => tech.trim());

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
