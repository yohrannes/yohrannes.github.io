function toggleDisplay(element, displayValue) {
    if (element.style.display === displayValue) {
      element.style.display = 'none';
    } else {
      element.style.display = displayValue;
    }
  }
  
  function resetDisplay(elements) {
    elements.forEach(function (element) {
      element.style.display = 'none';
    });
  }
  
  function clickSocial() {
    toggleDisplay(menusocial, 'block');
    resetDisplay([menuforum, menudevelop, menudesign, menutasksandguides]);
  
    if (menusocial.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'none';
      tasksandguides.style.display = 'none';
      design.style.display = 'none';
      social1.style.display = 'block';
      social2.style.display = 'block';
      social3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      develop.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      social1.style.display = 'none';
      social2.style.display = 'none';
      social3.style.display = 'none';
    }
  
    if (social1.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'none';
      design.style.display = 'none';
      tasksandguides.style.display = 'none';
      social1.style.display = 'block';
      social2.style.display = 'block';
      social3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      develop.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      social1.style.display = 'none';
      social2.style.display = 'none';
      social3.style.display = 'none';
    }
  }
  
  function clickForum() {
    toggleDisplay(menuforum, 'block');
    resetDisplay([menusocial, menudevelop, menudesign, menutasksandguides]);
  
    if (menuforum.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'block';
      develop.style.display = 'none';
      design.style.display = 'none';
      tasksandguides.style.display = 'none';
      forum1.style.display = 'block';
      forum2.style.display = 'block';
      forum3.style.display = 'block';
    } else {
      social.style.display = 'block';
      develop.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      forum1.style.display = 'none';
      forum2.style.display = 'none';
      forum3.style.display = 'none';
    }
  
    if (forum1.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'none';
      design.style.display = 'none';
      tasksandguides.style.display = 'none';
      forum1.style.display = 'block';
      forum2.style.display = 'block';
      forum3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      develop.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      forum1.style.display = 'none';
      forum2.style.display = 'none';
      forum3.style.display = 'none';
    }
  }
  
  function clickDevelop() {
    toggleDisplay(menudevelop, 'block');
    resetDisplay([menusocial, menuforum, menudesign, menutasksandguides]);
  
    if (menudevelop.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'block';
      design.style.display = 'none';
      tasksandguides.style.display = 'none';
      develop1.style.display = 'block';
      develop2.style.display = 'block';
      develop3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      develop1.style.display = 'none';
      develop2.style.display = 'none';
      develop3.style.display = 'none';
    }
  
    if (develop1.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'none';
      design.style.display = 'none';
      tasksandguides.style.display = 'none';
      develop1.style.display = 'block';
      develop2.style.display = 'block';
      develop3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      develop.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      develop1.style.display = 'none';
      develop2.style.display = 'none';
      develop3.style.display = 'none';
    }
  }
  
  function clickDesign() {
    toggleDisplay(menudesign, 'block');
    resetDisplay([menusocial, menuforum, menudevelop, menutasksandguides]);
  
    if (menudesign.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'none';
      design.style.display = 'block';
      tasksandguides.style.display = 'none';
      design1.style.display = 'block';
      design2.style.display = 'block';
      design3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      design.style.display = 'block';
      tasksandguides.style.display = 'block';
      design1.style.display = 'none';
      design2.style.display = 'none';
      design3.style.display = 'none';
    }
  
    if (design1.style.display === 'block') {
      social.style.display = 'none';
      forum.style.display = 'none';
      develop.style.display = 'none';
      design.style.display = 'none';
      design1.style.display = 'block';
      design2.style.display = 'block';
      design3.style.display = 'block';
    } else {
      social.style.display = 'block';
      forum.style.display = 'block';
      develop.style.display = 'block';
      design.style.display = 'block';
      design1.style.display = 'none';
      design2.style.display = 'none';
      design3.style.display = 'none';
    }
}

    function clickTasksandguides() {
    toggleDisplay(menutasksandguides, 'block');
    resetDisplay([menusocial, menuforum, menudevelop, menudesign]);
    
    if (menutasksandguides.style.display === 'block') {
        social.style.display = 'none';
        forum.style.display = 'none';
        develop.style.display = 'none';
        design.style.display = 'none';
        tasksandguides.style.display = 'block';
        tasksandguides1.style.display = 'block';
        tasksandguides2.style.display = 'block';
        tasksandguides3.style.display = 'block';
    } else {
        social.style.display = 'block';
        forum.style.display = 'block';
        tasksandguides.style.display = 'block';
        tasksandguides1.style.display = 'none';
        tasksandguides2.style.display = 'none';
        tasksandguides3.style.display = 'none';
    }
    
    if (tasksandguides1.style.display === 'block') {
        social.style.display = 'none';
        forum.style.display = 'none';
        develop.style.display = 'none';
        tasksandguides.style.display = 'none';
        tasksandguides1.style.display = 'block';
        tasksandguides2.style.display = 'block';
        tasksandguides3.style.display = 'block';
    } else {
        social.style.display = 'block';
        forum.style.display = 'block';
        develop.style.display = 'block';
        tasksandguides.style.display = 'block';
        tasksandguides1.style.display = 'none';
        tasksandguides2.style.display = 'none';
        tasksandguides3.style.display = 'none';
    }
}
  