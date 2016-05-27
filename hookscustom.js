var hooks = require('hooks');

hooks.beforeAll(function (transactions, done) {
  hooks.log('before all');
  done();
});

hooks.beforeEach(function (transaction, done) {
  //hooks.log('before each');
  done();
});

hooks.before("System > Get Online Status > GET - All but Viewer", function (transaction, done) {
  transaction.skip = true;
  done();
});

hooks.before("System > Get GPS Coordinates > GET - Mobile Only", function (transaction, done) {
  transaction.skip = true;
  done();
});

hooks.before("Account Info > Logout > GET - All but Viwer", function (transaction, done) {
  transaction.skip = true;
  done();
});

hooks.before("Item Data > Get Item or Folder > GET > Example 2", function (transaction, done) {
	transaction.fullPath = transaction.fullPath.replace("9369b435c5044c19b13107bab04ce030product238453", "9369b435c5044c19b13107bab04ce030product237156");	
  done();
});

// hooks.beforeEachValidation(function (transaction, done) {
//   //hooks.log('before each validation');
//   done();
// });
//
// hooks.beforeValidation("Machines > Machines collection > Get Machines", function (transaction, done) {
//   hooks.log("before validation");
//   done();
// });
//
// hooks.after("Machines > Machines collection > Get Machines", function (transaction, done) {
//   hooks.log("after");
//   done();
// });
//
// hooks.afterEach(function (transaction, done) {
//   //hooks.log('after each');
//   done();
// });

hooks.afterAll(function (transactions, done) {
  hooks.log('after all');
  done();
})