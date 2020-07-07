export const calculateWorkOrders = (state, date) => {
  let temp = [];
  state.workOrderList.jobs.forEach((job) => {
    job.workOrders[date] &&
      temp.push({ jobName: job.jobName, workOrderName: job.workOrders[date] });
  });
  return temp;
};
