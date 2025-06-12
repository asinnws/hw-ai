1. Please help me to investigate what is wrong in the markup and fix it. Here is HTML and CSS:

HTML:

<!-- index.html -->

<nav class="nav">

<button class="hamburger" id="menuBtn">Menu</button>

<ul class="menu" id="menu">

<li>Home</li><li>About</li><li>Contact</li>

</ul>

</nav>

CSS:

/_ styles.css _/

.nav {display:flex;justify-content:space-between;align-items:center;}

.menu {display:flex;gap:2rem;}

@media (max-width:768px){

.menu{flex-direction:column;position:absolute;top:64px;left:0;width:100%;

background:#fff;transform:translateY(-150%);transition:.3s ease;}

.menu.open{transform:translateY(0);}

}

At exactly 768 px the menu “ghosts” in and out.

Goal:

1. Help me to identify the root cause of the slide-down glitch.

2. Produce a patched styles.css (CSS fence, nothing extra) that fixes it.

2) can you please remove assumptions about "header height" and just use some kind of top 0 and translateY(-100%) ? and please add resetting styles like margin 0, padding 0, box-sizing border box
