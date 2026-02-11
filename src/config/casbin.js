import { newEnforcer } from "casbin";
import path from "path";

const enforcer = await newEnforcer(
  path.resolve("src/config/model.conf"),
  path.resolve("src/config/policy.csv")
);

export default enforcer;
