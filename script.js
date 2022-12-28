const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];
const navSteps = [...multiStepForm.querySelectorAll("[data-nav]")];
const planSteps = [...multiStepForm.querySelectorAll("[data-plan]")];
let proValue = 15;
let advValue = 12;
let adcValue = 9;
let serValue = 1;
let larValue = 2;
let csValue = 2;
let arcadeSummaryValue = 15;

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 3;
  showCurrentStep();
  hoverRest();
  lightBulb();
}

multiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null) return;

  const inputs = [...formSteps[currentStep].querySelectorAll("input")];
  const allValid = inputs.every((input) => input.reportValidity());
  if (allValid) {
    currentStep += incrementor;
    showCurrentStep();
    hoverRest();
    lightBulb();
  }
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("on", index === currentStep);
    step.classList.toggle("off", index !== currentStep);
  });
}

function hoverRest() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("off", index !== currentStep);
  });
}

function lightBulb() {
  navSteps.forEach((step, index) => {
    step.classList.toggle("selected", index === currentStep);
  });
}

const plan = document.querySelector(".plan-container");
let choose;
plan.addEventListener("click", (e) => {
  choose = e.target.value;
  arcadeSummaryValue = choose;
  console.log(choose);
});
let counter = 1;



//MonthYear switch between 
const monthYear = document.querySelector(".month-year");

monthYear.addEventListener("click", (e) => {
  counter++;
  if (counter % 2 === 0) {
    console.log("Year");
    //summary value 
    arcadeSummaryValue *=10
    //pro
    const pro = document.querySelector(".pro-value");
    proValue = proValue * 10;
    pro.innerHTML = `$${proValue}/yr`;
    const proValueInput = document.querySelector(".pro-value-input");
    proValueInput.value = proValue;
    // Advanced
    const adv = document.querySelector(".adv-value");
    advValue = advValue * 10;
    adv.innerHTML = `$${advValue}/yr`;
    const advValueInput = document.querySelector(".adv-value-input");
    advValueInput.value = advValue;
    // Arcade
    const adc = document.querySelector(".adc-value");
    adcValue = adcValue * 10;
    adc.innerHTML = `$${adcValue}/yr`;
    const adcValueInput = document.querySelector(".adc-value-input");
    adcValueInput.value = adcValue;
    // Online service - ser
    const ser = document.querySelector(".ser-value");
    serValue = serValue * 10;
    ser.innerHTML = `$${serValue}/yr`;
    ser.value = serValue;
    // Larger storage - lar
    const lar = document.querySelector(".lar-value");
    larValue = larValue * 10;
    lar.innerHTML = `$${larValue}/yr`;
    lar.value = larValue;
    // Customizable Profile - cs
    const cs = document.querySelector(".cs-value");
    csValue = csValue * 10;
    cs.innerHTML = `$${csValue}/yr`;
    cs.value = csValue;
  } else {
    console.log("month");
    //summary value 
    arcadeSummaryValue /=10
    //pro
    const pro = document.querySelector(".pro-value");
    proValue = proValue / 10;
    pro.innerHTML = `$${proValue}/mo`;
    const proValueInput = document.querySelector(".pro-value-input");
    proValueInput.value = proValue;
    // Adv
    const adv = document.querySelector(".adv-value");
    advValue = advValue / 10;
    adv.innerHTML = `$${advValue}/mo`;
    const advValueInput = document.querySelector(".adv-value-input");
    advValueInput.value = advValue;
    // Adc
    const adc = document.querySelector(".adc-value");
    adcValue = adcValue / 10;
    adc.innerHTML = `$${adcValue}/mo`;
    const adcValueInput = document.querySelector(".adc-value-input");
    adcValueInput.value = adcValue;
    // Online service - ser
    const ser = document.querySelector(".ser-value");
    serValue = serValue / 10;
    ser.innerHTML = `$${serValue}/yr`;
    ser.value = serValue;
    // Larger storage - lar
    const lar = document.querySelector(".lar-value");
    larValue = larValue / 10;
    lar.innerHTML = `$${larValue}/yr`;
    lar.value = larValue;
    // Customizable Profile - cs
    const cs = document.querySelector(".cs-value");
    csValue = csValue / 10;
    cs.innerHTML = `$${csValue}/yr`;
    cs.value = csValue;
  }
});


const summaryBtn = document.querySelector('.summary-btn');

summaryBtn.addEventListener("click", () =>{

  const arcadeSummary = document.querySelector('.arcade-summary');
  arcadeSummary.innerHTML = `$${arcadeSummaryValue}/mo`;

  const onlineService = document.querySelector('.online');
  onlineService.innerHTML = `$${serValue}/mo`;

  const storageService = document.querySelector('.storage');
  storageService.innerHTML = `$${csValue}/mo`;

  const profileService = document.querySelector('.profile');
  profileService.innerHTML = `$${larValue}/mo`;

  const totalService = document.querySelector('.tota');
  const tot = serValue+ larValue + csValue + Number(arcadeSummaryValue);
  totalService.innerHTML = `$${tot}/mo`;

})


const serviceInput = document.querySelector(".service-input");
const storageInput = document.querySelector(".storage-input");
const profileInput = document.querySelector(".profile-input");


serviceInput.addEventListener('click', ()=>{
  document.querySelector(".online-on").classList.toggle("off")
  return(serValue === 0 ? serValue = 1 : serValue = 0)
})
storageInput.addEventListener('click', ()=>{
  document.querySelector(".storage-on").classList.toggle("off")
  return(csValue === 0 ? csValue = 2 : csValue = 0)
})
profileInput.addEventListener('click', ()=>{
  document.querySelector(".profile-on").classList.toggle("off")
  return(larValue === 0 ? larValue = 3 : larValue = 0)
})

