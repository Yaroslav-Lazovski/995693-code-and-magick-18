var fireballSize = 22;
var getFireballSpeed = function (left) {
  return left ? 5 : 2;
};

var wizardSpeed  = 3;
var wizardWidth  = 70;
var getWizardHeight  = function () {
  return (1.337 * wizardWidth);
}

var getWizardX = function (width) {
  getWizardX = width / 2 - wizardWidth / 2;
  return getWizardX;
}

var getWizardY = function (height) {
  getWizardY = -height * 2 / 3;
  return getWizardY;
}
