import enforcer from "../config/casbin.js";

export const authorize = (resource, action) => {
  return async (req, res, next) => {
    const role = req.user.role.toLowerCase();
    const ok = await enforcer.enforce(role, resource, action);
    if (!ok) return res.status(403).json({ message: "Forbidden by policy" });
    next();
  };
};
