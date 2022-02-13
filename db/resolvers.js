const axios = require('axios');

const getCharacters = async () => {
  const respuesta = await axios('https://breakingbadapi.com/api/characters');
  return respuesta.data.map(character => {
    return {
      id: character.char_id,
      name: character.name,
      birthday: character.birthday,
      occupation: character.occupation,
      image: character.img,
      status: character.status,
      nickname: character.nickname,
      appearance: character.appearance,
      portrayed: character.portrayed,
      category: character.category,
      better_call_saul_appearance: character.better_call_saul_appearance,
    }
  })
}

const getCharacter = async (id) => {
  if (id.trim() === '' || id <= 0) {
    console.log('no hay id')
    return;
  }
  const respuesta = await axios(`https://breakingbadapi.com/api/characters/${id}`);
  return {
    id: respuesta.data[0].char_id,
    name: respuesta.data[0].name,
    birthday: respuesta.data[0].birthday,
    occupation: respuesta.data[0].occupation,
    image: respuesta.data[0].img,
    status: respuesta.data[0].status,
    nickname: respuesta.data[0].nickname,
    appearance: respuesta.data[0].appearance,
    portrayed: respuesta.data[0].portrayed,
    category: respuesta.data[0].category,
    better_call_saul_appearance: respuesta.data[0].better_call_saul_appearance,
  }
}

const resolvers = {
  Query: {
    Characters: (parent, args, context) => {
      return getCharacters();
    },
    Character: (parent, args, context) => {
      if (args.id) {
        return getCharacter(args.id);
      }
    }
  }
}

module.exports = resolvers