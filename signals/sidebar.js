import { signal } from "@preact/signals-react"

export const isOpen = signal(true)
export const toggler = () => {
    console.log(isOpen)
    isOpen.value = !isOpen.value
}
// console.log(isOpen.value)