module.exports = (done) => {

   let ts = Date.now();

   let dat_ob = new Date(ts);

   let day = dat_ob.getDate();

   let month = dat_ob.getMonth()+1;

   let year = dat_ob.getFullYear();

   done(`${month}-${day}-${year}`);
}