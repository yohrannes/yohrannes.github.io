function toggleDisplay(element, displayValue) {
  element.style.display = element.style.display === displayValue ? 'none' : displayValue;
}

function resetDisplay(elements) {
  elements.forEach(function (element) {
    element.style.display = 'none';
  });
}

function showElements(elements) {
  elements.forEach(function (element) {
    element.style.display = 'block';
  });
}

function hideElements(elements) {
  elements.forEach(function (element) {
    element.style.display = 'none';
  });
}

function clickSocial() {
  toggleDisplay(menusocial, 'block');
  resetDisplay([menuforum, menudevelop, menudesign, menutasksandguides, menubootcamp]);

  if (menusocial.style.display === 'block') {
    hideElements([social, forum, develop, tasksandguides, design, bootcamp]);
    showElements([social1, social2, social3]);
  } else {
    showElements([social, forum, develop, tasksandguides, design, bootcamp]);
    hideElements([social1, social2, social3]);
  }

  if (social1.style.display === 'block') {
    hideElements([social, forum, develop, design, tasksandguides, bootcamp]);
    showElements([social1, social2, social3]);
  } else {
    showElements([social, forum, develop, design, tasksandguides, bootcamp]);
    hideElements([social1, social2, social3]);
  }
}

function clickForum() {
  toggleDisplay(menuforum, 'block');
  resetDisplay([menusocial, menudevelop, menudesign, menutasksandguides, menubootcamp]);

  if (menuforum.style.display === 'block') {
    hideElements([social, develop, design, tasksandguides, bootcamp]);
    showElements([forum, forum1, forum2, forum3]);
  } else {
    showElements([social, develop, design, tasksandguides, forum, bootcamp]);
    hideElements([forum1, forum2, forum3]);
  }

  if (forum1.style.display === 'block') {
    hideElements([social, forum, develop, design, tasksandguides, bootcamp]);
    showElements([forum1, forum2, forum3]);
  } else {
    showElements([social, forum, develop, design, tasksandguides, bootcamp]);
    hideElements([forum1, forum2, forum3]);
  }
}

function clickDevelop() {
  toggleDisplay(menudevelop, 'block');
  resetDisplay([menusocial, menuforum, menudesign, menutasksandguides, menubootcamp]);

  if (menudevelop.style.display === 'block') {
    hideElements([social, forum, design, tasksandguides, bootcamp]);
    showElements([develop, develop1, develop2, develop3]);
  } else {
    showElements([social, forum, design, tasksandguides, develop, bootcamp]);
    hideElements([develop1, develop2, develop3]);
  }

  if (develop1.style.display === 'block') {
    hideElements([social, forum, develop, design, tasksandguides, bootcamp]);
    showElements([develop1, develop2, develop3]);
  } else {
    showElements([social, forum, develop, design, tasksandguides, bootcamp]);
    hideElements([develop1, develop2, develop3]);
  }
}

function clickDesign() {
  toggleDisplay(menudesign, 'block');
  resetDisplay([menusocial, menuforum, menudevelop, menutasksandguides, menubootcamp]);

  if (menudesign.style.display === 'block') {
    hideElements([social, forum, develop, tasksandguides, bootcamp]);
    showElements([design, design1, design2, design3]);
  } else {
    showElements([social, forum, develop, tasksandguides, design, bootcamp]);
    hideElements([design1, design2, design3]);
  }

  if (design1.style.display === 'block') {
    hideElements([social, forum, develop, design, tasksandguides, bootcamp]);
    showElements([design1, design2, design3]);
  } else {
    showElements([social, forum, develop, design, tasksandguides, bootcamp]);
    hideElements([design1, design2, design3]);
  }
}

function clickTasksandguides() {
  toggleDisplay(menutasksandguides, 'block');
  resetDisplay([menusocial, menuforum, menudevelop, menudesign, menubootcamp]);

  if (menutasksandguides.style.display === 'block') {
    hideElements([social, forum, develop, design, bootcamp]);
    showElements([tasksandguides, tasksandguides1, tasksandguides2, tasksandguides3]);
  } else {
    showElements([social, forum, develop, design, tasksandguides, bootcamp]);
    hideElements([tasksandguides1, tasksandguides2, tasksandguides3]);
  }

  if (tasksandguides1.style.display === 'block') {
    hideElements([social, forum, develop, tasksandguides, bootcamp]);
    showElements([tasksandguides1, tasksandguides2, tasksandguides3]);
  } else {
    showElements([social, forum, develop, tasksandguides, bootcamp]);
    hideElements([tasksandguides1, tasksandguides2, tasksandguides3]);
  }
}

function clickBootcamp() {
  toggleDisplay(menubootcamp, 'block');
  resetDisplay([menusocial, menuforum, menudevelop, menudesign, menutasksandguides]);

  if (menubootcamp.style.display === 'block') {
    hideElements([social, forum, develop, design, tasksandguides, bootcamp]);
    showElements([bootcamp, bootcamp1, bootcamp2, bootcamp3]);
  } else {
    showElements([social, forum, develop, design, tasksandguides, bootcamp]);
    hideElements([bootcamp1, bootcamp2, bootcamp3]);
  }

  if (bootcamp1.style.display === 'block') {
    hideElements([social, forum, develop, tasksandguides, bootcamp]);
    showElements([bootcamp1, bootcamp2, bootcamp3]);
  } else {
    showElements([social, forum, develop, tasksandguides, bootcamp]);
    hideElements([bootcamp1, bootcamp2, bootcamp3]);
  }
}