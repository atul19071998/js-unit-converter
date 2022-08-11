///declare function..

let getvalue = () => {
  let access = document.querySelector("#inputunit").value;///selection for id.
  {
    ///if , else if and else condition.. 
    if (access <= 0) {
      alert("please enter  value >0 !");
    } else if (access >= 1) {
      let ans = (document.querySelector(".answer").innerHTML =
        "CM:" + access * 30.48);
      return ans;
    }

    else if (access > "a" || access <= "z" && access > "A" || access < "Z") {
      alert("Enter only Numbers");
    }
    else {
      document.write("Invalid Information");
    }

  }
};
