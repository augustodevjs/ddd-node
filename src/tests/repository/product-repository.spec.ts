import { Sequelize } from "sequelize-typescript"
import { ProductModel } from "../../infra";

describe("Product Repository Unit Test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory',
      logging: false,
      sync: { force: true }
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });


  afterEach(async () => {
    await sequelize.close();
  })
})