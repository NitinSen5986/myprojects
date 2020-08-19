function getuser(callback) {
  setTimeout(function () {
    callback(null, "nitin");
  }, 1000);
}

function getuserdetail(userid, callback) {
  var obj = { name: "nitin", lastname: "sen" };
  setTimeout(function () {
    callback(null, obj);
  }, 1000);
}
getuser(function (error, result) {
  console.log(result);
  getuserdetail(result, function (error, result) {
    console.log(result);
  });
});*/
/*
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 10000);
});

promise.then(
  (result) => {
    console.log("result");
  },
  (error) => {
    console.log("error");
  }
);*/

let getuser = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("nitin");
    }, 1000);
  });
};

let getuserdetail = function (id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "nitin", lastname: "sen" });
    }, 1000);
  });
};

/*
getuser()
  .then((result) => {
    console.log(result);
    return getuserdetail(result);
  })
  .then((result) => {
    console.log(result);
  });*/

async function getalldata() {
  var res = await getuser();
  console.log(res);
  var res2 = await getuserdetail();
  console.log(res2);
}

getalldata();
