arrSoN = [];
soNguyen = [];

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
    if (so > 0) {
      tinhTong += so;
    }
  }
  document.getElementById(
    "ketQuaTong"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${tinhTong}`;
};

document.getElementById("demSo").onclick = function () {
  let soDuong = [];
  for (let so of arrSoN) {
    if (so > 0) {
      soDuong.push(so);
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

document.getElementById("doiCho").onclick = function () {
  let so1 = document.getElementById("so1").value * 1;
  let so2 = document.getElementById("so2").value * 1;
  // let arrDoiCho = [...arrSoN];
  let first = arrSoN[so1];
  arrSoN[so1] = arrSoN[so2];
  arrSoN[so2] = first;
  document.getElementById(
    "ketQuaDoiCho"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${arrSoN}`;
};

document.getElementById("tangDan").onclick = function () {
  console.log(soN);
  let arrSapXep = [...arrSoN];
  arrSapXep.sort((a, b) => a - b);
  document.getElementById(
    "ketQuaSapXep"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${arrSapXep}`;
};

document.getElementById("soNguyenTo").onclick = function () {
  soNguyenTo = [];
  for (let i = 0; i < arrSoN.length; i++) {
    let soN = arrSoN[i];
    let flag = true;
    if (soN < 2) {
      flag = false;
    } else if (soN == 2) {
      flag = true;
    } else if (soN % 2 == 0) {
      flag = false;
    } else {
      for (z = 3; z < soN; z += 2) {
        if (soN % z == 0) {
          flag = false;
          break;
        }
      }
    }
    if (flag) {
      soNguyenTo = soN;
      break;
    }
  }

  document.getElementById(
    "ketQuaTimSo"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${soNguyenTo}`;
};

document.getElementById("themSo1").onclick = function () {
  let soN = document.getElementById("soNguyen").value * 1;
  soNguyen.push(soN);
  document.getElementById(
    "ketQuaNhapSo"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> ${soNguyen}`;
};
document.getElementById("themSo2").onclick = function () {
  arrSoNguyen = [];
  for (let so of soNguyen) {
    if (Number.isInteger(so)) {
      arrSoNguyen.push(so);
    }
  }
  console.log(arrSoNguyen);
  document.getElementById(
    "ketQuaDemSo"
  ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> Số nguyên ${arrSoNguyen.length}`;
};

document.getElementById("soSanh").onclick = function () {
  let soAm = [];
  let soDuong = [];
  for (let so of arrSoN) {
    if (so < 0) {
      soAm.push(so);
    } else {
      soDuong.push(so);
    }
  }
  console.log(soAm);
  console.log(soDuong);
  if (soAm.length < soDuong.length) {
    document.getElementById(
      "ketQuaSoSanh"
    ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> Số âm < Số dương`;
  } else if (soAm.length > soDuong.length) {
    document.getElementById(
      "ketQuaSoSanh"
    ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> Số âm > Số dương`;
  } else {
    document.getElementById(
      "ketQuaSoSanh"
    ).innerHTML = `<i class="fa-regular fa-hand-point-right"></i> Số âm = Số dương`;
  }
};
