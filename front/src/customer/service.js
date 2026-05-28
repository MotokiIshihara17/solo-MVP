function createCustomerService(repository) {
  const list = async (limit) => {
    return await repository.list(limit);
  };

  const distance = async (userId) => {
    return await repository.distance(userId);
  };

  const upload = async (data) => {
    console.log("serviceです", data);
    return await repository.upload(data);
  };
  const create = async (data) => {
    console.log("serviceです", data);
    return await repository.create(data);
  };

  const user = async () => {
    return await repository.user();
  };

  const rest = async () => {
    return await repository.rest();
  };
  return { distance, upload, create, user, rest };
}

export { createCustomerService };
