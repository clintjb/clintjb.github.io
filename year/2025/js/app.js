import { preloadImages } from './utils.js'

gsap.registerPlugin(Draggable, Flip, SplitText)

class Grid {
  constructor() {
    this.dom = document.querySelector(".container")
    this.grid = document.querySelector(".grid")
    this.products = [...document.querySelectorAll(".product div")]
    this.details = document.querySelector(".details")
    this.detailsThumb = this.details.querySelector(".details__thumb")
    this.cross = document.querySelector(".cross")
    
    this.isDragging = false
    this.SHOW_DETAILS = false
    this.currentProduct = null
    this.originalParent = null
  }

  init() {
    this.centerGrid()
    this.animateIntro()
  }

  centerGrid() {
    const centerX = (window.innerWidth - this.grid.offsetWidth) / 2
    const centerY = (window.innerHeight - this.grid.offsetHeight) / 2
    gsap.set(this.grid, { x: centerX, y: centerY })
  }

  animateIntro() {
    const tl = gsap.timeline({ onComplete: () => this.setupInteractions() })
    
    tl.set(this.dom, { scale: .5 })
      .set(this.products, { scale: 0.5, opacity: 0 })
      .to(this.products, {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: { amount: 1.2, from: "random" }
      })
      .to(this.dom, { scale: 1, duration: 1.2, ease: "power3.inOut" })
  }

  setupInteractions() {
    this.dom.classList.add("--is-loaded")
    this.setupDraggable()
    this.setupEventListeners()
    this.observeProducts()
    this.setupDetails()
  }

  setupDraggable() {
    this.draggable = Draggable.create(this.grid, {
      type: "x,y",
      bounds: this.getBounds(),
      inertia: true,
      allowEventDefault: true,
      edgeResistance: 0.9,
      onDragStart: () => this.setDraggingState(true),
      onDragEnd: () => this.setDraggingState(false)
    })[0]
  }

  getBounds(padding = { x: 200, y: 100 }) {
    return {
      minX: -(this.grid.offsetWidth - window.innerWidth) - padding.x,
      maxX: padding.x,
      minY: -(this.grid.offsetHeight - window.innerHeight) - padding.y,
      maxY: padding.y
    }
  }

  setDraggingState(isDragging) {
    this.isDragging = isDragging
    this.grid.classList.toggle("--is-dragging", isDragging)
  }

  setupEventListeners() {
    window.addEventListener("wheel", (e) => this.handleWheel(e), { passive: false })
    window.addEventListener("resize", () => this.draggable.vars.bounds = this.getBounds({ x: 50, y: 50 }))
    window.addEventListener("mousemove", (e) => this.SHOW_DETAILS && this.handleCursor(e))
  }

  handleWheel(e) {
    if (this.isOverDetails(e.clientX, e.clientY)) return
    
    e.preventDefault()

    const currentX = gsap.getProperty(this.grid, "x")
    const currentY = gsap.getProperty(this.grid, "y")
    const bounds = this.draggable.vars.bounds

    gsap.to(this.grid, {
      x: Math.max(bounds.minX, Math.min(bounds.maxX, currentX - e.deltaX * 7)),
      y: Math.max(bounds.minY, Math.min(bounds.maxY, currentY - e.deltaY * 7)),
      duration: 0.3,
      ease: "power3.out"
    })
  }

  isOverDetails(x, y) {
    if (!this.SHOW_DETAILS) return false
    const rect = this.details.getBoundingClientRect()
    return x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
  }

  observeProducts() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === this.currentProduct) return
        
        gsap.to(entry.target, {
          scale: entry.isIntersecting ? 1 : 0.5,
          opacity: entry.isIntersecting ? 1 : 0,
          duration: 0.5,
          ease: "power2.out"
        })
      })
    }, { root: null, threshold: 0.1 })

    this.products.forEach(product => observer.observe(product))
  }

  setupDetails() {
    this.titles = this.details.querySelectorAll(".details__title p")
    this.texts = this.details.querySelectorAll(".details__body [data-text]")

    new SplitText(this.titles, { type: "lines, chars", mask: "lines", charsClass: "char" })
    new SplitText(this.texts, { type: "lines", mask: "lines", linesClass: "line" })

    this.products.forEach(product => {
      product.addEventListener("click", (e) => {
        e.stopPropagation()
        this.showDetails(product)
      })
    })

    this.dom.addEventListener("click", () => this.SHOW_DETAILS && this.hideDetails())
  }

  showDetails(product) {
    if (this.SHOW_DETAILS) return
    this.SHOW_DETAILS = true
    
    this.details.classList.add("--is-showing")
    this.dom.classList.add("--is-details-showing")

    this.animatePanels("-50vw", 0)
    this.flipProduct(product)
    this.animateText(product.dataset.id)
  }

  hideDetails() {
    this.SHOW_DETAILS = false
    this.dom.classList.remove("--is-details-showing")

    this.animatePanels(0, "50vw", () => this.details.classList.remove("--is-showing"))
    this.unFlipProduct()
    this.resetText()
  }

  animatePanels(domX, detailsX, onComplete) {
    const delay = domX === 0 ? 0.3 : 0
    
    gsap.to(this.dom, { x: domX, duration: 1.2, delay, ease: "power3.inOut", onComplete })
    gsap.to(this.details, { x: detailsX, duration: 1.2, delay: detailsX === "50vw" ? 0.3 : 0, ease: "power3.inOut" })
  }

  animateText(productId) {
    const title = this.details.querySelector(`[data-title="${productId}"]`)
    const text = this.details.querySelector(`[data-desc="${productId}"]`)

    if (title) {
      gsap.to(title.querySelectorAll(".char"), {
        y: 0, duration: 1.1, delay: .4, ease: "power3.inOut", stagger: 0.025
      })
    }

    if (text) {
      gsap.to(text.querySelectorAll(".line"), {
        y: 0, duration: 1.1, delay: .4, ease: "power3.inOut", stagger: .05
      })
    }

    gsap.to(this.cross, { scale: 1, duration: 0.4, delay: .5, ease: "power2.out" })
  }

  resetText() {
    this.titles.forEach(title => {
      gsap.to(title.querySelectorAll(".char"), {
        y: "100%", duration: 0.6, ease: "power3.inOut", stagger: { amount: 0.025, from: "end" }
      })
    })

    this.texts.forEach(text => {
      gsap.to(text.querySelectorAll(".line"), {
        y: "100%", duration: 0.6, ease: "power3.inOut", stagger: 0.05
      })
    })

    gsap.to(this.cross, { scale: 0, duration: 0.4, ease: "power2.out" })
  }

  flipProduct(product) {
    this.currentProduct = product
    this.originalParent = product.parentNode
    this.animateFlip(product, this.detailsThumb, false)
  }

  unFlipProduct() {
    if (!this.currentProduct || !this.originalParent) return
    this.animateFlip(this.currentProduct, this.originalParent, true)
  }

  animateFlip(product, targetParent, isReverse) {
    const startRect = product.getBoundingClientRect()
    
    gsap.set(product, { opacity: 0 })
    targetParent.appendChild(product)
    const endRect = product.getBoundingClientRect()

    const compositeImg = this.createComposite(product, startRect)
    const overlay = this.createOverlay(compositeImg)
    
    gsap.set(compositeImg, {
      position: 'fixed',
      top: startRect.top,
      left: startRect.left,
      width: startRect.width,
      height: startRect.height,
      opacity: 1
    })

    gsap.to(compositeImg, {
      top: endRect.top,
      left: endRect.left,
      width: endRect.width,
      height: endRect.height,
      opacity: 0,
      duration: 1.2,
      delay: isReverse ? 0.3 : 0,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(product, { opacity: 1 })
        document.body.removeChild(overlay)
        if (isReverse) {
          this.currentProduct = null
          this.originalParent = null
        }
      }
    })
  }

  createComposite(product, rect) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = rect.width * 2
    canvas.height = rect.height * 2
    
    product.querySelectorAll('img').forEach(img => {
      if (img.complete) ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    })
    
    const img = document.createElement('img')
    img.src = canvas.toDataURL()
    Object.assign(img.style, {
      width: rect.width + 'px',
      height: rect.height + 'px',
      objectFit: 'contain'
    })
    
    return img
  }

  createOverlay(element) {
    const overlay = document.createElement('div')
    Object.assign(overlay.style, {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      zIndex: '10000',
      pointerEvents: 'none'
    })
    
    overlay.appendChild(element)
    document.body.appendChild(overlay)
    return overlay
  }

  handleCursor(e) {
    gsap.to(this.cross, {
      x: e.clientX - this.cross.offsetWidth / 2,
      y: e.clientY - this.cross.offsetHeight / 2,
      duration: 0.4,
      ease: "power2.out"
    })
  }
}

const grid = new Grid()

preloadImages('.grid img').then(() => {
  grid.init()
  document.body.classList.remove('loading')
})
