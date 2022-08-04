callApi();

let gender;
const Cogender = document.getElementById("span-gender-icon");
const Copic = document.getElementById("img-profile");
const Coname = document.getElementById("p-name");
const Coadd = document.getElementById("p-address");
const Comail = document.getElementById("p-email");
const btnGen = document.getElementById("btn-random");
const card = document.getElementById("div-user-card");
const load = document.getElementById("div-loading-card");

btnGen.onclick = () => {
  callApi();
};

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");

  if (resp.data.results[0].gender == "female") {
    Cogender.innerText = "👩";
  } else {
    Cogender.innerText = "👨";
  }

  Copic.src = resp.data.results[0].picture.large;
  Coname.innerText =
    resp.data.results[0].name.first + " " + resp.data.results[0].name.last;
  Coadd.innerText =
    resp.data.results[0].location.city +
    " " +
    resp.data.results[0].location.state +
    " " +
    resp.data.results[0].location.country +
    " " +
    resp.data.results[0].location.postcode +
    " ";
  Comail.innerText = resp.data.results[0].email;
  console.log(resp, data.results[0]);
}
