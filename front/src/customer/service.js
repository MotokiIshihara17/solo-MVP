function createCustomerService(repository) {
  const list = async (limit) => {
    return await repository.list(limit);
  };

  const distance = async () => {
    return await repository.distance();
  };

  const upload = async (data) => {
    console.log("serviceです", data);
    return await repository.upload(data);
  };

  return { distance, upload };
}

export { createCustomerService };
