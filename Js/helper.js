function findJobById(list, id) {
  return list.find(function (job) {
    return job.id == id;
  });
}

function removeJobById(list, id) {
  return list.filter(function (job) {
    return job.id != id;
  });
}

function countInterview(list) {
  return list.filter(function (job) {
    return job.status === "interview";
  }).length;
}

function countRejected(list) {
  return list.filter(function (job) {
    return job.status === "rejected";
  }).length;
}
