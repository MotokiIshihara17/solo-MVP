import { createCustomerRepository } from "./repository.js";
import { createCustomerService } from "./service.js";
import { createCustomerController } from "./controller.js";

function initCustomer(knex) {
  const repository = createCustomerRepository(knex);
  const service = createCustomerService(repository);
  const controller = createCustomerController(service);

  return controller;
}

export { initCustomer };
