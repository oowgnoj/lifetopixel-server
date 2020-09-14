// Create new job document
jobSchema.statics.create = function (payload: IJob) {
  // this === Model
  const job = new this(payload);
  // return Promise
  return job.save();
};

// Find All
jobSchema.statics.findAll = function () {
  // return promise
  // V4부터 exec() 필요없음
  return this.find({});
};

// Find One by jobid
jobSchema.statics.findOneByjobid = function (jobId: Number) {
  return this.findOne({ jobId });
};
