arrSoN = [];

document.querySelector(".top_text").onsubmit = function (event) {
  event.preventDefault();
  let soN = document.getElementById("soN").value * 1;
  arrSoN.push(soN);
  document.getElementById(
    "result"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${arrSoN}`;
};

document.getElementById("tinhTong").onclick = function () {
  let tinhTong = 0;
  for (let so of arrSoN) {
    tinhTong += so;
  }
  document.getElementById(
    "ketQuaTong"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${tinhTong}`;
};

document.getElementById("demSo").onclick = function () {
  let soDuong = [];
  for (let so of arrSoN) {
    if (so > 0) {
      soDuong += so;
    }
  }
  document.getElementById(
    "ketQuaSoDuong"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${soDuong.length}`;
};

document.getElementById("soNhoNhat").onclick = function () {
  let soNhoNhat = arrSoN[0];
  for (let i = 1; i < arrSoN.length; i++) {
    if (soNhoNhat > arrSoN[i]) {
      soNhoNhat = arrSoN[i];
    }
  }
  document.getElementById(
    "ketQuaSoNhoNhat"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${soNhoNhat}`;
};

document.getElementById("soDuongNhoNhat").onclick = function () {
  arrSoDuongN = [];
  for (let so of arrSoN) {
    if (so > 0) {
      arrSoDuongN.push(so);
    }
  }
  let soNhoNhat = arrSoDuongN[0];
  for (let i = 1; i < arrSoDuongN.length; i++) {
    if (soNhoNhat > arrSoDuongN[i]) {
      soNhoNhat = arrSoDuongN[i];
    }
  }
  document.getElementById(
    "ketQuaSoDuongNhoNhat"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${soNhoNhat}`;
};

document.getElementById("soChan").onclick = function () {
  arrSoChan = [];
  for (let so of arrSoN) {
    if (so % 2 == 0) {
      arrSoChan.push(so);
    }
  }
  let soChan = arrSoChan[arrSoChan.length - 1];
  document.getElementById(
    "ketQuaSoChan"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${soChan}`;
};
