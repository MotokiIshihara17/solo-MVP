function createCustomerController(service) {
  const list = async (req, res) => {
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    const result = await service.list(limit);
    res.status(200).json({ data: result });
  };

  const distance = async (req, res) => {
    const userId = req.query.user_id;
    console.log(userId);
    const result = await service.distance(userId);
    res.status(200).json(result);
  };

  const upload = async (req, res) => {
    const data = req.body;
    const result = await service.upload(data);
    console.log("controllerです", result);
    // res.status(200).send(resul);
  };

  const create = async (req, res) => {
    const data = req.body;
    const result = await service.create(data);
    console.log("controllerです", result);
    // res.status(200).send(num);
  };

  const user = async (req, res) => {
    const result = await service.user();
    console.log("controllerです", result);
    res.status(200).send(result);
  };

  const rest = async (req, res) => {
    const result = await service.rest();
    res.status(200).json(result);
  };

  return { distance, upload, create, user, rest };
}
export { createCustomerController };
