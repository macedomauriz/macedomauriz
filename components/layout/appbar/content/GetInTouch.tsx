import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { Modal, Text, Input, Button, Textarea } from "@nextui-org/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const GetInTouch = () => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [visible, setVisible] = useState(false)
  const handler = () => setVisible(true)

  const closeHandler = () => {
    setVisible(false)
  }

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://kr7f9vwkfl.execute-api.us-east-1.amazonaws.com/dev/send-mail"
      )
      const json = await response.json()
      console.log(json)
    } catch (error) {
      console.log("NO DATA")
    }
  }

  return (
    <>
      <Button auto size="xs" onClick={handler}>
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
          />
          <Input
            clearable
            bordered
            fullWidth
            size="lg"
            placeholder="Email"
            contentLeft={<FontAwesomeIcon icon={faEnvelope} />}
          />
          <Textarea
            bordered
            placeholder="Enter your amazing ideas..."
            size="lg"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button auto onClick={fetchData}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
