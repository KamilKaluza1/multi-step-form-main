const multiStepForm = document.querySelector("[data-multi-step]")
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")]
const navSteps = [...multiStepForm.querySelectorAll("[data-nav]")]
let currentStep = formSteps.findIndex(step => {
  return step.classList.contains("active")
})

if (currentStep < 0) {
  currentStep = 1
  showCurrentStep()
  hoverRest()

}

multiStepForm.addEventListener("click", e => {
  let incrementor
  if (e.target.matches("[data-next]")) {
    incrementor = 1
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1
  }

  if (incrementor == null) return

  const inputs = [...formSteps[currentStep].querySelectorAll("input")]
  const allValid = inputs.every(input => input.reportValidity())
  if (allValid) {
    currentStep += incrementor;
    showCurrentStep();
    hoverRest();
  }
})



function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("on", index === currentStep)
  })
}


function hoverRest() {
    formSteps.forEach((step, index) => {
      step.classList.toggle("off", index !== currentStep)
    })
  }