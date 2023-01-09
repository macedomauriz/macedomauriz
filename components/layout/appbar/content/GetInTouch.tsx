import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Modal, Text, Input, Button, Textarea } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const GetInTouch = () => {
  const [visible, setVisible] = useState(false)

  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }

  const fetchData = () => {
    // Make the PUT request
    fetch(
      "https://kr7f9vwkfl.execute-api.us-east-1.amazonaws.com/dev/send-mail",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          body: "hola",
          subject: "Ro",
        }),
      }
    )
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <Button auto size="xs" onPress={handler}>
        Get in touch
      </Button>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Get in touch
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Name"
            contentLeft={<FontAwesomeIcon icon={faUser} />}
            aria-labelledby="Name"
          />
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Email"
            contentLeft={<FontAwesomeIcon icon={faEnvelope} />}
            aria-labelledby="Email"
          />
          <Textarea
            bordered
            placeholder="Enter your amazing ideas..."
            size="lg"
            aria-labelledby="Body"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onPress={fetchData}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
