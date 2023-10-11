const password_box = document.querySelector(".password")
let length_input = document.querySelector("input#length")
let checkboxes = [...document.querySelectorAll("input[type='checkbox']")]
let psw = document.querySelector(".password-box__copy")
let image = document.querySelector("img")
let reload=document.querySelector(".recreate")
function generatePassword(length, options) {
  const defaultOptions = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  };

  options = Object.assign({}, defaultOptions, options);

  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

  let chars = "";
  if (options.uppercase) {
    chars += uppercaseChars;
  }
  if (options.lowercase) {
    chars += lowercaseChars;
  }
  if (options.numbers) {
    chars += numberChars;
  }
  if (options.symbols) {
    chars += symbolChars;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}


const password_wrt = () => {
  let object = {}
  checkboxes.map(e => {
    object[e.name] = e.checked
  })
  password_box.innerHTML = generatePassword(length_input.value, objects)
}


checkboxes.map(checkbox => {
  checkbox.addEventListener("input", () => {
    let every = checkboxes.every(a => a.checked == false)
    if (!every) {
      password_wrt()
    } else {
      (
        checkbox.checked = true
      )
    }
  })
})

const password_wrt1 = (e) => {
  if (e.value > 30) {
    e.value = 30
  } else {
    e.value = Math.max(e.value, 6)
  }
  if (e.value >= 6 && e.value < 12) {
    image.src = "assets/tent.svg"
  }
  else if (e.value >= 12 && e.value < 18) {
    image.src = "assets/house.svg"
  }
  else if (e.value >= 18 && e.value < 25) {
    image.src = "assets/bighouse.svg"
  }
  else if (e.value >= 25) {
    image.src = "assets/castle.svg"
  }
  password_wrt()
}


const newPassword = generatePassword(length_input.value, { uppercase: true, lowercase: true, numbers: true, symbols: true });
password_box.innerHTML = newPassword


const copyCode = (e) => {
  const textArea = document.createElement("textarea");
  textArea.value = password_box.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);
  if (e.innerText == "COPY") {
    e.innerHTML = `COPIED <i class="ri-check-double-line"></i>`;
    setTimeout(function () {
      e.innerHTML = "COPY";
    }, 2000)
  }
}