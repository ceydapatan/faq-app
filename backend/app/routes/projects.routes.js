module.exports = app => {
  const projects = require("../controller/projects.controller.js");

  // Create a new Member
  app.post("/projects", projects.create);

  // GET all Members
  app.get("/projects", projects.findAll);

  // GET one single Member with memberId
  app.get("/projects/:projectId", projects.findOne);

  // Update one Member with memberId
  app.put("/projects/:projectId", projects.update);

  // Delete the Member with memberId
  app.delete("/projects/:projectId", projects.delete);

  // Delete all members
  app.delete("/projects", projects.deleteAll);
};
