export default class RepositorySxhema {
  static schema = {
    name: 'Repository',
    primaryKey: 'id',
    propeties: {
      id: { type: 'int', indexed: true },
      name: 'string',
      fullName: 'string',
      description: 'string',
      stars: 'int',
      fork: 'int',
    },
  };
};