/* validocion de formulario de contacto */
const d = document;
//export default function contactFormValidacion()

/* let nombre = d.querySelector("#name");
  let apellido = d.querySelector("#apellido");
  let email = d.querySelector("#email");
  let tel = d.querySelector("#tel");
  let message = d.querySelector("#mensaje"); */

/* validacion de los imput */
function contactFormValidations() {
  const $form = d.querySelector("#form");
  const $btnSubmit = d.querySelector(".submit");

  /* variable con los valores de los input */
  let $inputs = d.querySelectorAll("#form [required]");

  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add("form-error", "none");
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener("keyup", (e) => {
    if (e.target.matches("#form [required]")) {
      let $input = e.target;
      let pattern = $input.pattern || $input.dataset.pattern;

      /* validacion para cualquier input */
      if (pattern && $input.value != "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }

      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });

  /* envio del formulario */
  d.addEventListener("submit", (e) => {
    e.preventDefault();

    const $loader = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contacto-form-respuesta");

    /* simulacion de envio de los datos */
    $loader.classList.remove("none");
    setTimeout(() => {
      $loader.classList.add("none");
      $response.classList.remove("none");
      $form.reset();
      
      setTimeout(() => $response.classList.add("none"), 3000);
    }, 3000);

  });
}

contactFormValidations();
