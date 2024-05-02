const sql = require("./database.js");

// constructor
const Project = function (project) {
  this.projectName = project.projectName;
  this.projectResponsible = project.projectResponsible;
  this.projectGoal = project.projectGoal;
  this.projectContent = project.projectContent;
  this.projectStart = project.projectStart;

};

Project.create = (newProject, result) => {
  sql.query("INSERT INTO Projects SET ?", newProject, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("created project: ", { id: res.insertId, ...newProject });
    result(null, { id: res.insertId, ...newProject });
  });
};

Project.findById = (projectId, result) => {
  sql.query(`SELECT * FROM Project WHERE ProjectId = ${projectId}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found project: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Project with the id
    result({ kind: "not_found" }, null);
  });
};

Project.getAll = result => {
  sql.query("SELECT * FROM Project", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("projects: ", res);
    result(null, res);
  });
};



Project.remove = (id, result) => {
  sql.query("DELETE FROM Project WHERE ProjectId = ?", id, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    if (res.affectedRows == 0) {
      // not found Project with the id
      result({ kind: "not_found" }, null);
      return;
    }

    console.log("deleted project with id: ", id);
    result(null, res);
  });
};

Project.removeAll = result => {
  sql.query("DELETE FROM Project", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log(`deleted ${res.affectedRows} projects`);
    result(null, res);
  });
};

module.exports = Project;
