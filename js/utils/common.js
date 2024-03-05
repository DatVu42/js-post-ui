export function setTextContent(parent, selector, text) {
    if (!parent) return

    const liElement = parent.querySelector(selector)
    if (liElement) liElement.textContent = text
}

export function truncateText(text, maxLength) {
    if (text.length < maxLength) return text

    return `${text.slice(1, maxLength - 1)}…`
}