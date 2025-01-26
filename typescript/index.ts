const a = 8

let b = null

b = 'a'

let f

function hey(greet: string) {
  return greet
}

let c: unknown

c = 8

c = 's'

let boolean = 1 as unknown as boolean

function handleInputChange(event: Event) {
  const inputElement = event.target as unknown as HTMLInputElement
  console.log(inputElement.value) // Teraz máme prístup k `value`
}

function splitString(str: string | null) {
  return (str as string).toLowerCase()
}

splitString(null)

boolean = true

enum Fruit {
  Plum = 5,
  Peach = 5,
  //Banana = 6,
}

function handleUnknownMember(member: never): never {
  throw new Error('Unhandled enum member: ' + Fruit[member])
}

function determinePortionSize(fruit: Fruit) {
  switch (fruit) {
    case Fruit.Plum:
      return 1
    case Fruit.Plum:
      return 10
    default:
      handleUnknownMember(fruit)
  }
}
