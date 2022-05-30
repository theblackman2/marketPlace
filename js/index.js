const links = document.querySelectorAll(".link-more")
const cards = document.querySelectorAll(".card")
const logo = document.querySelector("#logo")


logo.addEventListener("click", function(e){
  e.preventDefault()
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})

Array.from(links).forEach((link)=>{
  link.addEventListener("mouseover", function(e){
    slideIn(link)
  })
  link.addEventListener("mouseout", function(e){
    removeSlideIn(link)
  })
})

Array.from(cards).forEach((card)=>{
  card.addEventListener("mouseover", function(e){
    card.style.height = "100%"
    card.children[card.children.length - 1].style.opacity = ".7"
    if(card.children[1]){
      card.children[1].style.display = "block"
    }
  })
  card.addEventListener("mouseout", function(e){
    card.style.height = "80%"
    card.children[card.children.length - 1].style.opacity = "0"
    if(card.children[1]){
      card.children[1].style.display = "none"
    }
  })
})

function slideIn(slider){
  let animated = document.createElement("span")
  animated.classList.add("animated")
  slider.appendChild(animated)
  animated.style.width = "calc(100% + 50px"
  animated.style.borderRadius = "20px"
}

function removeSlideIn(slider){
  if(slider.children.length > 0) slider.removeChild(slider.children[0])
}