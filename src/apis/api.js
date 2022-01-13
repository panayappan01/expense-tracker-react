import axios from "axios";

export const getTransactions = async () => {
  var myResponse = [];

  await axios
    .get("http://localhost:7000/api/")
    .then((res) => {
      myResponse = res.data;
    })
    .catch((error) => console.log(error.error));

  return myResponse;
};

export const addTransactionInDb = async (transaction) => {
  console.log("DB TRANSACTION", transaction);
  await axios
    .post("http://localhost:7000/api/add", transaction)
    .then((res) => {
      console.log("ADDED IN DB", res.data);
    })
    .catch((error) => console.log(error));
};
