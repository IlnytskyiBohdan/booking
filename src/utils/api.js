import dbData from '../../db.json';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  async getDestination() {
    await delay(300);
    return { data: dbData.destination };
  },
  async getHotels() {
    await delay(600);
    return { data: dbData.hotels };
  },
};

export default api;
