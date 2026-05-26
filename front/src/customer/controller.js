function createCustomerController(service) {
  const list = async (req, res) => {
    const limit = req.query.limit ? Number(req.query.limit) : undefined;
    const result = await service.list(limit);
    res.status(200).json({ data: result });
  };

  const distance = async (req, res) => {
    const result = await service.distance();
    res.status(200).json(result);
  };

  const upload = async (req, res) => {
    const num = req.body;
    const result = await service.upload(num);
    console.log("controllerです", result);
    // res.status(200).send(num);
  };

  return { distance, upload };
}
export { createCustomerController };
