const text = `
    <p>
      <span class="fade-in">My</span>
      <span style="--stagger: 1" class="fade-in">money</span>
      <span style="--stagger: 2" class="fade-in">don't</span>
      <span style="--stagger: 4" class="jiggle">jiggle, jiggle</span>
      <span style="--stagger: 5" class="fade-in">it</span>
      <span style="--stagger: 6" class="fade-in">folds.</span>
    </p>
    <p>
      <span style="--stagger: 8" class="fade-in">I'd</span>
      <span style="--stagger: 9" class="fade-in">like</span>
      <span style="--stagger: 10" class="fade-in">to</span>
      <span style="--stagger: 11" class="fade-in">see</span>
      <span style="--stagger: 12" class="fade-in">you</span>
      <span style="--stagger: 14" class="wiggle">wiggle, wiggle</span>
      <span style="--stagger: 15" class="fade-in">for</span>
      <span style="--stagger: 16" class="fade-in">sure.</span>
    </p>
    <p>
      <span style="--stagger: 18" class="fade-in">Makes</span>
      <span style="--stagger: 18" class="fade-in">me</span>
      <span style="--stagger: 19" class="fade-in">wanna</span>
      <span style="--stagger: 21" class="dribble">dribble, dribble</span>
      <span style="--stagger: 22" class="fade-in">you</span>
      <span style="--stagger: 23" class="fade-in">know.</span>
    </p>
`

const play = () => {
  const audio = document.getElementById("audio");
  audio.play();
  
  document.getElementById('container').innerHTML = text
};

document.getElementById("play").addEventListener("click", play);
