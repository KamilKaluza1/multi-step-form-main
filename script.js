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
  currentStep = 0;
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
    ser.innerHTML = `$${10}/yr`;
    ser.value = serValue;
    // Larger storage - lar
    const lar = document.querySelector(".lar-value");
    larValue = larValue * 10;
    lar.innerHTML = `$${20}/yr`;
    lar.value = larValue;
    // Customizable Profile - cs
    const cs = document.querySelector(".cs-value");
    csValue = csValue * 10;
    cs.innerHTML = `$${20}/yr`;
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
    ser.innerHTML = `$${1}/mo`;
    ser.value = serValue;
    // Larger storage - lar
    const lar = document.querySelector(".lar-value");
    larValue = larValue / 10;
    lar.innerHTML = `$${2}/mo`;
    lar.value = larValue;
    // Customizable Profile - cs
    const cs = document.querySelector(".cs-value");
    csValue = csValue / 10;
    cs.innerHTML = `$${2}/mo`;
    cs.value = csValue;
  }
});

// finishing up 
const summaryBtn = document.querySelector('.summary-btn');

summaryBtn.addEventListener("click", () =>{
  let indicator;
  (adcValue === 9 ? indicator = "mo" : indicator = "yr")

  const arcadeSummary = document.querySelector('.arcade-summary');
  arcadeSummary.innerHTML = `$${arcadeSummaryValue}/${indicator}`;

  const onlineService = document.querySelector('.online');
  onlineService.innerHTML = `$${serValue}/${indicator}`;

  const storageService = document.querySelector('.storage');
  storageService.innerHTML = `$${csValue}/${indicator}`;

  const profileService = document.querySelector('.profile');
  profileService.innerHTML = `$${larValue}/${indicator}`;

  const totalService = document.querySelector('.tota');
  const tot = serValue+ larValue + csValue + Number(arcadeSummaryValue);
  totalService.innerHTML = `$${tot}/${indicator}`;

})


const serviceInput = document.querySelector(".service-input");
const storageInput = document.querySelector(".storage-input");
const profileInput = document.querySelector(".profile-input");


serviceInput.addEventListener('click', ()=>{
  document.querySelector(".online-on").classList.toggle("off");
  if(adcValue === 9){
    serValue === 0 ? serValue = 1 : serValue = 0
  } else{
    serValue === 0 ? serValue = 10 : serValue = 0
  }
})



storageInput.addEventListener('click', ()=>{
  document.querySelector(".storage-on").classList.toggle("off")
  if(adcValue === 9){
    csValue === 0 ? csValue = 2 : csValue = 0
  } else{
    csValue === 0 ? csValue = 20 : csValue = 0
  }
})


profileInput.addEventListener('click', ()=>{
  document.querySelector(".profile-on").classList.toggle("off")
  if(adcValue === 9){
    larValue === 0 ? larValue = 2 : larValue = 0
  } else{
    larValue === 0 ? larValue = 20 : larValue = 0
  }
})

