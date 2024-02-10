function random(min, max ){
  return Math.random() * (max - min) + min
}

class Elipse
{
  constructor(elem){
    this.size = elem.getBoundingClientRect().width
    this.elem = elem
    this.x = random(0 ,430 - this.size)
    this.y = random(0 , 932 - this.size)
    this.vx = random(2, 3.5) * Math.random()> 0.5 ? -1 : 1
    this.vy = random(2, 3) * Math.random()> 0.5 ? -1 : 1
    
    
  }
 out()
  {
    this.x += this.vx
    this.y += this.vy
    if(this.x >= 430- this.size)
    {
      this.vx *= -1
      this.x= 430 - this.size
     
    }
    if(this.y >=932 - this.size)
    {
      this.vy *= -1
      this.y = 932 - this.size
    }
    if(this.x <= 0)
    {
      this.vx *= -1
      this.x = 0
    }
    if(this.y <= 0)
    {
      this.vy *= -1
      this.y = 0
    }

  }
  
  move()
  {
    this.elem.style.transform = `translate(${this.x}px, ${this.y}px)`
  }
  
}
function initial_elipse() 
{
    const elipse_el = document.querySelectorAll('.elipse')
  const eles =  Array.from(elipse_el).map((elipse_e) => new Elipse
    (elipse_e))
    
    function out() {

     requestAnimationFrame(out)
     eles.forEach(elipse => {
        elipse.out()
        elipse.move()
      })
      
    }
    requestAnimationFrame(out)
    
}
initial_elipse()

const yes1 = document.querySelector('.YES1')
const yes = document.querySelector('.YES')
let font = 41;

let left = 70;
let topq = 673;
 const ghibli= document.querySelector('.ghibli')
 let images = document.querySelectorAll('.ghibli img');
 let i =0;
const body = document.querySelector('body')
const cherr1= document.querySelector('.cherr1')
const audio = document.querySelector('audio')
const free  = document.querySelector('.free')


audio.pause()
yes.onclick = () => {
  body.style.background='#5948f5';
  yes1.style.display='none';
  yes.style.display='none';
  
  cherr1.style.display='block';
  audio.play();
  free.parentNode.removeChild(free);
  const text = document.createElement('div')
  text.classList.add('new_text');
  text.textContent='you is makes me feels better :)'
  document.body.appendChild(text);
  
  }


  yes1.onclick = () => {
    if(font < 130 )
    {
      font += 20
      left-=20
      topq-=20
     }
     if(  i < images.length  )
     {
       images[i].style.display = 'block';
      }
    i++;
      
  yes.style.top= topq + 'px';
  yes.style.fontSize= font + 'px';
  ghibli.style.display = 'block';     
  yes.style.left= left + 'px'; 
  
  }
  
 