const a = 8

let b = null

b = "a"

function hey(greet: string) {
  return greet
}


let c: unknown

c = 8

c = "s"


let boolean = 1 as unknown as boolean

function handleInputChange(event: Event) {
  const inputElement = event.target as unknown as HTMLInputElement
  console.log(inputElement.value) // Teraz máme prístup k `value`
}

