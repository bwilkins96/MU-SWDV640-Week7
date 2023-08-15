// Change theme of page between dark and light

function switchIcon(icon, toNightTheme = true) {
    if (toNightTheme) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }   
}

function changeTheme() {
    const body = document.body;
    const icon = document.getElementById('themeSwitcher');
    const altIcon = document.getElementById('altThemeSwitcherIcon');

    if (body.classList.contains('darkTheme')) {
        body.classList.remove('darkTheme');
        switchIcon(icon, false);
        switchIcon(altIcon, false);       
    } else {
        body.classList.add('darkTheme');
        switchIcon(icon);
        switchIcon(altIcon);   
    }
}    
