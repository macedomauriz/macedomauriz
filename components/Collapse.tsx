import { Collapse, Text } from "@nextui-org/react"

const CustomCollapse = () => {
  return (
    <Collapse.Group>
      <Collapse title="Option A">
        <Text>hola</Text>
      </Collapse>
      <Collapse title="Option B">
        <Text>
          In the meanwhile I smile and I sing all alone. In the meanwhile the
          air is filling with the perfume of promise.
        </Text>
      </Collapse>
      <Collapse title="Option C">
        <Text>
          I came out on the chariot of the first gleam of light, and pursued my
          voyage through the wildernesses of worlds leaving my track on many a
          star and planet.
        </Text>
      </Collapse>
    </Collapse.Group>
  )
}

export default CustomCollapse
