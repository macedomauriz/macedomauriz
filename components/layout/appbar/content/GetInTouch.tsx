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
          <Button auto onClick={closeHandler}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
