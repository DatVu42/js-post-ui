export function setTextContent(parent, selector, text) {
    if (!parent) return

    const liElement = parent.querySelector(selector)
    if (liElement) liElement.textContent = text
}

export function setImg(parent, selector, img) {
    if (!parent) return

    const liElement = parent.querySelector(selector)
    if (liElement) liElement.src = img
}